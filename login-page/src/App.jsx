import { useState, useEffect } from "react";
import styles from "./App.module.css";

export function App() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.camps}>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Senha" />
        <button type="submit" className={styles.button_enter}>
          Entrar
        </button>
      </form>
    </div>
  );
}
