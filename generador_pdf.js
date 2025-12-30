function generarPDF() {
    // 1. Seleccionamos el área del PDF
    const elemento = document.getElementById('pdf'); 

    // 2. Configuramos el nombre con la fecha
    const fecha = new Date().toLocaleDateString().replace(/\//g, '-');
    const nombreArchivo = 'Informe_Stock_' + fecha + '.pdf';

    // 3. Configuración optimizada para evitar cortes
    const opciones = {
        margin: 0, // El margen lo controlamos ahora por CSS para más precisión
        filename: nombreArchivo,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2, 
            useCORS: true, 
            letterRendering: true,
            scrollX: 0,
            scrollY: 0
        },
        jsPDF: {
            unit: 'mm',
            format: 'letter',
            orientation: 'landscape' // Formato horizontal
        }
    };

    // 4. Generar y descargar
    html2pdf().set(opciones).from(elemento).save();
}
