import { Footer, Header, Spotlight, SubscriptionPlans, Welcome } from "@/components";
import { Button } from "@/components";

export default function Home() {
  return (
    <>
      <Header/>

      <main>
        <Welcome/>

        <section className="flex flex-col bg-gradient-to-b from-emerald-600 via-emerald-950
                          to-black justify-center items-center pb-4">
          <div className="flex h-[80px] items-center">
            <h1 className="text-gray-200 font-bold xs:text-md text-sm">
              BUILD THE PLAN THAT&apos;S RIGHT FOR YOU
            </h1>
          </div>
          <div className="flex items-center max-w-[336px] h-[44px]">
            <Button
              title='START BUILDING'
              type='secondary'
              className="bg-transparent text-gray-300 border-[1px]
                       hover:border-gray-300/50 hover:bg-gray-300/60 hover:text-black"
            />
          </div>
        </section>
        
        <section className="flex flex-col items-center gap-2 w-full py-8 bg-black">
          <h2 className="text-green-primary text-xs font-bold">
            TRY HULU (WITH ADS) + LIVE TV FREE FOR 3 DAYS
          </h2>
          <h1 className="text-gray-200 font-bold xs:text-xl text-md text-center">
            Live TV Make It Better
          </h1>
        </section>

        <Spotlight/>

        <SubscriptionPlans/>
      </main>

      <Footer/>
    </>
  );
}
