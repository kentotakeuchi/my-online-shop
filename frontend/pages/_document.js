import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class _Document extends Document {
  render() {
    return (
      <Html lang='en-US'>
        {/* <Head></Head> */}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
