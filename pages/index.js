import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Ola</h1>
      <Link href="/users">
        <a>Usuários</a>
      </Link>
    </div>
  );
}
