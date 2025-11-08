import { Button, Paper, TextInput, Title } from "@mantine/core";
import { Checkbox } from "@mantine/core";
import { PasswordInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { Link } from "react-router-dom";
import type { UserModel } from "../../constants/types";

function Signup() {
  const [visible, { toggle }] = useDisclosure(false);
  const [data, setData] = useState<UserModel>({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
    const value = event.target.value;

    setData({ ...data, [id]: value });
  };
  return (
    <Paper
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        width: "400px",
        marginTop: "100px",
        gap: "10px",
      }}
    >
      <form>
        <Title> Create Your Account</Title>
        <Title order={3} fw={100} size={18} style={{marginBottom:'2rem'}}>
          {"Join the action and connect with your fellow fans"}
        </Title>
        <TextInput
          label="Fullname"
          placeholder="Enter your fullname"
          id="name"
          radius="md"
          withAsterisk
          value={data.name}
          onChange={handleInputChange}
        />
        <TextInput
          label="Username"
          placeholder="Enter your Username"
          id="username"
          radius="md"
          withAsterisk
          value={data.username}
          onChange={handleInputChange}
        />
        <TextInput
          label="Email"
          placeholder="Enter your email"
          id="email"
          radius="md"
          withAsterisk
          value={data.email}
          onChange={handleInputChange}
        />
        <PasswordInput
          label="Password"
          placeholder="Enter your Password"
          visible={visible}
          onVisibilityChange={toggle}
          radius="md"
          withAsterisk
          value={data.password}
          onChange={handleInputChange}
        />
        <Checkbox
          label="I agree to the Terms of Services and Private Policy"
          style={{ margin: "1rem" }}
        />
        <Button radius="md">Create Account</Button>
        <Paper style={{ display: "flex", flexDirection: "row" }}>
          <Title order={3} fw={200}>
            Already have an account?
          </Title>
          <Title order={3} fw={400}>
            <Link to="/login" style={{ color: "blue", textDecoration:'none' }}>
              {" Login here.."}
            </Link>
          </Title>
        </Paper>
      </form>
    </Paper>
  );
}

export default Signup;
