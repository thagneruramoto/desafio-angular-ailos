import { TipoContaEnum } from "../enums/tipo-conta.enum";
import { ContaModel } from "./conta.model";

export class ContaCorrenteModel extends ContaModel{
    tipo = TipoContaEnum.ContaAplicacao
}