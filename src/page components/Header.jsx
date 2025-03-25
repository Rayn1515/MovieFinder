import { Flex,Heading, Text, VStack,HStack,Avatar, Image,Menu,Portal,Button } from "@chakra-ui/react"
export default function Header()
{
    return(
            <HStack position="fixed" top="0" left="0" m="0" backgroundImage="url('src/assets/bgimage.jpg')" bgSize="100% 100%" w="vw" h="75px" justifyContent="space-between">
                <Image src="src/assets/logo.png" fit="contain" height="50px" ml="30px"></Image>
                <VStack gapY="-1">
                    <Heading margin="0" fontFamily="Lobster" size="4xl" color="blue.700">Movie Finder</Heading>
                    <Text fontWeight="bold" mt="0px" color="blue.900" fontStyle="italic">One Stop Point to Find Movies</Text>
                </VStack>
                <Menu.Root positioning={{ placement: "bottom" }}>
                    <Menu.Trigger asChild>
                        <Button mr="50px" variant="plain" bg="transparent" rounded="full" w="0" borderWidth="0" borderColor="blue.500">
                            <Avatar.Root colorPalette={"blue"} size="xl">
                                <Avatar.Fallback name="Hello" />
                                <Avatar.Image src="" />
                            </Avatar.Root>
                        </Button>
                    </Menu.Trigger>
                    <Portal>
                    <Menu.Positioner>
                        <Menu.Content>
                        <Menu.Item value="home">Home</Menu.Item>
                        <Menu.Item value="profile">Profile</Menu.Item>
                        <Menu.Item value="logOut">Log Out</Menu.Item>
                        </Menu.Content>
                    </Menu.Positioner>
                    </Portal>
                </Menu.Root>
            </HStack>

    )
}