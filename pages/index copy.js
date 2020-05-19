import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
    return ( 
    <Layout>
        <Head>
            <title> {siteTitle} </title> 
        </Head>
        <section>
            <dt-article>
                {allPostsData.map(({ title, short_title, description, author, published_date, last_revised_date, repo, id }) => (
                    <div class="posts-list l-page">
                        <div class = "post-preview peer-reviewed">
                            <div class = "metadata" >
                                <div class = "publishedDate"> {published_date} </div> <div class="tags">
                                    <a 
                                        class="tag peer-reviewed"
                                        title="View this article's reviews as Github issues."
                                        //href="https://github.com/distillpub/post--bayesian-optimization/issues?q=is%3Aissue+label%3Apeer-review"
                                        >
                                            <span> How-To </span>
                                    </a >
                                </div>
                            </div>
                            <Link href="posts/cloud_desktop">
                                <a>
                                    <div class="thumbnail"> <img src="/images/cloud_desktop/remote_desktop.gif" alt=".gif showing the connection from a mac to a windows GPU machine"/></div>
                                    <div class="description">
                                        <h2 class="title">{title}</h2> 
                                        <p class="authors"> {author}</p>
                                        <p class="abstract"> {description} </p> 
                                    </div> 
                                </a>
                            </Link>
                        </div>
                    </div> 
                ))}
            </dt-article > 
        </section> 
    </Layout>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
      props: {
        allPostsData
      }
    }
  }