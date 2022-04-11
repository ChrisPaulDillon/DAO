import {HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import { ethers } from "hardhat";
import verifyContract from "../util/verifyContract";
import { LOCAL_CHAINS } from "../util/deployerHelper";

const deployGovernanceToken: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {

    const { getNamedAccounts, deployments, network} = hre;
    const {deploy, log} = deployments;
    const { deployer } = await getNamedAccounts();

    log("deploying gov token");
    const governanceToken = await deploy("GovernanceToken", {
        from: deployer,
        args: [],
        log: true
        //waitConfirmations
    })
    log(`Deployed Governance Token to Address: ${governanceToken.address}`)

    if (!LOCAL_CHAINS.includes(network.name) && process.env.BSCSCAN_API) {
        await verifyContract(governanceToken.address, [])
    }

    await delegate(governanceToken.address, deployer);
}

const delegate = async (govTokenAddress: string, delegatedAccount: string) => {
    const governanceToken = await ethers.getContractAt("GovernanceToken", govTokenAddress);
    const tx = await governanceToken.delegate(delegatedAccount);
    await tx.wait(1)
    console.log(`Checkpoints ${await governanceToken.numCheckpoints(delegatedAccount)}`)
}

export default deployGovernanceToken;