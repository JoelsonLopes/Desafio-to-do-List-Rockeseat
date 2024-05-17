import React, { useState } from 'react';
import styles from './NewTask.module.css';
import plus from '../assets/plus.svg';
import { Task } from './Task';
import { EmptyTask } from './EmptyTask';

export function NewTask() {
  const [addTask, setAddTask] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');

  function handleCreateNewtask(event) {
    event.preventDefault();

    if (newTaskText.trim() === '') {
      return;
    }

    const newTask = {
      content: newTaskText,
      isCompleted: false
    };

    setAddTask([...addTask, newTask]);
    setNewTaskText('');
  }

  function handleNewTaskChange(event) {
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event) {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  function deleteTask(taskToDelete) {
    const tasksWithoutDeletedOne = addTask.filter(task => task.content !== taskToDelete);
    setAddTask(tasksWithoutDeletedOne);
  }

  function toggleCompleteTask(taskContent) {
    const updatedTasks = addTask.map(task =>
      task.content === taskContent ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setAddTask(updatedTasks);
  }

  const isNewTaskEmpty = newTaskText.length === 0;
  const taskCount = addTask.length;
  const completedTaskCount = addTask.filter(task => task.isCompleted).length;

  return (
    <div>
      <form onSubmit={handleCreateNewtask}>
        <input
          className={styles.newTask}
          name="task"
          value={newTaskText}
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
          autocomplete="off"
        />
        <button type="submit" disabled={isNewTaskEmpty}>
          Criar
          <img src={plus} alt="Sinal de mais" />
        </button>
      </form>

      <section className={styles.info}>
        <p className={styles.createdTasks}>
          Tarefas criadas <span className={styles.taskCount}>{taskCount}</span>
        </p>

        <p className={styles.completedTasks}>
          Concluídas <span className={styles.taskCount}>{completedTaskCount} de {taskCount}</span>
        </p>
      </section>

      <footer>
        {addTask.length === 0 ? (
          <EmptyTask />
        ) : (
          addTask.map(task => (
            <Task
              key={task}
              content={task.content}
              isCompleted={task.isCompleted}
              onDeleteTask={deleteTask}
              onToggleComplete={toggleCompleteTask}
            />
          ))
        )}
      </footer>
    </div>
  );
}
