const styles = {
  bold: { offset: 0x1D400 },
  italic: { offset: 0x1D434 },
  boldItalic: { offset: 0x1D468 },
  monospace: { offset: 0x1D670 },
  fraktur: { offset: 0x1D504 }
};

function transformText(styleName) {
  const text = document.getElementById('inputText').value;
  const output = [...text].map(char => mapChar(char, styleName)).join('');
  document.getElementById('outputText').innerText = output;
}

function mapChar(char, styleName) {
  const code = char.codePointAt(0);
  const style = styles[styleName];

  // Uppercase A-Z
  if (code >= 65 && code <= 90) return String.fromCodePoint(style.offset + (code - 65));
  // Lowercase a-z
  if (code >= 97 && code <= 122) return String.fromCodePoint(style.offset + (code - 97) + 26);
  // Digits 0-9 (only monospace and bold have these)
  if (code >= 48 && code <= 57 && styleName === 'monospace') return String.fromCodePoint(0x1D7F6 + (code - 48));
  if (code >= 48 && code <= 57 && styleName === 'bold') return String.fromCodePoint(0x1D7CE + (code - 48));
  
  return char;
}

function copyResult() {
  const text = document.getElementById('outputText').innerText;
  if (text) {
    navigator.clipboard.writeText(text).then(() => alert('Testo copiato!'));
  }
}
