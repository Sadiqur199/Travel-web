import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Layout/Main.jsx';
import ViewDestination from './Component/viewDestination/viewDestination.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>
  },
   {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/destination/:id',
        element:<ViewDestination></ViewDestination>,
        loader:({params})=> fetch(`/travel.json/${params.id}`)
      
      }
    ]
   }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
