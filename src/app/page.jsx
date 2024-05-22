import Image from "next/image";
import scene from "./imgs/scene.jpeg";

export default function page() {
  return (
    <section className="place-items-center w-9/12 self-center pt-24 md:flex gap-5">
      <Image src={scene} alt="scene" />
      <h1 className="text-white uppercase text-headers self-end"> FOO FESTIVAL </h1>
    </section>
  );
}
