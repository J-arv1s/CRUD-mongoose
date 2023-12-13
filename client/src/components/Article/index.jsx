import React from 'react'

const Article = ({ title, body }) => {
    return (
        <div className='article-box'>
            <h3>{ title }</h3>
            <p>{ body }</p>
        </div>
    )
}

export default Article