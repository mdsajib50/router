import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Main from './layouts/Main/Main';

import Users from './components/Users/Users';

function App() {

  const router = createBrowserRouter([
    {
      path:'/', element:<Main></Main>,
      children:[
        {
          path:'/home', element: <Home></Home>,
        },
        {path:'about', element: <About></About>
        },
        {
          path:'/shop', element: <Shop></Shop>
        },
        {
          path:'/users',
          loader:()=>{
           return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Users></Users>
        }
      ]
    }
    
  ])
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>      
    </div>
  );
}

export default App;
