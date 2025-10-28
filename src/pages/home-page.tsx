import { BackgroundImage, Box, Button, Card, CardSection, Center,  Image,  Text,} from "@mantine/core";
import soccer from '../assets/Home screen.jpg'
import mma from '../assets/MMA.jpg'
function HomePage(){
    return(
        <Box>
            <Box>
           <BackgroundImage src={soccer} radius="md"style={{height:'75vh', width:'100%'}}>
            <Center p="md">
          <Text c="white" size="xl" fw={1000}>
           El classico is here 
          </Text>
        </Center>
        <Center style={{height: "100%"}}>
            <Button 
            component="a"
            target="_blank"
            href="https://youtu.be/LavH7audJww?si=HcpDLI9J2YgwVbsg"> Watch Highlights </Button>
            </Center>
        </BackgroundImage>
        </Box>
        <Card>
            <CardSection>
            <Image src={mma} radius="sm" style={{height:'30vh', width:'20%'}}/>
            </CardSection>
            <Text fw={500} mt="md" ta="left">
        Conor “The Notorious” McGregor
      </Text>
        </Card>
        </Box>
    );
}
export default HomePage;