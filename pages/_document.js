import Document, { Html, Head, Main, NextScript } from 'next/document'
import BLOG from '@/blog.config'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang={BLOG.lang}>
        <Head>
          <link rel='icon' href='https://d2y5h3osumboay.cloudfront.net/7ej4m91hz0lcg5s1iqcspgys8izo' />
          <link rel='icon' href='https://d2y5h3osumboay.cloudfront.net/7ej4m91hz0lcg5s1iqcspgys8izo' type='image/svg+xml' />
          {BLOG.appearance === 'auto' ? (
            <>
              <meta
                name='theme-color'
                content={BLOG.lightBackground}
                media='(prefers-color-scheme: light)'
              />
              <meta
                name='theme-color'
                content={BLOG.darkBackground}
                media='(prefers-color-scheme: dark)'
              />
            </>
          ) : (
            <meta
              name='theme-color'
              content={
                BLOG.appearance === 'dark'
                  ? BLOG.darkBackground
                  : BLOG.lightBackground
              }
            />
          )}
        </Head>
        <body className='bg-day dark:bg-night'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
