function Gets() {
  const citi = prompt("Ваш город?");
  const citiName = document.querySelector(".citiname");
  const time = document.querySelector(".time");
  const deg = document.querySelector(".deg");
  const im = document.querySelector(".im");
  const api = `http://api.weatherstack.com/current?access_key=c331d58a6741e47e32474ab6b6d53e45&query=${citi}`;
  new Promise((resolve, reject) => {
    fetch(api)
      .then((resl) => resl.json())
      .then((result) => {
        citiName.innerHTML = result.location.name;
        time.innerHTML = result.current.observation_time;
        deg.innerHTML = result.current.temperature;
        im.src = result.current.weather_icons;
      });
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}
const micro = document.querySelector(".micro");
const weather = document.querySelector(".weather");
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const speech = new window.SpeechRecognition();
speech.interimResults = false;
function openWrap() {
  weather.style.transition = ".2s";
  weather.style.opacity = 1;
  weather.style.height = "250px";
  weather.style.transition = ".5s";
}
speech.addEventListener("result", (e) => {
  console.log(e.results[0][0].transcript);
  let word = e.results[0][0].transcript;
  if (word == "погода" && "Погода") {
    //Вот это логику с проверками команд нужно вынести отдельно
    openWrap();
    //Вот это логику с проверками команд нужно вынести отдельно
    Gets(); //Как тут
  } else {
    return null;
  }
});
speech.addEventListener("end", () => {
  speech.abort();
  micro.classList.remove("activemicro");
});
micro.addEventListener("dblclick", () => {
  speech.abort();
});
micro.addEventListener("click", () => {
  speech.start();
  micro.classList.add("activemicro");
  setTimeout(() => {
    micro.style.transition = "3s";
    micro.style.top = "20px";

    micro.style.left = "20px";
    micro.style.transition = "2s";
  }, 1000);
});
