function generarPDF() {
    const elemento = document.getElementById('pdf');
    const cuerpo = document.body;
    cuerpo.classList.add('pdf-full');

    const fecha = new Date().toLocaleDateString().replace(/\//g, '-');
    const nombreArchivo = 'Informe_Stock_' + fecha + '.pdf';

    const opciones = {
        margin: [10, 12, 10, 12], // margen arriba, derecha, abajo, izquierda
        filename: nombreArchivo,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 1.4,
            useCORS: true,
            letterRendering: true,
            width: 950, // 🔹 más estrecho para dejar margen seguro en Carta
            scrollX: 0,
            scrollY: 0
        },
        jsPDF: {
            unit: 'mm',
            format: 'letter', // 🔹 siempre Carta
            orientation: 'landscape'
        }
    };

    html2pdf()
        .set(opciones)
        .from(elemento)
        .save()
        .then(() => {
            cuerpo.classList.remove('pdf-full');
        });
}
