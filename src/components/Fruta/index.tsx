import React from 'react';
import styles from './styles.module.scss';

interface FrutaProps {
    id: number;
    nome: string;
    quantidade: number;
}

interface Props {
    fruta: FrutaProps;
    removerFruta(fruta: FrutaProps): void;
}

export const Fruta: React.FC<Props> = ({ fruta, removerFruta }) => {
    return (
        <div className={styles.fruta}>
            <ul>
                <li><strong>ID:</strong> {fruta.id}</li>
                <li><strong>Nome:</strong> {fruta.nome}</li>
                <li><strong>Quantidade:</strong> {fruta.quantidade}</li>
                <li><button onClick={() => removerFruta(fruta)}>x</button></li>
            </ul>
        </div>
    );
}

