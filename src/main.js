import { Post } from './Post'

const post = new Post("Webpack Post Title");

console.log("Post toString(): ", post.toString());

export function getNewPost(title) {
  return new Post(title);
}
export function printHello() {
  console.log('Hello!');
}

