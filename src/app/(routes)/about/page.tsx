import { CLIENT, DIRECTORS } from "@/constant";
import Image from "next/image";

export default function About() {
  return (
    <main>
      <section className="flex p-[150px] bg-primgreen gap-16">
        <h1 className="bold-64 text-primwhite basis-10/12">About</h1>
        <div className="flex flex-col gap-8">
          <div className="w-[50px] h-[4px] bg-primcoral"></div>
          <p className="semi-bold-18 text-primwhite">
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We’ll bring those teams to you.
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center bg-secdeepjunggreen px-12">
        <h3 className="text-primwhite bold-48 leading-[48px]">
          Meet the directors
        </h3>
        <div className="flex gap-8 flex-wrap justify-center">
          {DIRECTORS.map((ceo) => (
            <div
              key={ceo.id}
              className="bg-secsacramgreen  relative flex flex-col justify-center items-center w-[350px] h-[253px]"
            >
              <Image
                className="rounded-full border-2 border-secrapblue"
                src={`/${ceo.url}`}
                alt={`avatar ${ceo.name}`}
                width={96}
                height={96}
              />
              <p className="bold-18 text-secrapblue">{ceo.name}</p>
              <small className="text-primwhite">{ceo.job}</small>
              <Image
                className="p-8 bg-primcoral text-secsacramgreen rounded-full"
                src={`/${ceo.crossIcon}`}
                alt={`${ceo.name}`}
                width={24}
                height={24}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="bg-secsacramgreen flex flex-col px-[100px] py-[70px] gap-y-12">
        <h3 className="text-center bold-48 text-primwhite ">
          Some of our clients
        </h3>
        <div className="flex items-center justify-center gap-12">
          {CLIENT.map((client) => (
            <Image
              key={client.id}
              src={`/${client.url}`}
              alt={`${client.name}`}
              width={160}
              height={40}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
