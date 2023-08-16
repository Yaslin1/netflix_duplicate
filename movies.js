import db from "./mongoConnection.js"

const movieDb = db.collection("movies")

export const getAllMovies = async (req,res) => {
  try {

    const data = await movieDb.find({}).limit(10).toArray();
    res.status(200).send(data)
  } catch (error) {
    res.status(400).send(error)
  }
}