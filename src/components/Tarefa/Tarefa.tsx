import { Trash, Check } from "@phosphor-icons/react";
import styles from './Tarefa.module.css';

interface TarefaProps {
    titulo: string;
    concluida?: boolean;
}

export const Tarefa = ({titulo, concluida = false}: TarefaProps) => {

    return (
        <div className={styles.container_tarefa}>
            <div className={concluida ? styles.tarefa_concluida : styles.tarefa}>
                <Check size={15} />
            </div>
            <p className={concluida ? styles.texto_tarefa_concluida : styles.texto_tarefa}>{titulo} </p>
            <button className={styles.icone_lixeira} >
                <Trash size={25} />
            </button>
        </div>
    )
}
