import {create} from "zustand/react";

type AppState = {
    username: string,
    theme: string
}

type AppActions = {
    setUsername: (newName: string) => void
}

export const useAppStore =
    create<AppState & AppActions>((set) => ({
        username: '',
        theme: 'default',
        setUsername: (newName: string) => set({username: newName})
    }))