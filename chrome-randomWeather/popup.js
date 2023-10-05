const button = document.querySelector("#button");
const area = document.querySelector("#area");
const value = document.querySelector("#value");
const now = document.querySelector("#forecastDesc");
const warning = document.querySelector("#message");

const fetchTempData = async () => {
  try {
    const res = await fetch(
      "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc"
    );
    const data = await res.json();
    return {
      temperatureData: data.temperature.data,
      warningData: data.warningMessage,
    };
  } catch (err) {
    console.log(err);
  }
};

const fetchNowData = async () => {
  try {
    const res1 = await fetch(
      "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=tc"
    );
    const data1 = await res1.json();
    return data1;
  } catch (err) {
    console.log(err);
  }
};

const selectarea = async () => {
  try {
    const Data = await fetchTempData();
    let lengthofarea = Data.temperatureData;
    let randomNum = Math.floor(Math.random() * lengthofarea.length);
    if ("click") {
      area.textContent = lengthofarea[randomNum].place;
      value.textContent = lengthofarea[randomNum].value;

      let warningdata = Data.warningData;
      warning.textContent = warningdata;

      let nowdata = await fetchNowData();
      now.textContent = nowdata.forecastDesc;
    }
  } catch (err) {
    console.log(err);
  }
};

button.addEventListener("click", () => {
  selectarea();
});

// const selectarea = (titles) => {
//   for (i = 0; i < data.titles.length; i++) {
//     area.textContent = data.temperature.data[i].place;
//     value.textContent = data.temperature.data[i].value;
//     now.textContent = data1.forecastDesc;
//     warning.textContent = data.warningMessage;
//     return;
//   }
// };
