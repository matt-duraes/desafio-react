interface PessoaProps{
    nome: string
}
export const BlocoPessoa = ({nome}: PessoaProps) => {
    return (
        <div>
            <h1>{nome}</h1>
        </div>
    )
}