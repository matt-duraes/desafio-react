import { Tarefa } from '../Tarefa/Tarefa';
import styles from './Tarefas.module.css'
import {Book} from '@phosphor-icons/react';

export const Tarefas = () => {
    return (
        <div className={styles.container_lista}>
            <header>
                <div className={styles.tarefas}>
                    <p>Tarefas Criadas</p>
                    <p className={styles.numero}>0</p>
                </div>
                <div className={styles.tarefas}>
                    <p>Tarefas Concluídas</p>
                    <p className={styles.numero}>2</p>
                </div>
            </header>
            <div>
                <div className={styles.nenhuma_tarefa}>
                    <Book size={80}/>
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>
            <Tarefa textoTarefa='Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' />
        </div>
    )
}