import { MIN_DELAY } from './../util/deployerHelper';
import {HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import { ethers } from "hardhat";

const deployTimeLock: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {

    const { getNamedAccounts, deployments, network} = hre;
    const {deploy, log} = deployments;
    const { deployer } = await getNamedAccounts();

    log("Deploying timelock...");
    const timelock = await deploy("TimeLock", {
        from: deployer,
        args: [MIN_DELAY, [], []],
        log: true
        //waitConfirmations
    })
    log(`Deployed timelock to Address: ${timelock.address}`)
}

export default deployTimeLock;