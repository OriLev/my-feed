import React, { useState, useEffect } from 'react';

const Title = ({ title }) => <h4>{title}</h4>;
const Date = ({ date }) => {
  console.log(date);
  const [day, time] = date.split('T');
  console.log(day);
  console.log(time);
  return <h6>{`${day} ${time.slice(0,-1)}`}</h6>;
}

const Headline = ({ title, description, publishedAt, urlToImage }) => {
  return (
    <li className="headlineContainer">
      <Title title={title} />
      <Date date={publishedAt} />
      <div className="contentWrapper">
        <img className="headlineImg" src={urlToImage} />
        <div className="descriptionWrapper">
          <p className="description">{description}</p>
          <a href="/articles/1" target="_blank">Open Article</a>
        </div>
      </div>
    </li>
  )
}

export default Headline;
