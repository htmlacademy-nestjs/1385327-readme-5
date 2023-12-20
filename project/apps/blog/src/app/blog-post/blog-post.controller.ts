import { BlogPostService } from "./blog-post.service";

export class BlogPostController {
  constructor(
    private readonly blogPostService: BlogPostService,
  ) {}
}
