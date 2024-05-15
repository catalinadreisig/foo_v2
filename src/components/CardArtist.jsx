import Image from "next/image";

export default function CardArtist({ data }) {
  return (
    <a>
      <Image src={!band.logo.startsWith("https") ? `http://localhost:8080/logos/${band.logo}` : band.logo} height={100} width={100} alt="logo of the artist" />
      <h1>{data.name}</h1>{" "}
    </a>
  );
}
