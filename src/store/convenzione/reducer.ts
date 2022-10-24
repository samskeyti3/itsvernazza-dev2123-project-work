import { createReducer } from "@reduxjs/toolkit";
import ConvenzioneReducerType from "./types";

const initialState: ConvenzioneReducerType = {
    convenzione: {
        bonifico: 2,
        prelievo: 1.5,
        versamento: 0,
    }
};

const convenzioneReducer = createReducer(initialState, (builder) => { });

export default convenzioneReducer;
