import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import {carService} from "../../services";


const initialState = {
    cars: [],
    errors: null,
    isLoading: null,
    trigger: null,
    carForUpdate: null
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_,thunkAPI)=>{
        try {
            const {data} = await carService.getAll();
            return thunkAPI.fulfillWithValue(data);
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const create = createAsyncThunk(
    'carSlice/create',
    async ({car},thunkAPI)=>{
        try {
            await carService.create(car);
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id,car}, thunkAPI)=>{
        try {
            await carService.updateById(id, car)
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const carSlice = createSlice({
   name: 'carSlice',
    initialState,
    reducers:{
        setCarForUpdate:(state,action)=>{
            state.carForUpdate = action.payload.car
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                state.cars = action.payload
            })
            .addCase(create.fulfilled, state=>{
                state.trigger = !state.trigger
            })
            .addCase(updateById.fulfilled, state => {
                state.trigger = !state.trigger
                state.carForUpdate = null
            })
            .addMatcher(isFulfilled(getAll,create, updateById),state => {
                state.isLoading = false
                state.errors = null
            })
            .addMatcher(isRejected(getAll,create, updateById), (state, action)=>{
                state.errors = action.payload
                state.isLoading = false
            })
            .addMatcher(isPending(getAll,create, updateById), state => {
                state.isLoading = true
            })
});

const {reducer: carReducer, actions} = carSlice;

const carActions = {
    ...actions, getAll, create, updateById
};

export {
    carReducer,
    carActions
}