import Link from "next/link"
import Head from "next/head"
import MainLayout from "../../components/MainLayout"


const author = () => {
    return (
        <MainLayout title="Author page">
            <h1>Some text about Author!</h1>
            <p>
                <Link href="/posts">posts</Link>
            </p>
            <p>
                <Link href="/about">about</Link>
            </p>
        </MainLayout>
    )
}

export default author
