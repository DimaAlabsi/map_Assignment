import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Fredoka:wght@300;400;500&family=Glory:ital,wght@0,200;0,300;0,400;0,500;0,600;1,200;1,300;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript src="https://cdn.jsdelivr.net/npm/elm-pep@1.0.6/dist/elm-pep.js" />
      </body>
    </Html>
  );
}
