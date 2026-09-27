import Container from "@/components/layout/Container";

import BackgroundAmbient from "@/components/orion/ui/BackgroundAmbient";
import Reveal from "@/components/orion/ui/Reveal";
import SectionHeader from "@/components/orion/ui/SectionHeader";

import FeaturedCertification from "@/components/certifications/FeaturedCertification";
import CertificationCard from "@/components/certifications/CertificationCard";

import { certifications } from "@/data/certifications";

export default function Certifications() {
  const featured = certifications.find((cert) => cert.featured);
  const secondary = certifications.filter((cert) => !cert.featured);

  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-[#050508] py-36"
    >
      <BackgroundAmbient />

      <Container>
        {/* Section Heading */}

        <Reveal>
          <SectionHeader
            eyebrow="Professional Certifications"
            title="Industry Credentials & Continuous Learning"
            description="Recognized certifications and internships that validate expertise in Artificial Intelligence, Data Science, Cloud Computing and Enterprise Business Analytics."
          />
        </Reveal>

        {/* Featured Certification */}

        {featured && (
          <div className="mt-16">
            <FeaturedCertification
              title={featured.title}
              issuer={featured.issuer}
              partner={featured.partner}
              duration={featured.duration}
              description={featured.description}
              image={featured.image}
              status={featured.status}
              credential={featured.credential}
            />
          </div>
        )}

        {/* Other Certifications */}

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {secondary.map((cert, index) => (
            <CertificationCard
              key={cert.id}
              title={cert.title}
              issuer={cert.issuer}
              duration={cert.duration}
              image={cert.image}
              status={cert.status}
              credential={cert.credential}
              delay={index * 0.12}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}