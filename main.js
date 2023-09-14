let htmlContent = document.getElementById("list");
let btnDownloadHtml = document.getElementById("btnDownloadHtml");
let btnDownloadWithCss = document.getElementById("btnDownloadWithCss");

let blob = new Blob([htmlContent], { type: "text/html" });
let url = window.URL.createObjectURL(blob);
const CSS = `
.title {
  color: red;
}
`


function download() {
  btnDownloadHtml.href = url;

  btnDownloadHtml.download = "meu_arquivo.html";

  const newWindow = window.open('about:blank')

  newWindow.document.write(htmlContent.innerHTML)
  newWindow.print()
  newWindow.close()

  window.URL.revokeObjectURL(url);
}

const generate = async (data, title) => {
  await data
  return `
  <html>
    <head>
      <title>${title}</title>
      <meta charset="utf-8" />
    </head>
    <body>
      <style>
      ${CSS}
      </style>
      ${(data?.innerHTML ?? 'Não foi possivel gerar o relatório!')}
      </body>
  </html>
`
}

const downloadWithCss = () => {
  const newWindow = window.open('about:blank')
  generate(htmlContent, "Teste")
    .then(response => {
      newWindow.document.write(response)
      newWindow.print()
      newWindow.close()
    })
    .catch(error => alert(`Erro: ${error}`))

}

btnDownloadHtml.addEventListener("click", download)
btnDownloadWithCss.addEventListener("click", downloadWithCss)