import { type HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("hardhat-abi-exporter");

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    solidity: "0.8.9",
    networks: {
        hardhat: {
            chainId: 31337,
        },
    },
};

export default config;
