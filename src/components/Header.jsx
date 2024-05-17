import styles from './Header.module.css'

import rocketLogo from '../assets/rocket-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="Logo tipo da Rocketseat To-Do List" />
      <strong>
        <span className={styles.to}>to</span>
        <span className={styles.do}>do</span>
      </strong>
    </header>

  )
}