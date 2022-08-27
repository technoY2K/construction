import useWalletConnect from "~/hooks/useWalletConnect";
import TokenReader from "~/components/TokenReader";

export default function Index() {
    const { account, balance, connect, disconnect } = useWalletConnect();

    const clickHandler = account ? disconnect : connect;

    return (
        <div>
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
        </div>
    );
}
