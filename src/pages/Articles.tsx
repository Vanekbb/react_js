import { FC, useEffect, useState } from 'react'
import { api } from '/src/constants'
import style from './Articles.module.css';

interface IArticles {
    id: string,
    title: string
}

export const Articles: FC = () => {
    const [loading, setLoading] = useState(false)
    const [articles, setArticles] = useState<IArticles[]>([])
    const [error, setError] = useState('')
    useEffect(() => {
        getFetchArticles()
    }, [])

    const getFetchArticles = async() => {
        setLoading(true)
        setError('')
        setArticles([])
        
        await new Promise((resolve) => setTimeout(resolve, 1000))
        
        try {
            const res = await fetch(`${api}/v3/articles`)
            const data: IArticles[] = await res.json()
            setArticles(data)
        } catch (err) {
            if (err instanceof Error) {
            setError(err.message)
            } else {
                setError('Error')  
            }
        } finally {
            setLoading(false)
        }
    }

    return <div>
        <h2>Articles</h2>
        {loading && <div>Loading...</div>}
        <button onClick={getFetchArticles}>Reload</button>
        <ul>
        {articles.map(article => <li key={article.id}>{article.title}</li>)}
        </ul>
        {error && <p className={style.error}>{error}</p>}
    </div>
}