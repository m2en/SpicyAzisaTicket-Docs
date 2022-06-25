// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const editPageLink = 'https://github.com/m2en/SpicyAzisaTicket-Docs/tree/main'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SpicyAzisaTicket Docs',
  tagline: 'SpicyAzisaTicket Document',
  url: 'https://spicy-docs.m2en.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'log',
  favicon: 'https://github.com/azisaba.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AzisabaNetwork & m2en', // Usually your GitHub org/user name.
  projectName: 'spicy-azisa-ticket', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: editPageLink
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: editPageLink
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SpicyAzisaTicket Document',
        logo: {
          alt: 'AzisabaNetwork Logo',
          src: 'https://github.com/azisaba.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'ChangeLog(Versions)', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Document',
            items: [
              {
                label: 'SAT Document',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'PatchNotes',
            items: [
              {
                label: 'SAT PatchNotes',
                to: '/blog',
              },
              {
                label: 'GitHub Releases',
                href: 'https://github.com/azisaba/SpicyAzisaTicket/releases'
              }
            ]
          },
          {
            title: 'アジ鯖',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/azisaba',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/AzisabaNetwork',
              },
              {
                label: '公式サイト',
                href: 'https://www.azisaba.net/',
              },
              {
                label: '採用サイト(運営)',
                href: 'https://recruit.azisaba.net/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub (Docs)',
                href: 'https://github.com/m2en/SpicyAzisaTicket-Docs',
              },
              {
                label: 'GitHub (Bot)',
                href: 'https://github.com/azisaba/SpicyAzisaTicket',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} , Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
