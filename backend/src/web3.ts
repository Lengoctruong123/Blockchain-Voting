import Web3 from "web3";
import data from "../build/contracts/Election.json";

export const web3 = new Web3("https://goerli.infura.io/v3/47871f941a7f427ca93dfd4d758e3b74");

const provider = new Web3.providers.HttpProvider("https://goerli.infura.io/v3/47871f941a7f427ca93dfd4d758e3b74");
const contract = require("@truffle/contract");

const ElectionContract = contract(data);

ElectionContract.setProvider(provider);

export default ElectionContract;
