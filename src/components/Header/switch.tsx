/* Resources */
import { useState, useRef, useEffect } from 'react'
import { useTheme } from 'Hooks/useTheme'

/* Components */
import { Col, Button } from 'react-bootstrap'

/* Styles */
import styles from "Components/Header/styles.module.scss";


export function Switch() {
  const { theme, toggleTheme } = useTheme()
  const switchRef = useRef<HTMLInputElement>(null)
  const [isDark, setIsDark] = useState(false)

  const alternateTheme = () => {
    if (switchRef.current) {
      console.log(theme, switchRef.current.checked && theme == 'light')
      let checked = switchRef.current.checked && theme == 'light'
      setIsDark(checked)
      toggleTheme(checked ? 'dark' : 'light')
    }
  }

  return (
    <Button onClick={alternateTheme} className={`${styles.switchContainer} ${styles[theme]} remove-bg-image`}>
      <input type='checkbox' className={styles.inputCheck} ref={switchRef} defaultChecked={isDark}/>
      <Col className={`${styles.flexSwitch} ${styles.flexContainer} col-12`}>
        <Col className={styles.containerSun}>
          <span className={styles.span}>🌞</span>
        </Col>
        <Col className={styles.containerMoon}>
          <span className={styles.span}>🌜</span>
        </Col>
      </Col>
      <div className={`${styles.stateSwitch} ${isDark ? styles.activeSwitch : 'desativeSwitch'}`} />
    </Button>
  )
}