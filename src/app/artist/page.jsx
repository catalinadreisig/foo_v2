import CardArtist from "@/components/CardArtist";

export default async function Artist() {
  const response = await fetch("http://localhost:8080/bands");
  const data = await response.json();
  console.log(data);

  return (
    <section>
      {data.map((band) => {
        return <CardArtist key={band.name} data={band} />;
      })}
    </section>
  );
}
