import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'ALOE-BNB LP',
    lpAddresses: {
      97: '0x306a2c7eb29480e65633165c005e95e90ea9a79e', // ALOE-BNB LP
      56: '',
    },
    tokenSymbol: 'ALOE',
    tokenAddresses: {
      97: '0xbbB7f6598dD71924B8B80F21A0cACCbb9f114d58', // ALOE
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
      97: '0x4792e1a616021fd246c683f8cf035df858424bd5', // ALOE-BUSD LP
      56: '',
    },
    tokenSymbol: 'ALOE',
    tokenAddresses: {
      97: '0xbbB7f6598dD71924B8B80F21A0cACCbb9f114d58', // ALOE
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
      97: '0x4792e1a616021fd246c683f8cf035df858424bd5', // ALOE-BUSD LP
      56: '',
    },
    tokenSymbol: 'ALOE',
    tokenAddresses: {
      97: '0xbbB7f6598dD71924B8B80F21A0cACCbb9f114d58', // ALOE
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
      97: '0x306a2c7eb29480e65633165c005e95e90ea9a79e', // ALOE-WBNB LP
      56: '',
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '0xae13d989dac2f0debff460ac112a837c89baa7cd', // WBNB
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
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
      97: '0x1770e29269a36d8d0e437a373c0b76cf48b000b0', // ALOE-USDT LP
      56: '',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '0x7ef95a0fee0dd31b22626fa2e10ee6a223f8a684', // USDT
      56: '0x55d398326f99059ff775485246999027b3197955',
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
      97: '0xa69e066eaf703e69ff74481b368300ebfbd714d1', // ALOE-ETH LP
      56: '',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '0x8babbb98678facc7342735486c851abd7a0d17ca', // ETH
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
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
      97: '0x4792e1a616021fd246c683f8cf035df858424bd5', // ALOE-BUSD LP (BUSD-BUSD will ignore)
      56: '',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7', // BUSD
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
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
      97: '0x969da2e28b3c105e3ccb8869f1f8e36ac6c03477', // ALOE-DAI LP
      56: '',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '0x8a9424745056Eb399FD19a0EC26A14316684e274', // DAI
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
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
      97: '0xdf475e10da27ae543cfe10f677854206c7f5d677', // ALOE-USDC LP
      56: '',
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '0x64544969ed7ebf5f083679233325356ebe738930', // USDC
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
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
      97: '0x11fa6b698cfb064ecf362d9ebca71cbfdec752c7', // ALOE-CAKE LP
      56: '',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '0xf9f93cf501bfadb6494589cb4b4c15de49e85d0e', // CAKE
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
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
      97: '0x43bacbb520c5520ec987963db6fcce76ce87a536', // ALOE-BTCB LP
      56: '',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '0x6ce8da28e2f864420840cf74474eff5fd80e65b8', // WBNB
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
