import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import MenuLayout from "./layouts/MenuLayout";

import DownloadPage from './pages/DownloadPage';

const router = createBrowserRouter ([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <MenuLayout />,
                children: [
                    {
                        path: "download",
                        element: <DownloadPage />
                    },
                    {
                        path: "profile",
                        element:<div>Home</div> 
                    }
                ]
            }
        ]
    }
]);

export default router;
