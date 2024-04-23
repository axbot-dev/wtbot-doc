import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'WTBot',
  tagline: 'WTbot是一个专注于和《战争雷霆》的数据打交道的聊天机器人',
  favicon: 'img/wtbot.ico',

  // Set the production url of your site here
  url: 'https://axbot-dev.github.io/',
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
        src: 'img/wtbot.webp',
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
              to: '/docs/data/warthunder/source',
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
            {
              label: 'QQ群',
              href: 'https://qm.qq.com/q/LfXCP7ccYo',
            },
            {
              label: "开发者B站",
              href: "https://space.bilibili.com/8696650",
            }
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '在GitHub上反馈问题',
              href: 'https://github.com/axbot-dev/wtbot-feedback',
            },
            {
              label: '文档 GitHub',
              href: 'https://github.com/axbot-dev/wtbot-doc',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} WTBot, AXBot 开发组. 使用 Docusaurus 构建.`,
    },
    announcementBar: {
      id: 'announcement',
      content:
        '因 WTBot 正在快速迭代开发中，文档内容可能不会是最新的，请以实际表现为准',
      // backgroundColor: '#fafbfc',
      // textColor: '#091E42',
      isCloseable: false,
    },
    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash'],
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'TMBRY8QCIY',

      // Public API key: it is safe to commit it
      apiKey: 'c30af31f4b1fcb0df72c52e665899192',

      indexName: 'axbot-devio',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: true,

      //... other Algolia params
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
