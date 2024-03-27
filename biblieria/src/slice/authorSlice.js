import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

const endPointAuthors="/api/author"

const initialState={
    listaAuthors:[],
    selectedAuthor:{},
    error:"",
    loading: false
}

//primo parametro nome azione/ oprerazione che vuoi eseguire fetch, parametro 2 operazione async

export const getAuthors =
    createAsyncThunk("authors/fetch", async(args = {})=>{
        let { page, author } = args;
       return axios.get("/api/author?"+ (page ? ("&page=" + page) : "") + (author ? ("&author=" + author) : "")).then(response=> {/* console.log(response); */ return response.data}).catch(error=>console.log(error));
    })


export const AuthorSlice = createSlice(
    {
        name: "authors",
        initialState: initialState,
        reducers:{            
        },
        extraReducers: (builder)=> {
            builder
                .addCase(getAuthors.pending,(state,action)=>{
                    state.loading=true
                })
                .addCase(getAuthors.rejected,(state,action)=>{
                    state.error=action.error.message
                    state.loading=false
                })
                .addCase(getAuthors.fulfilled,(state,action)=>{
                    state.listaAuthors=action.payload
                    state.loading=false
        })
    }
})

const {reducer,actions}=AuthorSlice;
export default reducer