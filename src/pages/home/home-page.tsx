import { BackgroundImage, Box, Button, Card, Center, Group, Image, Text, } from "@mantine/core";
import soccer from '../../assets/Home screen.jpg'
import mma from '../../assets/MMA.jpg'
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
                    <Center style={{ height: "100%" }}>
                        <Button
                            component="a"
                            target="_blank"
                            href="https://youtu.be/LavH7audJww?si=HcpDLI9J2YgwVbsg"> Watch Highlights </Button>
                    </Center>
                </BackgroundImage>
            </Box>
            <Group grow wrap="nowrap">
            
            <Card shadow="sm" padding="lg" radius="md" withBorder>

                <Card.Section>
                    <Image src={mma} radius="sm" style={{ height: '30vh', width: '20%' }} />
                </Card.Section>
                <Text size="sm" c="dimmed">
                    Conor “The Notorious” McGregor gghhhxxxxxxgggygjnyshunjmjjjuygbtygsssssssssssssssssssssssssssssssss
                </Text>
            </Card>
            <Card shadow="sm" padding="lg" radius="md" withBorder>

                <Card.Section>
                    <Image src={mma} radius="sm" style={{ height: '30vh', width: '20%' }} />
                </Card.Section>
                <Text size="sm" c="dimmed">
                    Conor “The Notorious” McGregor gghhhxxxxxxgggygjnyshunjmjjjuygbtygsssssssssssssssssssssssssssssssss
                </Text>
            </Card>
            <Card shadow="sm" padding="lg" radius="md" withBorder>

                <Card.Section>
                    <Image src={mma} radius="sm" style={{ height: '30vh', width: '20%' }} />
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