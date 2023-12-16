import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import MenuLayout from "./layouts/MenuLayout";

import DownloadPage from './pages/DownloadPage';
import LoginPage from './pages/LoginPage';

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
                        path: 'login',
                        element: <LoginPage />
                    }
                ]
            }
        ]
    }
]);

export default router;
