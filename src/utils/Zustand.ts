import {create} from "zustand/react";

type AppState = {
    username: string,
    accessToken: string,
    theme: string
}

type AppActions = {
    setUsername: (newName: string) => void,
    setAccessToken: (newToken: string) => void
}

export const useAppStore =
    create<AppState & AppActions>((set) => ({
        username: '',
        accessToken: '',
        theme: 'default',
        setUsername: (newName: string) => set({username: newName}),
        setAccessToken: (newToken: string) => set({accessToken: newToken})
    }));