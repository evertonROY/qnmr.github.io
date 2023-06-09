function gerarposicao(min, max){
    return (Math.random()*(max-min) + min) + "%"
}

function sim(){
    window.location.href = "https://img.elo7.com.br/product/main/4208393/caneca-flork-namorados-parabens-por-namorar-comigo-caneca-de-ceramica.jpg"
}

function desvia(t){
    var btn = t
    btn.style.position = 'absolute'
    btn.style.bottom = gerarposicao(10, 90)
    btn.style.left = gerarposicao(10, 90)
}

