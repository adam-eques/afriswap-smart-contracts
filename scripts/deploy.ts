import { ethers } from "hardhat";
import { feeToSetter } from '../config'

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  // const lockedAmount = ethers.utils.parseEther("1");

  // const Lock = await ethers.getContractFactory("Lock");
  // const lock = await Lock.deploy(unlockTime);

  // await lock.deployed();

  // console.log(lock);

  // console.log(`Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`);
  // console.log(`Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`);


  // deploy PancakeFactory
  const PancakeFactory = await ethers.getContractFactory("PancakeFactory");
  const pancakeFactory = await PancakeFactory.deploy(feeToSetter);

  await pancakeFactory.deployed();

  console.log(`PancakeFactory was deployed to ${pancakeFactory.address}`);
  console.log(`INIT_CODE_PAIR_HASH is ${await pancakeFactory.INIT_CODE_PAIR_HASH()}`);

  // deploy WETH9
  const WETH = await ethers.getContractFactory("contracts/pancakeswap-token/WETH.sol:WETH");
  const weth = await WETH.deploy();

  await weth.deployed();

  console.log(`WETH9 was deployed to ${weth.address}`);

  // deploy AFCASH Token
  const AFCASHToken = await ethers.getContractFactory("AFCASHToken");
  const afcashToken = await AFCASHToken.deploy();

  await afcashToken.deployed();

  console.log(`AFCASHToken was deployed to ${afcashToken.address}`);


  // // deploy PancakeRouter
  // const PancakeRouter = await ethers.getContractFactory("PancakeRouter");
  // const pancakeRouter = await PancakeRouter.deploy("0x03106b2A454f2e503d2E136651E8c32009763dA8", "0xc9ACFDC3e802a3f1eA76D1a54aeA1Da4De8e4736");
  // // const pancakeRouter = await PancakeRouter.deploy(pancakeFactory.address, weth9.address);

  // await pancakeRouter.deployed();

  // console.log(`PancakeRouter was deployed to ${pancakeRouter.address}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
