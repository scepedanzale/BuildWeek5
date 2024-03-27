import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "../api/axios";

const initialState = {
    listaCategorie: [],
    loading: null,
    error: "",
    categoriaSelezionata:null,
};

export const getCategorie = createAsyncThunk("GetCategorie/fetch", async () => {
    return axios("/api/category")
            .then(response =>response.data);
})

const categorie_slice = createSlice(
    {
        name: 'categorie',
        initialState: initialState,
        reducers: {},
        extraReducers: builder => {
            builder.addCase(getCategorie.pending, (state, action) => {
                state.loading = true;
            })
                .addCase(getCategorie.rejected, (state, action) => {
                    state.loading = false
                    state.error = "Errore nel caricamento dei dati!!!"
                })
                .addCase(getCategorie.fulfilled, (state, action) => {
                    state.loading = false;
                    state.listaCategorie = action.payload;                                     
                })
        }
    }
);
const { reducer, actions } = categorie_slice;

export default reducer;