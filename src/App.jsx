import './global.css';
import styles from './App.module.css';

import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <NewTask />
      </div>
    </div>
  );
}
