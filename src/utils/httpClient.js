
const API ="https://api.themoviedb.org/3";

export function get(path) {
    return (
    fetch(API+path, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzJkNjM5NzU1YzFiOGM2NWQ0MGM2NmYyNTgzNjJkNiIsInN1YiI6IjY1ZDY3ODZkMjVjZDg1MDE4NjdlZGM1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-5lxmDSC_UyOgWEeHCm_8ZsFeJu_wK-HlqzyM_xP7OQ",
        // "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then((result) => result.json())
    )
}