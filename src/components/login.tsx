import { Box, Button, Paper, Title } from '@mantine/core'


const login = () => {
  return (
    <Paper style={{ display: "flex",
        flexDirection: "column",
        padding: "20px",
        width: "400px",
        margin: "auto",
        marginTop: "100px",
        gap: "10px"}}>
      <form  style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}>
        <Title>Welcome Back Athlete Login here to continue your Journey </Title>
        <label>Email or User name </label>
        <input type="text"placeholder="your.email@example.com" id="username" />

        <label>Password</label>
        <input type ="text" placeholder="Enter your Password" id="password"/>
        <Button>Log In</Button>
        <Title order={3} size="h4" style={{color:"blue"}} fw={400}>Forget password?</Title>
        <Box style={{display:"flex", flexDirection:"row",gap:"10px",}} fw={400} >
        <Title order={3} fw={400}>Donot have a account?</Title>

        <Title order={3} style={{color:"blue"}} fw={400}> Sign Up</Title>
        </Box>
      </form>
    </Paper>
  )
}

export default login