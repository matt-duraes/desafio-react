import { Trash, Check } from "@phosphor-icons/react";
import styles from './Tarefa.module.css';
import { useState } from "react";

interface TarefaProps {
    titulo: string;
    concluida?: boolean;
}


export const Tarefa = ({titulo, concluida = false}: TarefaProps) => {

    const concluirTarefa = () => {
        if(!tarefaConcluida == false) {
            return setTarefaConcluida(false);
        } 
        setTarefaConcluida(true);
    }

    const [tarefaConcluida, setTarefaConcluida] = useState(false);
    return (
        <div className={tarefaConcluida ? styles.container_tarefa_conluida : styles.container_tarefa}>
            <div onClick={concluirTarefa} className={tarefaConcluida ? styles.tarefa_concluida : styles.tarefa}>
                <Check size={15} />
            </div>
            <p className={tarefaConcluida ? styles.texto_tarefa_concluida : styles.texto_tarefa}>{titulo} </p>
            <button className={styles.icone_lixeira} >
                <Trash size={25} />
            </button>
        </div>
    )
}
