import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'ALOE-BNB LP',
    lpAddresses: {
      97: '0x306a2c7eb29480e65633165c005e95e90ea9a79e',
      56: '',
    },
    tokenSymbol: '',
    tokenAddresses: {
      97: '',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'ALOE-BUSD LP',
    lpAddresses: {
      97: '0x4792e1a616021fd246c683f8cf035df858424bd5',
      56: '',
    },
    tokenSymbol: '',
    tokenAddresses: {
      97: '',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'ALOE',
    lpAddresses: {
      97: '',
      56: '',
    },
    tokenSymbol: 'ALOE',
    tokenAddresses: {
      97: '0xbbB7f6598dD71924B8B80F21A0cACCbb9f114d58',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '',
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    lpAddresses: {
      97: '',
      56: '',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '0x7ef95a0fee0dd31b22626fa2e10ee6a223f8a684',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '0x8babbb98678facc7342735486c851abd7a0d17ca',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'DAI',
    lpAddresses: {
      97: '',
      56: '',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '0x8a9424745056Eb399FD19a0EC26A14316684e274',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 8,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'USDC',
    lpAddresses: {
      97: '',
      56: '',
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '0x64544969ed7ebf5f083679233325356ebe738930',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 9,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '0xf9f93cf501bfadb6494589cb4b4c15de49e85d0e',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 10,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '0x6ce8da28e2f864420840cf74474eff5fd80e65b8',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
