import { MovimentoModel } from "../../models/movimento/MovimentoModel";

export interface MovimentiReducerType {
    movimenti: MovimentoModel[];
}

export interface MovimentiState {
    movimento: MovimentiReducerType;
}
