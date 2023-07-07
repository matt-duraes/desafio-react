import { Header } from "./Header/Header";
import { Tarefas } from "./Tarefas/Tarefas";

export const Index = () => {
    return (
        <div>
            <Header src="src/assets/logo.svg"/>
            <Tarefas />
        </div>

    )
}