const content = document.getElementById("content");

const cityInput = document.getElementById("city");
const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const url = `https://api.weatherapi.com/v1/current.json?key=681633624ad34b92811105109232109&q=${cityInput.value}`;
  displayData(url);
});

async function getWeatherData(url) {
  try {
    const data = await fetch(url, { mode: "cors" });
    const json = await data.json();
    return json;
  } catch (error) {
    throw new Error("error fetch failed");
  }
}

async function displayData(url) {
  try {
    const data = await getWeatherData(url);
    console.log(data);
    // You can display the weather data on the page here if needed
  } catch (error) {
    console.error(error.message);
    // Handle the error gracefully, e.g., display an error message to the user
  }
}
