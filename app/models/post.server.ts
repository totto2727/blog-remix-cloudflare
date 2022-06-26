import { prisma } from "~/db.server";

export async function getPosts() {
  return prisma.post.findMany();
}
// export const getPosts: () => Promise<Post[]> = async () => {
//   return [
//     {
//       slug: "my-first-post",
//       title: "My First Post",
//     },
//     {
//       slug: "90s-mixtape",
//       title: "A Mixtape I Made Just For You",
//     },
//   ];
// };
