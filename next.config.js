// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const debug = process.env.NODE_ENV !== "production";

module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      '/p/hello-nextjs': { page: '/post', query: { title: 'Hello Next.js' } },
      '/p/learn-nextjs': { page: '/post', query: { title: 'Learn Next.js is awesome' } },
      '/p/deploy-nextjs': { page: '/post', query: { title: 'Deploy apps with Zeit' } },
      '/p/exporting-pages': { page: '/post', query: { title: 'Learn to Export HTML Pages' } }
    }
  },
  //assetPrefix: '',
  assetPrefix: !debug ? '/solareenlo/' : '',
}
