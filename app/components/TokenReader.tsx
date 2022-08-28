import abi from "abi/contracts/FakeToken.sol/FakeToken.json";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

interface Props {
    contractAddress: string;
    currentAccount: string | undefined;
}

export default function TokenReader(props: Props) {
    const [totalSupply, setTotalSupply] = useState<string>("0");

    useEffect(() => {
        if (!window.ethereum) {
            return;
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const erc20 = new ethers.Contract(props.contractAddress, abi, provider);

        erc20
            .totalSupply()
            .then((total: string) => {
                setTotalSupply(ethers.utils.formatEther(total));
            })
            .catch("error", console.error);
    }, [props.contractAddress]);

    return (
        <div>
            <p>{`ERC20 Contract: ${props.contractAddress}`}</p>
            <p>{`FakeToken balance: ${totalSupply}`}</p>
        </div>
    );
}
