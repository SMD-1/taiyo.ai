import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Sidebar from "./components/Sidebar.tsx";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard.tsx";
import { Provider } from "react-redux";
import { contactReducer } from "./store/contactReducer.tsx";
import AddContact from "./components/AddContact.tsx";
import { createStore } from "redux";
import EditContact from "./components/EditContact.tsx";

const store = createStore(contactReducer);

export const RootLayout = () => {
  return (
    <div className="md:flex md:h-screen">
      <Sidebar />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/add", element: <AddContact /> },
      { path: "/edit/:id", element: <EditContact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
