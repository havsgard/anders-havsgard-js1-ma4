const createGames = "https://api.rawg.io/api/games";

fetch(createGames)
  .then(data => {
    return data.json();
  })
  .then(Response => {
    console.log(Response);
  });