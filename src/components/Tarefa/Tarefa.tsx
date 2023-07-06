import { Trash, Check } from "@phosphor-icons/react";
import styles from './Tarefa.module.css';

interface PropsTarefa {
    textoTarefa: string;
    estadoTarefa?: boolean
}

const acaoTarefa = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const divTarefa = event.currentTarget;
    divTarefa.classList.toggle(styles.tarefa_concluida);
    const teste = document.querySelector("#teste");
    teste?.classList.toggle(styles.concluida)
}

export const Tarefa = ({ textoTarefa }: PropsTarefa) => {
    return (
        <div className={styles.container_tarefa}>
            <div
                id="select_tarefa"
                onClick={acaoTarefa}
                className={styles.tarefa_nao_concluida || styles.select_tarefa}
            >
                <Check size={15} />
            </div>
            <p  
                id="teste"
                className={styles.texto_tarefa}>
            {textoTarefa} </p>
            <Trash className={styles.icone_lixeira} size={25} />
        </div>
    )
}
