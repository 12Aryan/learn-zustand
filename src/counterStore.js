import { create } from "zustand";

export const useCounter = create((set, get) => ({
  count: 0,
  users: [],
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () =>
    set((state) => ({
      count: Math.max(0, state.count - 1), 
    })),
  addUser: (data) =>
    set((state) => ({ users: [...state.users, data] })),
  deleteUser: (index) =>
    set((state) => ({
      users: state.users.filter((_, i) => i !== index), 
    })),
  updateUser: (value, index) =>
    set((state) => ({
      users: state.users.map((user, i) => (i === index ? value : user)), 
    })),
}));
