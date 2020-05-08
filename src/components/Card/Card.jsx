import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import './Card.scss';

const Card = ({
  heading, imgSrc, footer, children, article, timestamp
}) => (
  <div className="ccard">
    { imgSrc && (
      <div className="ccard__img">
        <img src={imgSrc} alt={heading} />
      </div>
    )}

    { heading && (
      <header className="ccard__header">
        {heading}
      </header>
    )}

    { timestamp && (
      <p className="ccard__timestamp">
        {timestamp}
      </p>
    )}

    { article && (
      <article className="ccard__article">
        {article}
      </article>
    )}

    {children && (
      <div className="ccard__content">
        {children}
      </div>
    )}

    <Footer footer={footer} />
  </div>
);

Card.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.element,
  article: PropTypes.string,
  imgSrc: PropTypes.string,
  timestamp: PropTypes.string,
  footer: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    icon: PropTypes.element,
    onClick: PropTypes.func
  }))
};

const Footer = ({ footer }) => {
  if (footer && footer.length > 0) {
    const buttons = footer.map((x) => (
      <Button
        type={x.type}
        icon={x.icon}
        text={x.text}
        onClick={x.onClick}
        key={x.text}
      />
    ));

    return (
      <footer className="ccard__footer">
        {buttons}
      </footer>
    );
  }

  return null;
};

Footer.propTypes = {
  footer: Card.propTypes.footer
};

export default Card;
