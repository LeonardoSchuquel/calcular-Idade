function verificar(){
    var agora = new Date()
    var ano = agora.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert("[ERRO] Verifique os dados e tente novamente")
    }else{
        var fsex = document.getElementsByName('txtsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'

            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'homem_crianca.png')
            }else if(idade < 21){
                img.setAttribute('src', 'homem_jovem.png')
            }else if(idade < 55){
                img.setAttribute('src', 'homem_adulto.png')
            }else if(idade < 100){
                img.setAttribute('src', 'homem_velho.png')
            }else{
                img.setAttribute('src', 'caveira.png')
            }
        }else{
            genero = 'Mulher'

            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'mulher_crianca.png')
            }else if(idade < 21){
                img.setAttribute('src', 'mulher_jovem.png')
            }else if(idade < 55){
                img.setAttribute('src', 'mulher_adulto.png')
            }else if(idade < 100){
                img.setAttribute('src', 'mulher_velha.png')
            }else{
                img.setAttribute('src', 'caveira.png')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}