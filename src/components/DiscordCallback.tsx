import React, { useEffect } from 'react';

export const DiscordCallback = () => {
  useEffect(() => {
    const params = window.location.search;
    if (window.opener) {
      console.log(params);
      window.opener.postMessage(params);
      window.close();
    } else {
      alert('No opener');
    }
  }, []);

  return <div />;
};
