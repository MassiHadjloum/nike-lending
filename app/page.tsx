import { Hero } from "./sections";
import Nav from "./components/Nav";
import PopularProducts from "./sections/PopularProducts";
import SuperQuality from "./sections/SuperQuality";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import CustomerReviews from "./sections/CustomerReviews";
import Subscribe from "./sections/Subscribe";

const Home = () => {
  return (
    <main className="relative" >
      <Nav />

      <Hero />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffer />
      <CustomerReviews />
      <Subscribe />
      
      <section className="padding-x bg-black padding-t pb-8">
        footer
      </section>
    </main>
  );
}

export default Home;