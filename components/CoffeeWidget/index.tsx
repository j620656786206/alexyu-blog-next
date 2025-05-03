'use client';

import React from 'react';
import Script from 'next/script';

const Buymeacoffee = () => {
  return (
    <>
      <div id="supportByBMC"></div>
      <Script
        id="bmc-widget"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        strategy="lazyOnload"
        data-name="BMC-Widget"
        data-id="j620656786206"
        data-description="Support me on Buy me a coffee!"
        data-message="Thank you for visiting my website. If this app has helped you in anyway, consider buying me a coffee. ✨😎"
        data-color="#ec4899"
        data-position="Right"
        data-x_margin="18"
        data-y_margin="18"
        onLoad={() => {
          // 觸發 BMC widget 初始化
          const evt = document.createEvent('Event');
          evt.initEvent('DOMContentLoaded', false, false);
          window.dispatchEvent(evt);
        }}
      />
    </>
  );
};

export default Buymeacoffee;
