import ShinyButton from "@/components/magicui/shiny-button";
 
import BoxReveal from "@/components/magicui/box-reveal";

const BoxRevealDemo =()=> {
  return (
    <div className="h-full w-full p-10 items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[3.5rem] text-black font-semibold">
          Magic UI<span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-black text-[1rem]">
          UI library for{" "}
          <span className="text-[#5046e6]">Design Engineers</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-[1.5rem]">
          <p className="text-black">
            -&gt; 20+ free and open-source animated components built with
            <span className="font-semibold text-[#5046e6]"> React</span>,
            <span className="font-semibold text-[#5046e6]"> Typescript</span>,
            <span className="font-semibold text-[#5046e6]"> Tailwind CSS</span>,
            and
            <span className="font-semibold text-[#5046e6]"> Framer Motion</span>
            . <br />
            -&gt; 100% open-source, and customizable. <br />
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <ShinyButton className="mt-[1.6rem] bg-[#5046e6]">Explore</ShinyButton>
      </BoxReveal>
    </div>
  );
}
export default  BoxRevealDemo;