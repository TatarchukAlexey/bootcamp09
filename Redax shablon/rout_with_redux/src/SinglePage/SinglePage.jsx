import React from 'react';
import {NavLink} from 'react-router-dom';
import './SinglePage.css';
import  {connect} from 'react-redux';

const SinglePage = ({news,match}) => {

    let data = news.find(el=>el.publishedAt === match.params.id );
    console.log(data);

    return (
        <div className='article'>
        <NavLink to="/">Назад</NavLink>
            <img src={data.urlToImage} alt={data.title} className='article-img'/>
            <h2 className='article-title'>{data.title}</h2>
            <p className='article-text'>{data.description}</p>
            <a href={data.url} target='_blank' className='article-link'>Читати на сайті</a>
        </div>
    );
};

function MSTP(state) {
    return{
        news: state.news,
    }
}

export default connect(MSTP) (SinglePage);