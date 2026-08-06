export const CONTACT_EMAIL = "540148510@qq.com";
export const PRIMARY_PHONE_DISPLAY = "+86 137 1267 0275";
export const PRIMARY_PHONE_HREF = "tel:+8613712670275";
export const SECONDARY_PHONE_DISPLAY = "+86 135 4937 6386";
export const SECONDARY_PHONE_HREF = "tel:+8613549376386";

export const COMPANY_NAME = "Shenzhen Kanrenzhida Technology Co., Ltd.";
export const COMPANY_ADDRESS =
  "Rooms 1101–1102, Building 6, Xinghua Smart City, No. 143 Guanchang Road, Dongcheng Subdistrict, Dongguan, Guangdong, China";

export function assetPath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

export type Material = {
  slug: string;
  code: string;
  title: string;
  shortTitle: string;
  summary: string;
  image?: string;
  visual: "layers" | "pi" | "basalt";
  forms: string[];
  support: string[];
  applications: string[];
  briefInputs: string[];
  sampleNote: string;
};

export const materials: Material[] = [
  {
    slug: "performance-membranes",
    code: "MEMBRANE",
    title: "Performance membranes and laminated textiles",
    shortTitle: "Performance membranes",
    summary:
      "Layered material options for functional apparel and lightweight equipment, including outer fabrics, membrane layers, and textile substrates.",
    visual: "layers",
    forms: ["Outer textiles", "Membrane layers", "Textile substrates", "Laminated structures"],
    support: [
      "Material and laminate-structure review",
      "Available swatches and structure information",
      "Sampling coordination around the target product",
      "Project quotation after scope and quantity confirmation",
    ],
    applications: ["Functional outer layers", "Outdoor apparel", "Lightweight equipment"],
    briefInputs: [
      "Target product and end use",
      "Preferred material or laminate structure",
      "Expected quantity and destination market",
      "Sample requirement and project timing",
    ],
    sampleNote:
      "Available swatches, constructions, and project documents are confirmed against each brief. Specific grades, performance data, standards, and supply terms are not represented as fixed until confirmed in project documents.",
  },
  {
    slug: "polyimide-thermal",
    code: "PI",
    title: "Polyimide (PI) lightweight thermal materials",
    shortTitle: "PI lightweight thermal materials",
    summary:
      "Available material forms include fiber, yarn, woven and nonwoven textiles, and thermal batting for lightweight product-development programs.",
    image: "/materials/pi-premium-apparel-v2.webp",
    visual: "pi",
    forms: ["Fiber", "Yarn", "Woven textiles", "Nonwoven textiles", "Thermal batting"],
    support: [
      "Material-form and construction discussion",
      "Available material samples",
      "Sampling for liners, mid-layers, and insulation structures",
      "Product-development coordination before commercial planning",
    ],
    applications: [
      "Premium technical outerwear",
      "Luxury performance apparel",
      "Refined lining and insulation systems",
    ],
    briefInputs: [
      "Target garment or product",
      "Preferred material form",
      "Construction or layer position",
      "Quantity, destination market, and timeline",
    ],
    sampleNote:
      "The material form, proposed construction, available samples, and required project information are confirmed after review of the application brief.",
  },
  {
    slug: "basalt-fiber-composites",
    code: "BASALT",
    title: "Basalt-fiber composites",
    shortTitle: "Basalt-fiber composites",
    summary:
      "Material forms include continuous fiber, woven fabrics, mats, prepreg, and composite products for project-specific component development.",
    image: "/materials/basalt-material-studio-v2.webp",
    visual: "basalt",
    forms: ["Continuous fiber", "Woven fabrics", "Mats", "Prepreg", "Composite products"],
    support: [
      "Material-form review for the intended component",
      "Composite-structure and process discussion",
      "Engineering sample coordination",
      "Project documentation and delivery follow-through",
    ],
    applications: [
      "Structural components",
      "Construction and infrastructure",
      "Transport and marine applications",
    ],
    briefInputs: [
      "Part, carrier, or component description",
      "Dimensions and operating conditions",
      "Expected quantity and project stage",
      "Documentation and delivery requirements",
    ],
    sampleNote:
      "Relevant material forms and the engineering sample route are confirmed after the component and operating requirements have been reviewed.",
  },
];

