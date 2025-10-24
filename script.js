document.addEventListener("DOMContentLoaded", () => {
  const nombre = "Ricardo Saucedo";
  const nombreElem = document.getElementById("nombre");
  let i = 0;

  function escribir() {
    if (i < nombre.length) {
      nombreElem.textContent += nombre.charAt(i);
      i++;
      setTimeout(escribir, 100);
    }
  }

  escribir();
});