"use client"
import salvarTarefa from "@/backend/casos-uso/salvar-tarefa"
import { useState } from "react"

export default function Home() {
	const [tarefa, setTarefa] = useState<any>(null)

	async function click() {
		const novaTarefa = await salvarTarefa({
			nome: "Tarefa Criada pelo Frontend",
		})
		setTarefa(novaTarefa)
	}

	return (
		<div>
			<h1>Lista de Tarefas</h1>
			<button onClick={click} className="bg-blue-500 p-2">
				Adicionar Tarefa
			</button>
			{tarefa && <p>{tarefa.id}</p>}
			{tarefa && <p>{tarefa.nome}</p>}
		</div>
	)
}
