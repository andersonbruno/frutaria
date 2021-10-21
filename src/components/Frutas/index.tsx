import { useState } from "react";
import AdicionarFruta from "../AdicionarFruta";
import { Fruta } from "../Fruta";
import styles from './styles.module.scss';
import { useSelector } from "react-redux";
import { FrutasState } from "../../reducers/fruta.reducers";

function Frutas() {
    interface Fruta {
        id: number;
        nome: string;
        quantidade: number;
    }

    const frutax = useSelector<FrutasState, FrutasState["frutas"]>((state) => state.frutas);

    const [frutas, setFrutas] = useState(frutax);

    const adicionarFruta = (fruta: Fruta) => {
        setFrutas(frutas => [...frutas, fruta])
    }

    const removerFruta = (fruta: Fruta) => {
        setFrutas(frutas.filter(x => x.id !== fruta.id));
    }

    return (
        <div className={styles.contentContainer}>
            <AdicionarFruta adicionarFruta={adicionarFruta} />
            <div className="content">
                {
                    frutas.map((frutada, index) => (
                        <div key={index}>
                            <Fruta removerFruta={removerFruta} fruta={frutada} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Frutas;