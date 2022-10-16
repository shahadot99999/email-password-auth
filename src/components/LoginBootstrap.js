import { getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';


const auth = getAuth(app);

const LoginBootstrap = () => {

    const [sucess, setSucess] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        setSucess(false)
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signInWithEmailAndPassword(auth, email, password)

            .then(result => {
                const user = result.user;
                console.log(user);
                setSucess(true);
            })
            .catch(error => {
                console.error('error', error)
            })
    }

    const handleEmailBlur = event => {
        const email = event.target.value;
        setUserEmail(email);
        console.log(email);
    }

    const hadleForgetPassword = () => {
        if (!userEmail) {
            alert('please enter your emaill address')
            return;
        }

        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('password Reset email send, Please cheek your email')
            })
            .catch(error => {
                console.error(error);
            })
    }



    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-danger'>Please login !!!</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Example label</label>
                    <input onBlur={handleEmailBlur} type="email" name='email' className="form-control" id="formGroupExampleInput" placeholder="Your Email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Another label</label>
                    <input type="password" name='password' className="form-control" id="formGroupExampleInput2" placeholder="Your password" required />
                </div>
                <button className='btn btn-primary'>Button</button>
            </form>
            {sucess && <p>Successfully login to the account</p>}
            <p><small>New to this website? please<Link to='/register'>Register</Link></small></p>

            <p>Forget Password? <button type='button' onClick={hadleForgetPassword} className='btn btn-link'> Reset Password</button></p>
        </div>
    );
};

export default LoginBootstrap;