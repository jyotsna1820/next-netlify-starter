import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script
            src={`https://cdnjs.cloudflare.com/ajax/libs/bowser/1.9.4/bowser.min.js`}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            if(bowser.firefox || bowser.chrome || (bowser.msedge && bowser.version < 19)){
              document.body.innerHTML = "<h1  style='text-align:center;margin-top:100px;'>Browser version not supported</h1>\
              <br/><p style='text-align:center'> For optimum website experience use the latest version of Microsoft Edge, Google Chrome<br/>\
               or Firefox to access www.coastappliances.com<br/><br/> Sorry for the Inconvenience.<br/>\
               Contact us at <a href='mailto:connect@coastappliances.com'>connect@coastappliances.com</a></p>";
              document.body.style.display = "block";
            }`
            }}
          ></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
