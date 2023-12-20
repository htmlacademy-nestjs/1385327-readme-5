import { PostBase, Post, PostType, PostStatus } from '@project/shared/app/types';

export class BlogPostEntity implements PostBase{
  public id?: string;

  public type: PostType;

  public createdAt?: Date;
  // isPublished?: boolean;
  public status?: PostStatus;
  public publishAt?: Date;

  public userId?: string;

  public tags?: string[];
  public comments?: Comment[];

  public isRepost?: boolean;
  public originPostId?: string;
  public originUserId?: string;

  constructor(post: Post) {
    this.populate(post);
  }
  public populate(data: PostBase): void {
    this.id = data.id;
  }
}
