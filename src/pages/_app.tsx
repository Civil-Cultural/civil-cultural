/* ----------- RESOURCES ----------- */
import Head from "next/head";
import { SSRProvider } from "react-bootstrap";
import { appWithTranslation } from "next-i18next";
import { CustomThemeProvider } from "Context/ThemeContext";

/* ----------- STYLES ----------- */
import "Styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="IE=7" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            </Head>

            <SSRProvider>
                <CustomThemeProvider>
                    <Component {...pageProps} />
                </CustomThemeProvider>
            </SSRProvider>
        </>
    );
}

export default appWithTranslation(App);
