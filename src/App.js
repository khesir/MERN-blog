import React from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/Createpost';
import ViewPost from './pages/Viewpost';
import Profile from './pages/Profile';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
const Layout = ()=>{
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/create',
        element: <CreatePost />
      },{
        path: '/post/:id',
        element: <ViewPost />
      },{
        path: '/profile/:id',
        element: <Profile />
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "*",
    element: <h1>Not Found you silly</h1>
  }
])

function App() {
  return (
    <div className="App">
      <div className="container">
        <RouterProvider router = {router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
