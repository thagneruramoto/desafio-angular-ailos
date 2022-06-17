import { SituacaoCPFEnum } from "../enums/situacao-cpf.enum"

export interface CPFApi {
    id: string
    nome: string
    situacao: SituacaoCPFEnum
}