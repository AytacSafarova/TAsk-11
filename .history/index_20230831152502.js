fetch('https://api.chucknorris.io/jokes/random')
  .then((response) => {
   console.log(response); })
       .then((data) => {   console.log(data)  });
