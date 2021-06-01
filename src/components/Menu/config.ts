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
        href: 'https://exchange.pancakeswap.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
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
        href: '',
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
        href: 'https://poocoin.app/tokens/0x111111111111111111',
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
