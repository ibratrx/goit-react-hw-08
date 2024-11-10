import { createSelector } from "reselect";

export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;
export const selectFilter = (state) => state.filters;


export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter], 
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizedFilter) ||
        number.includes(normalizedFilter)
    );
  }
);