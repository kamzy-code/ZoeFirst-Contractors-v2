export interface AboutType {
  title: string;
  paragraphs: string[];
  imageUrl: string;
  direction:string;
}

export const aboutData: AboutType[] = [
  {
    title: "About Us",

    paragraphs: [
      "Home Improvement is a leading provider of residential and commercial renovation services.",

      "Founded in 2018, Zoefirst Home Improvement offers a wide range of services, including kitchen and bathroom remodeling, basement finishing, roof and siding replacement, windowand door installation, and more. The company prides itself on using high-quality materials,employing skilled and experienced tradespeople, and completing projects on time and withinbudget.",

      "Zoefirst has a team of in-house designers who work closely with customers to create custom renovation plans tailored to their unique needs and preferences. The company alsoprovides financing options to make large-scale home improvement projects more accessible",
    ],

    imageUrl: "img/big/about_us.png",
    direction: "normal",
  },

  {
    title: "Core Values",

    paragraphs: [
      "Quality Craftsmanship: The company is committed to delivering high-quality workmanship onevery project, using top-of-the-line materials and employing skilled, experienced tradespeople.",

      "Customer Satisfaction: Providing an exceptional customer experience is a top priority. The company works closely with clients to understand their needs and deliver projects that exceed their expectations.",

      "Integrity: The company operates with honesty, transparency, and ethical business practices.Customers can trust that they will receive fair pricing and that all work will be completed to the agreed-upon scope and timeline.",

      "Innovation: The company stays up-to-date with the latest home improvement trends and technologies, constantly looking for ways to improve its processes and offer innovative solutions to customers.",

      "Community Involvement: The company is committed to being a responsible corporate citizen,supporting local charities and community initiatives.",
    ],

    imageUrl: "img/big/core_values.png",
    direction: "reverse",
  },

  {
    title: "Mission",

    paragraphs: [
      "Zoefirst Construction Home Improvement's mission is to enhance the living and working spaces of our customers by providing top-quality renovation and remodeling services.",

      "Through exceptional craftsmanship, personalized design, and a customer-centric approach, we strive to transform homes and businesses, adding value and improving the quality of life for our clients.",

      "Our goal is to become the most trusted and respected home improvement company in the region.",
    ],

    imageUrl: "img/big/mission.png",
    direction: "normal",
  },
];
