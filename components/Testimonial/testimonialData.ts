import image1 from "@/public/images/theresa.png";
import image2 from "@/public/images/jacqueline.jpeg";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Jacqline",
    designation: "USA",
    image: image1,
    content:
      "From my very first point of contact with Mr. Danny Angels and the entire team of Royal Kingdom Estate, they have exceeded my expectations in maintaining all the fundamental elements of doing business in their field of expertise. I am a U.S. citizen and a member of a group of diasporans, who has purchased property from RKE.",
  },
  {
    id: 2,
    name: "Theresa",
    designation: "UK",
    image: image2,
    content:
      "I have had great interactions to date with Danny and the team from Royal Kingdom Estate. Their customer services are on point and set them apart from other developers. The most important aspect of my experience is the established element of trust; that I am working with a reputable, honest and highly skilled group of individuals.",
  },
];
