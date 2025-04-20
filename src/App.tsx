import ChatPage from "./pages/ChatPage.tsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import ProfilePage from "./pages/ProfilePage.tsx";
import Login from "./pages/Login.tsx";
import SignUp from "./pages/SignUp.tsx";

function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <ChatPage/>
        },
        {
            path: '/profile',
            element: <ProfilePage/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/sign-up',
            element: <SignUp/>
        }
    ]);
  return (
      <>
          <RouterProvider router={router}/>
      </>
  );
}

export default App;
