import Link from "next/link";

export default function CardProgram({ data }) {
  const oldSlug = data.act;
  const removeSign = oldSlug.replace(/[,-]/g, "");
  const splitOldSlug = removeSign.split(" ");
  const lowerCase = splitOldSlug.map((oneword) => oneword.toLowerCase());
  const noSpace = lowerCase.filter((oneword) => oneword.trim().length > 0);
  const newSlug = noSpace.join("-");

  return (
    <Link className="grid place-items-center" href={`/artist/${newSlug}`}>
      <h1 className="col-start-1 row-start-1 justify-self-start py-3">{data.act}</h1>
    </Link>
  );
}
