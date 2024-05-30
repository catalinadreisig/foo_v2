import CardArtist from "../../components/CardArtist";

export default async function Artist() {
  const response = await fetch("http://localhost:8080/bands");
  const data = await response.json();
  console.log(data);

  return (
    <section className="grid">
      <h1 className="text-white uppercase text-headers py-8 pt-16 justify-self-end">ARTISTS</h1>
      <div className=" justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-white uppercase text-breads md:text-links">
          {data.map((band) => {
            return <CardArtist key={band.name} data={band} />;
          })}
        </div>
      </div>
    </section>
  );
}
