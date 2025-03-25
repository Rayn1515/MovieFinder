import { Drawer, Button, Portal,Checkbox, Heading,For,Flex, Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import axios from "axios"
function FilterDrawer({availableGenres,setFG}){
    const [open, setIsOpen] = useState(false)
    //const [selectedYears, setSelectedYears] = useState([])
    const [selectedGenres,setSelectedGenres]=useState([])
    function handleClick(){
        setIsOpen(false)
        setFG(selectedGenres)
        //setFY(selectedYears)
    } 
    const handleGenreChange = (checked, value) => { 
        setSelectedGenres(selectedGenres.filter((genre) => genre.id !== value.id))
        if(checked && !selectedGenres.some(e => e.id === value.id)){
            setSelectedGenres([...selectedGenres,value])
        }
        
    };
    // const handleYearChange = (checked, value) => {
    //     setSelectedYears(selectedYears.filter((year) => year !== value))
    //     if(checked && !selectedYears.includes(value)){
    //         setSelectedYears([...selectedYears,value])
    //     }
    // }
    
    return (
        <>
        <Button onClick={()=> setIsOpen(true)} position="relative" bottom="0" width="80%" mt="20px" bgColor="blue.700" alignSelf="center" justifySelf="end">Edit Filters</Button>
       
        <Drawer.Root open={open} onOpenChange={(e) => setIsOpen(e.open)} placement={"start"}>
        <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
            <Drawer.Content>
                <Drawer.Header>
                <Drawer.Title>Filters</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                <p mt="5px">
                    Choose Filters to Apply
                </p>
                <Heading mt="20px">Genre</Heading>
                <Flex direction="column">
                    <For each={availableGenres}>
                        {(genre) => (
                        <Checkbox.Root 
                        colorPalette={"blue"}
                        key={genre.id} 
                        value={genre.id} 
                        margin="10px" 
                        defaultChecked={selectedGenres.some(e => e.id === genre.id)} 
                        onCheckedChange={(checked) => handleGenreChange(checked, genre)}
                    >
                        <Checkbox.HiddenInput />
                        <Checkbox.Control />
                        <Checkbox.Label>{genre.name}</Checkbox.Label>
                    </Checkbox.Root>
                        )}
                    </For>
                </Flex>
                {/*
                <Heading mt="20px">Year</Heading>
                <Flex direction="column">
                    <For each={["2017","2018","2019","2020"]}>
                        {(value) => (
                        <Checkbox.Root 
                        key={value} 
                        value={value} 
                        margin="10px" 
                        defaultChecked={selectedYears.includes(value)} 
                        onCheckedChange={(checked) => handleYearChange(checked, value)}
                    >
                        <Checkbox.HiddenInput />
                        <Checkbox.Control />
                        <Checkbox.Label>{value}</Checkbox.Label>
                    </Checkbox.Root>
                        )}
                    </For>
                </Flex> */}
                </Drawer.Body>
                <Drawer.Footer>
                <Button bgColor="blue.700" onClick={handleClick}>Apply Filters</Button>
                </Drawer.Footer>
            </Drawer.Content>
            </Drawer.Positioner>
        </Portal>
    </Drawer.Root>
    </>
    )
  }
  
  export default FilterDrawer;