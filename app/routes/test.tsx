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

export default function Test() {
  const data = useLoaderData<test[]>();

  const switchMode = () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = (() => {
      switch (current) {
        case "light":
          return "dark";
        case "dark":
          return "light";
        default:
          return "dark";
      }
    })();
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <div className="prose">
      <button className="btn" onClick={switchMode}>
        Mode
      </button>
      <button className="btn btn-primary">abc</button>
      <button className="btn btn-secondary">abc</button>
      <button className="btn">abc</button>
      <h1>H1</h1>
      <h2>H2</h2>
      <h3>H3</h3>
      <h4>H4</h4>
      <ol>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ol>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
      <section className="prose">
        <p>あいうえお</p>
        <p>{JSON.stringify(data)}</p>
      </section>
    </div>
  );
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
