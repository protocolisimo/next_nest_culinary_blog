import { Body, Controller, createParamDecorator, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // @Get()
  // getHello(@Query('id') id) {
  //   // return this.appService.getHello();
  // }

  @Get('/posts')
  getPosts(): any[] {
    return this.appService.getPosts();
  }

  @Post('/posts')
  postPosts(@Body() body: Record<any, any>) {
    return this.appService.postPosts(body.data)
  }
}
