import {create} from "zustand/react";

type AppState = {
    username: string,
    accessToken: string,
    theme: string,
    isModalOpen: boolean
}

type AppActions = {
    setUsername: (newName: string) => void,
    setAccessToken: (newToken: string) => void,
    toggleModal: () => void
}

export const useAppStore =
    create<AppState & AppActions>((set) => ({
        username: '',
        accessToken: '',
        theme: 'default',
        isModalOpen: false,
        setUsername: (newName: string) => set({username: newName}),
        setAccessToken: (newToken: string) => set({accessToken: newToken}),
        toggleModal: () => set((state) => ({isModalOpen: !state.isModalOpen}))
    }));