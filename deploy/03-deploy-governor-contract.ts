import { MIN_DELAY } from './../util/deployerHelper';
import {HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import { ethers } from "hardhat";

const deployGovernorContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {

    const { getNamedAccounts, deployments, network} = hre;
    const {deploy, log, get} = deployments;
    const { deployer } = await getNamedAccounts();

    const governanceToken = await get("GovernanceToken");
    const timeLock = await get("TimeLock");

    log("Deploying Governor Contract");

    const governorContract = await deploy("GovernorContract", {
        from: deployer,
        args: [governanceToken.address, timeLock.address],
        log: true
    })
}

export default deployGovernorContract 