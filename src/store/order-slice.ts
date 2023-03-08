import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import { IOrdersHistoryItem, IPost_Query_Form } from "common/interfaces";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../src/firebase";
import type { PayloadAction } from "@reduxjs/toolkit";

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  return await getDocs(collection(db, "ordersHistory")).then(
    (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      return newData;
    }
  );
});

export const addOrderToHistory = createAsyncThunk(
  "orders/addOrderToHistory",
  async ({ form, cartContext }: IPost_Query_Form): Promise<any> => {
    console.log("orders/addOrderToHistory");
    const docRef = await addDoc(collection(db, "ordersHistory"), {
      firstName: form.name,
      lastName: form.surName,
      phone: form.phone,
      city: form.city,
      street: form.street,
      foods: cartContext.items,
      totalAmount: cartContext.totalAmount,
      date: new Date(),
    });

    return docRef;
  }
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
