import axios from "axios"
const apiKey= process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL


export const getMoviesList = async() => {
  const movie = await axios.get(`${baseUrl}/discover/tv?api_key=${apiKey}&with_networks=213`)
  // ${baseUrl}/movie/popular?api_key=${apiKey} popular

  return movie.data.results
}
export const searchMovie = async (q) =>{
  const search =await axios.get(`${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`)
  console.log(q)
  return search.data

}