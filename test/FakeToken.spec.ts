import { expect } from "chai";
import { ethers } from "hardhat";

describe("FakeToken", () => {
    it("should have the correct initial supply", async () => {
        const initialSupplay = ethers.utils.parseEther("10000.0");
        const FakeToken = await ethers.getContractFactory("FakeToken");
        const contract = await FakeToken.deploy(initialSupplay);

        await contract.deployed();

        expect(await contract.totalSupply()).to.equal(initialSupplay);
    });
});
