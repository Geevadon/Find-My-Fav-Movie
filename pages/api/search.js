import { API_URL } from "../../utils/config";

export default function handler(req, res) {
   if (req.method !== "GET") {
      return res
         .status(400)
         .json({ message: "Only GET requests are allowed." });
   }

   const { page, keyword } = req.query;

   fetch(
      `${API_URL}/search/movie?api_key=${process.env.TMDB_API_KEY}&page=${page}&query=${keyword}`,
      {
         method: "GET",
      }
   )
      .then((response) => response.json())
      .then((data) => {
         return res.status(200).json(data);
      });
}
