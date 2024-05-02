function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('ano')
    var res = document.getElementById('res')
    if(fAno.value.length == 0 || Number(fAno.value) > ano){
        alert('[ERROR] Verifique os dados e tente novamente!')
    }else{
        var sex = document.getElementsByName('sexo')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', '/Programando em JS/PJ02/img/menino.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', '/Programando em JS/PJ02/img/moço.jpg')
            }else if(idade <= 60){
                //adulto
                img.setAttribute('src', '/Programando em JS/PJ02/img/homem.jpg')
            }else if (idade <=100){
                //idoso
                img.setAttribute('src', '/Programando em JS/PJ02/img/idoso.jpg')
            }else{
                //difunto
                img.setAttribute('src', '/Programando em JS/PJ02/img/difunto.jpg')          
                
            }
        }else if(sex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', '/Programando em JS/PJ02/img/menina.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', '/Programando em JS/PJ02/img/moça.jpg')
            }else if(idade <= 60){
                //adulto
                img.setAttribute('src', '/Programando em JS/PJ02/img/mulher.jpg')
            }else if(idade <=100){
                //idoso
                img.setAttribute('src', '/Programando em JS/PJ02/img/idosa.jpg')
            }else{
                //difunto
                img.setAttribute('src', '/Programando em JS/PJ02/img/difunto.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = 'Detectamos '+genero+ ' com '+idade+ ' anos.'
        res.appendChild(img)
    }
}