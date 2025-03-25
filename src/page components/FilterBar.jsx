import { Flex,Box,Text,Button, Heading, Separator,Drawer,Portal,CloseButton, For } from "@chakra-ui/react"
import { useState } from "react"
import FilterDrawer from "./FilterDrawer"
export default function FilterBar({availableGenres,selectedGenres,setSelectedGenres})
{   const [filterGenre,setFilterG]=useState([])
    //const [filterYear,setFilterY]=useState([])
    // const year=filterYear.map((item)=>{
    //     return(
    //         <Box bgColor="blue.300" width="70%" justifyContent="center" alignContent="center" alignSelf="center" m="5px" borderRadius="20px" minH="40px">
    //             <Text alignSelf="center" >{item}</Text>
    //         </Box>
    //     )
    // })
    const [open, setIsOpen] = useState(false)
    return(
        
        <Flex position="relative" top="0" left="0" bg="blue.200" flexDirection="column" w="20%" minW="100px" h="100%" overflowY="auto" >
            <Heading mt="30px" mb="10px">Filters</Heading>
            <Separator size="lg" borderColor="blue.800" mb="10px" />
            <For each={selectedGenres}>
                {(genre) => (
                    <Box bgColor="blue.300" width="70%" justifyContent="center" alignContent="center" alignSelf="center" m="5px" borderRadius="20px" minH="40px" key={genre.id}>
                    <Text alignSelf="center" >{genre.name}</Text>
                    </Box>
                )}
            </For>
            {/* {year} */}
            <FilterDrawer availableGenres={availableGenres} setFG={setSelectedGenres}/>
        </Flex>
    )
}