let valoresrgb = [0, 0, 0]

const barraRoja = document.getElementById("barraRoja")
const barraVerde = document.getElementById("barraVerde")
const barraAzul = document.getElementById("barraAzul")

const salidaRojo = document.getElementById("salidaRojo")
const salidaVerde = document.getElementById("salidaVerde")
const salidaAzul = document.getElementById("salidaAzul")

// Texto
const TEXTOCOLOR = document.getElementById("TEXTOCOLOR")

const actualizar = () => {
  TEXTOCOLOR.textContent =
    "RGB(" + valoresrgb[0] + "," + valoresrgb[1] + "," + valoresrgb[2] + ")"
  document.body.style.backgroundColor =
    "rgb(" + valoresrgb[0] + "," + valoresrgb[1] + "," + valoresrgb[2] + ")"

  salidaRojo.textContent = barraRoja.value
  salidaVerde.textContent = barraVerde.value
  salidaAzul.textContent = barraAzul.value
}

/*Barra roja*/
salidaRojo.textContent = barraRoja.value
barraRoja.addEventListener("input", (event) => {
  valoresrgb[0] = parseInt(barraRoja.value)
  actualizar()
})

/*Barra verde*/
salidaVerde.textContent = barraVerde.value
barraVerde.addEventListener("input", (event) => {
  valoresrgb[1] = parseInt(barraVerde.value)
  actualizar()
})

/*Barra azul*/
salidaAzul.textContent = barraAzul.value
barraAzul.addEventListener("input", (event) => {
  salidaAzul.textContent = event.target.value
  valoresrgb[2] = parseInt(barraAzul.value)
  actualizar()
})

  document.getElementById('boton1').addEventListener("click", function (){
  document.getElementById('GENERADOR').toggleAttribute('hidden')
  document.getElementById('SELECTOR').toggleAttribute('hidden')
})

document.getElementById("boton2").addEventListener("click", function () {
  document.body.style.backgroundColor = "rgb(0,0,0)"
  barraRoja.value = 0
  valoresrgb[0] = parseInt(barraRoja.value)
  barraVerde.value = 0
  valoresrgb[1] = parseInt(barraVerde.value)
  barraAzul.value = 0
  valoresrgb[2] = parseInt(barraAzul.value)
  actualizar()
})


/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
/*------------------------Generador-------------------------------*/
/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/


const TituloGenerador = document.getElementById('TituloGenerador')

document.getElementById('boton3').addEventListener('click', function(){
  document.getElementById('GENERADOR').toggleAttribute('hidden')
  document.getElementById('SELECTOR').toggleAttribute('hidden')
})

document.getElementById('boton4').addEventListener('click', function(){
  let NuevoColor = generarcolor()
  document.body.style.backgroundColor = NuevoColor
  TituloGenerador.textContent = NuevoColor
})

document.getElementById('boton5').addEventListener('click', function(){
  document.body.style.backgroundColor = '#000000'
  TituloGenerador.textContent = '#000000'
})


const generarcolor = () => {
  let Color = '#'
  valoresHex = '1234567890ABCDEF'
  for(let i = 0 ; i < 6 ; i++){
    let indice = Math.floor(Math.random() * 16)
    Color += valoresHex[indice]
  }
  return Color
}