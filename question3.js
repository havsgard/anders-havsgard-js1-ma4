const createGameDetails = "https://api.rawg.io/api/games/4200";

fetch(createGameDetails)
  .then(data => {
    return data.json();
  })
  .then(Response => {
    console.log(Response);
  });