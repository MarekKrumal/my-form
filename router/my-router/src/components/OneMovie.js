import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import movies from "../data"
import "./OneMovie.css"

const OneMovie = () => {

    const {movieId} = useParams()

    const oneSpecificMovie = movies.find( (oneMovie) => {
      return oneMovie.id === parseInt(movieId)
    })

    const {image, title, descripton, tags} = oneSpecificMovie

    return <section className="one-movie-more">
    <h2>{title}</h2>
    <img src={image} alt="" />
    <p>{descripton}</p>
    <p>{tags}</p>
    <Link to="/movies">Zpět na všechny filmy</Link>

  </section>
}

export default OneMovie