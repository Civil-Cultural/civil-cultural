/* ----------- RESOURCES ----------- */
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { useTheme } from 'Hooks/useTheme'
import { Layout } from 'utils/Layout'

/* ----------- COMPONENTS ----------- */
import MainLayout from 'Layouts/MainLayout'
import { Row, Col, Placeholder, Card, ListGroup } from 'react-bootstrap'
import InputSearch from 'Components/InputSearch'

/* ----------- STYLES ----------- */
import styles from 'Pages/home/styles.module.scss'


function CardPostLoad() {
  const { theme } = useTheme();

  return (
    <Card
      className={`${styles.cardContainer} ${styles[theme]} col-12 col-lg-10 col-md-11 mx-md-auto px-0`}
    >
      <Row className="col-12">
        <Col className="col-12 col-md-10 px-0">
          <Card.Body className="px-2 px-md-4">
            <Placeholder
              className={`${styles.cardTextDate} ${styles[theme]}`}
              animation="glow"
            >
              <Placeholder className="col-5" />
            </Placeholder>
            <Placeholder
              className={`${styles.cardTitle} ${styles[theme]}`}
              animation="glow"
            >
              <Placeholder as={Card.Link} className="col-12" />
            </Placeholder>
            <Placeholder
              className={`${styles.cardText} ${styles[theme]}`}
              animation="glow"
            >
              <Placeholder className="col-12" />
              <Placeholder className="col-12" />
            </Placeholder>
          </Card.Body>
        </Col>

        <Col className="col-2 p-0 m-0 d-none d-md-flex justify-content-center align-content-center">
          <Placeholder
            className={styles.boxImg}
            style={{ width: "95%" }}
            animation="glow"
          >
            <Placeholder
              className={`${styles.cardText} ${styles[theme]}`}
              style={{ height: "100%", width: "100%" }}
            />
          </Placeholder>
        </Col>
      </Row>
    </Card>
  );
}

function CardTopicsLoad() {
  const { theme } = useTheme();

  return (
    <ListGroup.Item className={styles.listItem}>
      <Placeholder as={Card.Title} className={styles.cardItem} animation="glow">
        <Placeholder
          as={Card.Link}
          className={`${styles.cardTextDate} ${styles[theme]} col-10`}
        ></Placeholder>
      </Placeholder>
      <Placeholder
        as={Card.Text}
        className={`${styles.cardTextDate} ${styles[theme]}`}
        animation="glow"
      >
        <Placeholder className="col-5" />
      </Placeholder>
    </ListGroup.Item>
  );
}

let titleHome: string = "";

