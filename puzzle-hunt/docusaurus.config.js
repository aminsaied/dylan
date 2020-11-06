module.exports = {
  title: 'The Adventures of Dylan',
  tagline: 'Happy 6th birthday Dylan!!!',
  url: 'https://aminsaied.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/lego.jpg',
  organizationName: 'aminsaied',
  projectName: 'dylan6',
  themeConfig: {
    navbar: {
      title: 'The Adventures of Dylan',
      logo: {
        alt: 'My Site Logo',
        src: 'img/lego.jpg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'http://www.patorjk.com/software/taag/#p=display&f=Graffiti&t=HAPPY%0ABIRTHDAY%0ADYLAN%20%20%20%20%20!%20!%20!%0A',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
