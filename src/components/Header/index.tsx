/* ----------- RESOURCES ----------- */
import { useState, useEffect, useRef } from "react"
import NextLink from "next/link"

/* ----------- HOOKS ----------- */
import { useTheme } from "Context/ThemeContext"

/* ----------- ICONS ----------- */
import { MdMenu } from "react-icons/md"

/* ----------- COMPONENTS ----------- */
import { Col } from "react-bootstrap"
import InputSearch from "Components/InputSearch"
import Switch from "Components/Switch"
import Logo from "Components/Logo"
import Button from "react-bootstrap/Button"
import { DropdownMenu } from "Components/Header/dropdownMenu"

/* ----------- STYLES ----------- */
import styles from "Components/Header/styles.module.scss"

interface SidebarState {
  isActive: boolean
  setIsActive: () => void
}

export default function Header({ isActive, setIsActive }: SidebarState) {
  const { theme } = useTheme()
  const [isShow, setIsShow] = useState(false)

  const buttonRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function pageClick(evt: any) {
      const targetId = evt.target?.parentElement?.id ?? evt.target?.id

      if (
        isShow &&
        targetId != buttonRef?.current?.id &&
        !dropdownRef.current?.contains(evt.target as Element)
      ) {
        setIsShow(false)
      }
    }

    function pageKeyPress(evt: KeyboardEvent) {
      if (evt?.key == "Escape") setIsShow(false)
    }

    let doc = document.querySelector("body")

    doc && doc.addEventListener("click", pageClick)
    doc && doc.addEventListener("keydown", pageKeyPress)

    return () => {
      doc && doc.removeEventListener("click", pageClick)
      doc && doc.removeEventListener("keydown", pageKeyPress)
    }
  }, [isShow])

  return (
    <header className={`${styles.header_container} ${styles[theme]}`}>
      <Col
        className={`${styles.flex_container} d-flex justify-content-between align-items-center`}
      >
        <Col
          className="col-auto col-lg-2 d-flex justify-content-start align-items-center"
          aria-controls="sidebar"
        >
          <Col className="col-3 d-none d-lg-block">
            <Button
              className={`${styles.button_icon_menu} remove-bg-image remove-focus`}
              onClick={setIsActive}
            >
              <MdMenu
                className={`${styles.icon_menu} ${styles[theme]} w-100 ${isActive ? styles.open : ""
                  } `}
              />
            </Button>
          </Col>

          <Col className="col-12 col-lg-auto ms-lg-2 d-flex align-items-center ms-2 ms-0">
            <Logo width={28} height={28} />
            <h4
              className={`${styles.logo_title} ${styles[theme]} d-none d-lg-block mt-2`}
            >
              Civil Cultural
            </h4>
          </Col>
        </Col>

        <Col className="col-5 d-flex justify-content-center align-items-center d-none d-lg-block">
          <InputSearch />
        </Col>

        <Col className="col-auto col-lg-2 col-md-5">
          <nav className="col-12 d-xxl-flex d-xl-flex d-lg-flex d-md-flex justify-content-end align-items-center">
            <ul className={styles.navRow}>
              <li className={`${styles.navItem} ms-2 mx-lg-0 me-sm-1`}>
                <DropdownMenu />
              </li>

              <li className={`${styles.navItem} d-none d-lg-block`}>
                <NextLink href="/login" passHref>
                  <a className={styles.buttonLogin}>Login</a>
                </NextLink>
              </li>

              <li className={`${styles.navItem} d-block d-lg-none`}>
                <Switch />
              </li>

              <li className={`${styles.navItem} me-3 d-block d-lg-none`}>
                <Button
                  className={`${styles.button_icon_menu} remove-bg-image remove-focus`}
                  onClick={setIsActive}
                >
                  <MdMenu
                    className={`${styles.icon_menu} ${styles[theme]} w-100 ${isActive ? styles.open : ""
                      } `}
                  />
                </Button>
              </li>
            </ul>
          </nav>
        </Col>
      </Col>
    </header>
  )
}