const Home = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const cardTest = Array(4).fill("teste");

  titleHome = t("pages.home.title");

  return (
    <Col className="d-flex my-2 px-0 justify-content-between">
      <Col className="col-12 col-md-10 col-lg-7 mx-auto mx-lg-0 px-0 border-1 border-secondary">
        {
          /* COMPONENTE CARD */
          cardTest.map((x, i) => (
            <Card
              key={i}
              className={`${styles.cardContainer} ${styles[theme]} col-12 col-lg-10 col-md-11 mx-md-auto px-0`}
            >
              <Row className="col-12">
                <Col className="col-12 col-md-10 px-0">
                  <Card.Body className="px-3 px-md-4">
                    <Card.Text
                      className={`${styles.cardTextDate} ${styles[theme]}`}
                    >
                      10/05/2021 &#9679; há 4 horas
                    </Card.Text>
                    <Card.Title className={styles.cardTitle}>
                      <Link href="#">
                        <Card.Link className={styles.cardLink}>
                          Caixa Economica divulga calendário de pagamento do
                          Auxílio Brasil
                        </Card.Link>
                      </Link>
                    </Card.Title>
                    <Card.Text
                      className={`${styles.cardText} ${styles[theme]} text-truncate`}
                    >
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Col>

                <Col className="col-2 p-0 m-0 d-none d-md-flex justify-content-center align-content-center">
                  <Col className={styles.boxImg}>
                    <Image
                      src="https://img.freepik.com/psd-gratuitas/maos-segurando-um-jornal-de-negocios-com-modelo-de-maquete-de-espaco-de-copia-na-mesa-preta-topview_185216-128.jpg?size=626&ext=jpg"
                      alt="Imagem de exemplo"
                      layout="fill"
                      objectFit="cover"
                    />
                  </Col>
                </Col>
              </Row>
            </Card>
          ))
          /* COMPONENT END */
        }

        <CardPostLoad />
      </Col>

      <Col className="col-3 off-set-4 col-lg-3 d-none d-lg-block">
        <section className={`${styles.sectionOthers} ${styles[theme]}`}>
          <Col
            className={`${styles.boxTitleMenu} ${styles[theme]} col-11 mx-auto`}
          >
            <h3 className={`${styles.titleMenu} ${styles[theme]}`}>
              {t("pages.home.menu_publication")}
            </h3>
          </Col>
          <ListGroup className={styles.list}>
            {Array(5)
              .fill("teste")
              .map((x, i) => (
                <ListGroup.Item key={i} className={styles.listItem}>
                  <Card.Title
                    className={styles.cardItem}
                    style={{
                      fontSize: ".86rem",
                      lineHeight: "1.4em",
                      fontWeight: "500",
                    }}
                  >
                    <Link href="#">
                      <Card.Link
                        className={`${styles.cardLink} ${styles[theme]}`}
                      >
                        Elon Musk deixa claro porque prefere Dogecoin á shiba
                        Inu
                      </Card.Link>
                    </Link>
                  </Card.Title>
                  <Card.Text
                    className={`${styles.cardTextDate} ${styles[theme]}`}
                  >
                    10/05/2021 ● há 1 dia
                  </Card.Text>
                </ListGroup.Item>
              ))}
            <CardTopicsLoad />
          </ListGroup>
        </section>

        <section className={`${styles.sectionCategories} ${styles[theme]}`}>
          <Col className={`${styles.boxTitleMenu} col-11 mx-auto`}>
            <h3 className={`${styles.titleMenu} ${styles[theme]}`}>
              {t("pages.home.menu_category")}
            </h3>
          </Col>
          <Col className="col-11 mx-auto py-2 d-flex flex-wrap gap-1">
            <span className={`${styles.badgeCategories} ${styles[theme]}`}>
              <Link href="#">
                <a className={`${styles.badgeLink} ${styles[theme]}`}>
                  Tecnologia
                </a>
              </Link>
            </span>
            <span className={`${styles.badgeCategories} ${styles[theme]}`}>
              <Link href="#">
                <a className={`${styles.badgeLink} ${styles[theme]}`}>Saúde</a>
              </Link>
            </span>
            <span className={`${styles.badgeCategories} ${styles[theme]}`}>
              <Link href="#">
                <a className={`${styles.badgeLink} ${styles[theme]}`}>
                  Ciencia
                </a>
              </Link>
            </span>
            <span className={`${styles.badgeCategories} ${styles[theme]}`}>
              <Link href="#">
                <a className={`${styles.badgeLink} ${styles[theme]}`}>
                  Educação
                </a>
              </Link>
            </span>
            <span className={`${styles.badgeCategories} ${styles[theme]}`}>
              <Link href="#">
                <a className={`${styles.badgeLink} ${styles[theme]}`}>
                  Empreendedorismo
                </a>
              </Link>
            </span>
            <span className={`${styles.badgeCategories} ${styles[theme]}`}>
              <Link href="#">
                <a className={`${styles.badgeLink} ${styles[theme]}`}>
                  Finanças
                </a>
              </Link>
            </span>
            <span className={`${styles.badgeCategories} ${styles[theme]}`}>
              <Link href="#">
                <a className={`${styles.badgeLink} ${styles[theme]}`}>
                  Astronomia
                </a>
              </Link>
            </span>
            <span className={`${styles.badgeCategories} ${styles[theme]}`}>
              <Link href="#">
                <a className={`${styles.badgeLink} ${styles[theme]}`}>IA</a>
              </Link>
            </span>
          </Col>
        </section>
      </Col>
    </Col>
  );
};

export default Layout(Home, MainLayout, {
  title: titleHome,
});