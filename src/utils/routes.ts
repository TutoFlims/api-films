const routes = {
  home: {
    root: "/",
    ping: "/",
    endpoints: "/endpoints",
    updateRepositories: "/update-repositories",
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
