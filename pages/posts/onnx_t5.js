import { useState } from 'react'
import Post from '../../components/post'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const title = "Fast inference with T5";
export const short_title = "Fast inference with T5";
export const description = "Summarization, translation, Q&A, text generation and more at blazing speed using a T5 version implemented in ONNX.";
export const author = "Abel Riboulot";
export const published_date = "Aug 3, 2020";
export const last_revised_date = "Aug 3, 2020";
export const repo = "https://github.com/abelriboulot/onnxt5"
export const id = "onnx_t5"

export default function CloudDesktop() {

    return (
        <Post id={id} title={title} short_title={short_title} description={description} author={author} published_date={published_date} last_revised_date={last_revised_date} repo={repo}>
            <p>
                I remember the first presentation I gave about transformer. I cheekily took a few e-mails about macro
                from colleagues, split them in half, ran the first half as a prompt, and asked the audience to guess which one was the real mail.
            </p>
            <p>
                The guesses were coin-flips. That taught me two things: <br/>
                <ul>
                  <li>I should spend less time reading my e-mails about macro.</li>
                  <li>Transformers are going to revolutionize the way we operate.</li>
                </ul>
            </p>

            <p>
                The one issue with transformers is that they are fairly slow to inference. Even as the NLP community wraps its
                collective brain around <a href="https://www.gwern.net/GPT-3">GPT-3 writing dad-jokes</a>, one big caveat keeps on showing up: GPT-3 is <a href="https://analyticsindiamag.com/gpt-3-is-great-but-not-without-shortcomings/">
                slow</a>. Actually, most very large transformers are fairly slow. But <a href="https://medium.com/microsoftazure/accelerate-your-nlp-pipelines-using-hugging-face-transformers-and-onnx-runtime-2443578f4333"> this post</a> piqued my interest.
                Huge gains of performance can be gained from better inference libraries. However porting models to ONNX and allowing them to be
                ran using onnxruntime can be difficult. That's why I decided to make <a href="https://github.com/abelriboulot/onnxt5">onnxt5</a>.
            </p>

            <div>
                <h2>What is onnxt5?</h2>
                <p>
                    <a href="https://github.com/abelriboulot/onnxt5">onnxt5</a> is a python library that lets you import SOTA T5 models in a line, and run inference with it very fast
                    (<a href={"https://arxiv.org/pdf/1910.10683.pdf"}>original paper</a>).
                </p>
                <h4>Advantages of this approach</h4>

                <div className="claim">
                <div className="claim-header">Few lines to load a model, one line to use it</div>
                    <div className="tilted-right">
                    NLP models should be accessible to any developer, therefore I tried to make it as easy as possible to
                    get started. <br/>
                    <b>Loading a model</b>
                    <SyntaxHighlighter language="python" style={atomDark}>
        {`from onnxt5 import GenerativeT5
from onnxt5.api import get_encoder_decoder_tokenizer
decoder_sess, encoder_sess, tokenizer = get_encoder_decoder_tokenizer()
generative_t5 = GenerativeT5(encoder_sess, decoder_sess, tokenizer, onnx=True)`}
                </SyntaxHighlighter>
                        <b>Translate a sentence</b>
                        <SyntaxHighlighter language="python" style={atomDark}>
        {`output_text, output_logits = generative_t5(prompt, max_length=100, temperature=0.)
# Output: "J'ai été victime d'une série d'accidents."`}
                </SyntaxHighlighter>
                        <b>Summarize a paragraph</b>
                        <SyntaxHighlighter language="python" style={atomDark}>
        {`generative_t5("summarize: <PARAGRAPH>")`}
                </SyntaxHighlighter>

                    </div>
                </div>

                <div className="claim">
                <div className="claim-header">Up to 4x faster inferences</div>
                    <div className="tilted-right">
                    Leveraging the fantastic work by the onnxruntime team, onnxt5 is able to achieve up to 4X faster inference. <br/>
                    <img className={"medium_image"} src="/images/onnx_t5/Embedding_benchmark.png" alt="Performance on embedding"/>
                    <img className={"medium_image"} src="/images/onnx_t5/Generation_benchmark.png" alt="Performance on generation"/>
                    </div>

                </div>

                <div className="claim">
                <div className="claim-header">Different pre-trained tasks</div>
                    <div className="tilted-right">
                        Google's approach in creating T5 was <a href="https://arxiv.org/abs/1910.10683">to train it on a wide variety of tasks</a>.
                        This also means without fine-tuning you can leverage all the tasks which are listed in the appendix,
                        including Q&A, generation, summarization, translation, etc.
                    </div>
                </div>
                
                <div className="claim">
                <div className="claim-header">Use your own models easily</div>
                    <div className="tilted-right">
                        If the pretrained version of T5 does not fit your need, you can easily export your own models in onnxt5.
                        This gives you the freedom to train more tasks, and provide fast inference on your carefully crafted models.
                    </div>
                </div>

                <div className="figcaption" style={{ "margin-top": "20px" }}>
                A necessary caveat to the performance claims is that it appears that the gain in performance decreases with longer contexts.
                    You can evaluate the gains for your task at hand with the benchmarking notebook.
                </div>
            </div>
            <h2>How do I get started?</h2>
            <p> You can easily get started by downloading the library on pip. </p>
                <SyntaxHighlighter language="bash" style={atomDark}>
        {`pip install onnxt5`}
                </SyntaxHighlighter>
            <p> You can support the development and find examples on <a href="https://github.com/abelriboulot/onnxt5">the repo</a>. </p>

        </Post>
    )
}
