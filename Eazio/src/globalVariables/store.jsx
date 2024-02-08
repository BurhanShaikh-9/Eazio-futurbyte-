import { create } from 'zustand'

const useToggleNav = create((set) => ({
    isNav: false,
    toggleNav: () => set((state) => ({ isNav: !state.isNav }))
}))

export default useToggleNav;