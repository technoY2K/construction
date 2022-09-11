import styled from "styled-components";
import TokenReader from "~/components/TokenReader";
import useWalletConnector from "~/hooks/useWalletConnector";
import githubSrc from "../../public/assets/github.gif";
import helloSrc from "../../public/assets/hello.gif";
import linkedinSrc from "../../public/assets/linkedin.gif";
import realSrc from "../../public/assets/real.png";
import stackSrc from "../../public/assets/stackoverflow.gif";
import twitterSrc from "../../public/assets/twitter.gif";

const Container = styled.div`
    width: 100%;
`;

const Save = () => {
    const { account, balance, connect, disconnect } = useWalletConnector();

    const clickHandler = account ? disconnect : connect;

    return (
        <Container>
            <p>{`Account: ${account ? account : ""}`}</p>
            <p>{`Balance: ${balance ? balance : ""}`}</p>
            <button onClick={clickHandler} style={{ cursor: "pointer" }}>
                {account ? "Disconnect" : "Connect"}
            </button>
            <div>
                <TokenReader
                    contractAddress="0x5FbDB2315678afecb367f032d93F642f64180aa3"
                    currentAccount={account}
                />
            </div>
        </Container>
    );
};

const GreetingsBox = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 32px;
    justify-content: left;
`;

const Bio = styled.div`
    font-size: 20px;
    line-height: 1.5em;
`;

const Morpheus = styled.div`
    display: flex;
    justify-content: center;
`;

const Anchor = styled.a`
    color: blue;
    text-decoration: underline;
`;

const SocialLists = styled.ul`
    list-style: none;
    margin-top: 48px;

    li {
        font-size: 18px;
        margin-bottom: 64px;
        img {
            width: 64px;
            height: 64px;
        }
    }
`;

export default function Index() {
    return (
        <Container>
            <GreetingsBox>
                <img src={helloSrc} alt="hello-gif" />
                <h1>Hello, I'm Kevia</h1>
            </GreetingsBox>
            <Bio>
                <p>
                    I am currently working as a software engineer at{" "}
                    <Anchor href="https:nft.gamestop.com">GameStop</Anchor>. Our
                    team is responsible for the NFT marketplace which has a
                    focus on Web3 gaming. Blockchain is a truly amazing
                    technology and I believe we are only in the early stages of
                    unlocking its true potential. Cryptocurrencies and NFTs are
                    the obvious and easy implementations, we are still in the
                    process of discovering how it can really improve our digital
                    lives.
                </p>
                <p>
                    Something I've been thinking about a lot lately is how can
                    blockchain technology help us combat disinformation and
                    misinformation? The explosion of information in our modern
                    age has made it harder to understand reality and to discern
                    fact from fiction.
                </p>
                <Morpheus>
                    <img src={realSrc} alt="what-is-real?" />
                </Morpheus>
                <p>
                    We live in what could only be described as an information
                    Utopia. Anything and everything you want to possibly know is
                    accessible at your finger tips. However, because of filter
                    bubbles, cognitive bias, cognitive dissonance and attention
                    economics, we as a society are more divided than ever! Could
                    blockchain technology fix our media landscape by realigning
                    the incentives? Could we be able to trust what we read
                    online if the blockchain provided some measure of
                    provenance?
                </p>
                <p>
                    Outside of work I enjoy reading sci-fi books, exercising in
                    the mornings, ugly websites from the 1990s (obviously) and
                    more coding.
                </p>
            </Bio>
            <hr />
            <h2>Where you can reach me</h2>
            <SocialLists>
                <li>
                    <a
                        href="https://twitter.com/technoY2K"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={twitterSrc} alt="twitter" />
                        Twitter
                    </a>
                </li>
                <li>
                    <a href="https://github.com/technoY2K">
                        <img src={githubSrc} alt="github" />
                        Github
                    </a>
                </li>
                <li>
                    <a href="https://stackoverflow.com/users/3276646/technoY2K">
                        <img src={stackSrc} alt="stackoverflow" />
                        StackOverflow
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/kevia-cloud/">
                        <img src={linkedinSrc} alt="linkedin" />
                        LinkedIn
                    </a>
                </li>
            </SocialLists>
        </Container>
    );
}
