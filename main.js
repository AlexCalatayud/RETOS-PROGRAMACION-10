const mostrarResultados = (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const resultados = Object.fromEntries(data.entries());
  resultados.complejo = data.getAll("complejo");
  console.table(resultados);
};

function main() {
  const formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", mostrarResultados);
}

main();
