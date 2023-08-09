import Link from "next/link";
import { Layout } from "../../components/layouts";

export default function Projects() {
    return (
        <Layout>
            <h1>
                Projects
            </h1>
            <ul>
                <li>
                    <Link href="/projects/project1">
                        Project 1
                    </Link>
                </li>
                <li>Project 2</li>
            </ul>
        </Layout>
    )
}