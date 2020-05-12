import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Layout, { siteTitle } from '../../components/layout'

export default function CloudDesktop() {
    const possible_cloud_providers = ["AWS", "GCP"]
    const [cloud_provider, setCloud] = useState("GCP");
    const possible_os = ["Windows", "Mac", "Ubuntu"]
    const [client_os, setOS] = useState("GCP");
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
        <d-article>
            <p>
                Hey folks, with the world keeping apart I thought it would be a good idea to make a small post on how to setup a remote desktop you can access from anywhere in the world, alone or together.
                The below does not cost anything besides the price of the remote machine (~6c/h without a GPU, ~80c/h for a gaming / ML server with a GPU).
            </p>

            <div>
                <h4>Advantages of cloud remote</h4>

                <div className="claim">
                <div className="claim-header">Watch movies, browse and play together</div>
                I found myself using my remote machine mostly to watch movies and play with friends over the world. 
                I'm currently in San Franciso but have friends in Tokyo and France I often catch up with. Cloud remote lets us essentially be on the same PC.
                </div>

                <div className="claim">
                <div className="claim-header">Platform agnostic</div>
                I am on a MacBook, the remote instance lets me use Windows-only apps and games.
                </div>

                <div className="claim">
                <div className="claim-header">Performance</div>
                Using the cloud to remote ....
                </div>

                <div className="figcaption" style={{ "margin-top": "20px" }}>
                The big caveat for all of the claim above is that you need a connection relatively fast, <b>at least 2mbps</b> othewise you might experience a degredation of the quality of the video, and possibly lag.
                </div>
            </div>
            <h2>TLDR;</h2>
            <p>The easiest way to set everything up is to use the following scripts.</p>
            <table class="choice_table">
                <td>
                    {possible_os.map((os) => (
                        <th className={client_os===os ? 'selected' : null} onClick={() => setOS(os)}>{os}</th>
                    ))}
                </td>
            </table>
            <table class="choice_table">
                <td>
                    {possible_cloud_providers.map((cloud) => (
                        <th className={cloud_provider===cloud ? 'selected' : null} onClick={() => setCloud(cloud)}>{cloud}</th>
                    ))}
                </td>
            </table>
            <p>Language selected is {cloud_provider}</p>
        </d-article>
        <style jsx>{`
        .claim-figure {
            --font-style: italic;
        }
        .claim-header {
            font-weight: bold;
            font-size: 90%;
        }
        .claim {
            margin-top: 5px;
            margin-bottom: 5px;
            flex-grow: 1;
        }
        .figcaption {
            font-size: 13px;
            color: rgba(0, 0, 0, 0.6);
            line-height: 1.5em;
        }
        
      `}</style>
    </>
    )
}