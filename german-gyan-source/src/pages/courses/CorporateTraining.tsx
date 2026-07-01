import CoursePage from "@/components/CoursePage";
import PageMeta from "@/components/PageMeta";

export default function CorporateTraining() {
  return (
    <>
      <PageMeta
        title="Corporate German Language Training | German Gyan"
        description="Custom German language programmes for teams and organisations. Business German, relocation training, and on-site or online delivery across India."
        keywords="corporate German training, German for business, German language for companies India, workplace German course, German B2B training"
      />
      <CoursePage
      image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
      level="Business"
      title="Corporate German Language Training"
      price=""
      tagline="Equip your workforce with the German language skills to communicate confidently with German-speaking clients, partners, and colleagues."
      duration="Custom — typically 3–6 months"
      about={[
        "Equip your workforce with the German language skills to communicate confidently with German-speaking clients, partners, and colleagues — delivered as a fully customised programme for your organisation.",
        "Whether your team needs business German fundamentals, advanced professional communication, or fast-track preparation for relocation to Germany, we design and deliver the programme around your organisation's specific requirements.",
      ]}
      curriculum={[
        { title: "Business German Fundamentals", desc: "Professional vocabulary, email writing, and workplace communication" },
        { title: "Client Communication in German", desc: "Build professional relationships with German-speaking clients" },
        { title: "Formal Presentations & Reports", desc: "Deliver structured talks in German workplace settings" },
        { title: "Meeting & Negotiation Language", desc: "Chair discussions, present ideas, and negotiate in German" },
        { title: "Industry-Specific Vocabulary", desc: "Tailored terminology for your sector (manufacturing, IT, pharma, finance)" },
        { title: "Cross-Cultural Communication", desc: "Navigate German business culture, etiquette, and communication norms" },
        { title: "Relocation German", desc: "Fast-track language support for employees relocating to Germany" },
        { title: "Email & Correspondence Mastery", desc: "Write professional German emails, letters, and reports independently" },
      ]}
      inclusions={[
        "Customised training programme for your team",
        "On-site or online delivery (or hybrid)",
        "Industry-specific vocabulary and scenarios",
        "Regular progress reports for HR and managers",
        "Flexible batch timings (weekday/weekend)",
        "Group and individual assessment sessions",
        "Certificate of participation for all trainees",
        "Post-programme support and consultation",
      ]}
      perfectFor={[
        "Your company has German-speaking clients, partners, or headquarters.",
        "Employees need to communicate regularly with German-speaking counterparts.",
        "Staff are relocating to Germany and need fast-track language support.",
        "You want a certified, structured German programme for HR compliance.",
      ]}
      notFor={[
        "Individual learners — our personal courses are better suited for solo learning.",
        "Companies looking for a generic off-the-shelf course without customisation.",
      ]}
      testimonials={[
        { quote: "German Gyan designed a 12-week Business German programme specifically for our customer success team. The improvement in client communication was measurable within weeks.", name: "Ananya Kapoor", role: "L&D Manager, German MNC India office" },
        { quote: "Our team needed relocation German before moving to Munich. German Gyan's fast-track corporate programme prepared them better than any previous training we had organised.", name: "Vikram Anand", role: "HR Head, manufacturing company" },
      ]}
      ctaTitle="Empower your team with German language skills."
    />
    </>
  );
}
