import Image from "next/image";
import Link from "next/link";

export default function CardArtist({ data }) {
  return (
    <Link href={`/artist/${data.slug}`}>
      <Image src={!data.logo.startsWith("https") ? `http://localhost:8080/logos/${data.logo}` : data.logo} height={100} width={100} alt="logo of the artist" />
      <h1>{data.name}</h1>{" "}
    </Link>
  );
}
