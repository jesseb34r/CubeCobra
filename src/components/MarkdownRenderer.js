import React from 'react';
import PropTypes from 'prop-types';

import ReactMarkdown from 'react-markdown';
import Latex from 'react-latex';
import math from 'remark-math';
import breaks from 'remark-breaks';
import userlink from 'markdown/userlink';
import strikethrough from 'markdown/strikethrough';
import symbols from 'markdown/symbols';
import cardlink from 'markdown/cardlink';
import withAutocard from 'components/WithAutocard';
import FoilCardImage from 'components/FoilCardImage';

import { Col, Row, Card, CardBody } from 'reactstrap';

const AutocardLink = withAutocard('a');

function renderMath(node) {
  return <Latex trusted={false} displayMode>{`$$ ${node.value} $$`}</Latex>;
}

function renderInlineMath(node) {
  return <Latex trusted={false}>{`$ ${node.value} $`}</Latex>;
}

function renderUserlink(node) {
  const name = node.value;
  return (
    <a href={`/user/view/${name}`} target="_blank" rel="noopener noreferrer">
      @{name}
    </a>
  );
}

function renderSymbol(node) {
  const symbol = node.value.replace('/', '-').toLowerCase();
  return <img src={`/content/symbols/${symbol}.png`} alt={symbol} className="mana-symbol-sm" />;
}

function renderCardlink(node) {
  const name = node.name;
  const id = node.id ?? name;
  const idURL = encodeURIComponent(id);
  const details = { image_normal: `/tool/cardimage/${idURL}` };
  if (node.dfc) details.image_flip = `/tool/cardimageflip/${idURL}`;

  return (
    <AutocardLink href={`/tool/card/${idURL}`} card={{ details }} target="_blank" rel="noopener noreferrer">
      {name}
    </AutocardLink>
  );
}

function renderCardImage(node) {
  const name = node.value;
  const nameURL = encodeURIComponent(name);
  const details = { image_normal: `/tool/cardimage/${nameURL}` };
  if (node.dfc) details.image_flip = `/tool/cardimageflip/${nameURL}`;

  return (
    <Col xs="6" md="4" lg="3">
      <a href={`/tool/card/${nameURL}`} target="_blank" rel="noopener noreferrer">
        <FoilCardImage autocard card={{ details }} className="clickable" />
      </a>
    </Col>
  );
}

const Markdown = ({ markdown, limited }) => {
  const renderers = {
    math: renderMath,
    inlineMath: renderInlineMath,
    userlink: renderUserlink,
    symbol: renderSymbol,
    cardlink: renderCardlink,
    cardimage: renderCardImage,
  };

  const validSymbols = 'wubrgcmtsqepxyz/-0123456789';
  const markdownStr = markdown?.toString() ?? '';
  return (
    <ReactMarkdown
      children={markdownStr}
      plugins={[breaks, math, userlink, cardlink, strikethrough, [symbols, { allowed: validSymbols }]]}
      renderers={renderers}
    />
  );
};

Markdown.propTypes = {
  markdown: PropTypes.string.isRequired,
  limitied: PropTypes.bool,
};

Markdown.defaultProps = {
  limited: false,
};

export default Markdown;
