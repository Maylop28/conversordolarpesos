const buttonConvertir = document.querySelector(".button");
const inputValueDolares = document.querySelector("#dolares");
const precioDolar = document.querySelector(".precio-dolar");
let pDolar;
let value;
inputValueDolares.addEventListener("input", (e) => {
  value = e.target.value;
});
buttonConvertir.addEventListener("click",(e)=>{
    convertir()
})
const obtenerPrecioDolar = () => {
  fetch(
    "https://v6.exchangerate-api.com/v6/a70de4720f4fdf678937118b/latest/USD"
  )
    .then((response) => response.json())
    .then((data) => {
         pDolar =  data.conversion_rates.ARS;
        precioDolar.innerHTML = `El valor de dolar es: $${pDolar}`;
    });
};
obtenerPrecioDolar();

function convertir() {
    
    let pesos = value * pDolar;
    document.getElementById("pesos").value = pesos.toFixed(2);
  }
/*  //function para obtener el precio del dolar desde la API
    function obtenerPrecioDolar() {
        fetch("https://v6.exchangerate-api.com/v6/a70de4720f4fdf678937118b/latest/USD")
        .then(response => response.json())
        .then(data => {
            const precioDolar = data.rates.MXN; //Cambiar 'MXN' por la moneda deseada

            //Actualizar el precio del dolar en el HTML

            const precioDolarElemento = document.getElementByld('precio-dolar');
            precioDolarElemento.innerText = precioDolar.ToFixed(2);//Mostrar el precio con dos decimales

            // Realizar la cnversion cuando se ingresa un monto
            const montolnput = document.getElementByld('monto');
            const conversionElemento = document.getElementByld('conversion');

            montolnput.addEventListener('input', () => {
                const monto = parseFloat(montoInput.value);
                const conversion = monto *precioDolar;

                conversionElemento.innerText = conversion.toFixed(2);// Mostrar la conversion con dos decimales
            });
        })
        .catch(error => console.log(error));
            }
            //Llaman a la funcion para obtener el precio del dolar al cargar la pagina ObtenerPrecioDolar(); */
