export function Home() {
  //   const content = document.getElementById("content");

  const headline = document.createElement("h1");
  headline.textContent = "WELCOME to my Restaurant";
  headline.classList.add("headline");
  return headline;
}
