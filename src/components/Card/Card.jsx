import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import './Card.scss';

const Card = ({
  heading, article, imgSrc, footer
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
    ) }

    { article && (
      <article className="ccard__article">
        {article}
      </article>
    )}

    <Footer footer={footer} />
  </div>
);

Card.propTypes = {
  heading: PropTypes.string,
  article: PropTypes.string,
  imgSrc: PropTypes.string,
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
