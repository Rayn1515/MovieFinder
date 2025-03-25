import { Flex, Input,Box,HStack,Card,Badge,Button,Image, For,Text } from "@chakra-ui/react"
import { useState,useEffect } from "react"
import axios from "axios"
import MovieCard from "./MovieCard"
export default function SearchPage({availableGenres,selectedGenres})
{
    const apiUrl1="https://api.themoviedb.org/3/search/movie?api_key=7b91529776f349d58c7d9156e385cd96"
    const apiUrl2="https://api.themoviedb.org/3/discover/movie?api_key=7b91529776f349d58c7d9156e385cd96"
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterTerm, setFilterTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [value, setValue] = useState("")
    const searchMovie = async () =>          //Search Movies with Queries
    {
      if (searchTerm === "" && selectedGenres.length == 0)
      {
        setMovies([])
        return;
      }
      setLoading(true);
      setError('');
        // const response = await axios.get(apiUrl1 + searchTerm + "&include_adult=false");
        // const filteredMovies = selectedGenres.length
        // ? response.data.results.filter((movie) =>
        //     movie.genre_ids.some((genreId) => selectedGenres.map(genre => genre.id).includes(genreId))
        //   )
        // : response.data.results;                    ******not imp
        // setMovies(filteredMovies)

      let allMovies = [];
      
      try {
        console.log("fetch start")
        for (let page = 1; allMovies.length < 20 && page<6; page++) {
          const response = await axios.get(apiUrl1 + searchTerm +"&page="+page+"&include_adult=false");
          const filteredMovies = selectedGenres.length
          ? response.data.results.filter((movie) =>
              movie.genre_ids.some((genreId) => selectedGenres.map(genre => genre.id).includes(genreId))
            )
          : response.data.results;
          allMovies = [...allMovies, ...filteredMovies];

          if (allMovies.length >= 20) break;
        }
      console.log("fetch complete")
      setMovies(allMovies)

      } catch(err){
        setError("Error fetching data")
      } finally {
        setLoading(false);
      }
    }
    
    const searchByFilter= async (genreIds)=>{   
      console.log("just genre")   //Search Movies with filters ONLY
      setLoading(true);
      setError(null);
      try {
        console.log("fetch start")
        setFilterTerm(genreIds.join(','))
        console.log(apiUrl2+"&with_genres="+filterTerm)
        const response = await axios.get(apiUrl2+"&with_genres="+filterTerm);
        setMovies(response.data.results);
        console.log("fetch end")
      } catch (err) {
        setError('Failed to fetch movies');
        console.error(err);
      } finally {
        setLoading(false);
      }
  }
       
    
    useEffect(()=>{    
      console.log("Heya")       //Search bar or filters changed check
      if (searchTerm.length > 0) {
        searchMovie() 
      } else if (selectedGenres.length > 0) {
        const genreIds = selectedGenres.map(genre => genre.id);
        searchByFilter(genreIds); 
      }
      else {
        setMovies([])
      }
    },[selectedGenres,searchTerm])

    const handleSearchChange = (e) => {     //Search bar change
      setValue(e.currentTarget.value)
      setSearchTerm("&query="+value)
    }
    return(
        <Flex width="80%" position="absolute" top="0" left="20%" height="100%" minW="400px" bgColor={"blue.50"} justifyContent="center" flexDirection="row" justifyItems="center" overflowY="auto" flexGrow={1} wrap="wrap" overflowX="hidden">
           <Input w="75%" mt="40px" mb="20px"bgColor="white" borderRadius="full" h="40px"
           value={value}
           placeholder="Start typing to search"  
           onChange={handleSearchChange}/>
           {movies.length > 0 ? (
              movies.map((movie) => (
                <MovieCard availableGenres={availableGenres} key={movie.id} movie={movie} />
              ))
              ) : (<Text w="100%"> No movies found </Text>)
            }
        </Flex>
            
    )
}