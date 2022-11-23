import { RouterProvider } from 'react-router-dom';
import {routes} from './Routes/routes'

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
