import type { LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { createClient } from "@supabase/supabase-js";

type test_raw = {
  id: string;
  x: string;
  created_at: string;
};
type test = {
  id: string;
  x: string;
  created_at: Date;
};

export const loader: LoaderFunction = async () => {
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    fetch: (...args) => fetch(...args),
  });
  const { data } = await supabase.from<test_raw>("test").select();

  return data;
};

export default function Index() {
  const data = useLoaderData<test_raw[]>();
  const data_: test[] = data.map((x) => ({
    ...x,
    created_at: new Date(x.created_at),
  }));
  return <h1>{JSON.stringify(data_}</h1>;
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
