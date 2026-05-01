import { storage, realtime } from "@/utils/firebase.browser";
import { Query } from "firebase/firestore";
import { set, ref, get, push } from "firebase/database";

export type Post = {
  author: string;
  title: string;
  description: string;
  image_url: string;
};

export async function index() {
  const db = realtime;

  const post = await get(ref(db, "blog-app"));

  if (!post.exists()) {
    return [];
  }

  const data = post.val();
  //returns an array of each data present in an object
  return Object.entries(data).map(([id, value]: any) => ({
    id,
    ...value,
  }));
}

export function add(post: Post) {
  const db = realtime;
  const postRef = push(ref(db, "blog-app"));
  set(postRef, {
    author: post.author,
    title: post.title,
    description: post.description,
    image_url: post.image_url,
  });
}
