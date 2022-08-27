import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { reportError } from "~/telemetry";
import { useGetEthersProviderContext } from "./useEthersProvider";

export default function useWalletConnect() {
    const [balance, setBalance] = useState<string | undefined>();
    const [account, setAccount] = useState<string>();
    const { provider } = useGetEthersProviderContext();

    useEffect(() => {
        if (!account || !ethers.utils.isAddress(account)) {
            return;
        }

        if (provider) {
            provider
                .getBalance(account)
                .then((balance) => {
                    setBalance(ethers.utils.formatEther(balance));
                })
                .catch((err) => console.error(err));
        }
    }, [account, provider]);

    const connect = () => {
        if (provider) {
            provider
                .send("eth_requestAccounts", [])
                .then((accounts) => {
                    if (accounts.length > 0) {
                        setAccount(accounts[0]);
                    }
                })
                .catch((err) => {
                    reportError(err);
                });
        }
    };

    const disconnect = () => {
        setBalance(undefined);
        setAccount(undefined);
    };

    return { account, balance, connect, disconnect };
}
