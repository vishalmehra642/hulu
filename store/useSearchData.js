import create from 'zustand';
import { combine, persist } from 'zustand/middleware';

const checkoutSearchStore = combine({ search: [] }, set => ({
  addSearchData: (getSearchData) => set(() => ({ search: [getSearchData] })),
}));

export const useSearchData = create(persist(checkoutSearchStore, { name: 'search' }));