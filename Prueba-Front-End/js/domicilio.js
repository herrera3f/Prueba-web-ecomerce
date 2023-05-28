document.getElementById("delivery-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario
  
    var address = document.getElementById("address").value;
    var distance = parseFloat(document.getElementById("distance").value);
    
    // Realiza el cálculo del precio estimado (aquí puedes implementar tu lógica específica)
    var estimatedPrice = distance * 2; // Ejemplo: $2 por kilómetro
    
    document.getElementById("result").innerHTML = "Precio estimado de entrega a domicilio:<br>$" + estimatedPrice.toFixed(2);
  });