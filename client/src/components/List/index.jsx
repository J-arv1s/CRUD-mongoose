import React from 'react'
import { useEffect, useState } from 'react'
import Article from '../Article'

const List = () => {

    const [ articles, setArticles] = useState([])
    useEffect(() => {

        const fetchArticles = async () => {
            const res = await fetch('http://localhost:3000/things')
            const data = await res.json()
            if(res.ok){
                setArticles(data)
            }
        }

        fetchArticles()
    }, [])
  
    return (
        <div>
            <h2>List Articles</h2>
            { articles && articles.map((a) => <Article 
                key={a._id}
                title={a.title}
                body={a.body}/>
            )}
        </div>
    )
}

export default List