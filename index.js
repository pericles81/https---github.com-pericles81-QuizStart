const res = document.getElementById('res')

const quiz1 = ['Variáveis em programação são usadas para armazenar valores que podem ser alterados durante a execução do programa.', 'Variáveis em programação são usadas para armazenar valores que podem ser alterados durante a execução do programa.', 'Em programação, um "loop" é uma estrutura de controle que permite que um programa tome decisões com base em condições específicas.', 'A orientação a objetos é um paradigma de programação que não envolve a criação de classes e objetos.', 'Em programação, o código-fonte é traduzido diretamente em código de máquina sem a necessidade de compilação.']
const quiz2 = ['JavaScript é uma linguagem de programação comumente usada para desenvolvimento web e interações do lado do cliente.', 'Em programação, um "loop" é uma forma de tocar música em um instrumento virtual.', 'Um compilador é uma pessoa que escreve códigos para programas de computador.', 'Em programação, um array é uma estrutura de dados que armazena valores do mesmo tipo de forma sequencial.', 'A orientação a objetos é um paradigma de programação que não envolve a criação de classes e objetos.']
const quiz3 = ['Em programação, "Python" se refere a uma serpente venenosa usada como símbolo de linguagens de programação.', 'Variáveis em programação são usadas apenas para armazenar números inteiros.', 'Um IDE (Ambiente de Desenvolvimento Integrado) é uma ferramenta usada por programadores para escrever, depurar e testar código.', 'A criptografia é uma técnica de programação usada para criar interfaces de usuário atraentes.', 'As linguagens de programação Assembly são fáceis de ler e escrever devido à sua linguagem natural.']
const quiz4 = ['A programação é apenas útil para desenvolvimento de jogos.', 'Variáveis em programação são usadas para armazenar valores constantes que não podem ser alterados.', 'HTML é uma linguagem de programação usada para estilizar páginas da web.', 'Em programação, uma API (Interface de Programação de Aplicativos) é usada para se comunicar com alienígenas.', 'Em programação, um compilador é uma ferramenta que transforma o código-fonte em código de máquina executável.',]
const quiz5 = ['Em programação, uma linguagem de programação é apenas uma maneira de se comunicar com animais de estimação virtuais.', 'Um algoritmo é um conjunto de instruções que ajuda a resolver um problema ou realizar uma tarefa.', 'Em programação, a depuração é o processo de adicionar bugs intencionalmente ao código.', 'A recursão é uma técnica de programação em que uma função chama a si mesma.', 'Uma variável em programação é uma constante cujo valor não pode ser alterado.',]


const kk = (a) => {
  const div = document.createElement('div')

  a.map((e,i) => {
    div.id = 'kk'
    const p = document.createElement('p')
    p.innerHTML = `${i+1}.  ${e}`
    p.id = i
    div.appendChild(p)
    res.appendChild(div)
  })

}

kk(quiz1)
kk(quiz2)
kk(quiz3)
kk(quiz4)
kk(quiz5)



const req = [...document.querySelectorAll('#kk')]
req.map((e,i)=>{
  
  e.setAttribute('id',i)
  e.addEventListener('click',(evt)=>{

    if(e.id == 0 && evt.target.id == 0){
    evt.target.style.color = 'red'
    }else if(e.id == 0 && evt.target.id == 1){
      evt.target.style.color = 'red'
    }else if(e.id == 0 && evt.target.id == 2){
      evt.target.style.color = 'green'
    }else if(e.id == 0 && evt.target.id == 3){
      evt.target.style.color = 'red'
    }else if(e.id == 0 && evt.target.id == 4){
      evt.target.style.color = 'red'
    }
    if(e.id == 1 && evt.target.id == 0){
    evt.target.style.color = 'green'
    }else if(e.id == 1 && evt.target.id == 1){
      evt.target.style.color = 'red'
    }else if(e.id == 1 && evt.target.id == 2){
      evt.target.style.color = 'red'
    }else if(e.id == 1 && evt.target.id == 3){
      evt.target.style.color = 'red'
    }else if(e.id == 1 && evt.target.id == 4){
      evt.target.style.color = 'red'
    }
    if(e.id == 2 && evt.target.id == 0){
    evt.target.style.color = 'red'
    }else if(e.id == 2 && evt.target.id == 1){
      evt.target.style.color = 'red'
    }else if(e.id == 2 && evt.target.id == 2){
      evt.target.style.color = 'green'
    }else if(e.id == 2 && evt.target.id == 3){
      evt.target.style.color = 'red'
    }else if(e.id == 2 && evt.target.id == 4){
      evt.target.style.color = 'red'
    }
    if(e.id == 3 && evt.target.id == 0){
    evt.target.style.color = 'red'
    }else if(e.id == 3 && evt.target.id == 1){
      evt.target.style.color = 'red'
    }else if(e.id == 3 && evt.target.id == 2){
      evt.target.style.color = 'red'
    }else if(e.id == 3 && evt.target.id == 3){
      evt.target.style.color = 'red'
    }else if(e.id == 3 && evt.target.id == 4){
      evt.target.style.color = 'green'
    }
    if(e.id == 4 && evt.target.id == 0){
    evt.target.style.color = 'red'
    }else if(e.id == 4 && evt.target.id == 1){
      evt.target.style.color = 'green'
    }else if(e.id == 4 && evt.target.id == 2){
      evt.target.style.color = 'red'
    }else if(e.id == 4 && evt.target.id == 3){
      evt.target.style.color = 'red'
    }else if(e.id == 4 && evt.target.id == 4){
      evt.target.style.color = 'red'
    }
     
    
  })
})

