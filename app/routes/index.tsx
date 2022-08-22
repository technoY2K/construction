import { useEffect } from "react";
import { ethers } from "ethers";

export default function Index() {
    const clickHandler = () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        provider
            .send("eth_requestAccounts", [])
            .then((accounts) => {
                console.log(accounts);
            })
            .catch((e) => console.log(e));
    };

    return (
        <div>
            <button onClick={clickHandler}>Connect</button>
        </div>
    );
}
