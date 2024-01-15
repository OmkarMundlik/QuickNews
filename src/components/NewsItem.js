import React, { Component } from 'react'

const NewsItem = (props) => {
    
    return (
        <div className="my-3">
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: 0, padding: '2px' }}
                >
                    <span className=" badge rounded-pill bg-danger p-2 px-3">
                        {props.source}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>
                <img src={!props.imageUrl ? "https://t4.ftcdn.net/jpg/05/81/84/71/360_F_581847176_eF540XqFGHDdGPZxyh5NtWHNzgs0XFk6.jpg" : props.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a rel="noreferrer" href={props.newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    <p className="card-text my-2"><small className="text-muted">By {!props.author ? "Anonymous" : props.author} on {new Date(props.date).toUTCString()}</small></p>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
