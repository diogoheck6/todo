import { Tarefa } from "@/core/model/Tarefa"
import { IconTrash } from "@tabler/icons-react"

export interface TarefaItemProps {
	tarefa: Tarefa
	excluir: (tarefa: Tarefa) => void
}

export default function TarefaItem(props: TarefaItemProps) {
	return (
		<li className="flex items-center bg-zinc-700 p-2 rounded-md">
			<span className="flex-1">{props.tarefa.nome}</span>
			<IconTrash
				className="text-red-500 hover:text-red-400 cursor-pointer"
				onClick={() => props.excluir(props.tarefa)}
			/>
		</li>
	)
}
