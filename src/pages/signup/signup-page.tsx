import { Button, Card, Paper, TextInput, Title, Checkbox, PasswordInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export type UserModel = {
  name: string;
  username: string;
  email: string;
  password: string;
};

function Signup() {
  const navigate = useNavigate();
  const [visible, { toggle }] = useDisclosure(false);
  const [data, setData] = useState<UserModel>({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const[agreed,setAgreed] = useState(false);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setData(prev => ({ ...prev, [id]: value }));
  };
  const handleSignup = () => {
     if (!data.name || !data.username || !data.email || !data.password) {
  alert("Please fill all fields!");
  return;
}
if (!agreed) {
  alert("You must agree to Terms and Privacy Policy");
  return;
}
    const user: UserModel[] = JSON.parse(localStorage.getItem("users") || "[]");
    const isUserExist = user.some(user=> user.email === data.email);
    if(isUserExist){
      alert("User with this email already exists");
      return;
    }
    user.push(data);
    localStorage.setItem("users", JSON.stringify(user));
    alert("Signup Successful! Please login to continue.");
    navigate("/login");
  };
  return (
    <Paper
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "90vh",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #eef2ff, #e0e7ff)",
      }}
    >
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "500px",
          gap: "5px",
          padding: "2rem",
          backdropFilter: "blur(12px)",
          background: "rgba(255, 255, 255, 0.55)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
        radius="lg"
      >
        <Title>Create Your Account</Title>
        <Title order={3} fw={100} size={18} style={{ marginBottom: "2rem" }}>
          Join the action and connect with your fellow fans
        </Title>

        <TextInput
          label="Full Name"
          placeholder="Enter your full name"
          id="name"
          radius="md"
          withAsterisk
          value={data.name}
          onChange={handleInputChange}
        />

        <TextInput
          label="Username"
          placeholder="Enter your username"
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
          placeholder="Enter your password"
          id="password"
          visible={visible}
          onVisibilityChange={toggle}
          radius="md"
          withAsterisk
          value={data.password}
          onChange={handleInputChange}
        />

        <Checkbox label="I agree to the Terms of Services and Privacy Policy"checked={agreed} onChange={(e) => setAgreed(e.currentTarget.checked)}/>

        <Button radius="md" fullWidth style={{ marginTop: "1rem" }} onClick={handleSignup}>
          Create Account
        </Button>

        <Paper style={{ display: "flex", justifyContent: "center", marginTop: "1rem", background: "rgba(255, 255, 255, 0.55)" }}>
          <Title order={3} fw={200} style={{ marginRight: "5px" }}>
            Already have an account?
          </Title>
          <Title order={3} fw={400}>
            {" "}
          <Link to="/login" style={{ color: "blue", textDecoration: "none"}}> 
            Login
          </Link>
          </Title>
        </Paper>
      </Card>
    </Paper>
  );
}

export default Signup;
