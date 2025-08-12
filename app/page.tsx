import styles from './page.module.css';
import Image from 'next/image';
import NewsList from '@/app/_components/NewsList';
import ButtonLink from '@/app/_components/ButtonLink';

import { News } from '@/app/_libs/microcms';
// 以下内容を上記ファイルに実装し、上記内容を実装
// type News = {
//   id: string;
//   title: string;
//   category: {
//     name: string;
//   };
//   publishedAt: string;
//   createdAt: string;
// };

const data: {
  contents: News[];
} = {
  contents: [
    {
      id: '1',
      title: 'オフィス開設',
      category: {
        name: '更新情報',
      },
      publishedAt: '2023/08/01',
      createdAt: '2023/08/01',
    },
    {
      id: '2',
      title: 'オフィス移転',
      category: {
        name: '更新情報',
      },
      publishedAt: '2024/08/01',
      createdAt: '2024/08/01',
    },
    {
      id: '3',
      title: 'オフィス増設',
      category: {
        name: '更新情報',
      },
      publishedAt: '2025/08/01',
      createdAt: '2025/08/01',
    },
  ],
};

export default function Home() {
  //定義
  // const name = '世界';
  // 表示件数を2件に設定
  const sliceData = data.contents.slice(0, 2);

  return (
    <>
      <section className={styles.top}>
        <div>
          {/* <h1 className={styles.title}>{name}テクノロジー</h1> */}
          <h1 className={styles.title}>テクノロジー</h1>
          <p className={styles.description}>カンパニー</p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData} />
        {/* <ul>
          {sliceData.map((article) => (
            <li key={article.id} className={styles.list}>
              <div className={styles.link}>
                <Image
                  className={styles.image}
                  src="/no-image.png"
                  alt="No Image"
                  width={1200}
                  height={630}
                />
                <dl className={styles.content}>
                  <dt className={styles.newsItemTitle}>{article.title}</dt>
                  <dd className={styles.meta}>
                    <span className={styles.tag}>{article.category.name}</span>
                    <span className={styles.data}>
                      <Image
                        src="/clock.svg"
                        alt=""
                        width={16}
                        height={16}
                        priority
                      />
                      {article.publishedAt}
                    </span>
                  </dd>
                </dl>
              </div>
            </li>
          ))}
        </ul> */}
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
