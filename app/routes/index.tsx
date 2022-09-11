import styled from "styled-components";
import TokenReader from "~/components/TokenReader";
import useWalletConnector from "~/hooks/useWalletConnector";
import helloSrc from "../../public/assets/hello.gif";

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

const Anchor = styled.a`
    color: blue;
    text-decoration: underline;
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
            </Bio>
        </Container>
    );
}
