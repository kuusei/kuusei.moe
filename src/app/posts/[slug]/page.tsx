export function generateStaticParams() {
  return [{ slug: "1" }, { slug: "2" }, { slug: "3" }];
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  // ...

  return <div>PostId: {slug} .</div>;
}
