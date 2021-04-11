/**
 * contain some general infos that can be used in other files
 */
const settings = {
  title: process.env.REACT_APP_WEBSITE_TITLE,
  short_title: process.env.REACT_APP_WEBSITE_SHORT_TITLE,
  subtitle: process.env.REACT_APP_WEBSITE_SUBTITLE,
  description: process.env.REACT_APP_WEBSITE_DESC,
  url: process.env.REACT_APP_WEBSITE_URL,
  location: {
    entreprise: "Separtech",
    number: "41/1",
    street: "Avenue de l'Espérance",
    CP: "6220",
    town: "Fleurus",
    country: "Belgium",
    position: [50.4533948, 4.543484],
    phone: "+32 71 50 53 56",
  },
  contact: {
    formspree: "https://formspree.io/maybwabo",
    email: "info@separtech.com",
    linkedin: "https://www.linkedin.com/company/separtech-sprl/",
  },
};

export default settings;
