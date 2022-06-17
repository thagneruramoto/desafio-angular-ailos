import { SituacaoCPFEnum } from "../enums/situacao-cpf.enum"

export class CPFModel {
    numero: string = ""
    situacao: SituacaoCPFEnum = SituacaoCPFEnum.Nula

    get situacaoTexto() {
        switch (this.situacao) {
            case SituacaoCPFEnum.CanceladaMultiplicidade: return "Cancelada por Multiplicidade"
            case SituacaoCPFEnum.CanceladaOficio: return "Cancelada de Ofício"
            case SituacaoCPFEnum.Nula: return "Nula"
            case SituacaoCPFEnum.PendenteRegularizacao: return "Pendente de Regularização "
            case SituacaoCPFEnum.Regular: return "Regular"
            case SituacaoCPFEnum.Suspensa: return "Suspensa"
            case SituacaoCPFEnum.TitularFalecido: return "Titular Falecido"
            default: return "Situacao não definida"
        }
    }
}