import {
  Box,
  Button,
  Paper,
  PasswordInput,
  TextInput,
  Title,
} from "@mantine/core";
import { FaUser } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";
function Login() {
  const [visible, { toggle }] = useDisclosure(false);

  return (
    <Paper
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        gap: "10px",
        backgroundColor: "gray",
        justifyContent: "right",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "400px",
          margin: "auto",
          marginTop: "100px",
          gap: "10px",
          marginLeft: "auto",
        }}
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
          leftSection={<FaUser />}
          withAsterisk
          radius="md"
        />
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          visible={visible}
          onVisibilityChange={toggle}
          radius="md"
          withAsterisk
          leftSection={<IoMdLock />}
        />
        <Button radius="md" style={{ boxShadow: "revert" }}>
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
            <Link to="/signup" style={{ color: "blue" }}>
              Sign Up
            </Link>{" "}
          </Title>
        </Box>
      </form>
    </Paper>
  );
}

export default Login;
