function calculate() {

    $.ajax({
        url: 'https://api-dolar-argentina.herokuapp.com/api/dolarblue',
        type: 'GET',
        dataType: 'json',
        success: function(data){
        console.log(data);
        var blue = data.blue.value_avg;
        var precio = blue * 450;
        $('#pesos').html(precio);
        $('#blue').html(blue);
      
        }
    });
    
    }

    //function para obtener el precio del dolar desde la API
    function obtenerPrecioDolar() {
        fetch('https://api.exchangerate-api.com/v4/Iatest/USD')
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
            //Llaman a la funcion para obtener el precio del dolar al cargar la pagina ObtenerPrecioDolar();