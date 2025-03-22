import { Injectable } from '@nestjs/common';
import { RecipeDTO, UserDTO } from './app.resolver';


const MOCK_RECIPES = [
  {
    id: '123213',
    title: 'Mock Spaghetti Carbonara',
    description: 'Mocked Italian pasta with eggs, cheese, and pancetta.',
    ingredients: ['Pasta', 'Eggs', 'Cheese', 'Pancetta'],
    authorId: '1'
  },
  {
    id: '2',
    title: '2Mock Chicken Curry',
    description: 'Mocked spicy and creamy curry with tender chicken pieces.',
    ingredients: ['Chicken', 'Coconut Milk', 'Curry Powder'],
    authorId: '106517963766158279134'
  },
  {
    id: '3',
    title: '3Mock Chicken Curry',
    description: 'Mocked spicy and creamy curry with tender chicken pieces.',
    ingredients: ['Chicken', 'Coconut Milk', 'Curry Powder'],
    authorId: '106517963766158279134'
  }
]



@Injectable()
export class AppService {

  getUser(id: string): UserDTO {
    console.log(MOCK_RECIPES.filter(recipe => recipe.authorId === id))
    return {
      id: "106517963766158279134",
      name: "Kyrylo",
      recipes: MOCK_RECIPES.filter(recipe => recipe.authorId === id)
    };
  }

  getRecipe(): RecipeDTO {
    return {
      id: '1',
      title: 'Mock Spaghetti Carbonara',
      description: 'Mocked Italian pasta with eggs, cheese, and pancetta.',
      ingredients: ['Pasta', 'Eggs', 'Cheese', 'Pancetta'],
      authorId: '1'
    };
  }

  getAllRecipes(): RecipeDTO[] {
    return MOCK_RECIPES;
  }

  getPosts(): any[] {
    return [{ asds: 'asds' }];
  }

  postPosts(data: any) {
    console.log(data)
  }
}
