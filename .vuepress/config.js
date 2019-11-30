const {getNav,getSideBar} = require('./books')
module.exports = ctx => ({
    title: "WayZer的博客",
    description: 'Just playing around',
    base: '/books/',
    // head: [
    //     ['link', { rel: 'icon', href: './logo.png' }],
    //     ['link', { rel: 'manifest', href: './manifest.json' }],
    //     ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    //     ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    //     ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    //     ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    //     ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    //     ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    //     ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    // ],
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        repo: 'way-zer/books',
        editLinks: true,
        smoothScroll: true,
        locales: {
            '/': {
                label: '简体中文',
                selectText: '选择语言',
                ariaLabel: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                nav: getNav(),
                sidebar: getSideBar(),
            }
        }
    },
    plugins: [
        ['@vuepress/back-to-top',true],
        ['@vuepress/medium-zoom', true],
        ['@vuepress/pwa',{
            serviceWorker: true,
            updatePopup: true,
        }]
    ]
})