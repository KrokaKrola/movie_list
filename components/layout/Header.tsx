import React, { memo } from 'react';
import { Logo } from '../Logo/Logo';

export const Header = memo(() => (
  <header>
    <div className="container">
      <Logo />
    </div>
  </header>
));
