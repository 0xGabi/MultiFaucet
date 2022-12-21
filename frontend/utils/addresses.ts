// Export faucet addresses
export const ADDRESSES = [
  {
    network: "eip4844",
    depleted: false,
    disclaimer:
      "Faucet drips 0.5 ETH, 0.5 wETH, 5000 DAI, and 5 NFTs (ERC721).",
    etherscanPrefix: "",
    formattedName: "Devnet v3",
    connectionDetails: "https://hackmd.io/@inphi/Hk_cLBJFo",
    autoconnect: {
      chainId: "0x533",
      chainName: "EIP-4844 Devnet v3",
      nativeCurrency: {
        name: "Ethereum",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: ["https://eip-4844-alpha.optimism.io"],
    },
    addresses: {
      NFTs: "0x04F1e772E19234aCF03A8A9BC72d0308AAaFEB07",
      wETH: "0x0bD9060153E7CA86341E9B7D53df2bc0eC51B985",
      DAI: "0xac6e29F8DF22Ebbd22CB089f52558760F3ba4247",
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
