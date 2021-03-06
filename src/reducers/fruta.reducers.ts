import { actionsTypes } from '../constantes/frutas';
import Fruta from '../components/interfaces/fruta';

const INITIAL_STATE = {
    frutas: [
        { id: 1, nome: 'uva', quantidade: 32 },
        { id: 2, nome: 'maçã', quantidade: 11 },
    ]
}

type Action = {
    type: string,
    payload: Fruta
}

export interface FrutasState {
    frutas: Array<Fruta>;
}

const reducers = (state: FrutasState = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case actionsTypes.ADICIONAR_FRUTA:
            return { frutas: [...state.frutas, { ...action.payload }] }
        case actionsTypes.REMOVER_FRUTA:
            return { frutas: state.frutas.filter(x => x.id === action.payload.id) }
        default:
            return state;
    }
}

export { reducers };