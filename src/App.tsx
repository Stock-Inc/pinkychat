import ChatPage from "./pages/ChatPage.tsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import ProfilePage from "./pages/ProfilePage.tsx";
import {useAppStore} from "./utils/Zustand.ts";

function App() {

    const username = useAppStore((state) => state.username);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <ChatPage username={username}/>
        },
        {
            path: '/profile',
            element: <ProfilePage/>
        }
    ])
  return (
      <>
          <RouterProvider router={router}/>
      </>
  )
}

export default App
