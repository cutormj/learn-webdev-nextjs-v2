import PostStream from "./components/streamlet/PostStream";
import SimpleHero from "./components/heroes/SimpleHero";
import HomePageStream from "./components/streams/HomePageStream";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HomePageStream />
       {/* <SimpleHero heroTitle="Hello there" heroSubTitle="What is up everyone!?" /> */}
    </main>
  );
}
