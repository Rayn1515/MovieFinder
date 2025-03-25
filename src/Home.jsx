import Header from './page components/Header'
import FilterBar from './page components/FilterBar'
import SearchPage from './page components/SearchPage'
import { Box, HStack } from '@chakra-ui/react'
import { useState,useEffect } from 'react'
import axios from 'axios'
function Home() {
  const [availableGenres, setAvailableGenres] = useState([])
  const [selectedGenres, setSelectedGenres] = useState([])
      useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=7b91529776f349d58c7d9156e385cd96&language=en-US`)
          .then(response => {
            setAvailableGenres(response.data.genres);
          })},[])
  return (
    <>
      <Header/>
      <HStack position="fixed" top="75px" left="0" width="100vw" bgColor="red.100" height="calc(100vh - 75px)">
        <FilterBar availableGenres={availableGenres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}/>
        <SearchPage availableGenres={availableGenres} selectedGenres={selectedGenres} />
      </HStack>
    </>
  )
}

export default Home