const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');
const provider = new HDWalletProvider(
  "chimney abuse sail custom one bar antique drill version pact mirror never",
  "https://rinkeby.infura.io/LJAi7Cyw4jt0FxMJNAYK"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account: ', accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: '0x' + bytecode, arguments: ['Pain made me a believer'] })
    .send({ gas: '1000000', from: accounts[0] });
  console.log('Contract deployed to: ', result.options.address);
};

deploy();
