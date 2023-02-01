const routes = {
  home: {
    root: "/",
    ping: "/",
    endpoints: "/endpoints",
  },
  films: {
    root: "/films",
    list: "/",
  },
  film: {
    root: "/film",
    film: "/:filmId",
  },
};

export default routes;
