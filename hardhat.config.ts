/**
 * @type import('hardhat/config').HardhatUserConfig
 */
import "hardhat-deploy";
import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";
import {HardhatUserConfig} from 'hardhat/config';

// module.exports = {
//   solidity: "^0.8.0",
// };

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: "0.8.8",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      chainId: 31337
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: {mnemonic: process.env.MNEMONIC}
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: {mnemonic: process.env.MNEMONIC}
    }
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  }
}

export default config;