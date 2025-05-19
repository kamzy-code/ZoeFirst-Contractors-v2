
export interface ServiceType {
  title: string;
  description: string;
  imageUrl: string;
  services?: string[];
}


  const serviceList: ServiceType[] = [
    {
      title: "Kitchen Remodeling",
      description:
        "Elevate your kitchen to new heights of luxury with exquisite countertops and custom cabinets. Experience culinary bliss in a space designed for both functionality and aesthetics.",
      imageUrl: "img/big/service-kitchen.png",
      services: [
        "Design and layout planning",
        "Cabinetry installation",
        "Countertop replacement (e.g., granite, quartz, marble)",
        "Appliance installation",
        "Backsplash tiling",
        "Plumbing and electrical work",
      ],
    },
    {
      title: "Bathroom Remodeling",
      description:
        "Revitalize your bathroom – where mornings begin and evenings unwind. Our remodeling ensures comfort, style, and lasting satisfaction.",
      imageUrl: "img/big/service-bath.png",
      services: [
        "Vanity and sink replacement",
        "Tub/shower enclosure installation",
        "Tile flooring and wall tiling",
        "Toilet and fixture replacement",
        "Lighting and ventilation upgrades",
        "Accessibility modifications",
      ],
    },
    {
      title: "Basement Finishing",
      description:
        "Unlock hidden potential! Transform your basement into a versatile living area. Whether it’s a home theater, gym, or guest suite, we make it functional and inviting.",
      imageUrl: "img/big/service-basement.png",
      services: [
        " Framing and drywall installation",
        "Flooring (e.g., laminate, hardwood, carpet)",
        "Painting and trim work",
        "Ceiling installation (e.g., dropped, drywall)",
        "Electrical and lighting upgrades",
        "Plumbing for bathroom or wet bar",
      ],
    },
    {
      title: "Roof Replacement",
      description:
        "Secure your home with a new roof that stands the test of time. Our expert craftsmanship ensures protection, durability, and peace of mind.",
      imageUrl: "img/big/service-roof.png",
      services: [
        " Roof tear-off and disposal",
        "Installation of new asphalt, metal, or tile roofing",
        "Gutter and downspout replacement",
        "Ventilation and insulation upgrades",
        "Siding and Exterior Renovations:",
        "Siding replacement (e.g., vinyl, fiber cement, wood)",
        "Window and door replacement",
        "Porch, deck, or patio construction",
        "Landscaping and hardscaping",
      ],
    },
  ];
    export default serviceList;