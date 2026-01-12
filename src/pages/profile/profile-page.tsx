import { Avatar, Button, Paper, Stack, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type SafeUser = {
  username?: string;
  email?: string;
  avatar?: string;
  favouriteclub?: string;
};

function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<SafeUser | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("currentUser");
    if (!stored) {
      navigate("/login");
      return;
    }

    try {
      const parsed = JSON.parse(stored) as SafeUser;
      if (!parsed?.username) {
        localStorage.removeItem("currentUser");
        navigate("/login");
        return;
      }
      setUser(parsed);
    } catch {
      localStorage.removeItem("currentUser");
      navigate("/login");
    }
  }, [navigate]);

  if (!user) return null;

  return (
    <Paper p="xl" radius="lg" withBorder style={{ maxWidth: 520, margin: "40px auto" }}>
      <Stack align="center" gap="sm">
        <Avatar src={user.avatar} size={120} radius={120} />

        <TextInput label="Username" value={user.username || ""} readOnly />
        <TextInput label="Email" value={user.email || ""} readOnly />
        <TextInput label="Favorite Club" value={user.favouriteclub || ""} readOnly />

        <Button fullWidth mt="md">Edit Profile</Button>
      </Stack>
    </Paper>
  );
}

export default ProfilePage;
