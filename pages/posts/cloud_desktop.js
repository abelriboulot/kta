import { useState } from 'react'
import Post from '../../components/post'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const title = "Cloud Gaming How-To";
export const short_title = "Gaming and movies on the cloud";
export const description = "How to set up a cloud instance and use it as a remote environment for movies and games.";
export const author = "Abel Riboulot";
export const published_date = "May 17, 2020";
export const last_revised_date = "May 19, 2020";
export const repo = "N/A"
export const id = "cloud_desktop"

export default function CloudDesktop() {
    const possible_cloud_providers = ["AWS", "GCP"]
    const [cloud_provider, setCloud] = useState("GCP");
    const possible_os = ["Windows", "Mac", "Linux"]
    const [client_os, setOS] = useState("Mac");

    return (
        <Post id={id} title={title} short_title={short_title} description={description} author={author} published_date={published_date} last_revised_date={last_revised_date} repo={repo}>
            <p>
                Hey folks, with the world keeping apart I thought it would be a good idea to make a small post on how to setup a remote desktop accessible from anywhere in the world, alone or together.
                The costs for this tutorial range from $.70/h to $1.2/h for a gaming &amp; ML server with a GPU (half this if you use preemptible / spot instances), but I would highly suggest using <a href="https://broadwaylab.com/how-to-get-free-aws-credits/">free credits</a>.
            </p>

            <div>
                <h4>Advantages of cloud remote</h4>

                <div className="claim">
                <div className="claim-header">Watch movies, browse and play together</div>
                I found myself using my remote machine mostly to watch movies and play with friends over the world. 
                I'm currently in San Francisco but have friends in Tokyo and France I often catch up with. Cloud remote lets us essentially be on the same PC, without lag or degradation of performance.
                </div>

                <div className="claim">
                <div className="claim-header">Platform agnostic</div>
                I am on a MacBook, the remote instance lets me use Windows-only apps and games.
                </div>

                <div className="claim">
                <div className="claim-header">Performance</div>
                Wanna play the latest games on maximum definition and with ray-tracing on? The cloud lets you deploy top-of-the-line servers at will, and adjust your configuration to your usage, paying only for the hours you actually use.
                I also found this setup to produce a much better experience than alternatives like Stadia.
                </div>
                
                <div className="claim">
                <div className="claim-header">Free credits</div>
                There are a lot of ways to get free AWS or GCP credits. New GCP users start off with $300 of credits for instance.
                </div>

                <div className="figcaption" style={{ "margin-top": "20px" }}>
                The big caveat for all the claims above is that you need a connection relatively fast, <b>at least 2mbps</b> otherwise you might experience a degradation of the quality of the video, and possibly lag.
                </div>
            </div>
            <h2>How do I get started?</h2>
            <p>Download on your local machine <a href='https://parsecgaming.com/downloads/'>Parsec and make an account</a>. Parsec will be used as the hub for your distant machines. I have tried different solutions and Parsec gave me by far the fastest and smoothest experience (I'm not affiliated in any way to the company btw, but if they want to send over a t-shirt, I'll let them).</p>
            <p>You will also need an account in a cloud provider, with the appropriate quotas for GCP. If you already have one you can skip this.</p>
            <table className="choice_table">
                <tr>
                    {possible_cloud_providers.map((cloud) => (
                        <th className={cloud_provider===cloud ? 'selected' : null} onClick={() => setCloud(cloud)}>{cloud}</th>
                    ))}
                </tr>
            </table>
            <p>Go <a href={cloud_provider==='AWS'? 'https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/':'https://cloud.google.com/free/'}>here to create your {cloud_provider} account</a>. GCP gives you $300 of free credit as a new user, but AWS gives you a free Windows Server license so it's a trade-off. 
            Additionally, AWS instructions require minimal use of the terminal and might be easier for some users. In either case, you will need to add a credit card to the account.</p>
            
            <table className="choice_table">
                <tr>
                    {possible_os.map((os) => (
                        <th className={client_os===os ? 'selected' : null} onClick={() => setOS(os)}>{os}</th>
                    ))}
                </tr>
            </table>
            {/* GCP instructions */}
            {cloud_provider==='GCP'? (
                <>
                {/* Linux instructions */}
                {client_os==='Linux' ? (
                    <div>
                        <p>Open up a terminal and run the below.</p>
                        <SyntaxHighlighter language="bash" style={atomDark}>
                        {`curl https://sdk.cloud.google.com | bash && exec -l $SHELL`}
                        </SyntaxHighlighter>
                        <div className="figcaption" style={{ "margin-top": "20px" }}>
                            If you have any issue with the above just check <a href="https://cloud.google.com/sdk/docs/quickstart-linux">this link</a>.
                        </div>
                    </div>
                ):null}

                {/* Mac instructions */}
                {client_os==='Mac' ? (
                    <div>
                        <p>Open your terminal (available in the Launchpad > Utilities > Terminal)</p>
                        <p>You will need brew and brew cask to run the following instructions. You can install them with the below. 
                            Alternatively you can just <a href="https://cloud.google.com/sdk/docs/quickstart-macos">follow the manual instructions here</a>.</p>
                        <SyntaxHighlighter language="bash" style={atomDark}>
                        {`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`}
                        </SyntaxHighlighter>
                        <p>Run the following to install the gcloud CLI.</p>
                        <SyntaxHighlighter language="bash" style={atomDark}>
                            {`brew cask install google-cloud-sdk`}
                        </SyntaxHighlighter>
                        <div className="figcaption" style={{ "margin-top": "20px" }}>
                            If you have any issue with the above just check <a href="https://cloud.google.com/sdk/docs/quickstart-macos">this link</a>.
                        </div>
                    </div>
                ):null}

                {/* Windows instructions */}
                {client_os==='Windows' ? (
                    <div>
                        Install the Google Cloud SDK Shell following those <a href="https://cloud.google.com/sdk/docs/quickstart-windows">instructions</a>.
                    </div>
                ):null}
                <p>You will need to initialize the gcloud CLI and activate the GCE API with the following commands.</p>
                <SyntaxHighlighter language="bash" style={atomDark}>
        {`gcloud init
gcloud services enable compute.googleapis.com`}
                </SyntaxHighlighter>
                {cloud_provider==='GCP'? (
            <p>GCP requires you to request an increase in quotas before using GPUs. To do so click <a href="https://console.cloud.google.com/iam-admin/quotas">here to access the quotas page</a>, or search for "quotas" in the search bar, and select "All Quotas".
            Click on the dropdown "All metrics", and deselect all. Select "GPUs (all regions)", and edit the quota, setting it to 1, before submitting the request. The request should be fulfilled almost instantly.<br/><img src="/images/cloud_desktop/quota_increase.png" alt="Quota increase example"/></p>
            ):null}
                <p>Start a server with the following command. I recommend using a n1-standard-4 which cost around $.70/h for most games / movies, or a n1-standard-8 for $1.2/h in case of particularly demanding tasks. The below command uses a T4 GPU, but you can also go for a P4. Choose the region that is the closest to you, and make sure that they have T4 GPUs available. You can use the following command to see the availability of GPUs.</p>
                <SyntaxHighlighter language="bash" style={atomDark}>gcloud compute accelerator-types list</SyntaxHighlighter>
    <p>Sometime regions run out of available GPUs, in which case you can just try a different one.</p>
    <p>Launch your instance with the following command.</p>
                <SyntaxHighlighter language="bash" style={atomDark}>
        {`gcloud compute instances create remote-gpu \\
        --machine-type n1-standard-8 \\
        --accelerator type=nvidia-tesla-p4-vws,count=1 \\
        --image-project windows-cloud \\
        --image-family windows-2019 \\
        --boot-disk-size 200 \\
        --zone us-west2-b \\
        --maintenance-policy "TERMINATE"
    `}</SyntaxHighlighter>
        <p>If everything went well, you should be able to see in the terminal your remote IP, and your server running on the Compute Engine > VM instances tab in the <a href="https://console.cloud.google.com/compute/instances">GCP console</a>.<br/><img src="/images/cloud_desktop/instance_showing_up.png" alt="Instance showing up"/></p>
        <p>Head to <a href="https://console.cloud.google.com/compute/instances">the console</a>, and first set up a new Windows password, and make a note of it. <br/><img src="/images/cloud_desktop/set_windows_password.png" alt="Set windows password"/></p>
        <p>Click on "RDP" to connect to your server (you will need to install a chrome extension).</p>
        <p>Once you are connected, launch the Google Cloud SDK Shell. <br/><img src="/images/cloud_desktop/google_cloud_sdk_shell.png" alt="Google SDK"/></p>
        <p>Launch a powershell by typing... Well... "powershell".</p>
        </>):<>
            {/* AWS instructions */}
            {/* Linux instructions */}
            {client_os==='Linux' ? (
                <div>
                    <p>If Remmina is not installed in your distribution, <a href='https://remmina.org/'>install it from here</a>.</p>
                </div>
            ):null}

            {/* Mac instructions */}
            {client_os==='Mac' ? (
                <div>
                    <p>Download and install <a href='https://apps.apple.com/us/app/microsoft-remote-desktop/id1295203466?mt=12'>Microsoft Remote Desktop here</a>.</p>
                </div>
            ):null}

            {/* Windows instructions */}
            {client_os==='Windows' ? (
                <div>
                    <p>Download and install <a href='https://www.microsoft.com/en-us/p/microsoft-remote-desktop/9wzdncrfj3ps'>Microsoft Remote Desktop here</a>.</p>
                </div>
            ):null}
            <p><b>1)</b> Subscribe to the <a href="https://aws.amazon.com/marketplace/pp/B07STLTHM8">NVIDIA Gaming PC AMI</a>, this gives you access to a free Windows Server license.</p> 
            <p><b>2)</b> Continue to configuration, select your preferred region, and press "Continue to Launch". In the "Choose Action" section, choose "Launch through EC2", and press "Launch".</p>
            <p><b>3)</b> Select the instance type you want, and press "Next" until you reach the "Configure Security Group" screen. Add the following rule to your instance to allow RDP connections.<br/><img src="/images/cloud_desktop/allow_rdp.png" alt="Allow RDP"/></p>
            <p><b>4)</b> Press "Review and Launch", and launch your instance. Create a new key pair and download it, you will need it to get the Windows password.</p>
            <p><b>5)</b> When launched, click on your instance name to see it in the instances view of AWS. Wait for the Status Checks to turn green, and press "Connect". Click on "Get Password". Upload the .pem file that you previously created, and copy the windows password. Once you have your credentials, download the Remote Desktop File.</p>
            <p><b>6)</b> Launch the .rdp file on the RDP software you previously downloaded, and connect using your credentials.</p>
            <p><b>7)</b> Launch Powershell on your remote machine by clicking the Windows icon and then Powershell.<br/><img src="/images/cloud_desktop/powershell_icon.png" alt="Powershell icon"/></p>

        </>}
        <p>The following should set up everything you need (h/t to the parsec team who made <a href="https://github.com/jamesstringerparsec/Parsec-Cloud-Preparation-Tool">that repo</a>. I also recommend inputting it line by line.).</p>
