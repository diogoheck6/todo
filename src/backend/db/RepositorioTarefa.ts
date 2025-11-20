import { Tarefa } from "@/core/model/Tarefa"
import { prisma } from "@/lib/prisma"

export default class RepositorioTarefa {
	async inserir(tarefa: Tarefa) {
		return await prisma.tarefa.create({ data: tarefa as any })
	}

	async alterar(tarefa: Tarefa) {
		return await prisma.tarefa.update({
			where: { id: tarefa.id },
			data: tarefa,
		})
	}

	async obterTodos() {
		return await prisma.tarefa.findMany()
	}
}
