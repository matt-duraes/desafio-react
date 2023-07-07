import styles from './Tarefas.module.css';

import { Tarefa } from '../Tarefa/Tarefa';
import {Book, PlusCircle} from '@phosphor-icons/react';
import { useState, useRef} from 'react';
export const Tarefas = () => {

    const [tarefas, setTarefas] = useState ([
        'Estudar Typescript',
        'Estudar Lição',
        'Terminar Demanda',
    ]);
    const inputRef = useRef<HTMLInputElement>(null);

    const criarTarefa = () => {
        const inputValue = inputRef.current?.value;
        if (inputValue) {
            setTarefas([...tarefas,inputValue]);
            inputRef.current.value = '';
        }
    }
    
    return (
        <>
            <div className={styles.container_busca}>
                <input className={styles.input_buscar}  type='input' ref={inputRef} placeholder='Adicione uma tarefa'/>
                <button className={styles.button_criar}  onClick={criarTarefa}>
                    Criar
                    <PlusCircle size={20}/>
                </button>
            </div>
            <div className={styles.container_lista}>
                <header>
                    <div className={styles.tarefas}>
                        <p>Tarefas Criadas</p>
                        <p className={styles.numero}>3</p>
                    </div>
                    <div className={styles.tarefas}>
                        <p>Tarefas Concluídas</p>
                        <p className={styles.numero}>0</p>
                    </div>
                </header>
                <div>
                    <div className={styles.nenhuma_tarefa}>
                        <Book size={80}/>
                        <p>Você ainda não tem tarefas cadastradas</p>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                </div>
                {tarefas.map(tarefa => {
                    return <Tarefa titulo={tarefa} />
                })
                }
            </div>
        </>
    )
}