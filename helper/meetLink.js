const letters = "abcdefghijklmnopqrstuvwxyz";
const generateRandomLink = () => {
  let link = "";
  for (let i = 0; i < 3; i++) {
    link += letters[Math.floor(Math.random() * letters.length)];
  }
  link += "-";
  for (let i = 0; i < 3; i++) {
    link += letters[Math.floor(Math.random() * letters.length)];
  }
  link += "-";
  for (let i = 0; i < 3; i++) {
    link += letters[Math.floor(Math.random() * letters.length)];
  }
  return link;
};

module.exports = generateRandomLink;
