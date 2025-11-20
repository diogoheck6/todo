"use server"

import { Tarefa } from "@/core/model/Tarefa"
import Id from "@/core/utils/Id"

export default async function salvarTarefa(tafera: Tarefa) {
  return {
    id: Id.gerar(),
    nome: "Tarefa 1",
    concluida: false,
  }
}
