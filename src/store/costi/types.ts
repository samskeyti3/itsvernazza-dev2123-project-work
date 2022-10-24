import ConvenzioneModel from "../../models/costi/ConvenzioneModel";


export default interface ConvenzioneReducerType {
    convenzione: ConvenzioneModel;
}

export interface ConvenzioneState {
    convenzione: ConvenzioneReducerType;
}

