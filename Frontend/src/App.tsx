import { createBrowserRouter, RouterProvider } from "react-router";
import Signup from "./pages/Auth/Signup/Signup";
import Login from "./pages/Auth/Login/Login";
import AccountVerify from "./pages/Auth/account-verify/AccountVerify";
import PasswordReset from "./pages/Auth/reset-password/PasswordReset";
import UpdatePassword from "./pages/Auth/update-password/UpdatePassword";
import MainLayout from "./pages/MainLayout";
import DashBoard from "./pages/Dashboard/DashBoard";
import Notes from "./pages/Notes/Notes";
import Topics from "./pages/Topics/Topics";
import Bookmarks from "./pages/Bookmark/Bookmarks";
import Question from "./pages/Questions/Question";
import Quiz from "./pages/Quiz/Quiz";
import InterviewMode from "./pages/Interview/InterviewMode";
import Progress from "./pages/Progress/Progress";
import Revision from "./pages/Revision/Revision";
import Tasks from "./pages/Task/Tasks";
import Analytics from "./pages/Analytics/AnalyticsPage";
import Settings from "./pages/Settings/Settings";

// import Dashboard from "./pages/Dashboard/Dashboard";

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
  {
    path: "/home",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DashBoard />,
      },
      {
        path: "notes",
        element: <Notes/>
      },
      {
        path: "topics",
        element: <Topics/>
      },
      {
        path: "bookmarks",
        element: <Bookmarks/>
      },
      {
        path: "questions",
        element: <Question/>
      },
      {
        path: "quiz",
        element: <Quiz/>
      },
      {
        path: "interview",
        element: <InterviewMode/>
      },
      {
        path: "progress",
        element: <Progress/>
      },
      {
        path: "revision",
        element: <Revision/>
      },
      {
        path: "tasks",
        element: <Tasks/>
      },
      {
        path:"analytics",
        element: <Analytics/>
      },
      {
        path: "settings",
        element: <Settings/>
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
