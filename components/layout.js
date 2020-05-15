import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import { GA_TRACKING_ID } from '../lib/gtag'

export const siteTitle = 'kta.io'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta
          name="description"
          content="TODO"
        />
        <meta name="viewport" content="width=device-width"/>
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
                    src="/images/logo.svg"
                    className={`${styles.headerHomeImage}`}
                    alt="logo"
                    width="120px"
                    />
                </a>
            </Link>
            <div className="nav">
            {/*
              <a href="/about/">About</a>
              <a href="/contact/">Contact</a>
            */}
            </div>
        </div>
      </dt-header>
      <main>{children}</main>
    </div>
  )
}