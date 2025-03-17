import { ApolloClient, InMemoryCache } from "@apollo/client";

// const createApolloClient = () => {
//     return new ApolloClient({
//         uri: "https://countries.trevorblades.com",
//         cache: new InMemoryCache(),
//     });
// };


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


const createApolloClient = () => {
    query: async () => ({ data: mockData })
}

export default createApolloClient;