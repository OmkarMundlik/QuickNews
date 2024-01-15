import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);


    const fetchData = async (page) => {
        props.setProgress(10);
        let url = "";
        if (props.query.length !== 0) {
            url = `https://newsapi.org/v2/everything?q=${props.query}&apiKey=${props.apiKey}&page=${1}&pageSize=${props.pageSize}`
        } else {
            url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        }
        props.setProgress(30);
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json()
        props.setProgress(90);

        setPage(page);
        setArticles(parsedData.articles);
        setLoading(false);
        setTotalResults(parsedData.totalResults)
        props.setProgress(100);
    }

    useEffect(() => {
        fetchData(1);
    }, [])


    //const handlePrevClick = async () => {
    //     fetchData(page - 1)
    // }

    //const handleNextClick = async () => {
    //     fetchData(page + 1)
    // }
    const Capitalize = (word) => {
        return word[0].toUpperCase() + word.slice(1);
    }

    const fetchMoreData = async () => {
        let url = "";
        if (props.query.length !== 0) {   // API : eeefea54d0b14adebeaede4b09534112
            url = `https://newsapi.org/v2/everything?q=${props.query}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`
        } else {
            url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        }

        let data = await fetch(url);
        let parsedData = await data.json()

        setPage(page + 1);
        setArticles(articles.concat(parsedData.articles));
        setLoading(false);
        setTotalResults(parsedData.totalResults)
    }

    return (

        <>
            <h1
                className="text-center" style={{ margin: '35px 0px', }}>NewsMonkey - Top {Capitalize(props.category)} Headlines</h1>
            {loading && <Spinner />}


            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<Spinner />}
            >
                <div className="container my-3">
                    <div className="row">
                        {!loading && articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
                    <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
        </>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
    query: "",
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    setProgress: PropTypes.func,
}

export default News
