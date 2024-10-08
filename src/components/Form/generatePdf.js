import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export const generatePDF = async (resumeId) => {
    const input = document.getElementById(resumeId); // Используйте переданный ID

    if (!input) {
        console.error("Element not found");
        return;
    }

    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: [210, 297] // A4 в мм
    });

    const imgWidth = pdf.internal.pageSize.getWidth(); // Ширина изображения
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("resume.pdf");
};