export type Solution = {
  slug: string;
  kicker: string;
  title: string;
  summary: string;
  image: string;
  visual: "apparel" | "engineering" | "applications";
  tags: string[];
  outcome: string;
  workstreams: string[];
  briefInputs: string[];
  relatedMaterials: string[];
};

export const solutions: Solution[] = [
  {
    slug: "premium-technical-apparel",
    kicker: "PREMIUM PRODUCT DEVELOPMENT",
    title: "Premium technical apparel systems",
    summary:
      "Combine performance membranes, laminated textiles, and PI lightweight thermal materials across refined outer layers, mid-layers, and insulation structures.",
    image: "/materials/pi-premium-apparel-v2.webp",
    visual: "apparel",
    tags: ["Refined outer layers", "PI thermal layers", "Garment sampling"],
    outcome:
      "A reviewable material and sample direction for premium travel, lifestyle, and performance collections before commercial planning.",
    workstreams: [
      "Translate the product brief into a proposed layer structure",
      "Review available material forms and swatch requirements",
      "Coordinate sample construction and review points",
      "Confirm the commercial quotation scope after sample direction is agreed",
    ],
    briefInputs: [
      "Product category and intended use",
      "Target layer or garment construction",
      "Collection timing and destination market",
      "Sample quantity and expected production volume",
    ],
    relatedMaterials: ["performance-membranes", "polyimide-thermal"],
  },
  {
    slug: "composite-structures",
    kicker: "COMPOSITE DEVELOPMENT",
    title: "Precision composite structures and samples",
    summary:
      "Start with available basalt-fiber material forms, then define a sampling route for panels, structural shells, grids, or precision composite components.",
    image: "/materials/basalt-material-studio-v2.webp",
    visual: "engineering",
    tags: ["Refined panels", "Structural shells", "Precision components"],
    outcome:
      "A documented route from component requirements to an engineering sample that can be reviewed before volume planning.",
    workstreams: [
      "Capture component geometry, operating conditions, and constraints",
      "Review relevant fiber, fabric, mat, prepreg, or composite forms",
      "Define the sample scope and required project information",
      "Coordinate feedback, quotation requirements, and delivery planning",
    ],
    briefInputs: [
      "Part drawing, dimensions, or carrier description",
      "Operating environment and structural requirements",
      "Project stage and sample purpose",
      "Expected quantity, documentation, and delivery timing",
    ],
    relatedMaterials: ["basalt-fiber-composites"],
  },
  {
    slug: "application-led-development",
    kicker: "PROJECT SAMPLING",
    title: "Application-led development for premium products",
    summary:
      "Coordinate material and sample development around the operating environment, form factor, structural constraints, and commercial objective.",
    image: "/materials/basalt-premium-applications-v2.webp",
    visual: "applications",
    tags: ["Premium applications", "Material route", "Project follow-through"],
    outcome:
      "A practical sample plan for premium mobility, marine, architectural, advanced air mobility, and performance-equipment projects.",
    workstreams: [
      "Document the application and the decision the sample must support",
      "Identify relevant material families and available forms",
      "Define sample scope, review points, and project responsibilities",
      "Coordinate information, feedback, quotation, and delivery follow-through",
    ],
    briefInputs: [
      "Application, form factor, and intended environment",
      "Material direction or open technical question",
      "Sample purpose and internal decision timeline",
      "Expected quantity, destination, and documentation needs",
    ],
    relatedMaterials: [
      "performance-membranes",
      "polyimide-thermal",
      "basalt-fiber-composites",
    ],
  },
];

export const inquiryTypeOptions = [
  ["sample-kit", "Request a Sample Kit"],
  ["volume-quote", "Request a Volume Quote"],
  ["custom-project", "Discuss a Custom Project"],
  ["channel", "Distributor / Channel Partnership"],
  ["general", "General Project Inquiry"],
] as const;
