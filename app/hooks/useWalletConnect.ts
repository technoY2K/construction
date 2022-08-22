import { useEffect, useState } from "react";
import { ethers } from "ethers";

export default function useWalletConnect() {
    const [balance, setBalance] = useState<string | undefined>();
    const [account, setAccount] = useState<string | undefined>();
    const [detectMetaMask, setDetectMetaMask] = useState(true);

    useEffect(() => {
        setDetectMetaMask(!!window.ethereum);
    }, []);

    useEffect(() => {
        if (!account || !ethers.utils.isAddress(account)) {
            return;
        }

        if (!window.ethereum) {
            return;
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);

        provider
            .getBalance(account)
            .then((balance) => {
                setBalance(ethers.utils.formatEther(balance));
            })
            .catch((err) => console.error(err));
    }, [account]);

    const connect = () => {
        if (!window.ethereum) {
            return;
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);

        provider
            .send("eth_requestAccounts", [])
            .then((accounts) => {
                if (accounts.length > 0) {
                    setAccount(accounts[0]);
                }
            })
            .catch((err) => console.error("Error connection wallet"));
    };

    const disconnect = () => {
        setBalance(undefined);
        setAccount(undefined);
    };

    return { account, balance, connect, disconnect, detectMetaMask };
}
