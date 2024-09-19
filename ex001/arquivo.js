const validar = document.getElementById('bt')
const msgErro = document.querySelector('.Amenor')

validar.addEventListener('click', clicar)

function clicar(){
    let n1 = Number(document.getElementById('num1').value)
    let n2 = Number(document.getElementById('num2').value)
    let res = document.getElementById('resultado')

    if (n1 > n2) {
        msgErro.style.display = 'block'
        res.innerHTML = ''; // Limpar o resultado para evitar sobreposição
    } else{
        msgErro.style.display = 'none'; // Ocultar mensagem de erro
        res.innerHTML = '✓ - CAMPO B maior que o campo A.'
    }
}

