import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'

export const siteTitle = 'kta.io'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="TODO"
        />
        <meta
          property="og:image"
          content={`TODO`}
        />
        <meta name="og:title" content={siteTitle} />
      </Head>

      <dt-header>
        <div className={styles.header}>
            <Link href="/">
                <a>
                    <img
                    src="/images/logo.png"
                    className={`${styles.headerHomeImage}`}
                    alt="logo"
                    />
                </a>
            </Link>
            <div class="nav">
              <a href="/about/">About</a>
              <a href="/contact/">Contact</a>
            </div>
        </div>
      </dt-header>
      <main>{children}</main>
    </div>
  )
}