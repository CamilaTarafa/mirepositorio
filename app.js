// Función asincrónica para simular una solicitud de pedido
async function placeOrder() {
    // Devuelve una nueva Promesa
    return new Promise((resolve) => {
        // Simula un retraso en la solicitud usando setTimeout
        setTimeout(() => {
            // Cuando el retraso termina, resuelve la Promesa con el mensaje de éxito
            resolve("Pedido realizado con éxito!"); // Mensaje de éxito
        }, 1000); // Retraso de 1 segundo
    });
}
async function orderstatus(){
    return new Promise((resolve)=> {
        setTimeout(()=>{

            resolve("Pedido en preparación, aguarde un momento.");
        }, 3000);
    });


}

// Función asincrónica para manejar el clic en el botón de realizar pedido
async function handleOrderButtonClick() {
    // Crea un nuevo elemento <div> para mostrar el estado del pedido
    const statusElement = document.createElement('div');
    // Añade una clase CSS al nuevo elemento para aplicar estilos
    statusElement.classList.add('order-status'); // Añade una clase para estilo
    // Establece el texto inicial del elemento <div> para indicar que el pedido está en proceso
    statusElement.textContent = "Pedido en proceso...";
    // Agrega el nuevo elemento <div> al contenedor con id 'order-status-container' en el DOM
    document.getElementById('order-status-container').appendChild(statusElement); // Agrega el mensaje al contenedor


 async function handleOrderStatusButtonClick(){
    const statusElement = document.createElement('div');

    statusElement.classList.add('order-estado');
    statusElement.textContent = "Pedido en preparacion...";

    document.getElementById('order-estado-container').appendChild(statusElement);




 }   
    try {
        // Llama a la función placeOrder y espera a que se complete
        const response = await placeOrder(); // Realiza el pedido
        // Una vez completado el pedido, actualiza el texto del elemento <div> con el mensaje de éxito
        statusElement.textContent = response;
        // Añade una clase CSS para indicar que el pedido fue exitoso
        statusElement.classList.add('order-success'); // Añade clase de éxito


        const responsestatus = await orderstatus();
        statusElement.textContent = responsestatus;
        statusElement.classList.add('order-estado');

    } catch (error) {
        // Si ocurre un error al realizar el pedido, captura el error
        statusElement.textContent = `Error: ${error.message}`;
        // Añade una clase CSS para indicar que ocurrió un error
        statusElement.classList.add('order-error'); 
        // Añade clase de error

      


    }
}

// Evento que se dispara cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Agrega un manejador de eventos al botón con id 'place-order-btn'
    // Cuando se haga clic en el botón, se llamará a la función handleOrderButtonClick
    document.getElementById('place-order-btn').addEventListener('click', handleOrderButtonClick);
});