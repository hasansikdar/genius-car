
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import About from '../../Pages/About/About';
import Blog from '../../Pages/Blog/Blog';
import Contact from '../../Pages/Contact/Contact';
import Error404 from '../../Pages/Error404/Error404';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Services from '../../Pages/Services/Services';
import Signup from '../../Pages/Signup/Signup';
import Checkout from '../../Pages/Checkout/Checkout';
import Orders from '../../Pages/Orders/Orders';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/services/:id',
                element: <Checkout></Checkout>,
                loader: ({params}) => fetch(`https://genius-car-server-virid.vercel.appservices/${params.id}`)
            },
            {
                path: '/orders',
                element: <PrivateRoute><Orders></Orders></PrivateRoute>
            }
        ]
    },
    {
        path: '*',
        element: <Error404></Error404>
    }
])