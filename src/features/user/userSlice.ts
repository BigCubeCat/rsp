import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchUser } from './userAPI';
import { Rules, customRules } from '../../components/Game/rules';

export interface UserState {
  name: string;
  rules: Rules;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: UserState = {
  name: "guest",
  rules: customRules,
  status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const setUserName = createAsyncThunk(
  'user/fetchUser',
  async (name: string) => {
    const response = await fetchUser(name);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    logout: (state) => {
      state.name = "guest";
    },
    setRules: (state, action: PayloadAction<Rules>) => {
      state.rules = action.payload;
    }
  },
});

export const { setName, logout, setRules } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// TODO: create selectUsername, selectRules
export const selectUser = (state: RootState) => state.user;
export const selectRules = (state: RootState) => state.user.rules;
export default userSlice.reducer;

