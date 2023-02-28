import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Person } from './Person';

interface PersonState {
  data: Person | null;
}

const initialState: PersonState = {
  data: null,
};

const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    setPersonData: (state, action: PayloadAction<Person>) => {
      state.data = action.payload;
    },
  },
});

export const { setPersonData } = personSlice.actions;
export default personSlice.reducer;
