import styles from './not-found.module.css';

export default function NotFound() {
  <div className={styles.container}>
    <dl>
      <dt className={styles.title}>ページが見つかりません</dt>
      <dd className={styles.text}>
        ページが見つかりません
        <br />
        URLを再度ご確認
      </dd>
    </dl>
  </div>;
}
