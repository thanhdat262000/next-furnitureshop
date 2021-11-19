import React from "react";
import Document, { Html, Main, NextScript, Head } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />
          <meta
            name="google-site-verification"
            content="6wf4QFd_yuz7n1PVZ24Jd6aZexUhpEPSzjbvAv7Ps2U"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="canonical" href="https://www.noithat93.com"></link>
          <link rel="manifest" href="/site.webmanifest"></link>
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="Noithat93" />
          <meta
            name="twitter:title"
            content="Noithat93 | Thiết kế, thi công nội thất"
          />
          <meta
            name="twitter:description"
            content="Thiết kế, thi công nội thất hàng đầu Việt Nam"
          />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/furnitureshopadminapi/image/upload/v1636044392/z2894069167495_41a9c1b9ed023bc1723ca030c0025861_2a10a985c1.jpg"
          />
          {/* Facebook */}
          <meta property="fb:app_id" content="394734905518135" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Noithat93" />
          <meta
            property="og:description"
            content="Thiết kế, thi công nội thất hàng đầu Việt Nam"
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/furnitureshopadminapi/image/upload/v1636044392/z2894069167495_41a9c1b9ed023bc1723ca030c0025861_2a10a985c1.jpg"
          />
          <meta property="og:image:width" content="200" />
          <meta property="og:image:height" content="200" />
          <meta property="og:locale" content="en_EN" />
          <meta property="og:url" content="https://www.noithat93.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
