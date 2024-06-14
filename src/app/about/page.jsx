import React from "react";
import Image from "next/image";
import foos from "../imgs/foos.png";

export default function about() {
  return (
    <section className="text-breads text-white uppercase">
      <h1 className="text-headers pt-20 pb-10 text-end ">about</h1>

      <div className="md:grid md:grid-cols-2 ">
        <div className="md:col-start-1">
          <p className="text-links text-start pt-5 pb-5 ">the foogees</p>
          <Image src={foos} alt="foos" className="w-10/12" />
        </div>

        <div className="md:col-start-2">
          <p className="text-links pt-5 pb-5 text-end">story of foo</p>
          <p className="text-end">
            Sunburn Festival throbbed with mainstream rock. Ethan, a music journalist with a nose for hidden gems, felt a familiar pang. The headliners were solid, but the overpriced beer and generic food left a hollow taste. Scrolling through his phone, dodging flying nachos, a thought struck him. There has to be a way to celebrate the real heart of music, he muttered to himself. The manufactured pop anthems felt soulless. He craved the raw energy of undiscovered bands, the intimacy of smaller venues, a festival that pulsed with genuine discovery. Ethan scribbled furiously on a napkin, Foo Fest. A playful jab at the foodie scene, but with a deeper meaning. This festival would champion the independent spirit, the bands struggling in basements and dive bars, yearning for a platform. Months
            flew by, fuelled by coffee and countless conversations. He pitched the idea to fellow music lovers, jaded festival attendees, and even skeptical industry insiders. The response? A resounding yes. This wasnt just Ethans dream; it was a shared hunger for authenticity. Securing funding was a battle, the venue a charmingly ramshackle theater. But on that first night, the air crackled with raw energy. Local bands, a kaleidoscope of genres from folk to punk, filled the space with their heart and soul. The crowd, a mix of seasoned music enthusiasts and curious newcomers, surged with a sense of belonging. This wasnt just a concert; it was a movement. Foo Fest, born from a frustrated scribble, had found its voice.
          </p>
        </div>
      </div>
    </section>
  );
}
