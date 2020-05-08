import React from 'react';
import { MdLaunch } from 'react-icons/md';

import './News.scss';
import useAPI from '../../hooks/useAPI.hook';
import { Card, Button, Loading } from '../../components';
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

  const [isLoading, error, news, reload] = useAPI('fetchNews');

  return (
    <div className="news">
      <Button text="reload" onClick={() => reload()} />
      { isLoading && <Loading /> }
      { !isLoading && news && (
        <>
          <div className="news__grid">
            {
              news.map(x => (
                <Card
                  key={x.id}
                  heading={x.title}
                  imgSrc={x.imageurl}
                  article={x.body}
                  timestamp={new Date(x.published_on).toDateString()}
                  footer={[{
                    type: 'icon',
                    text: 'Open external Link',
                    icon: <MdLaunch />,
                    onClick: () => window.open(x.url, '_blank')
                  }]}
                />
              ))
            }
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
        </>
      )}
    </div>
  );
};

export default News;
