import { BackgroundImage, Box, Button, Card, Center, Group, Image, Text, Title, } from "@mantine/core";
import soccer from '../../assets/Home screen.jpg'
import mma from '../../assets/MMA.jpg'
import basketball from '../../assets/Basketball.jpg'
import Cricket from '../../assets/Cricket.jpg'
import { Link } from "react-router";
function HomePage() {
    return (
        <Box>
            <Box>
                <BackgroundImage src={soccer} radius="md" style={{ height: '75vh', width: '100%' }}>
                    <Center p="md">
                        <Text c="white" size="xl" fw={1000}>
                            El classico is here
                        </Text>
                    </Center>
                    <Center style={{ height: "100%",  flexDirection:"column", gap:"100px"}}>
                        <Button
                            component="a"
                            target="_blank"
                            href="https://youtu.be/LavH7audJww?si=HcpDLI9J2YgwVbsg"> Watch Highlights </Button>
                            <Button variant="outline" component="a" href="/soccer"> More Matches</Button>
                    </Center>
                </BackgroundImage>
            </Box>
            <Title> Latest News on other Sports</Title>
            <Group grow wrap="nowrap" >
            
            <Card shadow="sm" padding="lg" radius="md" >
                <Card.Section>
                    <Image src={Cricket} radius="sm" style={{ height: '30vh', width: '600px' }} />
                </Card.Section>
                <Text size="sm" c="dimmed">
                    Conor “The Notorious” McGregor gghhhxxxxxxgggygjnyshunjmjjjuygbtygsssssssssssssssssssssssssssssssss
                </Text>
            </Card>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    <Image src={mma} radius="sm" style={{ height: '32vh', width: '600px' }} /> 
                </Card.Section>
                <Text size="sm" c="dimmed"> <Link to="/mma" style={{ textDecoration: "none" }}>
                    Click here to know about the upcoming MMA fights
                </Link>;
                </Text>
            </Card>
            <Card shadow="sm" padding="lg" radius="md" withBorder>

                <Card.Section>
                    <Image src={basketball} radius="sm" style={{ height: '30vh', width: 'auto' }} />
                </Card.Section>
                <Text size="sm" c="dimmed">
                    Conor “The Notorious” McGregor gghhhxxxxxxgggygjnyshunjmjjjuygbtygsssssssssssssssssssssssssssssssss
                </Text>
            </Card>
            </Group>
        </Box>
    );
}
export default HomePage;