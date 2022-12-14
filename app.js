// Progression 1: create a function and fetch the api using axios
// Progression 1: create a function and fetch the api using axios
axios
  .get(
    'https://gnews.io/api/v4/top-headlines?lang=en&token=9a5ce76c6611066bde72e44171777493&topic=breaking-news'
  )
  .then((data) => {
    for(let i=0;i<10;i++){
    document.getElementById("big").innerHTML += `
    <div class="block">
    <div><b>${data.data.articles[i].title}</b></div>
    <div><img src=${data.data.articles[i].image}> </div>
    <div>${data.data.articles[i].content}</div>
    </div>
    `;
    }
    console.log(data);
  })
  .catch((err) => {
    console.log('error', err);
  });
