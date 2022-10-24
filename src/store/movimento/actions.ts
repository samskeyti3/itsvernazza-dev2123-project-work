import { createAction } from "@reduxjs/toolkit";
import InserimentoBonificoModel from "../../models/movimento/InserimentoBonificoModel";

export const inserimentoBonifico = createAction<InserimentoBonificoModel>("inserimentoBonificoModel");
