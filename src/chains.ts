export enum ChainId {
  MAINNET = 1,
  ZIRCUIT_TESTNET = 48899,
  ZIRCUIT = 48900,
}

export const SUPPORTED_CHAINS = [
  ChainId.MAINNET,
  ChainId.ZIRCUIT_TESTNET,
] as const
export type SupportedChainsType = typeof SUPPORTED_CHAINS[number]

export enum NativeCurrencyName {
  // Strings match input for CLI
  ETHER = 'ETH',
}
