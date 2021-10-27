import { actionsTypes } from '../constantes/frutas';
import Fruta from '../components/interfaces/fruta';

const actions = {
    adicionar: (fruta: Fruta) => ({
        type: actionsTypes.ADICIONAR_FRUTA,
        payload: fruta,
    }),
    remover: (fruta: Fruta) => ({
        type: actionsTypes.REMOVER_FRUTA,
        payload: fruta,
    })
}

export { actions }