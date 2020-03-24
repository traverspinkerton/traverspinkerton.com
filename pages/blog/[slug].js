import matter from "gray-matter";
import { join } from "path";
import fs from "fs";

export default function Post({ post }) {
  return (
    <div>
      <p>{post.title}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = fs
    .readdirSync(postsPath)
    .map(slug => ({ params: { slug: slug.split(".")[0] } }));

  return { paths, fallback: false };
}

const postsPath = join(process.cwd(), "posts");

export async function getStaticProps({ params }) {
  const file = fs.readFileSync(`${postsPath}/${params.slug}.md`, "utf-8");
  let post = matter(file);

  return {
    props: {
      post: {
        title: post.data.title,
        content: post.content,
        date: post.data.Date.toString()
      }
    }
  };
}
