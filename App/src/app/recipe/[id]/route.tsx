import { gql } from "@apollo/client";
import createApolloClient from "@/lib/apollo-client";


export const GET_RECIPES = gql`
  query GetRecipes {
    recipes {
      id
      title
      description
      ingredients
    }
  }
`;



export async function getStaticProps() {
    const client = createApolloClient();

    const { data } = await client.query({
        query: GET_RECIPES,
    });

    return {
        props: {
            recipes: data.recipes,
        },
        revalidate: 60, // Revalidate every 60 seconds
    };
}

function Recipe({ recipes }) {
    console.log(recipes)
    return <></>
}
export default Recipe