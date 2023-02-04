class Parser {
  date(date: string): string {
    try {
      return date.split("-")[0];
    } catch {
      return "N/A";
    }
  }

  poster(poster: string): string {
    try {
      return `https://image.tmdb.org/t/p/original/${
        poster.split("/")[1].split(".")[0]
      }.jpg`;
    } catch {
      return "N/A";
    }
  }

  directors(directors: string): string[] {
    try {
      return directors.split(", ").filter((director) => director.length > 0);
    } catch {
      return [];
    }
  }

  actors(actors: string): string[] {
    try {
      return actors.split(", ").filter((actor) => actor.length > 0);
    } catch {
      return [];
    }
  }
}

export default new Parser();
