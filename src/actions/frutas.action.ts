import { actionsTypes } from '../constantes/frutas';

interface FrutaProps {
    id: number;
    nome: string;
    quantidade: number;
}

const actions = {
    adicionar: (fruta: FrutaProps) => ({
        type: actionsTypes.ADICIONAR_FRUTA,
        payload: fruta,
    }),
    remover: (fruta: FrutaProps) => ({
        type: actionsTypes.REMOVER_FRUTA,
        payload: fruta,
    })
}

export { actions }