import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'

export default function Home() {
    return ( 
    <Layout>
        <Head>
            <title> {siteTitle} </title> 
        </Head>
        <section>
            <dt-article>
                <div className="posts-list l-page">
                    <div className="post-preview peer-reviewed">
                        <div className="metadata">
                            <div className="publishedDate"> Aug 3, 2020</div>
                            <div className="tags">
                                <a
                                    className="tag peer-reviewed"
                                    title="View this article's reviews as Github issues."
                                    href="https://github.com/abelriboulot/onnxt5"
                                >
                                    <span> Open-source </span>
                                </a>
                            </div>
                        </div>
                        <Link href="posts/onnx_t5">
                            <a>
                                <div className="thumbnail"><img src="/images/onnx_t5/onnxt5.gif"
                                                                alt=".gif showing translation using onnxt5"/>
                                </div>
                                <div className="description">
                                    <h2 className="title">Fast inference with T5</h2>
                                    <p className="authors"> Abel Riboulot </p>
                                    <p className="abstract"> Summarization, translation, Q&A, text generation and more at blazing speed using a T5 version implemented in ONNX. </p>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </dt-article>
            <dt-article>
                <div class="posts-list l-page">
                    <div class = "post-preview peer-reviewed">
                        <div class = "metadata" >
                            <div class = "publishedDate"> May 17, 2020 </div> <div class="tags">
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
                                    <h2 class="title">Gaming and movies on the cloud</h2> 
                                    <p class="authors"> Abel Riboulot </p>
                                    <p class="abstract"> How to setup a cloud instance and use it as a remote environment for movies and games. </p> 
                                </div> 
                            </a>
                        </Link>
                    </div>
                </div> 
            </dt-article > 
        </section> 
    </Layout>
    )
}