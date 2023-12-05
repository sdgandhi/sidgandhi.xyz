import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '340316eee4da42b8879a5bec5d817a34',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Sid Gandhi',
  domain: 'sidgandhi.xyz',
  author: 'Sid Gandhi',
  seotitle: 'Sid Gandhi\'s Website',

  // open graph metadata (optional)
  description: 'Sid Gandhi\'s Website',

  // social usernames (optional)
  twitter: 'sidgandhi_xyz',
  github: 'sdgandhi',
  linkedin: 'sg2020',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  // defaultPageIcon: 'https://wr8.in/page-icon.png',
  // defaultPageCover: 'https://wr8.in/page-cover.jpg',
  // defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [  
    {
      title: 'Bio',
      pageId: '4cb2fb8a82914b21ae9a54cd2a190109'
    },
    {
      title: 'Contact',
      pageId: 'f2b91fc02dbb42449c513aa98cae1659'
    }
  ]
})
