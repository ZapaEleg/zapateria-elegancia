function sendMessage() {
    const numero = "525636933820";
    const mensaje = "Hola, quisiera saber más sobre un par que vi en su catálogo.";
    
    // Enlace de WhatsApp con el mensaje predefinido
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensaje)}`;
    
    window.open(url, "_blank");
}
