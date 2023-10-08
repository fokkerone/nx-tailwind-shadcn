import styles from './page.module.css';
import { Ui } from '@fokker/ui';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <Ui></Ui>
      </div>
    </div>
  );
}
