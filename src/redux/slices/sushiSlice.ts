import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

type SushiItem = {
  category: number;
  title: string;
  price: number;
  imageLink: string;
  photo: string[];
  mass: string;
};

interface SushiFetchParams {
  categoryId: number;
  sort: { name: string; sort: string };
}

interface SushiSliceState {
  items: SushiItem[];
  status: string;
}

const initialState: SushiSliceState = {
  items: [],
  status: '',
};

export const sushiFetch = createAsyncThunk<SushiItem[], SushiFetchParams>('sushi/sushiFetchStatus', async (params) => {
  const { categoryId, sort } = params;
  const { data } = await axios.get<SushiItem[]>(
    `https://6380d8cb8efcfcedac10e330.mockapi.io/items?category=${categoryId}&sortBy=${sort.sort}&order=desc`
  );
  return data;
});

export const sushiSlice = createSlice({
  name: 'sushi',
  initialState,
  reducers: {
    setitems(state, action: PayloadAction<SushiItem[]>) {
      state.items = action.payload;
    },
  },
  //   extraReducers: {
  //     [sushiFetch.pending]: (state) => {
  //       state.status = 'loading';
  //     },
  //     [sushiFetch.fulfilled]: (state, action) => {
  //       state.items = action.payload;
  //       state.status = 'success';
  //     },
  //     [sushiFetch.rejected]: (state, action) => {
  //       state.status = 'error';
  //       state.items = [];
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(sushiFetch.pending, (state) => {
      state.status = 'loading';
      state.items = [];
    });
    builder.addCase(sushiFetch.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    });
    builder.addCase(sushiFetch.rejected, (state) => {
      state.status = 'error';
      state.items = [];
    });
  },
});

export const { setitems } = sushiSlice.actions;

export default sushiSlice.reducer;
