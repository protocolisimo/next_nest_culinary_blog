import { gql, TypedDocumentNode } from '@apollo/client';

export type Recipe = {
    id: string;
    title: string;
    description: string;
    ingredients: string[];
    author: { id: string }
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
` as TypedDocumentNode<Recipe[]>;

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
` as TypedDocumentNode<Recipe>;

export const GET_ALL_USERS = gql`
  query GetUsers {
    users {
      id
      name
      posts
    }
  }
`as TypedDocumentNode<User[]>;

export const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      posts
    }
  }
`as TypedDocumentNode<User>;

export const GET_POSTS_BY_USER = gql`
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
` as TypedDocumentNode<Recipe[]>;

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

type QueryMapType = {
    getAllUsers: { query: User[] };
    getUser: { query: User, variables: { id: string } };
    getAllRecipes: { query: Recipe[] };
    getRecipe: { query: Recipe, variables: { id: string } };
    getPostsByUser: { query: Recipe[], variables: { id: string } };
};

type QueryType<T extends keyof QueryMapType> = {
    type: T,
    // query: QueryMapType[T]['query'],
    variables?: { id: string }
}

type ReturnQueryType<T extends keyof QueryMapType> = Promise<QueryMapType[T]['query']>
const DEFAULT_RECIPE = {
    id: 'default',
    title: 'default',
    description: 'default',
    ingredients: ['default'],
    author: { id: '000000000' }
}

const DEFAULT_USER = {
    id: '000000000',
    name: 'default',
}

export const client = {
    query: async <T extends keyof QueryMapType>({ type, variables }: QueryType<T>): ReturnQueryType<T> => {
        // console.log(query)
        switch (type) {
            case 'getAllRecipes':
                return mockRecipes
            case 'getRecipe':
                return mockRecipes.find((r) => r.id === variables?.id) || DEFAULT_RECIPE;
            case 'getAllUsers':
                return mockUsers
            case 'getUser':
                return mockUsers.find((r) => r.id === variables?.id) || DEFAULT_USER
            case 'getPostsByUser':
                return mockRecipes.filter((p) => p.author.id === variables?.id);
            default:
                throw new Error('Query not found');
        }
    },
};