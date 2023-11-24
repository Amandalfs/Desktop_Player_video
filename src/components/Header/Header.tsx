import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Avatar,
  Input,
} from '@chakra-ui/react';

export default function Header() {
  return (
    <Box
      bg="#29292E"
      display="flex"
      alignItems="center"
      color="white"
      h="64px"
      justifyContent="space-around"
    >
      <Avatar src="https://bit.ly/broken-link" />
      <Tabs colorScheme="red">
        <TabList>
          <Tab>Menu</Tab>
          <Tab>Filmes</Tab>
          <Tab>Series</Tab>
          <Tab>Animes</Tab>
        </TabList>
      </Tabs>
      <Box display="flex" gap="2" alignItems="center">
        <Input type="text" placeholder="Search" colorScheme="red" />
        <Avatar src="https://bit.ly/broken-link" />
      </Box>
    </Box>
  );
}
