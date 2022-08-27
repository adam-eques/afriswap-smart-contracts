import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-contract-sizer";
import dotenv from 'dotenv';

dotenv.config();

const config: HardhatUserConfig = {
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {
      throwOnTransactionFailures: true,
      throwOnCallFailures: true,
      allowUnlimitedContractSize: true,
      blockGasLimit: 0x1fffffffffffff,
    },
    ropsten: {
      url: process.env.ROPSTEN_INFURA_URL,
      accounts: [
        process.env.PRIVATE_KEY || ''
      ],
      throwOnTransactionFailures: true,
      throwOnCallFailures: true,
      allowUnlimitedContractSize: true,
      blockGasLimit: 0x1fffffffffffff,
    },
    exltest: {
      url: "https://testnet-rpc.exlscan.com/",
      chainId: 27082017,
      from: process.env.ACCOUNT,
      // accounts: [
      //   process.env.PRIVATE_KEY || ''
      // ],
    }
  },
  solidity: {
    compilers: [
      { version: "0.6.12" },
      { version: "0.6.6" },
      { version: "0.5.16" },
      { version: "0.4.19" }
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 1
      }
    }
  },
  // contractSizer: {
  //   alphaSort: true,
  //   disambiguatePaths: false,
  //   runOnCompile: true,
  //   strict: true,
  //   only: [
  //     'PancakeRouter'
  //   ],
  // },
};

export default config;
