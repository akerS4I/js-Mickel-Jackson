years = +prompt("Cколько лет ?") * 12;

function getRandomIntInclusive(min = 10, max = 50) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.round((Math.random() * (max - min + 1)) + min ) / 10) * years; //Максимум и минимум включаются
}

alert(getRandomIntInclusive());