import ConvenzioneModel from "../../models/convenzione/ConvenzioneModel";


export default interface ConvenzioneReducerType {
    convenzione: ConvenzioneModel;
}

export interface ConvenzioneState {
    convenzione: ConvenzioneReducerType;
}

