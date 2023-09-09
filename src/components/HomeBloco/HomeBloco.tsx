import { useRef, useState } from 'react';
import styles from './HomeBloco.module.css';
import {Book, PlusCircle} from '@phosphor-icons/react';
import { Tarefa } from '../Tarefa/Tarefa';


export const HomeBloco = () => {

    const [tarefas,setTarefas] = useState ([
        {id: crypto.randomUUID(), atividade: 'Estudar Typescript', estado: true},
        {id: crypto.randomUUID(), atividade: 'Estudar Javascript', estado: false},
    ])

    const [valorCampo, setValorCampo] = useState('');
    const novaTarefaTexto = (event:any) => {
        setValorCampo(event.target.value);
    }
    const criarTarefa = () => {
        if(valorCampo.trim() === '') {
            return alert('A tarefa não pode ser vazia');
        }

        const novaTarefa = {
            id: crypto.randomUUID(),
            atividade: valorCampo,
            estado: false,
        };

        setTarefas([...tarefas, novaTarefa]);
        setValorCampo('');
        setConcluidas(verificarConcluidas());
    }
    const verificarConcluidas = () => {
        let contador = 0;

        // Percorre todas as tarefas e conta as concluídas
        tarefas.forEach(tarefa => {
            if (tarefa.estado === true) {
                contador += 1;
            }
        });

        return contador;
    }
    const [concluidas, setConcluidas] = useState(verificarConcluidas());

    return (
        <>
            <div className={styles.container_busca}>
                <input className={styles.input_buscar}  
                    type='input' 
                    placeholder='Adicione uma tarefa' 
                    onChange={novaTarefaTexto}
                    value={valorCampo}
                />
                <button className={styles.button_criar} onClick={criarTarefa}>
                    Criar
                    <PlusCircle size={20}/>
                </button>
            </div>
            <div className={styles.container_lista}>
                <header>
                    <div className={styles.tarefas}>
                        <p>Tarefas Criadas</p>
                        <p className={styles.numero}>{tarefas.length}</p>
                    </div>
                    <div className={styles.tarefas}>
                        <p>Tarefas Concluídas</p>
                        <p className={styles.numero}>{concluidas}</p>
                    </div>
                </header>
                <div className={styles.nenhuma_tarefa}>
                    <Book size={80}/>
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
                <div>
                {tarefas.map(tarefa => {
                    return (
                        <Tarefa 
                            key={tarefa.id}
                            id={tarefa.id}
                            atividade={tarefa.atividade}
                            estado={tarefa.estado} 
                        />
                    );
                })}
                </div>
            </div>
        </>
    )
}



