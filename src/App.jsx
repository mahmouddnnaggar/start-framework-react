import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Pages/About/About';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
import Layout from './Components/Layout/Layout';
import Home from './pages/Home/Home';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/portfolio', element: <Portfolio /> },
        { path: '/contact', element: <Contact /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
