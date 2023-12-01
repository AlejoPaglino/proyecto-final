//Buscar elemento h1 y guardar en variable
let titulo = document.querySelectorAll('h1')
//modificar texto del elemento h1



// el punto hace referencia a una clase
let imagen = document.querySelector('img')

// el numeral hace referencia a un identificador
let botonAzul = document.querySelector('#cambiarImagen')
let botonAmarillo = document.querySelector('#color de texto')
// 
let variablecualquiera = document.querySelector('#pepe')
let explicacionDeMate = document.querySelector('#explicacion')
variablecualquiera.textContent = 'Esto es un texto'
explicacionDeMate.textContent = 'Esto es un mate'
console.log(titulo)

botonAzul.onclick = function(){
        imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYN4D6GzbAJQNdgChHs_hFYdMunj-VJZ-QKw&usqp=CAU"
        explicacionDeMate.style.color = 'blue'
        explicacionDeMate.textContent = 'El mate calabaza: La palabra deriva del quechua “mati”, que designa a la calabaza que los indígenas utilizaban para tomar la infusión de “yerba mate”. Si eres principiante usando mate de calabaza debes saber que, para evitar que los primeros sorbos sean muy amargos, es imprescindible curarlo.'
        titulo[0].style.color = 'blue'
        titulo[1].style.color = 'blue'
    }
