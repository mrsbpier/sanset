const styles = {
  bold: { offsetUpper: 0x1D400, offsetLower: 0x1D41A, offsetDigits: 0x1D7CE },
  italic: { offsetUpper: 0x1D434, offsetLower: 0x1D44E },
  monospace: { offsetUpper: 0x1D670, offsetLower: 0x1D68A, offsetDigits: 0x1D7F6 }
};

function styleText(styleName) {
  const input = document.getElementById('inputText').value;
  const style = styles[styleName];
  let output = '';

  for (let char of input) {
    const code = char.codePointAt(0);

    if (code >= 65 && code <= 90 && style.offsetUpper) {
      output += String.fromCodePoint(style.offsetUpper + (code - 65));
    } else if (code >= 97 && code <= 122 && style.offsetLower) {
      output += String.fromCodePoint(style.offsetLower + (code - 97));
    } else if (code >= 48 && code <= 57 && style.offsetDigits) {
      output += String.fromCodePoint(style.offsetDigits + (code - 48));
    } else {
      output += char;
    }
  }

  document.getElementById('outputText').innerText = output;
}

function copyText() {
  const text = document.getElementById('outputText').innerText;
  if (text) {
    navigator.clipboard.writeText(text).then(() => alert('Copiato!'));
  }
}
