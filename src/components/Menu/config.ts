import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x3052ee12567bbcb18ec42e22297076256cea4c86',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/0x3052ee12567bbcb18ec42e22297076256cea4c86',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Community',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Twitter',
        href: 'https://twitter.com/SwapAloe',
      },
      {
        label: 'Telegram announcement',
        href: 'https://t.me/aloe_ann',
      },
      {
        label: 'Telegram chat group',
        href: 'https://t.me/aloe_group',
      },
      {
        label: 'Discord',
        href: 'https://discord.gg/4M8amDssUX',
      },
      {
        label: 'Bitcoin Talk Forum',
        href: 'https://bitcointalk.org/index.php?topic=5341559',
      },
      {
        label: 'Reddit',
        href: 'https://www.reddit.com/r/AloeSwap/',
      },
    ],
  },
  {
    label: 'Audits & reviews',
    icon: 'AuditIcon',
    items: [
      {
        label: 'Review by RugDoc',
        href: 'https://rugdoc.io/project/aloeswap/',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'PooCoin chart',
        href: 'https://poocoin.app/tokens/0x3052ee12567bBcb18Ec42E22297076256cEa4c86',
      },
      {
        label: 'DappRadar page',
        href: 'https://dappradar.com/binance-smart-chain/defi/aloeswap',
      },
      {
        label: 'Github',
        href: 'https://github.com/aloetoken/',
      },
      {
        label: 'Docs',
        href: 'https://aloeswap.gitbook.io/aloeswap/',
      },
    ],
  },
]

export default config
