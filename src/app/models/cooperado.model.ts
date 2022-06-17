import { ContaModel } from "./conta.model"
import { CPFModel } from "./cpf.model"

export class CooperadoModel {
    id: string = ""
    nome: string = ""
    cpf: CPFModel | undefined
    contas: ContaModel[] = []
}