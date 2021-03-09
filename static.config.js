import path from 'path'

export default {
  siteRoot: 'https://www.donut.community',
  getRoutes: async () => [
    // {
    //   path: 'about',
    //   template: 'src/pages/about',
    // },
    // {
    //   path: '404',
    //   template: 'src/containers/NotFound',
    // },
  ],
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
    require.resolve('react-static-plugin-sass')
  ],
}
