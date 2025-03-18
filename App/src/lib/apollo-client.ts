import { DocumentNode, gql } from '@apollo/client';

export type Recipe = {
    id: string;
    title: string;
    description: string;
    ingredients: string[];
};

export const GET_ALL_RECIPES = gql`
  query GetRecipes {
    recipes {
      id
      title
      description
      ingredients
    }
  }
`;

export const GET_RECIPE = gql`
  query GetRecipe($id: ID!) {
    recipe(id: $id) {
      id
      title
      description
      ingredients
    }
  }
`;

const mockData = {
    recipes: [
        {
            id: '1',
            title: 'Mock Spaghetti Carbonara',
            description: 'Mocked Italian pasta with eggs, cheese, and pancetta.',
            ingredients: ['Pasta', 'Eggs', 'Cheese', 'Pancetta'],
        },
        {
            id: '2',
            title: 'Mock Chicken Curry',
            description: 'Mocked spicy and creamy curry with tender chicken pieces.',
            ingredients: ['Chicken', 'Coconut Milk', 'Curry Powder'],
        },
    ],
};

// ✅ Mock Apollo Client function
export const client = {
    query: async ({ query, variables }: { query: DocumentNode, variables?: { id: string } }) => {
        if (query === GET_ALL_RECIPES) {
            return { data: { recipes: mockData.recipes } };
        }
        if (query === GET_RECIPE) {
            const recipe = mockData.recipes.find((r) => r.id === variables?.id);
            return { data: { recipe } };
        }
        return { data: null };
    },
};