import { configureStore } from "@reduxjs/toolkit";
import scrollReducer from "../features/scroll/scrollSlice";
export const store = configureStore({
    reducer:{
        scroll: scrollReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch