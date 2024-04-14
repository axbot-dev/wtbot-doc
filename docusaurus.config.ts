import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'WTBot',
  tagline: 'WTbot是一个专注于和《战争雷霆》的数据打交道的聊天机器人',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/wtbot-doc',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'axbot-dev', // Usually your GitHub org/user name.
  projectName: 'wtbot-doc', // Usually your repo name.
  trailingSlash: false,
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/axbot-dev/wtbot-doc/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'WTBot',
      logo: {
        alt: 'WTBot Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'usage',
          position: 'left',
          label: '使用手册',
        },
        {
          type: 'docSidebar',
          sidebarId: 'data',
          position: 'left',
          label: '数据介绍',
        },
        {
          href: 'https://github.com/axbot-dev/wtbot-feedback',
          label: '在GitHub上反馈问题',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '使用手册',
              to: '/docs/usage/introduction/what-is-wtbot',
            },
            {
              label: '数据介绍',
              to: '/docs/data/',
            }
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'KOOK服务器',
              href: 'https://kook.top/eUTZK7',
            },
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/docusaurus',
            // },
            // {
            //   label: 'Twitter',
            //   href: 'https://twitter.com/docusaurus',
            // },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '问题反馈',
              href: 'https://github.com/axbot-dev/wtbot-feedback',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} WTbot, Inc. Built with Docusaurus.`,
    },
    announcementBar: {
      id: 'announcement',
      content:
        '文档正在建设中，可能还存在不完善的地方，敬请谅解',
      // backgroundColor: '#fafbfc',
      // textColor: '#091E42',
      isCloseable: false,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
