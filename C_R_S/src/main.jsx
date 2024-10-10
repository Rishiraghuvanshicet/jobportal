import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Student_login_page from './pages/Student_login._page.jsx';
import Company_login_page from './pages/Company_login_page.jsx';
import Company_home_page from './pages/Company_home_page.jsx';
import Student_home_page from './pages/Student_home_page';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import ApplicationForm from './components/ApplicationForm.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <div><App/></div>,
    },{
        path:'/student/login',
        element:<div><Student_login_page/></div>,
    },{
        path:'/company/login',
        element:<div><Company_login_page/></div>,
    },{
      path:'/company/login',
      element:<div><Company_login_page/></div>,
  },{
      path:'/company/login/homepage',
      element:<div><Company_home_page/></div>,
  },
  {
    path:'/student/login/homepage',
    element:<div><Student_home_page/></div>,
  },{
    path:"/student/login/homepage/apply/:jobId",
    element:<div><ApplicationForm/></div> 
    }
  ]);


createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)

