import abi from "abi/contracts/FakeToken.sol/FakeToken.json";
import { ethers } from "ethers";
import { useEffect, useMemo, useState } from "react";
import { useGetEthersProviderContext } from "~/hooks/useEthersProvider";
import { type ConnectedAccount } from "~/hooks/useWalletConnector";

interface Props {
    contractAddress: string;
    currentAccount: ConnectedAccount;
}

export default function TokenReader(props: Props) {
    const [totalSupply, setTotalSupply] = useState<string>("0");
    const { provider } = useGetEthersProviderContext();
    const erc20 = useMemo(
        () => new ethers.Contract(props.contractAddress, abi, provider),
        [props.contractAddress, provider]
    );

    useEffect(() => {
        erc20
            .totalSupply()
            .then((total: string) => {
                setTotalSupply(ethers.utils.formatEther(total));
            })
            .catch("error", console.error);
    }, [erc20, props.contractAddress, provider]);

    useEffect(() => {
        if (props.currentAccount) {
            erc20
                .balanceOf(props.currentAccount)
                .then((balance: string) =>
                    console.log(Number(ethers.utils.formatEther(balance)))
                );
        }
    }, [erc20, props.currentAccount]);

    return (
        <div>
            <p>{`ERC20 Contract: ${props.contractAddress}`}</p>
            <p>{`FakeToken balance: ${totalSupply}`}</p>
        </div>
    );
}
