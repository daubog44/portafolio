import create from 'zustand'

interface Store {
    hasLoadedScripts: boolean,
    setHasLoadedScripts: () => void
}

const useStore = create<Store>((set) => ({
    hasLoadedScripts: false,
    setHasLoadedScripts: () => set({ hasLoadedScripts: true }),
}));
export default useStore;