import { Args, Query, Resolver } from "@nestjs/graphql";
import { AppService } from "./app.service";
import { Field, ObjectType } from '@nestjs/graphql';


@ObjectType()
export class UserDTO {
    @Field(type => String)
    id: string;

    @Field(type => String)
    name: string;

    @Field(type => [RecipeDTO], { nullable: true })
    recipes?: RecipeDTO[]
}


@ObjectType()
export class RecipeDTO { // Recepie DTO for graphQL
    @Field(type => String)
    id: string;

    @Field(type => String)
    title: string;

    @Field(type => String)
    description: string;

    @Field(type => [String])
    ingredients: string[];

    @Field(type => String)
    authorId: string;
};


@Resolver(() => RecipeDTO)
export class AppResolver {
    constructor(
        private appServiece: AppService,
    ) { }

    @Query(() => RecipeDTO)
    getRecipe(@Args('id', { type: () => String }) id: string): RecipeDTO {
        console.log(id);
        return this.appServiece.getRecipe();
    }

    @Query(() => UserDTO)
    getUser(@Args('id', { type: () => String }) id: string): UserDTO {
        console.log(id);
        return this.appServiece.getUser(id);
    }

    @Query(() => [RecipeDTO])
    getAllRecipes(): RecipeDTO[] {
        return this.appServiece.getAllRecipes();
    }
}
