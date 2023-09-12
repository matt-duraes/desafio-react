import { Trash, Check } from "@phosphor-icons/react";
import styles from './Tarefa.module.css';
import { useState } from "react";

interface TarefaProps {
    id: string,
    atividade: string;
    estado: boolean;
    removerTarefa: any;
    concluirTarefa: any;
}



export const Tarefa = ({ atividade, estado, removerTarefa, id, concluirTarefa}: TarefaProps) => {

    const [tarefaConcluida, setTarefaConcluida] = useState(
        estado
    )
    const alterarEstado = () => {
        concluirTarefa(!tarefaConcluida)
        setTarefaConcluida(!tarefaConcluida);
    }
    
    const deletarTarefa = (id: any) => {
        removerTarefa(id)
    }
    return (
        <div className={tarefaConcluida ? styles.container_tarefa_conluida : styles.container_tarefa} id={id}>
            <div onClick={() =>alterarEstado()} className={tarefaConcluida ? styles.tarefa_concluida : styles.tarefa}>
                <Check size={15} />
                {estado}
            </div>
            <p className={tarefaConcluida ? styles.texto_tarefa_concluida : styles.texto_tarefa}>
                {atividade}
            </p>
            <button className={styles.icone_lixeira} onClick={()=>deletarTarefa(id)}>
                <Trash size={25} />
            </button>
        </div>
    )
}
