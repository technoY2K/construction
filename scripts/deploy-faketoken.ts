import { ethers } from "hardhat";

async function main() {
    const initialSupplay = ethers.utils.parseEther("2500.0");
    const FakeToken = await ethers.getContractFactory("FakeToken");
    const contract = await FakeToken.deploy(initialSupplay);

    await contract.deployed();
    console.log("FakeToken deployed to: ", contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
