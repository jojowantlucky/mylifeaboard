import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='zxx'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap'
            rel='stylesheet'
          />
          <link
            rel='icon'
            type='image/png'
            href='/images/favicon.png'></link>
          <link
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
            rel='stylesheet'/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
