import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { movimentoReducer } from "./movimento/reducer";
import { userReducer } from "./user/reducer";

export const store = configureStore({
    reducer: {
        user: userReducer,
        movimento: movimentoReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
