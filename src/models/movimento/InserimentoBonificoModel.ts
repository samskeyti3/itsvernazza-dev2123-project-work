import { MovimentoModel } from "./MovimentoModel";

type InserimentoBonificoModel = Pick<MovimentoModel, "beneficiarioDenominazione" | "beneficiarioIban" | "ordinanteDenominazione" | "ordinanteIban" | "importo">;

export default InserimentoBonificoModel;
