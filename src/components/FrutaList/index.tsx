import React from 'react';
import styles from './styles.module.scss';
import Fruta from '../interfaces/fruta';

interface FrutaProps {
    fruta: Fruta;
    removerFruta(fruta: Fruta): void;
}

export const FrutaList: React.FC<FrutaProps> = ({ fruta, removerFruta }) => {
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

