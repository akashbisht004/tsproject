import { Heading } from "./_components/heading";
import { Hero } from "./_components/hero";
import { Footer } from "./_components/footer";

export default function MarketingPage() {
  return (
   <div className="min-h-full flex flex-col">
    <div className="flex flex-col items-center justify-center text-center md:justify-start gap-y-8 flex-1 px-6 pb-10 ">
        <Heading/>
        <Hero/>
    </div>
        <Footer/>
   </div>
  );
}
