import path from 'path'
import axios from 'axios'

export default {
  siteRoot: 'https://ethtrader.github.io',
  basePath: 'donut.site',
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
    require.resolve('react-static-plugin-sitemap')
  ],
}
