function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  // build API url
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "93dt143fob6ba6cd0da98437ffd064b8";
  let apiContext =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a four line poem in basic html and separate each line with a <br>. make sure to follow the user instructions. Sign the poem with SheCodes AI in Italic";
  let apiPrompt = `User instructions: Generate an English poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating a poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  // make a call to the API
  axios.get(apiUrl).then(displayPoem);
  //display generate poem
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
