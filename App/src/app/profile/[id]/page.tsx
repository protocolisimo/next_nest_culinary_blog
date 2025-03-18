import { client, GET_ALL_USERS, GET_POSTS_BY_USER, GET_USER, User } from "@/lib/apollo-client";
import Link from "next/link";


export async function generateStaticParams() {
    const { data } = await client.query({ query: GET_ALL_USERS });

    return data?.users?.map((user: User) => ({
        user,
    }));
}


export default async function Profile({ params }: { params: any }) {
    const { id } = await params

    const { data: { user } } = await client.query({ query: GET_USER, variables: { id } });
    const { data: posts } = await client.query({ query: GET_POSTS_BY_USER, variables: { id } });

    return <>
        Hi  {user?.name}, this is your profile page
        {posts?.map((post) => (
            <Link href={`/recipe/${post.id}`} >{post.title},</Link>
        ))}

    </>
}
