const BLOG = {
  title: 'Mis Notas Personales',
  author: 'Gustavo Vallejo',
  link: 'https://ideas.gustavovallejo.com',
  description: 'Notas personales y secretas de Gustavo Vallejo',
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW']
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#FFFFFF', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#222222', // use hex value, don't forget '#'
  since: 2022, // If leave this empty, current year will be used.
  showTitlebarText: true, // Craft Docs page show title bar text on desktop
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  ogImageGenerateURL: 'https://og-zl.vercel.app', // The link to generate OG image, don't end with a slash
  craftConfigShareUrl: 'https://www.craft.do/s/IsyIFpx0IGCjTL', // The link to share your craft config
  notesNav: {
    index: 'Inicio',
    blog: 'Reto Kaizen',
    contact: 'Universidad Superior'
  },
  notesLink: {
    index: 'http://ideas.gustavovallejo.com/post/notas-personales',
    blog: 'https://retosuperior.com',
    contact: 'https://universidadsuperior.com/platinum'
  },
  socialLink: {
    twitter: 'https://twitter.com/gustavojellav',
    telegram: 'https://t.me/+SfLwb_-EjHwcXZ-o'
  },
  seo: {
    keywords: ['Blog Hombre Superior', 'Gustavo Vallejo', 'Podcast Hombre Superior']
  },
  analytics: {
    provider: '', // Currently support Umami, fill with 'umami' to enable or leave it empty to disable it.
    umamiConfig: {
      scriptUrl: '', // The url of your Umami script
      websiteId: '', // The website id of your Umami instance
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = BLOG
