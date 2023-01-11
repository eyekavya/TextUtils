import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Container from "@mui/material/Container";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <Container maxWidth="sm">
        <TextForm />
      </Container>
    </>
  );
}
export default App;
