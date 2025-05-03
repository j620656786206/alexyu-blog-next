'use client';

import dynamic from 'next/dynamic';

const ThemeSwitch = dynamic(() => import('../ThemeSwitch'), {
  loading: () => <div className="mr-5 h-6 w-6" />,
});

export default ThemeSwitch;
