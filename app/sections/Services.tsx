import { services } from "@/constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className='padding max-container flex justify-center flex-wrap gap-9'>
      {services.map((service) => (
        <ServiceCard key={service.label} imgUrl={service.imgURL} label={service.label} subText={service.subtext} />
      ))}
    </section>
  );
};

export default Services;