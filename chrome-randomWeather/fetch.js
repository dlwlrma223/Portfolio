// async function fetchData() {
//   const res = await fetch(
//     "https://rapidapi.com/zh/myapos--FqlEzvrlv/xapi/dog-breeds2/"
//   );
//   const record = await res.json();
//   document.getElementById("origin").innerHTML = record.origin;
//   document.getElementById("photo").innerHTML = record.data[0].areaName;
//   document.getElementById("breed").innerHTML = record.data[0].latestBy;
// }
// fetchData();

// const url = "https://dog-breeds2.p.rapidapi.com/dog_breeds";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "aaa17ce0bfmsh216492401803d60p13f1d5jsnbe4562b698cb",
//     "X-RapidAPI-Host": "dog-breeds2.p.rapidapi.com",
//   },
// };
// .then((res) => res.json())
// .then((data) => console.log(data))
// .catch((err) => console.log(err));

// fetch(url, options)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const async1 = async () => {
  try {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "aaa17ce0bfmsh216492401803d60p13f1d5jsnbe4562b698cb",
        "X-RapidAPI-Host": "dog-breeds2.p.rapidapi.com",
      },
    };
    const res = await fetch(
      "https://dog-breeds2.p.rapidapi.com/dog_breeds",
      options
    );

    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
async1();

//episodeTitle /numSeasonsLabel episodeCount/ contextualSynopsis
