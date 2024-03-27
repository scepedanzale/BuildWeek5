import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "../api/axios";

const initialState = {
    listaLibri: [],
    loading: null,
    error: "",
    libroSelezionato: {},
    categoriaSelezionata: null,
    pagineTotali: 1,
    paginaCorrente: 1,
    risultatiTotali: 0,
};
export const getAllBooks = createAsyncThunk("getAllBooks/fetch", async (args = {}, { dispatch }) => {
    let { page, category, author, title, abstract, year, category_id } = args;
    return axios("/api/book?" +
        (category ? (`&category=` + category) : "") +
        (page ? ("&page=" + page) : "") +
        (title ? ("&title=" + title) : "") +
        (author ? ("&author=" + author) : "") +
        (abstract ? ("&abstract=" + abstract) : "") +
        (year ? ("&year=" + year) : "") +
        (category_id ? ("&category_id=" + category_id) : ""))
        .then(response => {
            console.log(response.data);
            return response.data;
        })
});

const chiamataBooks_slice = createSlice(
    {
        name: 'libri',
        initialState: initialState,
        reducers: create => ({
            selezionaCategoria: create.reducer((state, action) => {
                state.categoriaSelezionata = action.payload;
            }),
            selezionaLibro: create.reducer((state, action) => {
                state.postSelezionato = action.payload;
            }),
        }),
        extraReducers: builder => {
            builder
                .addCase(getAllBooks.pending, (state, action) => {
                    state.loading = true;
                    state.error = "";
                })
                .addCase(getAllBooks.rejected, (state, action) => {
                    state.loading = false;
                    state.error = "Errore nel caricamento dei dati!!!"
                })
                .addCase(getAllBooks.fulfilled, (state, action) => {
                    console.log(action.payload);
                    state.loading = false;
                    state.listaLibri = action.payload.data;
                    state.pagineTotali = action.payload.last_page;
                    state.paginaCorrente = action.payload.current_page;
                    state.risultatiTotali = action.payload.total;
                    state.error = "";
                })
        }
    }
)
const { reducer, actions } = chiamataBooks_slice;
export const { selezionaCategoria, selezionaLibro } = actions;
export default reducer;