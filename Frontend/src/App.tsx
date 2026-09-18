
import { createBrowserRouter, RouterProvider } from "react-router";
import Signup from "./pages/Auth/Signup/Signup";
import Login from "./pages/Auth/Login/Login";
import AccountVerify from "./pages/Auth/account-verify/AccountVerify";
import PasswordReset from "./pages/Auth/reset-password/PasswordReset";
import UpdatePassword from "./pages/Auth/update-password/UpdatePassword";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/verify-account",
    element: <AccountVerify />,
  },
  {
    path: "/reset-password",
    element: <PasswordReset />,
  },
  {
    path: "/update-password",
    element: <UpdatePassword />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
