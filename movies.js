import db from "./mongoConnection"

const movieDb = db.collection("movie")

export const getAllMoviesMovie = async (req,res) => {
  try {

    const data = await furnitureDB.find({}).limit(10).toArray();
    res.status(200).send(data)
  } catch (error) {
    res.status(400).send(error)
  }
}