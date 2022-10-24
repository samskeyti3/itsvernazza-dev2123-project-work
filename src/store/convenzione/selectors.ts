import { createSelector } from "@reduxjs/toolkit";
import ConvenzioneModel from "../../models/convenzione/ConvenzioneModel";
import ConvenzioneReducerType, { ConvenzioneState } from "./types";

const convenzioneState = (state: ConvenzioneState): ConvenzioneReducerType => state.convenzione;

export const getConvenzione = createSelector(
    convenzioneState,
    (state: ConvenzioneReducerType): ConvenzioneModel => {
        return state.convenzione;
    }
);
