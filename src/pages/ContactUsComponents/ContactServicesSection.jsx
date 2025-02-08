// import { WrapperContainer } from "@/components";
// import { strings } from "@/locales";
// import { useRouter } from "next/navigation";

const ContactServicesSection = () => {
  //   const router = useRouter();
  return (
    <div
      className={"grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 my-32 py-5"}
    >
      {[
        {
          link: "#contact-form",
          title: "Fill Out The Form",
          description: "Take Time to Fill out",
        },
        {
          link: "#contact-form",
          title: "Write an Email",
          description: "Comfotable Writing an Email",
        },
        {
          link: "#contact-us-form",
          title: "Call Conversation",
          description: "Schedule a Minute Free Call",
        },
      ].map((value, index) => {
        return (
          <div
            key={index}
            // onClick={() => {
            //   router.push(`/contact-us${value.link}`);
            // }}
            className="cursor-pointer shadow-customShadow2 rounded-[15px] border-[0.5px] border-l-c_089DE5 border-t-c_089DE5 border-r-c_087DBD border-b-c_087DBD p-3 lg:p-5 hover:bg-[#f1c40f] duration-500 hover:border-none"
          >
            <h4 className="font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[32px] 2xl:leading-[36px] text-white bg-gradient-to-br from-c_089DE5 to-c_087DBD bg-clip-text mb-5 ">
              {value.title}
            </h4>
            <p className="mt-2 font-normal text-sm xl:text-base 2xl:text-lg 2xl:leading-[24px] text-c_101010  ">
              {value.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ContactServicesSection;
