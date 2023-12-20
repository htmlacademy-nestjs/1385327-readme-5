import { Injectable } from '@nestjs/common';

import { BaseMemoryRepository } from '@project/shared/core';
import { BlogPostEntity } from './blog-post.entity';

@Injectable()
export class BlogPostRepository extends BaseMemoryRepository<BlogPostEntity> {

}
