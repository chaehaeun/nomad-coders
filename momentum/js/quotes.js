const quotes = [
  {
    quotes: "When you have faults, do not fear to abandon them",
    auther: "- Confucius",
  },
  {
    quotes:
      "You will face many defeats in life, but never let yourself be defeated.",
    auther: "- Maya Angelou",
  },
  {
    quotes:
      "The greatest glory in living lies not in never falling, but in rising every time we fall",
    auther: "- Nelson Mandela",
  },
  {
    quotes: "Life is either a daring adventure or nothing at all",
    auther: "- Helen Keller",
  },
  {
    quotes: "This too shall pass",
    auther: "- Et hoc transibit",
  },
  {
    quotes: "Only I can change me life, no one can do it for me",
    auther: "- Carol Burnett",
  },
  {
    quotes:
      "All you need in this life is ignorance and confidence, then success is sure",
    auther: "- Mark Twain",
  },
  {
    quotes:
      "Life is from the inside out. When you shift on the inside, life shifts on the outside",
    auther: "- Kamal Ravikant",
  },
  {
    quotes: "Turn your wounds into wisdom",
    auther: "- Oprah Gail Winfrey",
  },
  {
    quotes:
      "If you are not willing to risk the usual, you will have to settle for the ordinary",
    auther: "- Jim Rohn",
  },
];

const quote = document.querySelector(".quotes span:first-child");
const auther = document.querySelector(".quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quotes;
auther.innerText = todaysQuote.auther;
