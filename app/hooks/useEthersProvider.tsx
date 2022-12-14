/* 
    Provides a single Web3Provider to the whole App
*/
import { ethers } from "ethers";
import { createContext, useContext, useEffect, useState } from "react";

interface Context {
    provider?: ethers.providers.Web3Provider;
}

interface Props {
    children?: React.ReactNode;
}

export enum EPErrors {
    MetaMaskNotInstalled = "1",
}

const initial: Context = {
    provider: undefined,
};

const WrapperContext = createContext(initial);
export const useGetEthersProviderContext = () => useContext(WrapperContext);

export const EthersProvider = (props: Props) => {
    const [contextValue, setContext] = useState<Context>(initial);

    useEffect(() => {
        if (!window.ethereum) {
            // error gets caught in root.tsx
            throw new Error(EPErrors.MetaMaskNotInstalled);
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);

        if (provider) {
            setContext({ provider });
        }
    }, []);

    return (
        <WrapperContext.Provider value={contextValue}>
            {props.children}
        </WrapperContext.Provider>
    );
};
