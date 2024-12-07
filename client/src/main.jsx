import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/router.jsx";
import "sweetalert2/dist/sweetalert2.js";

import { Provider } from "react-redux";
import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider
            future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
                v7_fetcherPersist: true,
                v7_normalizeFormMethod: true,
                v7_partialHydration: true,
                v7_skipActionErrorRevalidation: true,
            }}
            router={router}
        />
    </Provider>
);
