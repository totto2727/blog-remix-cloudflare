import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="text-center">
      <header>
        <h1>totto blog</h1>
      </header>
      <Link to="/posts" className="link">
        Blog Posts
      </Link>
    </div>
  );
}
