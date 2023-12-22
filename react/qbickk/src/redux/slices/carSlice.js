import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    errors: null,
    isLoading: null,
    trigger: null
};

const getAll = createAsyncThunk(
  'carSlice/getAll',
  async (_,thunkAPI)=>{
      try {
          const {data} = carService.getAll();
          return thunkAPI.fulfillWithValue(data);
      }catch (e) {
          return thunkAPI.rejectWithValue(e.response.data)
      }
  }
);

const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, thunkAPI) => {
        try {
            await carService.create(car)

        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);


const carSlice = createSlice({
   name: 'carSlice',
   initialState,
   reducers:{
        // setCars:(state,action)=> {
        //     state.cars = action.payload
        // }
   },
   // extraReducers:{
   //     [getAll.fulfilled] : (state, action) => {
   //         state.cars = action.payload
   //         state.isLoading = false
   //         state.errors = null
   //     },
   //     [getAll.rejected] : (state, action) => {
   //          state.errors = action.payload
   //         state.isLoading = false
   //     },
   //     [getAll.pending] : state => {
   //          state.isLoading = true
   //     }
   // }
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                        state.cars = action.payload
                        state.isLoading = false
                        state.errors = null
            })
            .addCase(getAll.rejected, (state, action) => {
                        state.errors = action.payload
                        state.isLoading = false
            })
            .addCase(getAll.pending, state => {
                        state.isLoading = true
            })
            .addCase(create.fulfilled, state => {
                        state.trigger = !state.trigger
            })
});


const {reducer: carReducer, actions} = carSlice;

const carActions = {
    ...actions, getAll, create
};

export {
    carReducer,
    carActions
};

