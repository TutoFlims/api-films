import type { Request, Response } from "express";

class HomeControllers {
  getPing(req: Request, res: Response) {
    return res.status(200).json({
      status: 200,
      data: `Pong 🏓" \n For more information '/endpoints'`,
    });
  }

  getEndpoints(req: Request, res: Response) {
    return res.status(200).json({
      status: 200,
      data: [
        {
          path: "/",
          method: "GET",
          description:
            "Checks the status of the API and returns a response to indicate that it is active.",
        },
        {
          path: "/endpoints",
          method: "GET",
          description:
            "Returns a list of available API endpoints and their descriptions.",
        },
        {
          path: "/films",
          method: "GET",
          description: "Returns a list of all available film records.",
        },
        {
          path: "/films/:id",
          method: "GET",
          description:
            "Returns the details of the specified film record, using the film Id as a parameter to identify the desired film.",
        },
      ],
    });
  }
}

export default HomeControllers;
