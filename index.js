document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("Mon CV");

  button.addEventListener("click", () => {
    const button = document.getElementById("Mon CV"); // 🔹 Cible uniquement le CV

    const options = {
      margin: [0, 0, 0, 0], // marges du PDF
      filename: "CV_Cedric_MARLOT.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2, // meilleure qualité
        useCORS: true, // pour les images locales
        scrollX: 0,
        scrollY: 0,
        windowWidth: document.documentElement.offsetWidth,
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },
      pagebreak: { mode: ["avoid-all", "css", "legacy"] }, // évite les coupures
    };

    html2pdf().set(options).from(button).save();
  });
});