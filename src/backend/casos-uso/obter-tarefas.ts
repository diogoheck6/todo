"use server"

import RepositorioTarefa from "../db/RepositorioTarefa"

export default async function obterTarefas() {
	const repo = new RepositorioTarefa()
	return await repo.obterTodos()
}
