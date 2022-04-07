/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Box, BoxInterface } from "../../contracts/Box";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "ValueChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "retrieve",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "store",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6106a28061010d6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80632e64cec11461005c5780636057361d1461007a578063715018a6146100965780638da5cb5b146100a0578063f2fde38b146100be575b600080fd5b6100646100da565b604051610071919061042f565b60405180910390f35b610094600480360381019061008f919061047b565b6100e4565b005b61009e6101a1565b005b6100a8610229565b6040516100b591906104e9565b60405180910390f35b6100d860048036038101906100d39190610530565b610252565b005b6000600154905090565b6100ec61034a565b73ffffffffffffffffffffffffffffffffffffffff1661010a610229565b73ffffffffffffffffffffffffffffffffffffffff1614610160576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610157906105ba565b60405180910390fd5b806001819055507f93fe6d397c74fdf1402a8b72e47b68512f0510d7b98a4bc4cbdf6ac7108b3c5981604051610196919061042f565b60405180910390a150565b6101a961034a565b73ffffffffffffffffffffffffffffffffffffffff166101c7610229565b73ffffffffffffffffffffffffffffffffffffffff161461021d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610214906105ba565b60405180910390fd5b6102276000610352565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61025a61034a565b73ffffffffffffffffffffffffffffffffffffffff16610278610229565b73ffffffffffffffffffffffffffffffffffffffff16146102ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102c5906105ba565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561033e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103359061064c565b60405180910390fd5b61034781610352565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000819050919050565b61042981610416565b82525050565b60006020820190506104446000830184610420565b92915050565b600080fd5b61045881610416565b811461046357600080fd5b50565b6000813590506104758161044f565b92915050565b6000602082840312156104915761049061044a565b5b600061049f84828501610466565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006104d3826104a8565b9050919050565b6104e3816104c8565b82525050565b60006020820190506104fe60008301846104da565b92915050565b61050d816104c8565b811461051857600080fd5b50565b60008135905061052a81610504565b92915050565b6000602082840312156105465761054561044a565b5b60006105548482850161051b565b91505092915050565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006105a460208361055d565b91506105af8261056e565b602082019050919050565b600060208201905081810360008301526105d381610597565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061063660268361055d565b9150610641826105da565b604082019050919050565b6000602082019050818103600083015261066581610629565b905091905056fea26469706673582212204539605c6d39b5d7dd54e8f8357e59552f4523dd99a7aa37195ea4f869d93d8d64736f6c63430008080033";

type BoxConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BoxConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Box__factory extends ContractFactory {
  constructor(...args: BoxConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Box> {
    return super.deploy(overrides || {}) as Promise<Box>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Box {
    return super.attach(address) as Box;
  }
  override connect(signer: Signer): Box__factory {
    return super.connect(signer) as Box__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BoxInterface {
    return new utils.Interface(_abi) as BoxInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Box {
    return new Contract(address, _abi, signerOrProvider) as Box;
  }
}
