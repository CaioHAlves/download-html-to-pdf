// HTML que você deseja baixar
var htmlContent = document.getElementById("list");

// Crie um Blob (Binary Large Object) com o conteúdo HTML
var blob = new Blob([htmlContent], { type: "text/html" });

// Crie uma URL para o Blob
var url = window.URL.createObjectURL(blob);

// Configure o link para apontar para a URL do Blob
var downloadLink = document.getElementById("downloadLink");

function download() {
  downloadLink.href = url;

  // Defina o nome do arquivo para o download
  downloadLink.download = "meu_arquivo.html";

  // Simule um clique no link para iniciar o download
  // downloadLink.click();
  const newWindow = window.open('about:blank')

  newWindow.document.write(htmlContent.innerHTML)
  newWindow.print()
  newWindow.close()

  // Libere a URL do Blob após o download
  window.URL.revokeObjectURL(url);
}

downloadLink.addEventListener("click", download)