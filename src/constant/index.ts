/* Navbar and footer link */
type Navbar = {
  id?: number;
  label?: string;
  href?: string;
};

export const NAVBAR: Navbar[] = [
  {
    id: 1,
    label: "home",
    href: "/",
  },
  {
    id: 2,
    label: "about",
    href: "/about",
  },
];

/* Home Feature Content */
type HomeFeature = {
  id: number;
  label?: string;
  text?: string;
  url?: string;
};

export const HOME_FEATURE: HomeFeature[] = [
  {
    id: 2,
    label: "Experienced Individuals",
    text: "Our network is made up of highly experienced professionals who are passionate about what they do.",
    url: "icon-person.svg",
  },
  {
    id: 3,
    label: "Easy to Implement",
    text: "Our processes have been refined over years of implementation meaning our teams always deliver.",
    url: "icon-cog.svg",
  },
  {
    id: 4,
    label: "Enhanced Productivity",
    text: "Our customized platform with in-built analytics helps you manage your distributed teams.",
    url: "icon-chart.svg",
  },
];

/* Home Expert Quotes */
type HomeQuotes = {
  id: number;
  name?: string;
  job?: string;
  quote?: string;
  url?: string;
};

export const EXPERT_QUOTES: HomeQuotes[] = [
  {
    id: 1,
    name: "Kady Baker",
    job: "Product Manager at Bookmark",
    quote:
      " “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”",
    url: "avatar-kady.jpg",
  },
  {
    id: 2,
    name: "Aiysha Reese",
    job: "Founder of Manage",
    quote:
      "“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”",
    url: "avatar-aiysha.jpg",
  },
  {
    id: 3,
    name: "Arthur Clarke",
    job: "Co-founder of MyPhysio",
    quote:
      "“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”",
    url: "avatar-arthur.jpg",
  },
];

/* footer details */
type Footer = {
  id?: number;
  label?: string;
  url?: string;
};

export const FOOTER_ADDRESS: Footer[] = [
  {
    id: 1,
    label: "987  Hillcrest Lane",
  },
  {
    id: 2,
    label: "Irvine, CA",
  },
  {
    id: 3,
    label: "California 92714",
  },
  {
    id: 4,
    label: "Call Us : 949-833-7432",
  },
];

/* Footer Social Media icon */
export const FOOTER_SOCIAL: Footer[] = [
  {
    id: 1,
    label: "facebook",
    url: "icon-facebook.svg",
  },
  {
    id: 2,
    label: "pinterest",
    url: "icon-pinterest.svg",
  },
  {
    id: 3,
    label: "twitter",
    url: "icon-twitter.svg",
  },
];

/* Directors */
type Director = {
  id: number;
  name: string;
  url?: string;
  job?: string;
  quote?: string;
  crossIcon?: string;
};

export const DIRECTORS: Director[] = [
  {
    id: 1,
    name: "Nikita Marks",
    url: "avatar-nikita.jpg",
    job: "Founder & CEO",
    crossIcon: "icon-cross.svg",
  },
  {
    id: 2,
    name: "Cristian Duncan",
    url: "avatar-christian.jpg",
    job: "Co-founder & CEO",
    crossIcon: "icon-cross.svg",
  },
  {
    id: 3,
    name: "Cruz Hamer",
    url: "avatar-cruz.jpg",
    job: "Co-founder & CTO",
    crossIcon: "icon-cross.svg",
  },
  {
    id: 4,
    name: "Drake Heaton",
    url: "avatar-drake.jpg",
    job: "Business Development Lead",
    crossIcon: "icon-cross.svg",
  },
  {
    id: 5,
    name: "Griffin Wise",
    url: "avatar-griffin.jpg",
    job: "Lead Marketing",
    crossIcon: "icon-cross.svg",
  },
  {
    id: 6,
    name: "Aden Allan",
    quote:
      "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
  },
];

/* Client Logo */
export const CLIENT: Director[] = [
  {
    id: 1,
    name: "the verge",
    url: "logo-the-verge.png",
  },
  {
    id: 2,
    name: "the jakarta post",
    url: "logo-jakarta-post.png",
  },
  {
    id: 3,
    name: "the guardian",
    url: "logo-the-guardian.png",
  },
  {
    id: 4,
    name: "techradar",
    url: "logo-tech-radar.png",
  },
  {
    id: 5,
    name: "gadgets now",
    url: "logo-gadgets-now.png",
  },
];
