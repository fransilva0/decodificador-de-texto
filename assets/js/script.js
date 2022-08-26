const buttonEncrypt = document.getElementById('button-encrypt')
const buttonDecrypt = document.getElementById('button-decrypt')

buttonEncrypt.onclick = () => {
  const textEntry = document.getElementById('input-area').value
  const outputArea = document.getElementById('output-area')
  const outputAreaText = document.getElementById('output-area-text')
  const hideArea = document.getElementById('hide-area')
  const hideArea2 = document.getElementById('hide-area2')
  const arrayListText = textEntry.split('')
  const arrayListEncrypt = []

  for (let i = 0; i < arrayListText.length; i++) {
    if (arrayListText[i] === 'a') {
      arrayListEncrypt.push('ai')
    } else if (arrayListText[i] === 'e') {
      arrayListEncrypt.push('enter')
    } else if (arrayListText[i] === 'i') {
      arrayListEncrypt.push('imes')
    } else if (arrayListText[i] === 'o') {
      arrayListEncrypt.push('ober')
    } else if (arrayListText[i] === 'u') {
      arrayListEncrypt.push('ufat')
    } else {
      arrayListEncrypt.push(arrayListText[i])
    }
  }

  hideArea.style.display = 'none'
  hideArea2.style.display = 'none'
  outputArea.style.justifyContent = 'start'

  outputAreaText.innerHTML = arrayListEncrypt.join('')
}

buttonDecrypt.onclick = () => {
  const textEntry = document.getElementById('input-area').value
  const outputArea = document.getElementById('output-area')
  const outputAreaText = document.getElementById('output-area-text')
  const hideArea = document.getElementById('hide-area')
  const hideArea2 = document.getElementById('hide-area2')

  const decrypt = textEntry.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u')

  hideArea.style.display = 'none'
  hideArea2.style.display = 'none'
  outputArea.style.justifyContent = 'start'

  outputAreaText.innerHTML = decrypt
}
