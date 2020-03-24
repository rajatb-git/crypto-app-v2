import React from 'react';

import './News.scss';
import { MdLaunch } from 'react-icons/md';
import { Card } from '../../components';
import smallTxt from '../../loremipsum/small.txt';
import mediumTxt from '../../loremipsum/medium.txt';
import largeTxt from '../../loremipsum/large.txt';
import img from '../../img/logo.png';

const News = () => {
  const footer = [{
    type: 'icon',
    text: 'Open external Link',
    icon: <MdLaunch />,
    onClick: () => window.open('https://google.com', '_blank')
  }];

  return (
    <div className="news">
      <Card
        heading="Sample News Card"
        imgSrc={img}
        article={smallTxt}
        footer={footer}
      />

      <Card
        heading="Sample News Card"
        imgSrc={img}
        article={mediumTxt}
        footer={footer}
      />

      <Card
        heading="Sample News Card"
        imgSrc={img}
        article={largeTxt}
        footer={footer}
      />
    </div>
  );
};

export default News;
