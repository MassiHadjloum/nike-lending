import { Hero } from "./sections";
import Nav from "./components/Nav";
import PopularProducts from "./sections/PopularProducts";

const Home = () => {
  return (
    <main className="relative" >
      <Nav />
      
        <Hero />
        <PopularProducts />
      
      <section className="padding">
      quality
      </section>
      <section className="padding">
      services
      </section>
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