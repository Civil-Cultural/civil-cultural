import { useState } from 'react'

/* ----------- HOOKS ----------- */
import { useTheme } from "Context/ThemeContext";

/* ----------- COMPONENTS ----------- */
import { MdMenu } from 'react-icons/md'

/* ----------- STYLES ----------- */
import styles from 'Components/Header/styles.module.scss'


export function IconSidebar() {
  const { theme } = useTheme()
  const [isActive, setIsActive] = useState(true)
  let [isHandler, setIsHandler] = useState(true)

  const menuToggle = () => {
    setIsActive(!isActive)
    if (isHandler) setIsHandler(false)
  }

  //const className = (!isHandler && isActive) ? 'animation-open' : ''

  return (
    <div className={styles.boxIconMenu} onClick={menuToggle}>
      <MdMenu className={`${styles.iconMenu} ${styles[theme]} open`} />
    </div>
  )
}