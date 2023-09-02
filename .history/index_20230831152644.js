fetch('https://api.chucknorris.io/jokes/random')
  .then((response) => {
      return response; })
       .then((data) => {   console.log(data)  });
