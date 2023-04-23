/* ----------- RESOURCES ----------- */
import { useState } from "react";
import Head from "next/head";

/* ----------- HOOKS ----------- */
import { useTheme } from "Context/ThemeContext";

/* ----------- CONTRACTS ----------- */
import { LayoutProps } from "Contracts/PageProps";

/* ----------- COMPONENTS ----------- */
import Header from "Components/Header";
import Sidebar from "Components/Sidebar";
import { Col } from "react-bootstrap";

/* ----------- STYLES ----------- */
import styles from "Layouts/MainLayout/styles.module.scss";

export default function MainLayout({ children, title }: LayoutProps) {
  const [showSidebar, setShowSidebar] = useState(false);
  const { theme } = useTheme();

  return (
    <div className={`${styles.layout_container} ${styles[theme]}`}>
      <Head>
        <title>{title ? `${title} - Civil Cultural` : "Civil cultural"}</title>
      </Head>

      <Header
        isActive={showSidebar}
        setIsActive={() => setShowSidebar((x) => !x)}
      />
      <div className={styles.div_header} />

      <main className={styles.main}>
        <Col as="section" className="row p-0 m-0">
          <Sidebar
            active={showSidebar}
            handleClose={() => setShowSidebar(false)}
          />

          {children}
        </Col>
      </main>
    </div>
  );
}
