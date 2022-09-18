console.clear();

const {
  core: { describe, it, expect, run },
  prettify
} = window.jestLite;

function longText(text, n) {
  const vowels = /[aeiou]/gi;
  let vowelsArray = text.match(vowels);

  if (vowelsArray) {
    vowelsArray = vowelsArray.map((v) => v.repeat(n));
    const numberOfVowels = vowelsArray.length;

    const restOfArray = text.split(vowels);
    const restSize = restOfArray.length;

    const bigArray = numberOfVowels > restSize ? vowelsArray : restOfArray;
    const smallArray = numberOfVowels > restSize ? restOfArray : vowelsArray;

    let newText = "";

    for (let i = 0; i < bigArray.length; i++) {
      newText += bigArray[i];

      if (i < smallArray.length) {
        newText += smallArray[i];
      }
    }

    return newText;
  }

  return text;
}

// These are the tests you are trying to make pass, if you choose to use the test suite.
describe("longText", () => {
  it("extends vowels", () => {
    expect(longText("Hello, world!", 3)).toBe("Heeellooo, wooorld!");
    expect(longText("CodePen is cool!", 4)).toBe(
      "CoooodeeeePeeeen iiiis cooooooool!"
    );
    expect(longText("Challenges", 10)).toBe(
      "Chaaaaaaaaaalleeeeeeeeeengeeeeeeeeees"
    );
  });
});

prettify.toHTML(run(), document.body);

function showUserNewText() {
  const text = document.querySelectorAll("input")[0].value;
  const number = document.querySelectorAll("input")[1].value;
  const placeToInsert = document.querySelector("#insert-text");

  placeToInsert.innerHTML = ">> ";
  placeToInsert.innerHTML += text ? longText(text, parseInt(number)) : "";
}

const input = document.querySelectorAll("input");
input[0].addEventListener("input", showUserNewText);
input[1].addEventListener("change", showUserNewText);