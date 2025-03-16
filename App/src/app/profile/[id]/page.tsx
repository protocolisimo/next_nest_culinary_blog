// export async function generateStaticParams() {
//     const users = await fetchAllUsernames();
//     return users.map((user) => ({ username: user.username }));
// }

import { auth } from "@/lib/auth"

export default async function Profile(params) {
    // console.log(params)
    // const user = await fetchUserByUsername(params.username);

    let session = await auth()

    return <>
        Hi {session?.user?.name}, this is your profile page


    </>
}
