import React from 'react';

export const ChannelComponent = ({ name, url, isLive, description }) => (
  <div className="result">
    <i className="showStatus live">{ isLive ? 'Online' : 'Offline' }</i>
    <a className="cover" href={url} target="_blank">
      <h3 className="name">{ name }</h3>
    </a>
    <div className="logo"></div>
    <h4 className="statusPara">
      <a href={url} target="_blank">{ description }</a>
    </h4>
  </div>
);