function generarPDF() {
  const elemento = document.getElementById('pdf');
  const cuerpo = document.body;
  cuerpo.classList.add('pdf-full');

  const fecha = new Date().toLocaleDateString().replace(/\//g, '-');
  const nombreArchivo = 'Informe_Stock_' + fecha + '.pdf';

  // Capturamos el área visible en una imagen
  html2canvas(elemento, {
    scale: 2,
    useCORS: true,
    letterRendering: true
  }).then(canvas => {
    const imgData = canvas.toDataURL('image/jpeg', 1.0);
    const pdf = new jspdf.jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'letter'
    });

    const pageWidth = 279.4;  // carta horizontal en mm
    const pageHeight = 215.9;
    const margin = 10;        // margen seguro de 10 mm

    const imgWidth = pageWidth - margin * 2;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    // Insertamos la imagen centrada con márgenes reales
    const x = margin;
    const y = (pageHeight - imgHeight) / 2;

    pdf.addImage(imgData, 'JPEG', x, y, imgWidth, imgHeight);
    pdf.save(nombreArchivo);
    cuerpo.classList.remove('pdf-full');
  });
}
