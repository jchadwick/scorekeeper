import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`flex min-h-screen flex-col items-center p-24`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
