// Components
import { Container } from "./components/atoms/Container";
import Title from "./components/atoms/Title";
import Header from "./components/organisms/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Title>Área administrativa</Title>
      </Container>
    </>
  );
}

export default App;
