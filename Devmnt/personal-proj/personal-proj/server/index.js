// Game Endpoints
app.post("/api/favgame", gameController.userAddGameFav);
app.get("/api/game", gameController.allGame);
app.get("/api/favgame", gameController.favGame);
app.put("/api/game/:id", gameController.updateGame);
app.delete("/api/favgame/:id", gameController.favGameDelete);

// Movie Endpoints
app.post("/api/favmovie", movieController.userAddMovieFav);
app.get("/api/movie", movieController.allMovie);
app.get("/api/favmovie", movieController.favMovie);
app.put("/api/movie/:id", movieController.updateMovie);
app.delete("/api/favmovie/:id", movieController.favMovieDelete);

// Anime Endpoints
app.post("/api/favanime", animeController.userAddAnimeFav);
app.get("/api/anime", animeController.allAnime);
app.get("/api/favanime", animeController.favAnime);
app.put("/api/anime/:id", animeController.updateAnime);
app.delete("/api/favanime/:id", animeController.favAnimeDelete);

// TV Endpoints
app.post("/api/favtv", tvController.userAddTvFav);
app.get("/api/tv", tvController.allTv);
app.get("/api/favtv", tvController.favTv);
app.put("/api/tv/:id", tvController.updateTv);
app.delete("/api/favtv/:id", tvController.favTvDelete);

// admin
app.get("/api/admin", (req, res) => {
  res.status(200).send(req.session.user);
});
app.put("/api/admin/:id");
app.delete("/api/admin/:id");