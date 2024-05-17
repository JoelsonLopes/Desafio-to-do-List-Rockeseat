import styles from './EmptyTask.module.css'

import clipBoard from '../assets/clipboard.svg';


export function EmptyTask() {
  return (
    <div className={styles.empty}>

      <img src={clipBoard} alt="Logo prancheta" />

      <h2>Você ainda não tem tarefas cadastradas</h2>
      <h2>Crie tarefas e organize seus itens a fazer</h2>

    </div>
  )
}