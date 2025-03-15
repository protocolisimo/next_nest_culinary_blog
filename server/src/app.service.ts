import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(token): string {
    return `Hello World! ${token}`;
  }

  getPosts(): any[] {
    return [{ asds: 'asds' }];
  }

  postPosts(data) {
    console.log(data)
  }
}
