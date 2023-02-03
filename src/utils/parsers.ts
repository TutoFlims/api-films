export const parseDate = (date: string): string => {
  try {
    return date.split("-")[0];
  } catch {
    return "N/A";
  }
};

export const parsePoster = (poster: string): string => {
  try {
    return `https://image.tmdb.org/t/p/original/${
      poster.split("/")[1].split(".")[0]
    }.jpg`;
  } catch {
    return "N/A";
  }
};
