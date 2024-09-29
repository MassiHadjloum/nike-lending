import { Hero } from "./sections";
import Nav from "./components/Nav";
import PopularProducts from "./sections/PopularProducts";
import SuperQuality from "./sections/SuperQuality";
import Services from "./sections/Services";

const Home = () => {
  return (
    <main className="relative" >
      <Nav />
      
        <Hero />
        <PopularProducts />
        <SuperQuality />
      <Services />
      
      <section className="padding-x py-10">
      special offers
      </section>
      <section className="bg-pale-blue padding">
      costmer reviews
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
      subscribe
      </section>
      <section className="padding-x bg-black padding-t pb-8">
      footer
      </section>
    </main>
  );
}

export default Home;