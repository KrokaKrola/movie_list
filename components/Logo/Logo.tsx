import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import LogoSvg from '../../assets/svg/logo.svg';
import LogoDepressed from '../../assets/svg/logo_depressed.svg';
import styles from './index.module.scss';

interface Props {
  depressed?: boolean
}

const defaultProps: Props = {
  depressed: false,
};

export const Logo = ({ depressed = false }: Props) => {
  const router = useRouter();
  if (router.pathname === '/') {
    return (
      <div className={styles.logo}>
        {!depressed ? <LogoSvg /> : <LogoDepressed />}
      </div>
    );
  }
  return (
    <Link href="/">
      <a href="/" className={styles.logo}>
        {!depressed ? <LogoSvg /> : <LogoDepressed />}
      </a>
    </Link>
  );
};

Logo.defaultProps = defaultProps;
