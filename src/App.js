import "./App.css";
import LoginButon from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <LoginButon />
      <LogoutButton />
      <hr style={{visibility:"hidden"}} />

      <Profile />
    </>
  );
}

export default App;
