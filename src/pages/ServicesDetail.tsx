import type { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { SERVICES } from "../data/ServiceData";

const ServicesDetail: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((whatWeDo) => whatWeDo.slug === slug);

  if (!service) {
    return (
      <section className="service-detail">
        <h2>Service not found</h2>
        <Link to="/services">← Back to services</Link>
      </section>
    );
  }

  return (
    <section className="service-detail">
      <Link to="/services">← Back to services</Link>
      <h2>{service.title}</h2>
      <p>{service.description}</p>
    </section>
  );
};

export default ServicesDetail;
