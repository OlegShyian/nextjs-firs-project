import Link from "next/link"
import Head from "next/head"

const MainLayout = ({ children, title = "Where is your title?" }) => {
    return (
        <>
            <Head>
                <title>{title} | Next</title>
            </Head>
            <nav>
                <h1><Link href="/"><a>Start</a></Link></h1>
                <h1><Link href="/about"><a>About</a></Link></h1>
                <h1><Link href="/about/author"><a>Author</a></Link></h1>
                <h1><Link href="/post/1"><a>Post</a></Link></h1>
            </nav>
            <main>{children}</main>
            <style jsx>{`
            nav{
                position: fixed;
                height: 60px;
                left: 0;
                right: 0;
                display: flex;
                justify-content: space-around;
                background: blue;
                top: 0;
            }

            nav h1 a{
                color: white;
                text-decoration: none;
            }

            main{
                margin: 80px 0 0 20px;
            }
            `}</style>

        </>
    )
}

export default MainLayout
