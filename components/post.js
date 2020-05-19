import Layout, { siteTitle } from './layout'
import ClapButton from 'react-clap-button';
import useClaps from '../hooks/use-claps';
import fetch from '../lib/fetch'
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Post({id, title, short_title, description, author, published_date, last_revised_date, repo, children}) {
    const { status, data, error } = useClaps(id, 0);
    const [clapped, setClapped] = useState(0);
    const onCountChange = ({ count, countTotal }) => {
        fetch('/api/claps?id=' + id + '&increment=1');
        setClapped(1);
    }

    return (<>
        <Layout>
            <Head>
                <title> {siteTitle}: {title} </title>
            </Head>
        </Layout>
        <d-title><h1>{short_title}</h1>
        <p>{description}</p>
        </d-title>
        <d-byline>
            <div className="byline grid">
                <div>
                <h3>Author</h3>
                <p>{author}</p> 
                </div>
                <div>
                <h3>Published</h3>
                <p>{published_date}</p> 
                </div>
                <div>
                <h3>Last Revised</h3>
                    <p>{last_revised_date}</p> 
                </div>
                <div>
                <h3>Repo</h3>
                    <p>{repo}</p>
                </div>
            </div>
        </d-byline>
        <d-article>
            {children}
            
        <hr className="clap-hr"/>
        <div className="clap-div"><ClapButton count={0} countTotal={status === "loading" ? 0: status === "error" ? (console.log(error)) : (data.total
                    )} isClicked={false} maxCount={1} onCountChange={onCountChange} /><h5 className="clap-number">{status === "loading" ? 0: status === "error" ? (console.log(error)) : (data.total
                        + clapped) } Claps</h5></div>
                
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
                p img {
                    max-width:100%;
                    object-fit: scale-down;
                }
                .clap-hr {
                    margin-bottom:15px;
                }
                .clap-div {
                    text-align:right;
                    padding-top:10px;
                    padding-left:10px;
                    height:140px;
                }
                .clap-number {
                    margin-block-start: 10px;
                    margin-right:10px;
                }
            `}</style>
    </>)
}