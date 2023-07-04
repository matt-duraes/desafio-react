
import styles from './Pesquisa.module.css';
import {PlusCircle} from '@phosphor-icons/react';
export const Pesquisa = () => {
    return (
        <div className={styles.container_busca}>
            <input className={styles.input_buscar} type='input' placeholder='Adicione uma tarefa'/>
            <button className={styles.button_criar}>
                Criar
                <PlusCircle size={20}/>
            </button>
        </div>
    )
}