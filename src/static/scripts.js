var messages = [
  "Never stop making cool things",
  "Keep it simple",
  "Do what makes you happy",
  "Yagni!",
  "Idle hands build nothing",
  "Do it!",
  "Be brave",
  "Learn something new everyday",
  "Keep trying",
  "Respect first",
  "Success requires failures",
  "Have fun",
  "Persevere",
  "Ask and you shall receive",
  "Always give a little extra",
  "Be genuine",
  "Spread your wings",
  "Empower yourself",
  "Free your mind",
  "Sleep more",
  "Teach",
  "It's OK to get cut once in a while",
  "There is no such thing as luck",
  "Think on your own",
];

function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function inspire() {
  document.getElementById('title').textContent = randomFromArray(messages);
}

document.getElementById('header').addEventListener('click', inspire);
