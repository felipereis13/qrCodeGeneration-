const qrForm = document.getElementById("qr-form")
const urlInput = document.getElementById("url-input")
const sizeSelect = document.getElementById("size-select")
const qrCodeImage = document.getElementById("qr-code-image")

qrForm.addEventListener("submit", function (event) {
  event.preventDefault()

  const url = urlInput.value
  const size = sizeSelect.value

  if (!url) {
    alert("Por favor, insira uma URL ou texto.")
    return
  }

  const apiURL = `https://quickchart.io/qr?text=
  ${encodeURIComponent(url)}&size=${size}`

  qrCodeImage.src = apiURL
  qrCodeImage.alt = `QR Code para: ${url}`
})
