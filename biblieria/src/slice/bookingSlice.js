import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

const endPointBooking="/api/booking"

const initialState={
    listaBooking:[],
    selectedBooking:{},
    error:"",
    loading: false
}

//primo parametro nome azione/ oprerazione che vuoi eseguire fetch, parametro 2 operazione async

export const getBookings =
    createAsyncThunk("Bookings/fetch", async()=>{
    return axios.get(endPointBooking).then(response=> {console.log(response);return response.data}).catch(error=>console.log(error));
    })

export const createBooking =
    createAsyncThunk("Bookings/fetch", async (bookId, { dispatch }) => {
    
    return axios.post(endPointBooking, {
                        book_id: bookId
                    })
    .then(response=> {
        dispatch(getBookings()) 
        console.log(response)})
    .catch(error=>console.log(error));
})

export const cancelBooking =
    createAsyncThunk("Bookings/fetch", async (bookingId, { dispatch }) => {
    
    return axios.delete(endPointBooking+'/'+bookingId)
    .then(response=> {
        dispatch(getBookings()) 
        console.log(response)})
    .catch(error=>console.log(error));
})

export const extendBooking =
    createAsyncThunk("Bookings/fetch", async (args = {}, { dispatch }) => {
    let {id, expDate} = args
    let oldDate = new Date(expDate)
    console.log(oldDate)
    
    oldDate.setDate(oldDate.getDate()+15)
    let newDate= oldDate.toISOString()
    return axios.put(endPointBooking+'/'+id, {
        extended: true,
        expiring_date: newDate.slice(0,10) // tutto un giro demoniaco per arrivare a sta data demmè
    })
    .then(response=> {
        dispatch(getBookings()) 
        console.log(response)})
    .catch(error=>console.log(error));
})




export const booking_slice = createSlice(
    {
        name: "bookings",
        initialState: initialState,
        reducers:{
            
        },
        extraReducers: (builder)=> {
            builder
                .addCase(getBookings.pending,(state,action)=>{
                    state.loading=true
                })
                .addCase(getBookings.rejected,(state,action)=>{
                    state.error=action.error.message
                    state.loading=false
                })
                .addCase(getBookings.fulfilled,(state,action)=>{
                    state.listaBooking=action.payload
                    state.loading=false
        })
    }
})

const {reducer,actions}= booking_slice;
export default reducer