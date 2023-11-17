import Image from "next/image";
import { EXPERT_QUOTES, HOME_FEATURE } from "@/constant";

export default function Home() {
  return (
    <main>
      <section className="w-full max-container p-[150px] flex gap-x-12 bg-primgreen">
        <h1 className="bold-100 text-primwhite items-end leading-[100px]">
          Find the <span className="text-primcoral">best talent</span>
        </h1>
        <div className="basis-[50%] flex flex-col justify-between">
          <div className="w-[50px] h-[4px] bg-secrapblue"></div>
          <p className="semi-bold-18 text-primwhite leading-[28px]">
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </div>
      </section>
      <section className="bg-secsacramgreen flex gap-x-14 p-[150px]">
        <div className="basis-[70%]">
          <div className="w-[50px] h-[4px] bg-primcoral mb-12"></div>
          <div>
            <h2 className="bold-48 text-primwhite leading-[48px]">
              Build & manage distributed teams like no one else.
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {HOME_FEATURE.map((feature) => (
            <div className="flex items-center gap-8" key={feature.label}>
              <Image
                src={`/${feature.url}`}
                alt={`${feature.label}`}
                width={72}
                height={72}
              />
              <div className=" flex flex-col gap-4">
                <h3 className="text-primcoral semi-bold-18">{feature.label}</h3>
                <p className="semi-bold-15 text-primwhite">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="min-w-full min-h-full bg-primgreen px-[150px] py-[100px] flex flex-col gap-y-24">
        <h3 className="text-center bold-48 text-primwhite">
          Delivering real results for top companies. Some of our{" "}
          <span className="text-secrapblue">success stories.</span>
        </h3>
        <div>
          <ul className="flex gap-x-8">
            {EXPERT_QUOTES.map((quote) => (
              <li
                className="list-none flex flex-col justify-around items-center"
                key={quote.id}
              >
                <p className="semi-bold-15 text-primwhite text-center leading-[25px]">
                  {quote.quote}
                </p>
                <p className="text-secrapblue bold-18 mt-8">{quote.name}</p>
                <small className="medium-13 italic text-primwhite">
                  {quote.job}
                </small>
                <Image
                  className="rounded-full border-2 border-secrapblue mt-6"
                  src={`/${quote.url}`}
                  alt={`${quote.name} avatar`}
                  width={62}
                  height={62}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
