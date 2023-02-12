const CONFIG = {
  // profile setting (required)
  profile: {
    name: 'KANKI',
    image: '/avatar.svg',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: 'frontend developer',
    bio: 'I develop everything using node.',
    email: 'anhnhantn97pay@gmail.com',
    linkedin: 'morethanmin',
    github: 'morethanmin',
    instagram: '',
  },
  projects: [
    {
      name: `KANKI`,
      href: 'https://github.com/anhnhantn97/morethan-log'
    }
  ],
  // blog setting (required)
  blog: {
    title: 'KANKI',
    description: 'welcome to KANKI!',
    theme: 'light' // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: 'https://kanki.me',
  since: 2022, // If leave this empty, current year will be used.
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.https://www.notion.so/aafe17604f3b4a9ba74d51ebe6378422?v=7e15f04ab7ff4447a68901689eaf222a,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || ''
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || ''
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'anhnhantn97/morethan-log',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
