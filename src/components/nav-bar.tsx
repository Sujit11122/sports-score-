import { Anchor, Button, Group, Image, Paper, TextInput } from "@mantine/core";
import logo from "../assets/HomeScreen.png";
import { IoSearch } from "react-icons/io5";
function Navbar() {
  
  return (
    <Paper
      shadow="xs"
      p="md"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor:"blanchedalmond"
      }}
      
    >
      <Group>
        <Image
              src={logo}
              alt="App logo"
              style={{ height: "30px", width: "auto" }}
            />
        <Anchor
          href="/"
          style={{ textDecoration: "none" }}> SportsScore </Anchor>
        <Group gap="md">
          <Anchor href="/soccer" style={{ textDecoration: "none" }}> 
          Soccer </Anchor>
          <Anchor> Cricket</Anchor>
          <Anchor>Tennis</Anchor>
          <Anchor>MMA</Anchor>
          <Anchor>BasketBall</Anchor>
          
        </Group>
      </Group>
      <Group gap="sm">
        <TextInput
          type="text"
          placeholder="Search"
          leftSection={<IoSearch />}
        />
        <Button component="a" href="/login">
          {" "}
          {"Login"}{" "}
        </Button>
        <Button component="a" href="/signup" variant="light">
          {" "}
          Sign up
        </Button>
        <Anchor href="/profile">Profile</Anchor>
      </Group>
    </Paper>
  );
}
export default Navbar;
