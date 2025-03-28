import { Args, InputType, Mutation, OmitType, Query, Resolver } from "@nestjs/graphql";
import { AppService } from "./app.service";
import { Field, ObjectType } from '@nestjs/graphql';


@ObjectType('userDTOObject')
@InputType()
export class UserDTO {
    @Field(type => String)
    id: string;

    @Field(type => String)
    name: string;

    @Field(type => [RecipeDTO], { nullable: true })
    recipes?: RecipeDTO[]
}

@InputType('userDTOInput')
export class InputUserDTO {
    @Field(type => String)
    name: string;

    @Field(type => [RecipeDTO], { nullable: true })
    recipes?: RecipeDTO[]
}


@ObjectType('recipeDTOObject')
@InputType()
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

@InputType('recipeDTOOInput')
export class InputRecipeDTO { // Recepie DTO for graphQL
    @Field(type => String)
    title: string;

    @Field(type => String)
    description: string;

    @Field(type => [String])
    ingredients: string[];

    @Field(type => String)
    authorId: string;
};

// @InputType('recipeDTOOInput')
// export class InputRecipeDTO extends OmitType<RecipeDTO, id> 


@Resolver(() => RecipeDTO)
export class AppResolver {
    constructor(
        private appServiece: AppService,
    ) { }

    @Mutation(() => UserDTO)
    async createUser(@Args('input') input: InputUserDTO) {
        return this.appServiece.createUser({ id: Date.now().toString(), name: input.name });
    }

    @Mutation(() => UserDTO)
    async updateUser(@Args('input') input: UserDTO) {
        return this.appServiece.updateUser({ id: input.id, data: { name: input.name } });
    }

    @Mutation(() => RecipeDTO)
    async createRecipe(@Args('input') input: InputRecipeDTO) {
        return this.appServiece.createRecipe({ data: { ...input, id: Date.now().toString() } });
    }

    @Query(() => RecipeDTO)
    getRecipe(@Args('id', { type: () => String }) id: string): RecipeDTO {
        console.log(id);
        return this.appServiece.getRecipe();
    }

    @Query(() => UserDTO)
    async getUser(@Args('id', { type: () => String }) id: string): Promise<UserDTO | null> {
        console.log(id);
        return await this.appServiece.getUser(id);
    }

    @Query(() => [RecipeDTO])
    getAllRecipes(): RecipeDTO[] {
        return this.appServiece.getAllRecipes();
    }
}
