function generarPDF() {
    // 1. Seleccionamos la parte de la página que queremos convertir en PDF
    const elemento = document.getElementById('pdf'); 

    // 2. Configuramos el nombre del archivo con la fecha de hoy
    const fecha = new Date().toLocaleDateString().replace(/\//g, '-');
    const nombreArchivo = 'Informe_Stock_' + fecha + '.pdf';

    // 3. AQUÍ CONTROLAS LOS MÁRGENES Y EL TAMAÑO
    const opciones = {
        margin:       10,        // Margen de 10mm (1 centímetro) alrededor de toda la hoja
        filename:     nombreArchivo,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, letterRendering: true },
        jsPDF:        { 
            unit: 'mm', 
            format: 'letter',    // Tamaño Carta
            orientation: 'landscape' // Horizontal
        }
    };

    // 4. Instrucción para crear y descargar el PDF
    html2pdf().set(opciones).from(elemento).save();
}
