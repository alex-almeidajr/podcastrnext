import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './styles.module.scss';

export function Header() {
  //const currentDate = new Date().toLocaleDateString();
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {  // Utilizando o date-fns para pegar a data atual
    locale: ptBR,
  });

  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podcastr" />

      <p>O melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>
    </header >
  )
}