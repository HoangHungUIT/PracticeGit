// connect to metamask
let account
const connectMetamask = async () => {
    if(window.ethereum !== "undefined"){
        const accounts = await ethereum.request({method: "eth_requestAccounts"});
        account = accounts[0];
        document.getElementById("accountArea").innerHTML = account;
    }
}


// connect to smart contract
const connectContract = async () => {
    const ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "expression",
				"type": "string"
			}
		],
		"name": "calculateExpression",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	}
];

    const Address = "0xe3c72D518060679c59312fA09469049Aa33190d7";
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI, Address);
    document.getElementById("contractArea").innerHTML = "Connected to Smart Contract";
}

// read data from smart contract
const readContract = async () => {
    function generateExpression() {
        const operators = ['+', '-'];
        const numOperands = Math.floor(Math.random() * 3) + 2; // Randomly generate 2 to 4 operands
        let expression = '';
        
        for (let i = 0; i < numOperands; i++) {
            const operand = Math.floor(Math.random() * 9) + 1; // Randomly generate operand from 1 to 9
            expression += operand;
        
            if (i < numOperands - 1) {
            const operator = operators[Math.floor(Math.random() * operators.length)]; // Randomly select operator
            expression += ` ${operator} `;
            }
        }
        
        return expression;
    }

    let expression1 = generateExpression();
    document.getElementById("dataArea_Expression").innerHTML = expression1;
    const data = await window.contract.methods.calculateExpression(expression1).call();   
    document.getElementById("dataArea_Name").innerHTML = data;
}

// change data from smart contract
const changeContract = async () => {
    const myEntry_Number = document.getElementById("inputArea_Name").value;

    await window.contract.methods.calculate("1 + 3 - 4").send({from: account});
    readContract();
}