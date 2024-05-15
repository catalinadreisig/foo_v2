import Image from "next/image";
import Link from "next/link";

export default function CardArtist({ data }) {
  return (
    <Link className="grid place-items-center" href={`/artist/${data.slug}`}>
      <Image className="w-full object-cover aspect-square col-start-1 row-start-1 bg-slate-400" src={!data.logo.startsWith("https") ? `http://localhost:8080/logos/${data.logo}` : data.logo} height={200} width={200} alt="logo of the artist" />
      <h1 className="col-start-1 row-start-1 self-end justify-self-end">{data.name}</h1>{" "}
    </Link>
  );
}
