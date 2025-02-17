function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  // build API url
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "93dt143fob6ba6cd0da98437ffd064b8";
  let context =
    "You are a poem expert and you love to write short poems, your mission is to generate a four line poem. Each verse should be in a new line. Make sure to follow user instructions";
  let prompt = `User instructions are: Generate a poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating"> Generating a poem about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
