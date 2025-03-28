// import { client, GET_ALL_USERS, GET_POSTS_BY_USER, GET_USER, Recipe, User } from "@/lib/apollo-client";
import { auth } from "@/lib/auth";
// import Link from "next/link";


// export async function generateStaticParams() {
//     const { data } = await client.query({ query: GET_ALL_USERS });

//     return data?.users?.map((user: User) => ({
//         user,
//     }));
// }


export default async function Profile() {
    const session = await auth();
    // const { id } = await params

    // const { data: { user } } = await client.query({ query: GET_USER, variables: { id } });
    // const { data: posts } = await client.query({ query: GET_POSTS_BY_USER, variables: { id } });

    return <>
        Hi  {session?.user?.name}, this is your profile page
        {/* {posts?.map((post: Recipe) => (
            <Link key={post.id} href={`/recipe/${post.id}`} >{post.title},</Link>
        ))} */}

    </>
}
