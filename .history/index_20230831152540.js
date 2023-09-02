fetch('https://api.chucknorris.io/jokes/random')
  .then((response) => {
   console.log(response.json()); })
    //    .then((data) => {   console.log(data)  });
