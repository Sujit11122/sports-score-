import {
  Box,
  Button,
  Card,
  Paper,
  PasswordInput,
  TextInput,
  Title,
} from "@mantine/core";
import { FaUser } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { useDisclosure } from "@mantine/hooks";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
function Login() {
const navigate = useNavigate();
  const [visible, { toggle }] = useDisclosure(false);
   const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    if (!username || !password) {
    alert("Please fill all fields!");
    return;
  }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (user: { username: string; password: string }) =>
        user.username === username && user.password === password
    );
    if (!user) {
      alert("Invalid username or password");
      return;
    }
    localStorage.setItem("currentUser", JSON.stringify(user));
    console.log("AFTER LOGIN currentUser =", localStorage.getItem("currentUser"));
    alert("Login successful!");
    navigate("/"); // after login, navigate to home page
  };

  return (
    <Paper
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        gap: "10px",
        backgroundColor: "gray",
        justifyContent: "right",
        height:"90vh",
        background: "linear-gradient(135deg, #eef2ff, #e0e7ff)",
      }}
    >
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "400px",
          margin: "auto",
          marginTop: "100px",
          gap: "10px",
          marginLeft: "auto",
          backdropFilter: "blur(12px)",
          background: "rgba(255, 255, 255, 0.55)",
           border: "1px solid rgba(255, 255, 255, 0.3)"
        }} radius="lg"
      >
        <Title>Welcome Back, </Title>
        <Title>Athlete</Title>
        <Title order={3} fw={200}>
          Login here to continue your Journey
        </Title>

        <TextInput
          label="Username "
          placeholder="Enter your username"
          id="username"
           onChange={(e) => setUsername(e.target.value)}
          leftSection={<FaUser />}
          withAsterisk
          radius="md"
        />
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          visible={visible}
          onVisibilityChange={toggle}
          radius="md"
          withAsterisk
          leftSection={<IoMdLock />}
        />
        <Button radius="md" style={{ boxShadow: "revert" }} onClick={handleLogin} >
          Log In
        </Button>
        <Title order={3} style={{ color: "blue" }} fw={400}>
          Forget password?
        </Title>
        <Box
          style={{ display: "flex", flexDirection: "row", gap: "10px" }}
          fw={400}
        >
          <Title order={3} fw={400}>
            Don't have an account?
          </Title>

          <Title order={3} fw={400}>
            {" "}
            <Link to="/signup" style={{ color: "blue", textDecoration: "none" }}>
              Sign Up
            </Link>{" "}
          </Title>
        </Box>
      </Card>
    </Paper>
  );
}

export default Login;