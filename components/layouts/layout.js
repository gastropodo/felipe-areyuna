import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Felipe Areyuna</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {children}
            </main>
            <footer>
                <h2>
                    <Link href="/">Back to home</Link>
                </h2>
            </footer>
        </div>
    )
}