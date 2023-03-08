import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import { IOrdersHistoryItem, IPost_Query_Form } from "common/interfaces";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getOrders, postOrderToHistory } from "../services/common-service";

export const fetchOrders = createAsyncThunk("orders/fetchOrders", getOrders);

export const addOrderToHistory = createAsyncThunk(
  "orders/addOrderToHistory",
  postOrderToHistory
);

export interface initialStateI {
  orders: IOrdersHistoryItem[];
  error: null;
  loading: boolean;
}

const initialState: initialStateI = {
  orders: [],
  error: null,
  loading: false,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      fetchOrders.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.orders = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(
      fetchOrders.rejected,
      (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(fetchOrders.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      addOrderToHistory.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.orders.push({
          ...action.payload.form,
          foods: action.payload.cartContext,
        });
        state.loading = false;
      }
    );
    builder.addCase(
      addOrderToHistory.rejected,
      (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(addOrderToHistory.pending, (state) => {
      state.loading = true;
    });
  },
});

const orderReducer = ordersSlice.reducer;
export default orderReducer;

const orderSelector = (state: { orders: any }) => state.orders;

export const selectOrders = createSelector(
  orderSelector,
  (state) => state.orders
);

export const selectAllOrders = (state: { orders: { orders: any } }) =>
  state.orders.orders;
