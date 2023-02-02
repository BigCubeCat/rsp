import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchUser } from './userAPI';
import { TRules, CUSTOM_RULES } from '../../utils/rules';

export interface UserState {
  name: string;
  rules: TRules;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: UserState = {
  name: "guest",
  rules: CUSTOM_RULES,
  status: 'idle',
};

export const setUserName = createAsyncThunk(
  'user/fetchUser',
  async (name: string) => {
    const response = await fetchUser(name);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    logout: (state) => {
      state.name = "guest";
    },
    setRules: (state, action: PayloadAction<TRules>) => {
      state.rules = action.payload;
    }
  },
});

export const { setName, logout, setRules } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.name;
export const selectRules = (state: RootState) => state.user.rules;
export default userSlice.reducer;

