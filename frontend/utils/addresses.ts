// Export faucet addresses
export const ADDRESSES = [
  {
    network: "eip4844",
    depleted: false,
    disclaimer: "Faucet drips 1 ETH, 1 wETH, 5000 DAI, and 5 NFTs (ERC721).",
    etherscanPrefix: "",
    formattedName: "Devnet v2",
    connectionDetails: "https://hackmd.io/@inphi/SJKLtgJXs",
    autoconnect: {
      chainId: "0x534",
      chainName: "EIP-4844 Devnet v2",
      nativeCurrency: {
        name: "Ethereum",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: ["https://eip-4844-alpha.optimism.io"],
    },
    addresses: {
      NFTs: "0x2877fd7B43d7F8B71e46c31cc12907fD94270a64",
      wETH: "0x2828141cE50567E3864470Ab5D0f0ADB193925be",
      DAI: "0xe31e5400f70ab1DC1010B1cB24FD97ffEfD37aA1",
    },
  },
  {
    network: "eip4844",
    depleted: false,
    disclaimer:
      "Faucet drips 0.5 ETH, 0.5 wETH, 5000 DAI, and 5 NFTs (ERC721).",
    etherscanPrefix: "",
    formattedName: "Devnet v1",
    connectionDetails: "https://hackmd.io/@inphi/SJMXL1P6c",
    autoconnect: {
      chainId: "0x533",
      chainName: "EIP-4844 Devnet v1",
      nativeCurrency: {
        name: "Ethereum",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: ["https://eip-4844.optimism.io"],
    },
    addresses: {
      NFTs: "0x04F1e772E19234aCF03A8A9BC72d0308AAaFEB07",
      wETH: "0xac6e29F8DF22Ebbd22CB089f52558760F3ba4247",
      DAI: "0x0bD9060153E7CA86341E9B7D53df2bc0eC51B985",
    },
  },
];

const FAUCET_ADDRESS = {
  1332: "0x2877fd7b43d7f8b71e46c31cc12907fd94270a64",
  1331: "0x04f1e772e19234acf03a8a9bc72d0308aaafeb07",
};

/**
 * Export details about networks
 */
export function getAddressDetails() {
  // Get active networks
  const activeNetworks: string[] = ADDRESSES.filter(
    // Filter for non-depleted
    ({ depleted }) => !depleted
    // Collect just formatted name
  ).map(({ formattedName }) => formattedName);
  // Get number of active networks
  const networkCount: number = activeNetworks.length;

  // Sort addresses (depleted last)
  const sortedAddresses = ADDRESSES.sort((a, b) => {
    const first = a.depleted ?? false;
    const second = b.depleted ?? false;
    return Number(first) - Number(second);
  });

  // Return details
  return { networkCount, sortedAddresses };
}

export function getFaucetAddress(network: number): string {
  return FAUCET_ADDRESS[network as keyof typeof FAUCET_ADDRESS];
}
