import Link from "next/link"
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import MainLayout from "../../components/MainLayout";

export default function Post({ post: serverPost }) {
    const [post, setPost] = useState(serverPost);
    const router = useRouter();

    useEffect(() => {
        const load = async () => {
            const response = await fetch(`http://localhost:4200/posts/${router.query.id}`);
            const result = await response.json();
            setPost(result);
        }

        if (!serverPost) {
            load();
        }
    }, [])


    if (!post) {
        return <MainLayout>
            <h2>Loading ...</h2>
        </MainLayout>
    }

    return (
        <MainLayout title={post.title}>
            <h1>{post.title}</h1>
            <h1>
                {post.body}
            </h1>
            <p><Link href="/posts"><a>back to posts</a></Link></p>
        </MainLayout>
    )
}



Post.getInitialProps = async ({ query}) => {
    const response = await fetch(`http://localhost:4200/posts/${query.id}`);
    const post = await response.json();

    return {
        post
    }
}
