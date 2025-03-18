import { GET_ALL_RECIPES, GET_RECIPE, Recipe, client } from "@/lib/apollo-client";
import Link from "next/link";

export async function generateStaticParams() {
  const { data } = await client.query({ query: GET_ALL_RECIPES });

  return data?.recipes?.map((recipe: Recipe) => ({
    recipe,
  }));
}

export default async function RecipePage({ params }: { params: any }) {
  const { id } = await params;

  const { data } = await client.query({
    query: GET_RECIPE,
    variables: { id },
  });


  return <>
    <h1>
      {data?.recipe?.title}
    </h1>

    <p>
      {data?.recipe?.description}
    </p>

    {data?.recipe?.ingredients?.map((ingredient, i) => (
      <p key={`${ingredient}--${i}`}>
        {ingredient}
      </p>
    ))}


    <Link href={`/profile/${data?.recipe?.author.id}`}>
      {data?.recipe?.author.id}
    </Link>
  </>;
}
