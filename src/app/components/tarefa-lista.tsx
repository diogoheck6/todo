import { Tarefa } from "@/core/model/Tarefa"
import TarefaItem from "./tarefa-item"

export interface TarefalistaProps {
	tarefas: Tarefa[]
	excluir: (id: string) => void
}

export default function Tarefalista(props: TarefalistaProps) {
	const { tarefas, excluir } = props
	return (
		<ul className="flex flex-col gap-4">
			{tarefas.map((tarefa: any) => (
				<TarefaItem key={tarefa.id} tarefa={tarefa} excluir={() => excluir(tarefa.id)} />
			))}
		</ul>
	)
}
