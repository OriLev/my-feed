import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Headline from './Headline';

import './styles.css';

const apiKey = '7c09996aa0be4d84bfb75821f011b001';
const baseUrl = 'http://newsapi.org/v2';
const requestType = 'top-headlines';

const NoArticles = () => <div>Sorry, no articles to show</div>

const Feed = () => {
  const [articles, setArticles] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [country, setCountry] = useState('us');
  const [category, setCategory] = useState('');
  
  const requestParams = [
    `country=${country}`,
    `category=${category}`,
    `page=${pageNum}`
  ].join('&');
  const url = `${baseUrl}/${requestType}?${requestParams}&apiKey=${apiKey}`;
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios(url);
      setArticles(data.data.articles);
    };
 
    fetchData();
  }, [url]);
  console.log('articles: ', articles);
  return (
    <div className="feedContainer">
      {
        articles
        ? <ul className="headlinesList">
            {articles.map(article => <Headline key={article.title} {...article} />)}
          </ul>
        : <NoArticles />
      }
    </div>
  )
}

export default Feed;
