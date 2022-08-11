const BUTTON_ENCRYPT = document.getElementById('button-encrypt')
const BUTTON_DECRYPT = document.getElementById('button-decrypt')

BUTTON_ENCRYPT.onclick = () => {
  const TEXT_ENTRY = document.getElementById('input-area').value
  const OUTPUT_AREA = document.getElementById('output-area')
  const OUTPUT_AREA_TEXT = document.getElementById('output-area-text')
  const HIDE_AREA = document.getElementById('hide-area')
  const HIDE_AREA2 = document.getElementById('hide-area2')
  const ARRAY_LIST_TEXT = TEXT_ENTRY.split('')
  const ARRAY_LIST_ENCRYPT = []

  for (let i = 0; i < ARRAY_LIST_TEXT.length; i++) {
    if (ARRAY_LIST_TEXT[i] === 'a') {
      ARRAY_LIST_ENCRYPT.push('ai')
    } else if (ARRAY_LIST_TEXT[i] === 'e') {
      ARRAY_LIST_ENCRYPT.push('enter')
    } else if (ARRAY_LIST_TEXT[i] === 'i') {
      ARRAY_LIST_ENCRYPT.push('imes')
    } else if (ARRAY_LIST_TEXT[i] === 'o') {
      ARRAY_LIST_ENCRYPT.push('ober')
    } else if (ARRAY_LIST_TEXT[i] === 'u') {
      ARRAY_LIST_ENCRYPT.push('ufat')
    } else {
      ARRAY_LIST_ENCRYPT.push(ARRAY_LIST_TEXT[i])
    }
  }

  HIDE_AREA.style.display = 'none'
  HIDE_AREA2.style.display = 'none'
  OUTPUT_AREA.style.justifyContent = 'start'

  OUTPUT_AREA_TEXT.innerHTML = ARRAY_LIST_ENCRYPT.join('')
}

BUTTON_DECRYPT.onclick = () => {
  const TEXT_ENTRY = document.getElementById('input-area').value
  const OUTPUT_AREA = document.getElementById('output-area')
  const OUTPUT_AREA_TEXT = document.getElementById('output-area-text')
  const HIDE_AREA = document.getElementById('hide-area')
  const HIDE_AREA2 = document.getElementById('hide-area2')

  const DECRYPT = TEXT_ENTRY.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u')

  HIDE_AREA.style.display = 'none'
  HIDE_AREA2.style.display = 'none'
  OUTPUT_AREA.style.justifyContent = 'start'

  OUTPUT_AREA_TEXT.innerHTML = DECRYPT
}
