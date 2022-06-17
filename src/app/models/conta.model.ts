import { TipoContaEnum } from "../enums/tipo-conta.enum"
import { CooperativaModel } from "./cooperativa.model"

export abstract class ContaModel {
    id: string = ""
    numero: string = ""
    cooperativa: CooperativaModel = new CooperativaModel()
    abstract tipo: TipoContaEnum

    constructor(id: string, numero: string, cooperativa: CooperativaModel) {
        this.id = id
        this.numero = numero
        this.cooperativa = cooperativa
    }

    abstract get tipoTexto(): String
}