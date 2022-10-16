// import { getAuth } from 'firebase/auth';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import LoginBootstrap from './components/LoginBootstrap';
import RegisterReactBootstrap from './components/RegisterReactBootstrap';
import Main from './layout/Main';
// import RegisterReactBootstrap from './components/RegisterReactBootstrap';
// import app from './firebase/firebase.init';

// const auth = getAuth(app)

// const handleRegister = (event) => {
//   event.preventDefault();
//   const email = event.target.email.value;
//   const password = event.target.password.value;
//   console.log(email, password);
// }

// const handleEmailBlur = event => {
//   console.log(event.target.value)
// }
// const handlePasswordBlur = event => {
//   console.log(event.target.value)
// }

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main>0</Main>,
    children: [
      {
        path: '/',
        element: <RegisterReactBootstrap></RegisterReactBootstrap>
      },
      {
        path: '/register',
        element: <RegisterReactBootstrap></RegisterReactBootstrap>
      },
      {
        path: '/login',
        element: <LoginBootstrap></LoginBootstrap>
      }
    ]
  }
])

function App() {
  return (
    <div className="">
      {/* <RegisterReactBootstrap></RegisterReactBootstrap> */}
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
