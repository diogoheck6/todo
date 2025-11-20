import excluirTarefa from "@/backend/casos-uso/excluir-tarefa"
import obterTarefas from "@/backend/casos-uso/obter-tarefas"
import salvarTarefa from "@/backend/casos-uso/salvar-tarefa"
import { Tarefa } from "@/core/model/Tarefa"
import { useEffect, useState } from "react"

export default function useTarefas() {
	const [tarefas, setTarefas] = useState<Tarefa[]>([])

	useEffect(() => {
		carregar()
	}, [])

	async function carregar() {
		const tarefas = await obterTarefas()
		setTarefas(tarefas)
	}

	async function adicionar(tarefa: Tarefa) {
		const novaTarefa = await salvarTarefa(tarefa)
		setTarefas([...tarefas, novaTarefa])
	}

	async function excluir(tarefaId: string) {
		const novaTarefa = await excluirTarefa(tarefaId)
		setTarefas(tarefas.filter((t) => t.id !== novaTarefa.id))
	}

	return {
		tarefas,
		adicionar,
		excluir,
	}
}
