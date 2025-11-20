import { Tarefa } from "@/core/model/Tarefa"
import { useState } from "react"

export interface TarefaFormProps {
	salvar: (tarefa: Tarefa) => Promise<void>
}

export default function TarefaForm(props: TarefaFormProps) {
	const [nome, setNome] = useState<any>("")

	return (
		<div>
			<input
				type="text"
				value={nome}
				onChange={(e) => setNome(e.target.value)}
				className="bg-white text-black"
			/>
			<button
				onClick={async () => {
					await props.salvar({ nome })
					setNome("")
				}}
				className="bg-blue-500 p-2"
			>
				Salvar Tarefa
			</button>
		</div>
	)
}
