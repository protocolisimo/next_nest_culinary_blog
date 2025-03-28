import { Recipe, client } from "@/lib/apollo-client";
import Link from "next/link";

export async function generateStaticParams() {
  const data = await client.query({ type: 'getAllRecipes' })

  return data.map((recipe: Recipe) => ({
    id: recipe.id,
  }))
}

export default async function RecipePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const data = await client.query({
    type: 'getRecipe',
    variables: { id },
  })

  return <>
    hello
    <h1>
      {data.title}
    </h1>

    <p>
      {data.description}
    </p>

    {data.ingredients.map((ingredient, i) => (
      <p key={`${ingredient}--${i}`}>
        {ingredient}
      </p>
    ))}


    <Link href={`/profile/${data.author.id}`}>
      {data.author.id}
    </Link>
  </>;
}
