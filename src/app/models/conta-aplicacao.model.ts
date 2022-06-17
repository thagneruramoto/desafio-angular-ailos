import { TipoContaEnum } from "../enums/tipo-conta.enum";
import { ContaModel } from "./conta.model";

export class ContaAplicacaoModel extends ContaModel{
    tipo = TipoContaEnum.ContaAplicacao

    get tipoTexto(): String {
        return "Conta aplicação"
    }
}