import React from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState } from "react";




function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "switch to React", done: false },
    { id: 2, content: "study more and more", done: true },
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTasks = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };
  
  const toggleTaskDone = (id) => {
    setTasks(task => tasks.map(task => {
      if (task.id === id) {
        return {...task, done: !task.done};
      }

      return task;
    }));
  }

  return (
    <Container>
      <Header title="To do list" />
      <Section
        title="Add new task"
        body={<Form />}
      />

      <Section
        title="To do list"
        body={
        <Tasks 
        tasks={tasks}
        hideDone={hideDone} 
        removeTask={removeTasks} 
        toggleTaskDone={toggleTaskDone}
        />}
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
          />}
      />

    </Container>
  );
};

export default App;
