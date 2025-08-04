import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type availableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<availableThemes>(() => {
    const storageTheme = localStorage.getItem('theme') as availableThemes || "dark";

    return storageTheme
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />
  };

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    })
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

    return (
        <nav className={styles.menu}>
            <a className={styles.menuLink} href="#" aria-label="Ir para a Home" title="Ir para a Home">
                <HouseIcon />
            </a>

              <a className={styles.menuLink} href="#" aria-label="Ir para o Histórico" title="Ir para o Histórico">
                <HistoryIcon />
            </a>

              <a className={styles.menuLink} href="#" aria-label="Ir para as Configurações" title="Ir para as Configurações">
                <SettingsIcon />
            </a>

              <a className={styles.menuLink} href="#" aria-label="Alterar o Tema" title="Alterar o Tema" onClick={handleThemeChange}>
                {nextThemeIcon[theme]}
            </a>
        </nav>
    )
}