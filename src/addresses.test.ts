import { SWAP_ROUTER_02_ADDRESSES } from './addresses'
import { ChainId } from './chains'

describe('addresses', () => {
  describe('swap router 02 addresses', () => {
    it('should return the correct address for zircuit testnet', () => {
      const address = SWAP_ROUTER_02_ADDRESSES(ChainId.ZIRCUIT_TESTNET)
      expect(address).toEqual('0x294Ed9396f177c1519F626b1AA18BCcB47667dad')
    })
  })
})
