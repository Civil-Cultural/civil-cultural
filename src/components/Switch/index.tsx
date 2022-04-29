/* ----------- RESOURCES ----------- */
/* ----------- RESOURCES ----------- */
import { useState, useEffect } from "react";
import { useTheme } from "Hooks/useTheme";

/* -----------  CONTRACTS ----------- */
import { SwitchProps } from "Contracts/Components";

/* ----------- STYLES ----------- */
import styles from "Components/Switch/styles.module.scss";

export default function Switch({ className }: SwitchProps) {
  const { theme, toggleTheme } = useTheme();
  const [checked, setChecked] = useState(() => theme === "dark");
  const themeValue = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    setChecked(theme === "dark");
    console.log(theme === "dark");
  }, []);

  function alternateTheme() {
    toggleTheme(themeValue);
    setChecked(theme === "dark");
  }

  return (
    <button
      type="button"
      className={`${styles.button} btn remove-bg-image remove-focus border-0 ${className}`}
      onClick={alternateTheme}
    >
      <div className={styles.toggle_switch}>
        <input
          type="checkbox"
          className={styles.input_check}
          defaultChecked={checked}
        />
        <span className={`${styles.switch} ${styles[theme]}`}></span>
      </div>
    </button>
  );
}
