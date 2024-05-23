import CardArtist from "../../../components/CardArtist";

export default async function Band({ params }) {
  const response = await fetch("http://localhost:8080/bands");
  const data = await response.json();
  const { slug } = params;
  const filterData = data.filter((oneBand) => oneBand.slug === slug);
  const band = filterData[0];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-20 text-white uppercase text-breads pt-32">
      <div>
        <CardArtist data={band} />
      </div>
      <div className="flex">
        <h1 className="uppercase text-headers p-5 justify-self-end">{band.name}</h1>
        <p className="uppercase text-breads p-5 justify-self-end">{band.genre}</p>
        <p className="uppercase text-breads p-5 justify-self-end">{band.bio}</p>
      </div>
    </section>
  );
}
