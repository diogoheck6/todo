import "dotenv/config"
import { PrismaClient } from "./src/generated/prisma/client"
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3"

async function main() {
  const adapter = new PrismaBetterSqlite3({
    url: process.env.DATABASE_URL ?? "",
  })

  const prisma = new PrismaClient({ adapter })

  // Teste simples: contar registros da tabela
  const total = await prisma.tarefa.count()
  console.log("Total de tarefas na tabela:", total)

  // Criar uma tarefa pra testar
  const nova = await prisma.tarefa.create({
    data: {
      nome: "Primeiro teste Prisma 7",
      concluida: false,
    },
  })

  console.log("Tarefa criada:", nova)

  // Buscar todas
  const todas = await prisma.tarefa.findMany()
  console.log("Tarefas cadastradas:", todas)

  await prisma.$disconnect()
}

main().catch((err) => {
  console.error("Erro no teste:", err)
})
