import { PostType } from "./post-type.enum";
import { PostStatus } from "./post-status.enum";

export interface PostBase {
  id?: string;
  type: PostType;

  createdAt?: Date;
  //isPublished?: boolean;
  status?: PostStatus;
  publishAt?: Date;

  userId?: string;

  tags?: string[];
  comments?: Comment[];

  isRepost?: boolean;
  originPostId?: string;
  originUserId?: string;
}

export interface PostVideo extends PostBase {
  type: PostType.Video;
  title: string;
  link: string;
}

export interface PostText extends PostBase {
  type: PostType.Text;
  title: string;
  preview: string;
  description: string;
}

export interface PostQuote extends PostBase {
  type: PostType.Quote;
  author: string;
  description: string;
}

export interface PostPhoto extends PostBase  {
  type: PostType.Photo;
  title: string;
  photo: string;
}

export interface PostLink extends PostBase  {
  type: PostType.Link;
  link: string;
  description?: string;
}

export type Post = PostVideo | PostText | PostQuote | PostPhoto | PostLink;
