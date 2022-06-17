import { TipoContaEnum } from "../enums/tipo-conta.enum"

export abstract class ContaModel {
    id: string = ""
    nome: string = ""
    numero: string = ""
    abstract tipo: TipoContaEnum
}