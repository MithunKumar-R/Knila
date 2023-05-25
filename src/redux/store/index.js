import { configureStore } from "@reduxjs/toolkit";
import { formReducer, localStorageMiddleware, reHydrateStore, submitForm, updateForm } from "./slices/FormSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const store = configureStore({
    reducer: {
        form: formReducer
    },
    preloadedState: reHydrateStore(),
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(localStorageMiddleware),
})

setupListeners(store.dispatch);

export { store, submitForm, updateForm };