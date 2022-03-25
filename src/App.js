import { Container } from "@material-ui/core";
import "./App.css";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <Container>
        <h1>New User Registration Form</h1>
        <Form />
      </Container>
    </div>
  );
}

export default App;
