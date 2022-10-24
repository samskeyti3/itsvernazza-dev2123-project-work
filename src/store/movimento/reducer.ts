import { createReducer } from "@reduxjs/toolkit";
import CategoriaMovimentoEnum from "../../constants/CategoriaMovimentoEnum";
import { MovimentoModel } from "../../models/movimento/MovimentoModel";
import { inserimentoBonifico } from "./actions";
import { MovimentiReducerType } from "./types";

const initialState: MovimentiReducerType = {
    movimenti: []
};

export const movimentoReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(inserimentoBonifico, (state, action) => {
            let idMovimento = 1;

            if (state.movimenti.length > 0) {
                idMovimento = (Math.max(...state.movimenti.map(movimento => movimento.idMovimento))) + 1;
            }
            let nuovoMovimento = new MovimentoModel(
                {
                    ...action.payload,
                    idMovimento,
                    data: new Date().getTime(),
                    categoria: CategoriaMovimentoEnum.Bonifico,
                }
            );
            state.movimenti = [...state.movimenti, nuovoMovimento];
        });
});
