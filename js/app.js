const inText = document.getElementById('inText');
const outText = document.getElementById('outText');
const btEncrypt = document.getElementById('btEncrypt');
const btDescrypt = document.getElementById('btDescrypt');
const btCopy = document.getElementById('btCopy');

const encrypt = function (str) {
  let matriz = [
    ['e', '01100101'],
    ['i', '01101001'],
    ['a', '01100001'],
    ['o', '01101111'],
    ['u', '01110101'],
  ];
  str = str.toLowerCase();

  for (let i = 0; i < matriz.length; i++) {
    if (str.includes(matriz[i][0])) {
      str = str.replaceAll(matriz[i][0], matriz[i][1]);
    }
  }

  return str;
};

btEncrypt.addEventListener('click', function (event) {
  event.preventDefault();
  const encryptText = encrypt(inText.value);
  outText.value = encryptText;
  inText.value = '';
});

const descrypt = function (str) {
  let matriz = [
    ['e', '01100101'],
    ['i', '01101001'],
    ['a', '01100001'],
    ['o', '01101111'],
    ['u', '01110101'],
  ];
  str = str.toLowerCase();

  for (let i = 0; i < matriz.length; i++) {
    if (str.includes(matriz[i][1])) {
      str = str.replaceAll(matriz[i][1], matriz[i][0]);
    }
  }

  return str;
};

btDescrypt.addEventListener('click', function (event) {
  event.preventDefault();
  const descryptText = descrypt(inText.value);
  outText.value = descryptText;
  inText.value = '';
});

const copyText = function () {
  navigator.clipboard.writeText(outText.value).then(() => {
    alert('Copied');
  });
};

btCopy.addEventListener('click', copyText);
