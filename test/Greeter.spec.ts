import { expect } from "chai";
import { ethers } from "hardhat";

describe("Greeter", () => {
    it("should greet", async () => {
        const Greeter = await ethers.getContractFactory("Greeter");
        const contract = await Greeter.deploy("Howdy!");

        await contract.deployed();

        expect(await contract.greet()).to.equal("Howdy!");
    });

    it("setGreeting", async () => {
        const Greeter = await ethers.getContractFactory("Greeter");
        const contract = await Greeter.deploy("Howdy!");

        await contract.deployed();

        const contractTx = await contract.setGreeting("Howdy again!");

        await contractTx.wait();

        expect(await contract.greet()).to.equal("Howdy again!");
    });
});
