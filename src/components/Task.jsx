import React from 'react';
import { Circle, CheckCircle, Trash } from 'phosphor-react';
import styles from './Task.module.css';

export function Task({ content, isCompleted, onDeleteTask, onToggleComplete }) {
  const handleToggleComplete = () => {
    onToggleComplete(content);
  };

  const handleDeleteTask = () => {
    onDeleteTask(content);
  };

  return (
    <div className={`${styles.task} ${isCompleted ? styles.completed : ''}`}>
      <button title="Concluir tarefa" onClick={handleToggleComplete}>
        {isCompleted ? <CheckCircle weight="fill" size={20} /> : <Circle size={20} />}
      </button>
      <p>{isCompleted ? <del>{content}</del> : content}</p>
      <button onClick={handleDeleteTask} title="Deletar tarefa">
        <Trash size={20} />
      </button>
    </div>
  );
}
