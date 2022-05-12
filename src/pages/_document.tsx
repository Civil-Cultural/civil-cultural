import "dotenv/config";
import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="shortcut icon" href="/civil.png" type="image/png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2? family=Dongle:wght@300;400;700&family=Fira+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
