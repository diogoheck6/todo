"use client"
import obterTarefas from "@/backend/casos-uso/obter-tarefas"
import salvarTarefa from "@/backend/casos-uso/salvar-tarefa"
import { useState } from "react"
import TarefaItem from "./components/tarefa-item"

export default function Home() {
	const [nome, setNome] = useState<any>("")
	const [tarefa, setTarefa] = useState<any>(null)
	const [tarefas, setTarefas] = useState<any>([])

	async function clickSalvar() {
		const novaTarefa = await salvarTarefa({ nome })
		setTarefa(novaTarefa)
	}

	async function clickObter() {
		const tarefas = await obterTarefas()
		setTarefas(tarefas)
	}

	return (
		<div>
			<h1>Lista de Tarefas</h1>
			<input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
			<button onClick={clickSalvar} className="bg-blue-500 p-2">
				Salvar Tarefa
			</button>
			<button onClick={clickObter} className="bg-yellow-500 p-2">
				Obter Tarefas
			</button>
			{tarefa && <p>{tarefa.id}</p>}
			{tarefa && <p>{tarefa.nome}</p>}

			<ul className="flex flex-col gap-4">
				{tarefas.map((tarefa: any) => (
					<TarefaItem key={tarefa.id} tarefa={tarefa} excluir={() => {}} />
					// <li key={tarefa.id}>{tarefa.nome}</li>
				))}
			</ul>
		</div>
	)
}
