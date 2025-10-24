// call_contract.js

// Pastikan package.json memiliki "type": "module"
import { ethers } from 'ethers';

// 1. Ganti dengan alamat kontrak BARU dari deployment Ganache/MetaMask
const CONTRACT_ADDRESS = "0xD31D7251ef01e6004eCbBfDDA05E0755c650040C"; 

// 2. ABI yang sudah Anda salin
const ABI = [
	{
		"inputs": [],
		"name": "fixedPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPrice",
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

// 3. Provider harus menunjuk ke server Ganache
const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545");

async function callContract() {
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);

    console.log("Memanggil fungsi getPrice()...");
    
    try {
        const price = await contract.getPrice();
        console.log(`Get Price Property: ${price.toString()}`);
    } catch (error) {
        console.error("Failed Get Contract", error);
    }
}

callContract();