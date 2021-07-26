import React from 'react';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="site-header" role="banner">
      <div className="site-branding">
        <p className="site-title">
          <Link href="/">
            <a className="nav-link">Blazor.Tips</a>
          </Link>
        </p>
      </div>
    </header>

  );
};