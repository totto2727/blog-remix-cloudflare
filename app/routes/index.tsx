import type { LoaderFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { createClient } from "@supabase/supabase-js";

type test = {
  id: string;
  x: string;
  created_at: Date;
};

export const loader: LoaderFunction = async () => {
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    fetch: (...args) => fetch(...args),
  });
  const { data } = await supabase.from<test>("test").select();

  return data;
};

export default function Index() {
  const data = useLoaderData<test[]>();

  return <div>{JSON.stringify(data)}</div>;
}

// import type { LoaderFunction } from "@remix-run/cloudflare";
// import { useLoaderData } from "@remix-run/react";

// export const loader: LoaderFunction = () => {
//   return { message: "Hello, Remix!" };
// };

// export default function Index() {
//   const data = useLoaderData();
//   return <h1>{data.message}</h1>;
// }
