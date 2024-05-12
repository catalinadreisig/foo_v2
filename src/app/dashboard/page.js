const response = await fetch("http://localhost:8080/bands");
const data = await response.json();
console.log(data);

export default function Home() {
  return (
    <>
      <div>
        <p>hej</p>
      </div>
    </>
  );
}
