const PangramFinder = function (phrase) {
  this.phrase = phrase
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}                 

PangramFinder.prototype.isPangram = function () {
  const lowerPhrase = this.phrase.toLowerCase();
  return this.alphabet.every(letter => lowerPhrase.includes(letter));
}

module.exports = PangramFinder;
