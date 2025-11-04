import { Button, Paper, Title } from "@mantine/core";
import { Checkbox } from '@mantine/core';

const signup = () => {
    return (
        <Paper style={{ display: "flex", flexDirection: "column", margin: "auto", width: "400px", marginTop: "100px", gap: "10px" }}>
            <Title> Create Your Account</Title>
            <Title order={3} fw={400}> Signup to create your Account</Title>
            <label>Enter your full name</label>
            <input type="text" placeholder="Enter your full name" id="name" />
            <label>User name</label>
            <input type="text" placeholder="Choose your user name" id="username" />
            <label>Email</label>
            <input type="text" placeholder="Enter your email" id="email" />
            <label>Password</label>
            <input type="text" placeholder="Choose a strong password" id="password" />

            <Checkbox
                defaultChecked
                label="I agree to the Terms of Services and Private Policy"
            />
            <Button>Create Account</Button>
            <Paper style={{ display: "flex", flexDirection: "row" }}>
                <Title order={3} fw={400}>Already have an account?</Title>
                <Title order={3} fw={400} style={{ color: "blue" }}>Log In</Title>
            </Paper>
        </Paper>
    );
}

export default signup