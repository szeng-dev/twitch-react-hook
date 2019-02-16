import React, { useState, useEffect } from 'react';
import { ChannelComponent } from './Channel.component';
import { fetchAllChannelsPromise } from '../services/apiService';

// Use React Hook
export const ChannelList = () => {
  const [channelList, setChannelList] = useState([]);
  useEffect(() => {
    fetchAllChannelsPromise
      .then(channelList => setChannelList(channelList))
  });
  return (
    <div className="content">
      <div className="container">
        {
          channelList.map((channel, i) => (
            <ChannelComponent key={i} {...channel}/>
          ))
        }
      </div>
  </div>
  )
}