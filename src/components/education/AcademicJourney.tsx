"use client";

import FeatureSection from "@/components/shared/FeatureSection";
import AcademicDivider from "./AcademicDivider";
import { education } from "@/data/education";

export default function AcademicJourney() {
  return (
    <>
      {education.map((item, index) => (
        <div key={item.id}>
          <FeatureSection
            eyebrow={item.year}
            title={item.degree}
            subtitle={item.institution}
            description={item.headline}
            logo={item.logo}
            location={item.location}
            focusTitle={item.focusTitle}
            focus={item.focus}
            achievements={item.achievements}
            reverse={index % 2 !== 0}
            dark={index % 2 === 0}
          />

          {index !== education.length - 1 && <AcademicDivider />}
        </div>
      ))}
    </>
  );
}