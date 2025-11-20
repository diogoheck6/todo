import { Tarefa } from "@/core/model/Tarefa"
import { IconCheck, IconTrash } from "@tabler/icons-react"

export interface TarefaItemProps {
	tarefa: Tarefa
	excluir: (id: string) => void
	alternarConclusao: (tarefa: Tarefa) => void
}

export default function TarefaItem(props: TarefaItemProps) {
	return (
		<li className="flex items-center gap-2 bg-zinc-700 p-2 rounded-md">
			<div
				onClick={() => props.alternarConclusao(props.tarefa)}
				className="flex justify-center items-center border border-zinc-400 w-6 h-6 rounded-full cursor-pointer"
			>
				{props.tarefa.concluida && (
					<div className="flex justify-center items-center bg-green-500 w-5 h-5 rounded-full">
						<IconCheck size={15} />
					</div>
				)}
			</div>
			<span
				className={`
					flex-1
					${props.tarefa.concluida ? "line-through text-zinc-400" : "text-white"}
				`}
			>
				{props.tarefa.nome}
			</span>
			{props.tarefa.concluida && (
				<IconTrash
					className="text-red-500 hover:text-red-400 cursor-pointer"
					onClick={() => props.excluir(props.tarefa.id!)}
				/>
			)}
		</li>
	)
}
