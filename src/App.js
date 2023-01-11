import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Container from "@mui/material/Container";
import Heading from "./components/Heading";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />

      <Container maxWidth="sm">
        <Heading heading="Enter the text to analyze" />
        <TextForm />
      </Container>
    </>
  );
}
export default App;
