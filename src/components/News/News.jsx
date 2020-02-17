import React from 'react';

import './News.scss';
import { MdLaunch } from 'react-icons/md';
import Card from '../Card/Card';
import smallTxt from '../../loremipsum/small.txt';
import mediumTxt from '../../loremipsum/medium.txt';
import largeTxt from '../../loremipsum/large.txt';
import img from '../../img/logo.png';

const News = () => {
  const footer = [{
    text: 'Open external Link',
    icon: <MdLaunch />,
    onClick: () => window.open('https://google.com', '_blank')
  }];

  return (
    <div className="news">
      <Card
        heading="Sample News Card"
        article={smallTxt}
        imgSrc={img}
        footer={footer}
      />

      <Card
        heading="Sample News Card"
        article={mediumTxt}
        imgSrc={img}
        footer={footer}
      />

      <Card
        heading="Sample News Card"
        article={largeTxt}
        imgSrc={img}
        footer={footer}
      />
    </div>
  );
};

export default News;
