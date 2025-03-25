import { Card, Box, Image,Button, HStack,Badge,For,RatingGroup, Flex,VStack } from "@chakra-ui/react"
import axios from "axios";
import { useState,useEffect } from "react";
export default function MovieCard({availableGenres,movie})
{
    const posterBaseUrl = 'https://image.tmdb.org/t/p/w500/'
    // const [availableGenres, setAvailableGenres] = useState([])
    const [genres,setGenre] = useState([])
    // useEffect(()=>{
    //     axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=7b91529776f349d58c7d9156e385cd96&language=en-US`)
    //       .then(response => {
    //         setAvailableGenres(response.data.genres);   *****dekho badme
    //       })
    useEffect(()=>{
        setGenre(movie.genre_ids.map(genreId => {
            const genre = availableGenres.find(g => g.id === genreId)
            return genre ? genre.name : null
        }))
    },[])
    return(
        <Card.Root flexDirection="row" overflow="hidden" w="65%" mt="10px" mb="10px" minH="220px" height="max-content" >
                <Image
                objectFit="cover"
                w="25%"
                src ={posterBaseUrl + movie.poster_path}
                alt={movie.title}
                margin="10px"
                />
                <Box>
                <Card.Body>
                    <Card.Title mb="2">{movie.title} ({movie.release_date.substring(0,4)})</Card.Title>
                    <Card.Description>
                    <VStack alignItems="start">
                        <RatingGroup.Root allowHalf readOnly count={5} value={(movie.vote_average)/2} size="sm" colorPalette={"blue"}>
                            <RatingGroup.Control />
                        </RatingGroup.Root>
                        {movie.overview}
                    </VStack>
                    </Card.Description>
                    <HStack mt="4">
                        <For each={genres}>
                            {(genre)=>(
                                <Badge>{genre}</Badge>
                            )
                            }
                        </For>
                    </HStack>
                </Card.Body>
                <Card.Footer>
                    <Button bgColor="blue.700">Add to To Watch List</Button>
                    <Button bgColor="blue.700">Add to Watched List</Button>
                </Card.Footer>
                </Box>
            </Card.Root>
    )
}