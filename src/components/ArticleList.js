import React from "react"
import Article from "./Article"

function ArticleList(props) {
    const articleElements = props.articles.map((article) => {
        return (
            <Article key={article.id} title={article.title} date={article.date} preview={article.preview} minutes={article.minutes} />
        )
    })

    console.log(articleElements)
    return <main>
        {articleElements}
    </main>
}

export default ArticleList