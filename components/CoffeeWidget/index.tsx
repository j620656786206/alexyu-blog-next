'use client';

import React, { useEffect } from 'react';

const Buymeacoffee = () => {
  useEffect(() => {
    const script = document.createElement('script');
    const div = document.getElementById('supportByBMC');
    script.setAttribute('data-name', 'BMC-Widget');
    script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js';
    script.setAttribute('data-id', 'j620656786206');
    script.setAttribute('data-description', 'Support me on Buy me a coffee!');
    script.setAttribute(
      'data-message',
      'Thank you for visiting my website. If this app has helped you in anyway, consider buying me a coffee. ✨😎'
    );
    script.setAttribute('data-color', '#ec4899');
    script.setAttribute('data-position', 'Right');
    script.setAttribute('data-x_margin', '18');
    script.setAttribute('data-y_margin', '18');
    script.async = true;
    document.head.appendChild(script);
    script.onload = function () {
      const evt = document.createEvent('Event');
      evt.initEvent('DOMContentLoaded', false, false);
      window.dispatchEvent(evt);
    };

    div?.appendChild(script);
  }, []);

  return <div id="supportByBMC"></div>;
};

export default Buymeacoffee;
