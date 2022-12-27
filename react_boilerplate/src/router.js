import {createBrowserRouter,} from "react-router-dom";

import Home from './pages/home';
import Sample from './pages/sample';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
        path: "/sample",
        element: <Sample />
      }
]);

export default router;