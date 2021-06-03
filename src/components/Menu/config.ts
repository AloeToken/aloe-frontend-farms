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
    icon: 'MoreIcon',
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
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'PooCoin chart',
        href: 'https://poocoin.app/tokens/0x3052ee12567bBcb18Ec42E22297076256cEa4c86',
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
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'AloeIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Audit by TechRate',
  //   icon: 'AuditIcon',
  //   href: '',
  // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://aloeswap.com/files/audit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/aloeswap',
  // },
]

export default config
