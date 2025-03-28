import { Injectable } from '@nestjs/common';
import { RecipeDTO, UserDTO } from './app.resolver';
import { PrismaService } from './app.repositorie';
import { Prisma } from '@prisma/client';


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
  constructor(private prisma: PrismaService) { }

  async getUser(
    id: string,
  ): Promise<UserDTO | null> {
    const res = await this.prisma.user.findFirst({
      where: { id },
      include: {
        recipes: true,
      }
    })

    if (!res) {
      throw new Error('no user was found')
    }

    return {
      ...res,
      recipes: res?.recipes.map((recipe) => ({
        ...recipe, ingredients: recipe.ingredients.split(',')
      }))
    }
  }

  async createUser(data: Prisma.UserCreateInput): Promise<UserDTO> {
    return this.prisma.user.create({
      data,
    });
  }

  async updateUser(params: {
    id: string,
    data: { name?: string }
  }): Promise<UserDTO> {
    return this.prisma.user.update({
      data: params.data,
      where: { id: params.id },
    });
  }

  async createRecipe({ data }: { data: RecipeDTO }): Promise<RecipeDTO> {
    const res = await this.prisma.recipe.create({
      data: {
        id: data.id,

        title: data.title,

        description: data.description,

        ingredients: data.ingredients.join(','),

        authorId: data.authorId,
      }
    })
    return { ...res, ingredients: res.ingredients.split(',') }
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
