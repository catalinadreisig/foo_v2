import CardArtist from "../../../components/CardArtist";

export default async function Band({ params }) {
  const response = await fetch("https://mature-insidious-monitor.glitch.me/bands");
  const data = await response.json();
  const { slug } = params;
  const filterData = data.filter((oneBand) => oneBand.slug === slug);
  const band = filterData[0];

  return (
    <section className="grid grid-cols-1 pt-32 md:grid-cols-2 text-white uppercase text-breads">
      <div>
        <CardArtist data={band} />
      </div>
      <div className=" pt-7 grid justify-items-end md:pt-0 self-start">
        <h1 className="text-headers">{band.name}</h1>
        <p className=" pt-2 italic">{band.genre}</p>
        <p className="pt-2 text-right md:pl-40">{band.bio}</p>
      </div>
    </section>
  );
}
