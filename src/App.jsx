import {RouterProvider} from 'react-router-dom';
import {router} from "./core/react-router/router";

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;