//zustand is a library for managing react states globally
import {create} from "zustand";

// SearchStore Type Declaration:
// Defines the structure of the global search state used in the application, including:
// - isOpen: A boolean state indicating whether the search interface is currently open or closed.
// - onOpen: A function to open the search interface by setting isOpen to true.
// - onClose: A function to close the search interface by setting isOpen to false.
// - toggle: A function to toggle the search interface's open/closed state, based on the current value of isOpen.
// This type is used by the useSearch Zustand store to manage the visibility of the search interface globally, 
// allowing components to interact with the search state via defined actions (onOpen, onClose, toggle) 
// without directly manipulating the isOpen state.
type SearchStore = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    toggle: () => void;
};

//custom hook to initialize and interact with a SearchStore global state store.
export const useSearch =create<SearchStore>((set, get) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen:false}),
    toggle: () => set({isOpen: !get().isOpen}),
}));
