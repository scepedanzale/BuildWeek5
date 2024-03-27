import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

const endPointAuthors = "/api/author"

const initialState = {
    title: "",
    year: "",
    author: "",
    category: "",
    page:1,
    message: "",
    ricerca:true
}

//primo parametro nome azione/ oprerazione che vuoi eseguire fetch, parametro 2 operazione async



export const querySlice = createSlice(
    {
        name: "query",
        initialState: initialState,
        reducers: {
            setTitle: create.reducer((state, action) => {
                state.title = action.payload;
            }),
            setYear: create.reducer((state, action) => {
                state.year = action.payload;
            }),
            setAuthor: create.reducer((state, action) => {
                state.author = action.payload;
            }),
            setMessage: create.reducer((state, action) => {
                state.categoriaSelezionata = action.payload;
            }), 
            selezionaCategoria: create.reducer((state, action) => {
                state.categoriaSelezionata = action.payload;
            }),
        },
        extraReducers: (builder) => {

        }
    })

const { reducer, actions } = querySlice;
export default reducer