import { useState } from "react";
import styles from './styles.module.scss';

interface Fruta {
    id: number;
    nome: string;
    quantidade: number;
}

interface Props {
    adicionarFruta(fruta: Fruta): void;
}

function AdicionarFruta({ adicionarFruta }: Props) {
    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const id = Math.floor(Math.random() * 10000);

    const onSubmitHandler = (event: React.FormEvent<EventTarget>) => {
        event.preventDefault();

        nome !== "" && quantidade !== "" ? adicionarFruta({ id, nome, quantidade: parseInt(quantidade) }) : console.log('digita tudo aí')
    }

    return (
        <form className={styles.adicionarFruta} onSubmit={onSubmitHandler}>
            <h1>Lista de Frutas</h1>
            <div className={styles.fields}>
                <span>
                    <input
                        type="text"
                        placeholder="Nome"
                        value={nome}
                        onChange={event => setNome(event.target.value)}
                    />
                </span>
                <span>
                    <input
                        type="text"
                        placeholder="Quantidade"
                        value={quantidade}
                        onChange={event => setQuantidade(event.target.value)}
                    />
                </span>
                <span className={styles.field}>
                    <button>Adicionar Fruta</button>
                </span>
            </div>
        </form>
    )
}

export default AdicionarFruta;