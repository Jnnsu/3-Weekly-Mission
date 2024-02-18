import styles from '@/styles/NotFound.module.css';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <div className={styles.notFound}>
        <div className={styles.content}>
          찾을 수 없는 페이지입니다.
          <br />
          요청하신 페이지가 사라졌거나, 잘못된 경로입니다.
        </div>
        <Link className={styles.button} href="/">
          홈으로 이동
        </Link>
      </div>
    </>
  );
}
