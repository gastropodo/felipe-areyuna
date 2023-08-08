import Link from 'next/link';

export default function ProjectsLayout({ children }) {
    return (
        <div>
            {children}
            <footer>
                <h2>
                    <Link href="/projects">Back to projects</Link>
                </h2>
            </footer>
        </div>
    )
}