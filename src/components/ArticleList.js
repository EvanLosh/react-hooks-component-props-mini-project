import React from "react"
import Article from "./Article"

const defaultArticle = {
    id: '-1',
    title: '',
    date: 'January 1, 1970',
    preview: '',
    minutes: '0'
}

function ArticleList({ article1 = defaultArticle, article2 = defaultArticle, article3 = defaultArticle }) {
    const articleElements = [article1, article2, article3].map((article) => {
        let title = article.title
        let id = article.id
        let date = article.date
        let preview = article.preview
        let minutes = article.minutes
        return (
            <Article key={id} title={title} date={date} preview={preview} minutes={minutes} />
        )
    })

    console.log(articleElements)
    return <main>
        {articleElements}
    </main>
}

export default ArticleList