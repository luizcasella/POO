//Luiz Eduardo Casella 156.702 
//Stella Hadassa 156587
class Bicicleta {
   id: number
   disponivel: boolean
   valorPorHora: number
  

  constructor(id: number, valorPorHora: number) {
      this.id = id
      this.disponivel = true
      this.valorPorHora = valorPorHora
  }

  alugar(): number {
      if (this.disponivel) {
        this.disponivel = false
        return 1
      } else {
        console.log(`Bicicleta ${this.id} não está disponível para aluguel.`)
        return 0
      }
  }

  devolver(): void {
      this.disponivel = true
  }

  calcularValorAluguel(horas: number): number {
      return this.valorPorHora * horas
  }
}

class Cliente {
   nome: string
   bicicletaAlugada: Bicicleta | null

  constructor(nome: string) {
      this.nome = nome
      this.bicicletaAlugada = null
  }

  alugarBicicleta(bicicleta: Bicicleta): void {
    if(bicicleta.alugar() == 1){
      if (this.bicicletaAlugada === null){
        this.bicicletaAlugada = bicicleta
        console.log(`${this.nome} alugou a bicicleta ${bicicleta.id}.`)
      }
      else {
        console.log(`${this.nome} já possui uma bicicleta alugada.`)
      }
    }
  }

    devolverBicicleta(horasAluguel: number): void {
      if (this.bicicletaAlugada !== null) {
          const valorTotal = this.bicicletaAlugada.calcularValorAluguel(horasAluguel)
          console.log(`${this.nome} devolveu a bicicleta ${this.bicicletaAlugada.id} após ${horasAluguel} horas. Valor: R$${valorTotal.toFixed(2)}.`)
          this.bicicletaAlugada.devolver()
          this.bicicletaAlugada = null
      } else {
          console.log(`${this.nome} não possui nenhuma bicicleta alugada.`)
      }
  }
}

const bicicleta1 = new Bicicleta(1, 10)
const bicicleta2 = new Bicicleta(2, 15)

const cliente1 = new Cliente("João")
const cliente2 = new Cliente("Maria")
const cliente3 = new Cliente("Luiz")

cliente1.alugarBicicleta(bicicleta1)
cliente2.alugarBicicleta(bicicleta2)
cliente3.alugarBicicleta(bicicleta2)

cliente1.devolverBicicleta(3)
cliente2.devolverBicicleta(5)
cliente3.devolverBicicleta(3)

