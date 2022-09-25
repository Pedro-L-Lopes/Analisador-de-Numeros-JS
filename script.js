let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

//Verificar se o numero esta entre 1 e 100
function verificar(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

//Verificar se já está na lista
function naLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

//Adicionar numeros a lista
function add(){
    if(verificar(num.value) && !naLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        alert('Valor Invalido ou já encontrado na lista!')
    }

    //Limpar a caixa ao add
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores!')
    }else{
        //let total = valores
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        //let media = 0
        for(let pos in valores){ //Não usei o for para o min e o max e sim a função Math
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }

        res.innerHTML = ''
        res.innerHTML += `<p>A soma dos valores é: ${soma} </p>`
        res.innerHTML += `<p>O Menor valor é o: ${Math.min(...valores)}</p>`
        res.innerHTML += `<p>O maior valor é o: ${Math.max(...valores)}</p>`
        res.innerHTML += `<p>Ao todo, temos ${valores.length} numeros cadastrados</p>`
        res.innerHTML += `<p>A media dos valores é: ${soma/valores.length.toFixed(2)}</p>`
    }
    
}

function limpar(){
    lista.innerHTML = ''
    res.innerHTML = ''

    //Limpar a vetor
   valores.splice(0, valores.length)
    
}




