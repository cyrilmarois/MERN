import logo from "./logo.svg";
import "./App.css";
const Web3 = require("web3");
const rpcUrl = "https://goerli.infura.io/v3/01f74c6334cc4ab0b525a6612a403678";
const web3 = new Web3(rpcUrl);
const address = '0xfA95935932ECcd000765C772CF8A731B1E215d06';
const ABI = [
	{
		"inputs": [],
		"name": "get",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

function App() {
  let balance;
  console.log({ web3 });
  web3.eth.getBalance("0x5666eD746E98FA440ceD3714d5915c2556888a5c", (err, wei) => {
    console.log(err, wei);
    balance = web3.utils.fromWei(wei, "ether"); // convert wei in ether
  });
  const simpleStoageContract = new web3.eth.Contract(ABI, address);
  simpleStoageContract.methods.get().call((err, data) => {
    console.log({data})
  })
  console.log({ balance });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload !
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {balance}
        </a>
      </header>
    </div>
  );
}

export default App;
