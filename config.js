const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://yanchihuang.github.io/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://en.gravatar.com/userimage/101828958/ba33b3a7dfcf97941e1e3d7619fd3efb.png?size=100',
    logoLink: 'https://yanchihuang.github.io/',
    title:
      "<a href='https://yanchihuang.github.io/'>YC's knowledge Management</a><br/><p>答案永遠比問題多</p>",
    githubUrl: 'https://github.com/YanchiHuang/yanchihuang.github.io',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		  </li>
			<li>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Hasura', link: 'https://hasura.io' }],
    frontLine: false,
    ignoreIndex: true,
    title:
      "<a href='https://yanchihuang.github.io/'>graphql </a><div class='greenCircle'></div><a href='https://yanchihuang.github.io/graphql/react/introduction/'>react</a>",
  },
  siteMetadata: {
    title: 'Gatsby Gitbook Boilerplate | Hasura',
    description: 'Documentation built with mdx. Powering hasura.io/learn ',
    ogImage: null,
    docsLocation: 'https://github.com/YanchiHuang/yanchihuang.github.io/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
