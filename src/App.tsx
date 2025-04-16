import ChatPage from "./pages/ChatPage.tsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import ProfilePage from "./pages/ProfilePage.tsx";
import {useState} from "react";

export type OnClickCallback = (text:string) => void;

function App() {
    const [localUserName, setLocalUserName] = useState("placeholder name");

    const router = createBrowserRouter([
        {
            path: '/',
            element: <ChatPage username={localUserName}/>
        },
        {
            path: '/profile',
            element: <ProfilePage callback={(text) => setLocalUserName(text)} username={localUserName}/>
        }
    ]);
  return (
      <>
          <RouterProvider router={router}/>
      </>
  );
}

export default App;
