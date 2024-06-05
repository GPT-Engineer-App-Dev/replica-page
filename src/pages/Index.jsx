import { Box, Container, Flex, Heading, Input, Button, VStack, HStack, Text, IconButton, Menu, MenuButton, MenuList, MenuItem, MenuDivider, Avatar } from "@chakra-ui/react";
import { FaSearch, FaCog, FaStar, FaClock } from "react-icons/fa";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Index = () => {
  return (
    <Box bg="black" color="white" minH="100vh" py={10}>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center" mb={10}>
          <Heading size="lg">GPTEngineer</Heading>
          <Flex align="center">
            <Input placeholder="Select project..." variant="filled" bg="gray.800" border="none" mr={4} />
            <IconButton aria-label="Search" icon={<FaSearch />} bg="gray.800" border="none" mr={4} />
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg="gray.800" border="none">
                Niklas Vatn
              </MenuButton>
              <MenuList bg="gray.800" border="none">
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuDivider />
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        <VStack spacing={6} textAlign="center">
          <Heading size="2xl">What do you want to build?</Heading>
          <Input placeholder="@e.g., A chat app similar to WhatsApp" variant="filled" bg="gray.800" border="none" size="lg" />
          <HStack spacing={4}>
            <Button bg="gray.800" border="none">Todo</Button>
            <Button bg="gray.800" border="none">Personal website</Button>
            <Button bg="gray.800" border="none">Notes</Button>
            <Button bg="gray.800" border="none">Band website</Button>
            <Button bg="gray.800" border="none">Chat</Button>
            <Button bg="gray.800" border="none">Dashboard</Button>
            <Button bg="gray.800" border="none">Blog</Button>
            <Button bg="gray.800" border="none">SaaS</Button>
          </HStack>
          <Button size="lg" bg="white" color="black" rightIcon={<FaCog />}>Create</Button>
        </VStack>
        <Flex mt={10}>
          <VStack align="start" spacing={4} mr={10}>
            <Button leftIcon={<FaClock />} bg="gray.800" border="none">My Projects</Button>
            <Button leftIcon={<FaStar />} bg="gray.800" border="none">Featured</Button>
            <Button leftIcon={<FaClock />} bg="gray.800" border="none">Latest</Button>
          </VStack>
          <Flex wrap="wrap" justify="start">
            {Array(9).fill("").map((_, index) => (
              <Box key={index} bg="gray.800" p={4} m={2} borderRadius="md" width="200px" height="150px">
                <Text>Project {index + 1}</Text>
                <Text fontSize="sm">Created 16 hours ago by Niklas Vatn</Text>
              </Box>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Index;