import styles from './Tarefas.module.css'

export const Tarefas = () => {
    return (
        <div>
            <header>
                <div className={styles.tarefas_criadas}>
                    <p>Tarefas Criadas</p>
                    <p>0</p>
                </div>
                <div className="tarefas_concluidas">
                    <p>Tarefas Concluídas</p>
                    <p>2</p>
                </div>
            </header>
            <div>
                <div className="nenhuma_tarefa">
                    <h1>Icone de tarefa</h1>
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>
        </div>
    )
}