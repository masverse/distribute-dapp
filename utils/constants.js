export const abi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "wallets1",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "percent1",
          "type": "uint8"
        },
        {
          "internalType": "address",
          "name": "wallets2",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "percent2",
          "type": "uint8"
        },
        {
          "internalType": "address",
          "name": "wallets3",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "percent3",
          "type": "uint8"
        },
        {
          "internalType": "address",
          "name": "wallets4",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "percent4",
          "type": "uint8"
        },
        {
          "internalType": "address",
          "name": "wallets5",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "percent5",
          "type": "uint8"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "_percent1",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "_percent2",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "_percent3",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "_percent4",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "_percent5",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "_wallets1",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "_wallets2",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "_wallets3",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "_wallets4",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "_wallets5",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "distributeTokens",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "topUp",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ]

export const bytecode = "608060405234801561000f575f80fd5b50604051610fc8380380610fc88339818101604052810190610031919061029a565b895f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555088600460146101000a81548160ff021916908360ff1602179055508760015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555086600460156101000a81548160ff021916908360ff1602179055508560025f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600460166101000a81548160ff021916908360ff1602179055508360035f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600460176101000a81548160ff021916908360ff1602179055508160045f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600460186101000a81548160ff021916908360ff16021790555050505050505050505050610373565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6102338261020a565b9050919050565b61024381610229565b811461024d575f80fd5b50565b5f8151905061025e8161023a565b92915050565b5f60ff82169050919050565b61027981610264565b8114610283575f80fd5b50565b5f8151905061029481610270565b92915050565b5f805f805f805f805f806101408b8d0312156102b9576102b8610206565b5b5f6102c68d828e01610250565b9a505060206102d78d828e01610286565b99505060406102e88d828e01610250565b98505060606102f98d828e01610286565b975050608061030a8d828e01610250565b96505060a061031b8d828e01610286565b95505060c061032c8d828e01610250565b94505060e061033d8d828e01610286565b93505061010061034f8d828e01610250565b9250506101206103618d828e01610286565b9150509295989b9194979a5092959850565b610c48806103805f395ff3fe6080604052600436106100aa575f3560e01c80637366794e116100635780637366794e146101ba5780638787d134146101d6578063c19a933914610200578063dc29f1de1461022a578063dea37bd714610234578063ea7b70871461025e576100ba565b806305b97afe146100be578063064addb4146100e85780630f3e7b6214610112578063349851891461013c5780635aa2c094146101665780635c31025a14610190576100ba565b366100ba576100b834610288565b005b5f80fd5b3480156100c9575f80fd5b506100d261084c565b6040516100df91906109ac565b60405180910390f35b3480156100f3575f80fd5b506100fc610871565b60405161010991906109e0565b60405180910390f35b34801561011d575f80fd5b50610126610884565b60405161013391906109e0565b60405180910390f35b348015610147575f80fd5b50610150610897565b60405161015d91906109e0565b60405180910390f35b348015610171575f80fd5b5061017a6108aa565b60405161018791906109ac565b60405180910390f35b34801561019b575f80fd5b506101a46108cd565b6040516101b191906109e0565b60405180910390f35b6101d460048036038101906101cf9190610a30565b610288565b005b3480156101e1575f80fd5b506101ea6108e0565b6040516101f791906109ac565b60405180910390f35b34801561020b575f80fd5b50610214610905565b60405161022191906109e0565b60405180910390f35b610232610918565b005b34801561023f575f80fd5b50610248610923565b60405161025591906109ac565b60405180910390f35b348015610269575f80fd5b50610272610948565b60405161027f91906109ac565b60405180910390f35b5f60646001836102989190610a88565b6102a29190610af6565b90505f81836102b19190610b26565b90505f6064600460149054906101000a900460ff1660ff16836102d49190610a88565b6102de9190610af6565b90505f6064600460159054906101000a900460ff1660ff16846103019190610a88565b61030b9190610af6565b90505f6064600460169054906101000a900460ff1660ff168561032e9190610a88565b6103389190610af6565b90505f6064600460179054906101000a900460ff1660ff168661035b9190610a88565b6103659190610af6565b90505f6064600460189054906101000a900460ff1660ff16876103889190610a88565b6103929190610af6565b90505f737346540fe6b068215c5df22f8bb41adf387e26b873ffffffffffffffffffffffffffffffffffffffff16886040516103cd90610b86565b5f6040518083038185875af1925050503d805f8114610407576040519150601f19603f3d011682016040523d82523d5f602084013e61040c565b606091505b5050905080610450576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044790610bf4565b60405180910390fd5b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168760405161049590610b86565b5f6040518083038185875af1925050503d805f81146104cf576040519150601f19603f3d011682016040523d82523d5f602084013e6104d4565b606091505b5050905080610518576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050f90610bf4565b60405180910390fd5b5f60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168760405161055e90610b86565b5f6040518083038185875af1925050503d805f8114610598576040519150601f19603f3d011682016040523d82523d5f602084013e61059d565b606091505b50509050806105e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d890610bf4565b60405180910390fd5b5f60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168760405161062790610b86565b5f6040518083038185875af1925050503d805f8114610661576040519150601f19603f3d011682016040523d82523d5f602084013e610666565b606091505b50509050806106aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a190610bf4565b60405180910390fd5b5f60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16876040516106f090610b86565b5f6040518083038185875af1925050503d805f811461072a576040519150601f19603f3d011682016040523d82523d5f602084013e61072f565b606091505b5050905080610773576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076a90610bf4565b60405180910390fd5b5f60045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16876040516107b990610b86565b5f6040518083038185875af1925050503d805f81146107f3576040519150601f19603f3d011682016040523d82523d5f602084013e6107f8565b606091505b505090508061083c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083390610bf4565b60405180910390fd5b5050505050505050505050505050565b60045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460149054906101000a900460ff1681565b600460179054906101000a900460ff1681565b600460159054906101000a900460ff1681565b5f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460189054906101000a900460ff1681565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460169054906101000a900460ff1681565b61092134610288565b565b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6109968261096d565b9050919050565b6109a68161098c565b82525050565b5f6020820190506109bf5f83018461099d565b92915050565b5f60ff82169050919050565b6109da816109c5565b82525050565b5f6020820190506109f35f8301846109d1565b92915050565b5f80fd5b5f819050919050565b610a0f816109fd565b8114610a19575f80fd5b50565b5f81359050610a2a81610a06565b92915050565b5f60208284031215610a4557610a446109f9565b5b5f610a5284828501610a1c565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610a92826109fd565b9150610a9d836109fd565b9250828202610aab816109fd565b91508282048414831517610ac257610ac1610a5b565b5b5092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f610b00826109fd565b9150610b0b836109fd565b925082610b1b57610b1a610ac9565b5b828204905092915050565b5f610b30826109fd565b9150610b3b836109fd565b9250828203905081811115610b5357610b52610a5b565b5b92915050565b5f81905092915050565b50565b5f610b715f83610b59565b9150610b7c82610b63565b5f82019050919050565b5f610b9082610b66565b9150819050919050565b5f82825260208201905092915050565b7f4661696c656420746f2073656e642045746865720000000000000000000000005f82015250565b5f610bde601483610b9a565b9150610be982610baa565b602082019050919050565b5f6020820190508181035f830152610c0b81610bd2565b905091905056fea26469706673582212204a0d388230b27516442d88178fadaf896d74d2902bf0cb4a9378f87e03b0015864736f6c63430008190033"