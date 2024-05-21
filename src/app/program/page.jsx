import Link from "next/link";

export default function page({ data }) {
  return (
    <Link className="grid place-items-center" href={`/artist/${data.slug}`}>
      <h1 className="col-start-1 row-start-1">{data.name}</h1>
      <h1 className="col-start-1 row-start-1">FRIDAY AT 07:45PM</h1>
      <h1>BLUE SCENE</h1>
    </Link>
  );
}
