import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import User from './components/getuser/User';
import Add from './components/adduser/Add.jsx';
import Edit from './components/updateuser/Edit.jsx';
function App() {

  const route=createBrowserRouter([
    {
      path:"/",
      element:<User/>
    },
    {
      path:"/add",
      element: <Add/>
    },
    {
      path:"/edit/:id",
      element:<Edit/>
    },
    {
      path:"/:id",
      element:<User/>
    }
  ])

  return (
    <div  >
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
