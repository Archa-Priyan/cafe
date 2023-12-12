import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//api call using Thunk

export const fetchCafe = createAsyncThunk('cafeList/fetchCafe',()=>{
  const result = axios.get('/restaurant.json').then(response=>response.data.restaurants)
  console.log(result);
  return result
})

const cafeSlice = createSlice({
    name:'cafeList',
    initialState : {
        loading:false, //pending
        allCafe:[], //resolve
        searchCafe:[],
        error:"" //reject
    },
    extraReducers : (builder)=>{
        //builder holds the repsonse from the Thunk
        builder.addCase(fetchCafe.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchCafe.fulfilled,(state,action)=>{
            state.loading = false
            state.allCafe = action.payload
            state.searchCafe =action.payload
            state.error = ""
        })
        builder.addCase(fetchCafe.rejected,(state,action)=>{
            state.loading = false
            state.allCafe = ""
            state.error =action.error.message
        })

    }, 
    reducers:{
        search:(state,action)=>{
            state.allCafe = state.searchCafe.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
        }
    }
})


export const{search} =cafeSlice.actions
export default cafeSlice.reducer