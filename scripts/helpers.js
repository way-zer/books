/* global hexo */

'use strict';

const cheerio = require('cheerio');
const full_url_for = hexo.extend.helper.get('full_url_for').bind(hexo);

hexo.extend.helper.register('page_nav', function() {
  const type = this.page.canonical_path.split('/')[0];
  const path = this.page.canonical_path.substr(type.length + 1);
  const data = this.site.data.book[type].tree;
  const titles = {}
  this.site.pages.forEach(page => {
    if(page.path.startsWith(type+'/')){
      titles[page.path.substring(type.length+1,page.path.length-5)]=page.title;
    }
  });
  function getTitle(file){
    return titles[file]||"NOTFOUND";
  }

  const list = {};
  for(let item of Object.values(data)){
    if(typeof item === 'string')
      item = [item];
    for (let file of item) {
      list[file+".html"]=getTitle(file);
    }
  }

  const keys = Object.keys(list);
  const index = keys.indexOf(path);
  let result = '';
  if (index > 0) {
    result += `<a href="/${type}/${keys[index - 1]}" class="article-footer-prev" title="${list[keys[index - 1]]}"><i class="fa fa-chevron-left"></i><span>${this.__('page.prev')}</span></a>`;
  }
  if (index < keys.length - 1) {
    result += `<a href="/${type}/${keys[index + 1]}" class="article-footer-next" title="${list[keys[index + 1]]}"><span>${this.__('page.next')}</span><i class="fa fa-chevron-right"></i></a>`;
  }
  return result;
});

hexo.extend.helper.register('doc_sidebar', function(className) {
  const type = this.page.canonical_path.split('/')[0];
  const path = this.page.canonical_path.substr(type.length + 1);
  const tree = this.site.data.book[type].tree;
  const titles = {}
  this.site.pages.forEach(page => {
    if(page.path.startsWith(type+'/')){
      titles[page.path.substring(type.length+1,page.path.length-5)]=page.title;
    }
  });
  function getTitle(file){
    return titles[file]||"NOTFOUND";
  }
  let result='';
  for(let [title, item] of Object.entries(tree)){
    if(typeof item === 'string')
      item = [item];
    result += '<strong class="' + className + '-title">' + title + '</strong>';
    for (let file of item) {
      let itemClass = className + '-link';
      if (file+".html" === path) itemClass += ' current';
      result += `<a href="/${type}/${file}.html" class="${itemClass}">${getTitle(file)}</a>`;
    }
  }
  return result;
});

hexo.extend.helper.register('header_menu', function(className) {
  const books = this.site.data.book;
  let result = '';
  for (let [path, book] of Object.entries(books)) {
    result += `<a href="${this.url_for(`/${path}/`)}" class="${className}-link">${book.name}</a>`;
  }
  return result;
});

hexo.extend.helper.register('canonical_url', function(lang) {
  let path = this.page.path;
  if (lang && lang !== 'zh-cn') path = lang + '/' + path;

  return full_url_for(path);
});

hexo.extend.helper.register('url_for_lang', function(path) {
  const lang = this.page.lang;
  let url = this.url_for(path);

  if (lang !== 'zh-cn' && url[0] === '/') url = '/' + lang + url;

  return url;
});

hexo.extend.helper.register('raw_link', (path) => `https://github.com/way-zer/myHome/edit/master/source/${path}`);

hexo.extend.helper.register('page_anchor', function(str) {
  const $ = cheerio.load(str, {decodeEntities: false});
  const headings = $('h1, h2, h3, h4, h5, h6');

  if (!headings.length) return str;

  headings.each(function() {
    const id = $(this).attr('id');

    $(this)
      .addClass('article-heading')
      .append(`<a class="article-anchor" href="#${id}" aria-hidden="true"></a>`);
  });

  return $.html();
});

// Will be replace with full_url_for after hexo v4 release
hexo.extend.helper.register('canonical_path_for_nav', function() {
  const path = this.page.canonical_path;

  if (path.startsWith('docs/') || path.startsWith('api/')) return path;
  return '';
});

hexo.extend.helper.register('lang_name', function(lang) {
  const data = this.site.data.languages[lang];
  return data.name || data;
});

hexo.extend.helper.register('disqus_lang', function() {
  const lang = this.page.lang;
  const data = this.site.data.languages[lang];

  return data.disqus_lang || lang;
});

hexo.extend.helper.register('hexo_version', function() {
  return this.env.version;
});

