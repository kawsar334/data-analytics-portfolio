import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import './index.css';

import Home from './pages/Home';
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageTitle from './components/PageTitle';
import Layout from './pages/Layouts/Layout';
import NotFound from './pages/Notfound';
import Projects from './pages/Projects';

function App() {
 


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: (
            <PageTitle title="kaosar_Data_analyst">
              <Home />
            </PageTitle>
          ),
        },
          {
          path: "/projects",
          element: (
            <PageTitle title="Home">
              <Projects />
            </PageTitle>
          ),
        },
      ],     

    },
    {
      path: "*",
      element: <NotFound />,
    }
 
 
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
