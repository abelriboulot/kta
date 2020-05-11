import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../../components/layout'

export default function CloudDesktop() {
    return ( 
    <>
        <Layout>
            <Head>
                <title> {siteTitle} </title> 
            </Head>
        </Layout>
        <d-title><h1>Cloud Remote Desktop</h1>
            <p>How to setup a cloud instance and use it as a remote environment for movies and games.</p>
        </d-title>
        <d-byline>
  <div class="byline grid">
    <div>
    <h3>Author</h3>
      <p>Abel Riboulot</p> 
    </div>
    <div>
      <h3>Published</h3>
        <p>May 11, 2020</p> 
    </div>
    <div>
      <h3>Last Revised</h3>
        <p>N/A</p> 
    </div>
    <div>
      <h3>Repo</h3>
      
        <p><a href="https://doi.org/10.23915/distill.00026">github</a></p>
    </div>
  </div>
</d-byline>
<d-article></d-article>
    </>
    )
}