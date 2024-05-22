import CardArtist from "../../../components/CardArtist";

export default async function Band({ params }) {
  const response = await fetch("http://localhost:8080/bands");
  const data = await response.json();
  const { slug } = params;
  const filterData = data.filter((oneBand) => oneBand.slug === slug);
  const band = filterData[0];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white uppercase text-breads ">
      <div>
        <CardArtist data={band} />
      </div>
      <div>
        <h1 className="uppercase text-headers py-8 pt-16 justify-self-end">{band.name}</h1>
        <p>{band.genre}</p>
        <p>{band.bio}</p>
      </div>
    </section>
  );
}
