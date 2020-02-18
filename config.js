'use strict';

const name = 'Jakub Homoly';

module.exports = {
  url: 'https://homoly.me',
  pathPrefix: '/',
  title: `🚀 ${name}`,
  subtitle: 'Jakub Homoly, full-stack software engineer',
  copyright: `© ${new Date().getUTCFullYear()} ${name}`,
  disqusShortname: '',
  postsPerPage: 5,
  googleAnalyticsId: 'UA-73379983-2',
  useKatex: false,
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    }
  ],
  author: {
    name,
    photo: '/photo.jpg',
    bio: 'I love all things tech.',
    contacts: {
      email: '',
      facebook: '',
      telegram: '',
      twitter: 'insane141',
      github: 'jakubhomoly',
      rss: '',
      vkontakte: '',
      linkedin: 'jakubhomoly',
      instagram: '',
      line: '',
      gitlab: '',
      weibo: '',
      codepen: '',
      youtube: '',
      soundcloud: '',
    }
  }
};
