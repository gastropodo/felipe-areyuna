import Link from 'next/link';
import { Layout } from "../components/layouts"

export default function Home() {
    return (
        <Layout>
            <>
                <h1>
                    Hello! I'm Felipe Areyuna.
                </h1>
                <h2>
                    See my <Link href="/projects">projects.</Link>
                </h2>
            </>
        </Layout>
    )
}
