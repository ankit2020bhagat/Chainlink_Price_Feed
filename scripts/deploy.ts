import { ethers } from "hardhat";

async function main() {
  const PriceConsumerV3Factory = await ethers.getContractFactory(
    "PriceConsumerV3"
  );
  const PriceConsumerV3Contract = await PriceConsumerV3Factory.deploy();
  await PriceConsumerV3Contract.deployed();
  console.log("PriceConsumer deployed at: ", PriceConsumerV3Contract.address);

  const txn = await PriceConsumerV3Contract.getLatestPrice();
  console.log("Latest BTC/USD price is ", txn.toString());
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
