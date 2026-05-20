export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  tags: string[];
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "6",
    title: "BigData Ghana Selected Among Winners of the GenAI for Geospatial Challenge",
    excerpt:
      "BigData Ghana has been selected as one of the winning teams in the GenAI for Geospatial Challenge – EMEA Edition, an initiative by Amazon Web Services (AWS) and thriveGEO.",
    content: `BigData Ghana has been selected as one of the winning teams in the **GenAI for Geospatial Challenge – EMEA Edition**, an initiative by **Amazon Web Services (AWS)** and **thriveGEO** that brings together innovators across Europe, Africa, and the Middle East to explore high-impact applications of generative AI and geospatial data.

This recognition marks an important milestone in BigData Ghana’s journey to build practical, African-led technology solutions that respond to some of the continent’s most urgent environmental and economic challenges.

The challenge was created to push the boundaries of what is possible when cloud computing, geospatial intelligence, Earth Observation data, and generative AI are combined. Out of the selected 14 winning teams, projects covered areas such as climate resilience, infrastructure, ecosystems, health, and environmental monitoring. BigData Ghana’s winning project focuses on one of Ghana’s most important sectors: cocoa.

Cocoa is deeply connected to Ghana’s economy, rural livelihoods, and global agricultural trade. Yet, the sector faces a growing threat from deforestation. Forest loss does not only affect biodiversity and climate resilience; it also places pressure on farming communities whose livelihoods depend on healthy ecosystems, fertile soils, and sustainable land management.

BigData Ghana’s project addresses this challenge by using **cloud-native Earth Observation and AI methods to monitor forests and support sustainable agriculture and traceability**. This means applying satellite data, geospatial analytics, and artificial intelligence to help detect changes in forest cover, identify areas at risk, and provide useful intelligence for better decision-making across the cocoa value chain.

The significance of this work goes beyond monitoring. As global markets increasingly demand transparent and deforestation-free supply chains, cocoa-producing countries need reliable systems that can help prove where commodities come from, how land is being used, and whether production is aligned with sustainability standards. BigData Ghana’s solution contributes to this need by connecting environmental intelligence with agricultural traceability.

For BigData Ghana, this recognition is also a validation of a broader vision: that African companies can build world-class geospatial AI solutions for local challenges with global relevance. The project reflects the company’s commitment to using data, AI, and location intelligence to support governments, agribusinesses, development partners, and communities in making smarter and more sustainable decisions.

As part of the challenge, winning teams gain access to AWS cloud credits, technical support from AWS, and wider visibility within the geospatial innovation community. The build phase runs from January to April 2026, followed by a showcase period from May to June 2026, where outcomes from the challenge will be presented and celebrated.

This milestone is not just a win for BigData Ghana. It is a strong signal that Ghana and Africa can play a leading role in shaping the future of geospatial AI.

By combining Earth Observation, cloud infrastructure, and artificial intelligence, BigData Ghana is helping to build a future where forests are better protected, cocoa farming becomes more sustainable, and decision-makers have the intelligence they need to act early.

**This is more than innovation. It is climate intelligence built for Africa.**

---
*Reference: [GenAI for Geospatial Challenge – thriveGEO](https://thrivegeo.com/genai-geospatial-challenge/)*`,
    author: "BigData Ghana",
    date: "2026-05-14",
    imageUrl: "/images/blog/genai-challenge.png",
    tags: ["AI & Data", "Partnerships", "Sustainability"],
    slug: "genai-geospatial-challenge-winners",
  },
  {
    id: "1",
    title: "BigData Ghana and other Tech Companies meet Farmers",
    excerpt:
      "Increasingly, farmers need technology to meet the demands of importers. To bridge that gap, 13 Ghanaian tech companies collaborated to provide digital solutions.",
    content:
      "Increasingly, farmers need technology to meet the demands of importers. To bridge that gap, 13 Ghanaian tech companies collaborated to provide digital solutions.",
    author: "International Trade Center",
    date: "2023-05-03",
    imageUrl: "/images/features/ITC.png",
    tags: ["Digital Farms", "Agriculture"],
    slug: "tech-companies-meet-farmers",
  },
  {
    id: "2",
    title: "BigData Ghana and Amazon Web Services (AWS)",
    excerpt:
      "We hosted a delegation from Amazon Web Services, marking a milestone in our journey as a Local Specialist Partner of AWS in the region.",
    content: "",
    author: "BigData Ghana",
    date: "2022-09-05",
    imageUrl: "/images/features/NTB1.png",
    tags: ["Partnerships", "Cloud Tech"],
    slug: "bigdata-ghana-aws-partnership",
  },

  {
    id: "3",
    title: "BigData Ghana works towards sustainable agriculture with DE Africa",
    excerpt:
      "Big Data Ghana’s GAIMS platform is driven by satellite, AI and machine learning technologies to provide crucial insights for agricultural sustainability.",
    content: "",
    author: "Digital Earth Africa",
    date: "2022-03-28",
    imageUrl: "/images/features/DEA.png",
    tags: ["Sustainability", "AI & Data"],
    slug: "sustainable-agriculture-de-africa",
  },
  {
    id: "4",
    title: "The Future of Geospatial Intelligence in Africa",
    excerpt:
      "Exploring how remote sensing and big data are reshaping the landscape of development projects across the continent.",
    content: "",
    author: "BDG Insights",
    date: "2023-12-15",
    imageUrl: "/images/features/ITC.png",
    tags: ["GIS", "Tech Trends"],
    slug: "future-of-geospatial-intelligence",
  },
  {
    id: "5",
    title: "Maximizing ROI with Cloud-Native Data Architectures",
    excerpt:
      "A deep dive into how businesses can leverage AWS to scale their data processing capabilities while maintaining cost-efficiency.",
    content: "",
    author: "BigData Tech",
    date: "2024-01-10",
    imageUrl: "/images/features/NTB1.png",
    tags: ["Cloud Tech", "ROI"],
    slug: "maximizing-roi-cloud-native",
  },
];

export default blogPosts;
