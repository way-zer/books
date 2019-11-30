const books={
    "book1": {
        name: '零基础JS教程',
        tree: {
            '前言': '',
            '语法基础': [
                'charpter1/',
                'charpter1/page1',
                'charpter1/page2',
            ]
        }
    },
}

module.exports = {
    books,
    getNav:()=>{
        const ret = []
        for (let [path, book] of Object.entries(books)) {
            ret.push({ text: book.name, link: `/${path}/` })
        }
        return ret
    },
    getSideBar:()=>{
        const ret = {}
        for (let [bookid, book] of Object.entries(books)) {
            const list = [];
            for (let [charpter, pages] of Object.entries(book.tree)){
                if(typeof pages === 'string')
                    list.push(pages)
                else {
                    list.push({
                        title: charpter,
                        collapsable: false,
                        children: pages,
                    })
                }
            }
            ret[`/${bookid}/`] = list
        }
        return ret;
    }
}