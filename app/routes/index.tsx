import useWalletConnect from "~/hooks/useWalletConnect";

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
        </div>
    );
}
