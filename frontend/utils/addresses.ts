// Export faucet addresses
export const ADDRESSES = [
  {
    network: "eip4844",
    depleted: false,
    disclaimer: "Faucet drips 1 ETH, 1 wETH, 500 DAI, and 5 NFTs (ERC721).",
    etherscanPrefix: "",
    formattedName: "EIP-4844 Devnet v1",
    connectionDetails: "",
    autoconnect: {
      chainId: "0x533",
      chainName: "",
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
