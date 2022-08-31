const andre = document.querySelector('input')
const joao = document.querySelector('ol')
let oseias = []

function Adicionar() {
    oseias.push(andre.value)
    render()
    andre.value = ''
}

function render(){
    joao.innerHTML = null
    oseias.forEach(function(tarefa){
    const li = document.createElement('li')
    li.innerText = tarefa
    joao.appendChild(li)
    })
}
function Apagar(){
    oseias = []
    joao.innerHTML = null
}