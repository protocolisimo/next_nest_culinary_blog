import { DocumentNode, gql } from '@apollo/client';

export type Recipe = {
    id: string;
    title: string;
    description: string;
    ingredients: string[];
    author: { id: number }
};

export type User = {
    id: string;
    name: string;
    posts?: number[]
};

export const GET_ALL_RECIPES = gql`
  query GetRecipes {
    recipes {
      id
      title
      description
      ingredients
      author {id}
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
      author {id}
    }
  }
`;

export const GET_ALL_USERS = gql`
  query GetUsers {
    users {
      id
      name
      posts
    }
  }
`;

export const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      posts
    }
  }
`;

export const GET_POSTS_BY_USER: DocumentNode = gql`
  query GetPostsByUser($authorId: ID!) {
    postsByUser(authorId: $authorId) {
      id
      title
      description
      ingredients
      author {
        id
      }
    }
  }
`;

const mockRecipes = [
    {
        id: '1',
        title: 'Mock Spaghetti Carbonara',
        description: 'Mocked Italian pasta with eggs, cheese, and pancetta.',
        ingredients: ['Pasta', 'Eggs', 'Cheese', 'Pancetta'],
        author: { id: '1' }
    },
    {
        id: '2',
        title: '2Mock Chicken Curry',
        description: 'Mocked spicy and creamy curry with tender chicken pieces.',
        ingredients: ['Chicken', 'Coconut Milk', 'Curry Powder'],
        author: { id: '1' }
    },
    {
        id: '3',
        title: '3Mock Chicken Curry',
        description: 'Mocked spicy and creamy curry with tender chicken pieces.',
        ingredients: ['Chicken', 'Coconut Milk', 'Curry Powder'],
        author: { id: '106517963766158279134' }
    },
    {
        id: '4',
        title: '4Mock Chicken Curry',
        description: 'Mocked spicy and creamy curry with tender chicken pieces.',
        ingredients: ['Chicken', 'Coconut Milk', 'Curry Powder'],
        author: { id: '106517963766158279134' }
    },
    {
        id: '5',
        title: '5Mock Chicken Curry',
        description: 'Mocked spicy and creamy curry with tender chicken pieces.',
        ingredients: ['Chicken', 'Coconut Milk', 'Curry Powder'],
        author: { id: '106517963766158279134' }
    },
]

const mockUsers = [
    {
        id: '1',
        name: "asd"
    },
    {
        id: '2',
        name: 'asdasdasd'
    },
    {
        id: "106517963766158279134",
        name: "Kyrylo"
    }
]


export const client = {
    query: async ({ query, variables }: { query: DocumentNode, variables?: { id: string } }) => {
        if (query === GET_ALL_USERS) {
            return { data: { users: mockUsers } };
        }
        if (query === GET_USER) {
            const user = mockUsers.find((r) => r.id === variables?.id);
            return { data: { user } };
        }
        if (query === GET_ALL_RECIPES) {
            return { data: { recipes: mockRecipes } };
        }
        if (query === GET_RECIPE) {
            const recipe = mockRecipes.find((r) => r.id === variables?.id);
            return { data: { recipe } };
        }
        if (query === GET_POSTS_BY_USER) {
            return { data: mockRecipes.filter((p) => p.author.id === variables?.id) };
        }
        return { data: null };
    },
};