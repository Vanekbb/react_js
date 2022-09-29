import { FC, useEffect } from 'react'
import style from './Articles.module.css';
import { StoreState } from '/src/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '/src/store/articles/slice';
import { ThunkDispatch } from '@reduxjs/toolkit';

interface IArticles {
    id: string,
    title: string
}

export const Articles: FC = () => {
    const loading = useSelector((state: StoreState) => state.articles.loading)
    const error = useSelector((state: StoreState) => state.articles.error)
    const articles = useSelector((state: StoreState) => state.articles.articles)
    
    const fetchDispatch = useDispatch<ThunkDispatch<StoreState, void, any>>()

    const handleFetchData = () => {
        fetchDispatch(fetchData())
    }

    useEffect(() => {
        handleFetchData()
    }, [])

    return <div>
        <h2>Articles</h2>
        {loading && <div>Loading...</div>}
        <button onClick={() => handleFetchData()}>Reload</button>
        <ul>
        {articles.map(article => <li key={article.id}>{article.title}</li>)}
        </ul>
        {error && <p className={style.error}>{error}</p>}
    </div>
}