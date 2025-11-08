import { Anchor, Button, Group, Image, List, Paper, TextInput,} from "@mantine/core";
import logo from '../assets/logo.png'
import { IoSearch } from "react-icons/io5";

function Navbar() {

    return (
        <Paper shadow="xs" p='md' style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} >
            <Group>
                <Image src={logo} alt="App logo" style={{ height: '30px', width: 'auto' }}/>
                <Anchor href="/" style={{textDecoration:'none'}} >SportsApp</Anchor >
                <Group gap="md">
                    <List> Football</List>
                    <List> Basket Ball</List>
                    <List>Tennis</List>
                    <List>MMA</List>
                </Group>
            </Group>
            <Group gap='sm'>
                <IoSearch />
                <TextInput type="text" placeholder="Search" />
                <Button component="a" href='/login'>  {"Login"} </Button>
                <Button component="a" href="/signup" variant="light"> Sign up</Button>
            </Group>

        </Paper>

    );
}
export default Navbar;