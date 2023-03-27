function insert(valor) {
    let resultado = document.getElementById('resultado');
    console.log(resultado)
    resultado.innerHTML += valor;
}

function clean() {
    resultado.innerHTML = '';
}

function backspace() {
    let resultado = document.getElementById('resultado');
    if (resultado.textContent) {
        let result = document.getElementById('resultado').innerHTML
        resultado.innerHTML = result.substring(0, result.length - 1);
    }
}

function confirmar() {
    if (resultado.textContent != 'Erro') {
        document.getElementById("resultado").innerHTML = eval(resultado.innerHTML)
        cor();
    }
}


function cor() {
    let css = document.getElementById('stylesheetdefault');
    let botao = document.getElementsByClassName('btn pescial');
    if (document.getElementById('resultado').textContent == 24) {
        css.href = 'cal24.css';
        console.log(css)
        const iElement = document.querySelector('i');
        const imgElement = document.createElement('24.png');
        const srcValue = iElement.getAttribute('src');
        imgElement.setAttribute('src', srcValue);
        iElement.replaceWith(imgElement);
    };



    if (document.getElementById('resultado').textContent == 22) {
        css.href = 'cal22.css';
        console.log(css)
    };
    if (document.getElementById('resultado').textContent == 0) {
        css.href = 'cal0.css';
        console.log(css)
    };
    if (document.getElementById('resultado').textContent == 69) {
        css.href = 'cal69.css';
        console.log(css)
    };
    if (document.getElementById('resultado').textContent == 666) {
        css.href = 'cal666.css';
        console.log(css)
    };
    
};
