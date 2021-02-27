import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "switch to React", done: false },
  { id: 2, content: "study more and more", done: true },
];

const hideDone = false;

function App() {
  return (
    <Container>
      <Header title="To do list" />
      <Section
        title="Add new task"
        body={<Form />}
      />

      <Section
        title="To do list"
        body={<Tasks tasks={tasks} hideDone={hideDone} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} />}
      />

    </Container>
  );
}

export default App;