<SyntaxHighlighter language="bash" style={atomDark}>
    {`[Net.ServicePointManager]::SecurityProtocol = "tls12, tls11, tls"  
(New-Object System.Net.WebClient).DownloadFile("https://github.com/jamesstringerparsec/Parsec-Cloud-Preparation-Tool/archive/master.zip","$ENV:UserProfile\\Downloads\\Parsec-Cloud-Preparation-Tool.zip")  
New-Item -Path $ENV:UserProfile\\Downloads\\Parsec-Cloud-Preparation-Tool -ItemType Directory  
Expand-Archive $ENV:UserProfile\\Downloads\\Parsec-Cloud-Preparation-Tool.Zip -DestinationPath $ENV:UserProfile\\Downloads\\Parsec-Cloud-Preparation-Tool  
CD $ENV:UserProfile\\Downloads\\Parsec-Cloud-Preparation-Tool\\Parsec-Cloud-Preparation-Tool-master\\ 
Powershell.exe -File $ENV:UserProfile\\Downloads\\Parsec-Cloud-Preparation-Tool\\Parsec-Cloud-Preparation-Tool-master\\Loader.ps1
`}</SyntaxHighlighter>
{cloud_provider==='AWS'? (<p>The installer will ask you for your AWS access key to install the newest drivers. Whilst it is preferable to give it, Parsec will work as is, and you do not need to complete this part.</p>) :null}
<p>As you follow the instructions, a reboot may be required.</p> 
<p>Log into parsec and start sharing your remote server. On your local laptop / desktop, launch Parsec, and your machine should appear, ready to go. Connect to it in parsec, and exit the RDP program.<br/><img src="/images/cloud_desktop/remote_desktop.gif" alt=".gif showing the connection from a mac to a windows GPU machine"/></p>
<p>Don't forget to shut down your instance when you're not using it, otherwise you will be billed for it. You're ready to game your sorrows away, alone, or <a href="https://support.parsecgaming.com/hc/en-us/articles/115002681352-Allowing-A-Friend-To-Connect-To-Your-Computer"> together</a>!
</p>
        </Post>
    )
}
