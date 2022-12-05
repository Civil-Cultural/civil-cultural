/* ----------- RESOURCES ----------- */
import { useState } from "react";
import { useTheme } from "Hooks/useTheme";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { linksMenu } from "Utils/LinksMenu";

/* ----------- ICONS ----------- */
import { BiLogOutCircle, BiLogInCircle } from "react-icons/bi";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { BsGear } from "react-icons/bs";

/* ----------- COMPONENTS ----------- */
import Switch from "Components/Switch";
import NextLink from "next/link";
import { Col, Nav } from "react-bootstrap";

/* ----------- STYLES ----------- */
import styles from "Components/Sidebar/styles.module.scss";

interface SidebarState {
    active: boolean;
    handleClose: () => void;
}

export default function Sidebar({ active }: SidebarState) {
    const [login, setLogin] = useState(false); // Estado só para simulação do login por enquanto
    const { theme } = useTheme();
    const { t } = useTranslation();
    const router = useRouter();

    let menus = linksMenu.map((link) => ({
        ...link,
        title: t(link.title),
    }));

    return (
        <Col
            className={`${styles.sidebar_container} ${styles[theme]} d-flex  ${
                active ? styles.show : styles.hidden
            }`}
        >
            <Col className={`${styles.sidebar_body} ${styles[theme]} flex-grow-1 col-auto`}>
                <Nav className="d-flex flex-column mt-4 gap-1">
                    {menus.map(({ href, title, Icon }, i) => (
                        <NextLink href={href} key={i}>
                            <Nav.Link
                                href={href}
                                className={`${styles.nav_item} ${
                                    router.asPath === href ? styles.active_link : ""
                                }`}
                                title={title}
                            >
                                {Icon && <Icon className="me-2" />} <span>{title}</span>
                            </Nav.Link>
                        </NextLink>
                    ))}
                </Nav>
            </Col>

            <Col className={`${styles.sidebar_footer} col-auto`}>
                <Col
                    className={`${styles.item_footer_nav} ${styles[theme]} ${
                        router.asPath === "/profile" ? styles.active_link : ""
                    } mb-2`}
                >
                    <NextLink href="/profile">
                        <Nav.Link href="/profile" className={`${styles.nav_item}`}>
                            <BsGear className="me-2" />
                            <span className="m-0">{t("components.sidebar.configuration")}</span>
                        </Nav.Link>
                    </NextLink>
                </Col>

                <Col
                    className={`${styles.action_account} ${styles[theme]} mb-2`}
                    onClick={() => setLogin((x) => !x)}
                >
                    {login ? (
                        <button
                            className={`${styles.button_action} w-100 h-100 btn remove-bg-image remove-focus border-0`}
                        >
                            <BiLogOutCircle />
                            <span className="m-0">Logout</span>
                        </button>
                    ) : (
                        <button
                            className={`${styles.button_action} w-100 h-100 btn remove-bg-image remove-focus border-0`}
                        >
                            <BiLogInCircle />
                            <span className="m-0">Login</span>
                        </button>
                    )}
                </Col>

                <Col
                    className={`${styles.item_footer} ${styles.theme_mode} ${styles[theme]} d-none d-lg-block`}
                >
                    <span className={styles.mode_info}>
                        {theme == "light" ? (
                            <>
                                <MdOutlineLightMode />
                                <span>Light</span>
                            </>
                        ) : (
                            <>
                                <MdDarkMode />
                                <span>Dark</span>
                            </>
                        )}
                    </span>
                    <Switch className={active ? "ms-2" : ""} />
                </Col>
            </Col>
        </Col>
    );
}
