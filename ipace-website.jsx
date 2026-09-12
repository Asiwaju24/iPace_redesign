import { useState, useEffect } from "react";
import {
  Menu, X, Mail, MessageCircle, MapPin, Linkedin, Twitter, Star,
  MessageSquare, Database, LineChart, Landmark, HeartHandshake,
  Building2, GraduationCap, Users, Award, Route, BarChart3,
  Bell, Globe, FlaskConical,
} from "lucide-react";

const NAV = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  {
    id: "academy",
    label: "Academy",
    children: [
      { id: "adap", label: "ADAP" },
      { id: "rdap", label: "RDAP" },
      { id: "mldip", label: "MLDIP" },
    ],
  },
  { id: "team", label: "Team" },
  { id: "blog", label: "Blog" },
  { id: "consultation", label: "Consultation", mobileOnly: true },
];

const SERVICES = [
  {
    name: "Advisory & Consultation",
    tag: "Data Advisory & Consultation",
    icon: MessageSquare,
    short:
      "We sit with your organisation, understand how decisions get made today, and help you use data to make better ones.",
    who: "For: leadership teams, agencies, boards",
    long:
      "We sit with your organisation, understand how decisions get made today, and help you use data to make better ones — from a single strategy session to ongoing advisory support.",
    bullets: [
      "Decision and data-maturity reviews",
      "Growth and revenue-opportunity audits",
      "Ongoing advisory retainers for leadership teams",
    ],
    image:
      "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=900&q=80",
    alt: "Advisory conversation around a table",
  },
  {
    name: "Systems & Architecture",
    tag: "Data Systems & Architecture",
    icon: Database,
    short:
      "We design the infrastructure that holds and moves your organisation's data — built to scale.",
    who: "For: growing organisations, government systems",
    long:
      "We design the infrastructure that holds and moves your organisation's data — from a simple reporting system to a full architecture built to scale.",
    bullets: [
      "Data system design and audits",
      "Reporting and monitoring infrastructure",
      "Architecture built for government or enterprise scale",
    ],
    image:
      "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?auto=format&fit=crop&w=900&q=80",
    alt: "Server infrastructure representing a data systems build",
  },
  {
    name: "Research & Analysis Support",
    tag: "Research & Analysis Support",
    icon: LineChart,
    short:
      "Statistical and analytical support for people doing the work of research — design, analysis, and interpretation.",
    who: "For: researchers, students, professionals, institutions",
    long:
      "Statistical and analytical support for people doing the work of research — study design, analysis, modelling, and interpretation.",
    bullets: [
      "Study and survey design",
      "Statistical analysis and modelling",
      "Support for theses, papers, and institutional research",
    ],
    image:
      "https://images.unsplash.com/photo-1573496528621-017a88f62f4c?auto=format&fit=crop&w=900&q=80",
    alt: "Focused individual research work",
  },
];

const PARTNERS = [
  {
    name: "Government",
    tag: "Public Sector",
    icon: Landmark,
    short: "Statistical systems for public sector efficiency and policy.",
    long:
      "Statistical systems and advisory support for public agencies working to make policy and resource decisions on solid evidence — from data audits to full reporting infrastructure.",
  },
  {
    name: "NGOs & Development",
    tag: "Civil Society",
    icon: HeartHandshake,
    short: "Evidence and evaluation support for programmes that matter.",
    long:
      "Evidence and evaluation support for programmes that matter — monitoring frameworks, impact analysis, and the kind of rigorous reporting that funders and communities can trust.",
  },
  {
    name: "Private Sector",
    tag: "Business",
    icon: Building2,
    short: "Growth-focused analytics for businesses of every size.",
    long:
      "Growth-focused analytics for businesses of every size — from a single retail forecasting model to a full data architecture supporting an entire operation.",
  },
  {
    name: "Individuals",
    tag: "Researchers, students, professionals",
    icon: GraduationCap,
    short: "Direct research and analysis support for personal or academic work.",
    long:
      "Direct research and analysis support for personal or academic work — study design, statistical analysis, and interpretation, one-on-one.",
  },
];

const VALUES = [
  {
    title: "Inclusivity",
    icon: Users,
    desc:
      "Government, NGOs, private businesses, and individuals all get the same standard of work — the data institute we're building is for everyone, not just those who can afford enterprise consulting.",
  },
  {
    title: "Excellence",
    icon: Award,
    desc:
      "Statistical rigour first. We'd rather tell a client the honest, less exciting answer than a confident, wrong one.",
  },
  {
    title: "Walking the path together",
    icon: Route,
    desc:
      "We don't hand over a report and disappear. Our engagements are relationships — we stay close enough to see the decision actually get made.",
  },
  {
    title: "Data-informed decisions",
    icon: BarChart3,
    desc:
      "Not data-obsessed, not data-for-its-own-sake — data in service of a decision someone actually has to make.",
  },
];

const COMPETITIONS = [
  {
    title: "Retail Insights Challenge",
    desc: "Analyze retail data and submit your insights. Winners get mentorship and prizes.",
    deadline: "Ongoing",
  },
  {
    title: "Business Growth Prediction",
    desc: "Build a predictive model for business growth. Top entries featured on our blog.",
    deadline: "Ongoing",
  },
];

const CASE_STUDIES = {
  intelligence: [
    {
      title: "HR & People Analytics",
      blurb: "Detect employment frauds and improve workforce planning.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      report: {
        approach: "[Mock] Cross-referenced payroll, attendance, and HR records to flag anomalous employment patterns using a rules-based screen followed by statistical outlier detection.",
        findings: ["[Mock] Identified duplicate-identity patterns across payroll batches", "[Mock] Flagged attendance records inconsistent with system access logs", "[Mock] Workforce planning model reduced overstaffing in two departments"],
        outcome: "[Mock] Illustrative report — replace with the real findings once available.",
      },
    },
    {
      title: "Retail Sale Analytics",
      blurb: "Forecast weekend demand of a retail store using the existing dataset, increasing product stock during the weekend based on the forecast.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      report: {
        approach: "[Mock] Built a time-series forecasting model on historical point-of-sale data, isolating weekend demand spikes from the weekday baseline.",
        findings: ["[Mock] Weekend demand consistently outpaced weekday demand by a wide margin", "[Mock] Three SKU categories drove most of the weekend variance", "[Mock] Restocking recommendation reduced weekend stockouts"],
        outcome: "[Mock] Illustrative report — replace with the real findings once available.",
      },
    },
    {
      title: "Agricultural Yield",
      blurb: "Increasing crop yield by 15% through data insights.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      report: {
        approach: "[Mock] Combined soil, weather, and planting-cycle data to identify the highest-leverage variables affecting yield across sampled farms.",
        findings: ["[Mock] Planting-window timing was the single largest yield driver", "[Mock] Soil moisture thresholds correlated strongly with output", "[Mock] Recommended adjustments contributed to a measured yield increase"],
        outcome: "[Mock] Illustrative report — replace with the real findings once available.",
      },
    },
  ],
  research: [
    {
      title: "Macroeconomic Impacts on Economic Growth",
      blurb: "A study on the impact of the Food Price Index, Exchange Rate, and Food Import Share on economic growth, measured by GDP and Inflation Rate.",
      tags: ["Multivariate Analysis", "Correlation", "Statistical Analysis"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
      report: {
        approach: "[Mock] Applied multivariate regression to national time-series data, testing each macroeconomic variable's contribution to GDP and inflation independently and jointly.",
        findings: ["[Mock] Exchange rate volatility showed the strongest correlation with inflation", "[Mock] Food import share had a lagged effect on GDP growth", "[Mock] Model explained a substantial share of variance in the outcome variables"],
        outcome: "[Mock] Illustrative report — replace with the real findings once available.",
      },
    },
    {
      title: "Detecting Rare Solar Flares Using Anomaly Detection",
      blurb: "Solar flares span classes A, B, C, M, and X — with X-class flares rare but dangerous. An anomaly detection model identified this class with a TSS score of 0.69.",
      tags: ["Machine Learning", "Anomaly Detection", "Severe Imbalance"],
      image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&w=800&q=80",
      report: {
        approach: "[Mock] Addressed severe class imbalance in solar flare classification using an anomaly-detection framework rather than standard classification.",
        findings: ["[Mock] Model achieved a True Skill Statistic (TSS) score of 0.69", "[Mock] X-class flares were reliably distinguished from background noise", "[Mock] Approach outperformed a baseline oversampling method"],
        outcome: "[Mock] Illustrative report — replace with the real findings once available.",
      },
    },
    {
      title: "Market Research & Consumer Behavior",
      blurb: "Comprehensive market analysis for a new product launch, identifying key consumer segments and purchase drivers.",
      tags: ["Market Research", "Consumer Insights", "Behavioral Analysis"],
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80",
      report: {
        approach: "[Mock] Combined survey data and purchase-history segmentation to profile the target market ahead of a product launch.",
        findings: ["[Mock] Identified three distinct consumer segments with different purchase drivers", "[Mock] Price sensitivity varied sharply between segments", "[Mock] Segment-specific messaging recommendations were adopted"],
        outcome: "[Mock] Illustrative report — replace with the real findings once available.",
      },
    },
    {
      title: "Social Science Research Project",
      blurb: "Investigated social determinants of health using quantitative and qualitative methods, contributing to public health policy development.",
      tags: ["Social Research", "Qualitative Analysis", "Policy Impact"],
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
      report: {
        approach: "[Mock] Mixed-methods design combining household survey data with structured interviews to examine social determinants of health outcomes.",
        findings: ["[Mock] Access to transport was a stronger predictor than income alone", "[Mock] Qualitative interviews surfaced barriers not visible in the survey data", "[Mock] Findings informed a policy brief for a public health partner"],
        outcome: "[Mock] Illustrative report — replace with the real findings once available.",
      },
    },
  ],
};

const TESTIMONIALS = [
  {
    quote:
      "They helped us see structural changes in our data we'd missed for years.",
    who: "Business Analyst, Port Harcourt",
    initials: "BA",
    rating: 5,
    year: "2026",
  },
  {
    quote: "Rigorous, but never distant. It felt like they were building it with us.",
    who: "Programme Lead, NGO",
    initials: "PL",
    rating: 5,
    year: "2026",
  },
  {
    quote: "Exactly the kind of statistical foundation our decisions were missing.",
    who: "CEO, Kano",
    initials: "CE",
    rating: 5,
    year: "2026",
  },
];

const STATS = [
  { value: "XX+", label: "Clients advised", icon: Users },
  { value: "XX+", label: "Data systems delivered", icon: Database },
  { value: "XX+", label: "Research projects supported", icon: FlaskConical },
  { value: "XX", label: "Sectors reached", icon: Globe },
];

const PROCESS = [
  {
    step: "01",
    title: "Listen",
    desc: "We start with your organisation's decisions, not our services — understanding how choices actually get made today.",
  },
  {
    step: "02",
    title: "Diagnose",
    desc: "We assess your current data, systems, and decision-making maturity to find where the real gaps are.",
  },
  {
    step: "03",
    title: "Design",
    desc: "We build the model, system, or research design your specific situation calls for — never a template.",
  },
  {
    step: "04",
    title: "Deliver",
    desc: "We implement, analyse, and hand over outputs that are actually usable — not just a report.",
  },
  {
    step: "05",
    title: "Walk together",
    desc: "We stay close enough to see the decision get made — and the next one after it.",
  },
];

const ABOUT_VALUES = [
  { title: "Collaboration", icon: HeartHandshake, desc: "We believe in the power of strategic partnerships to achieve common goals." },
  { title: "Excellence", icon: Award, desc: "We strive for top-notch performance and substantial results in every project." },
  { title: "Data-Driven", icon: BarChart3, desc: "We leverage real-time insights to inform decisions and set technological solutions in motion." },
  { title: "Empathy", icon: Users, desc: "We offer expert guidance with compassion, walking the path together with our clients." },
];

const ABOUT_TIMELINE = [
  { year: "2022", title: "Foundation", desc: "iPace Concepts was founded with a vision to help brands expand through statistical rigor for business decision-making." },
  { year: "2024", title: "Impakt", desc: "The Impakt service was created to enhance and bring data literacy to undergraduate students and assist in research writing." },
  { year: "2024", title: "First Workshop", desc: "Under the umbrella of IMPAKT, we held our first workshop to train the next generation of data professionals in structured Excel education." },
  { year: "2025", title: "The Merge", desc: "iPace Concepts formally merged with IMPAKT to offer structured services and deliver top-notch education through one organisation." },
  { year: "2026", title: "Current", desc: "Now serving diverse sectors across Nigeria with a team of expert consultants and a growing community of data professionals." },
];

const TEAM = [
  { name: "Olaniyan Ridwan O.", role: "Founder & Head of Data Intelligence", bio: "An Applied Statistician and Research Analyst who founded iPace Concepts to provide data-driven products and decision-support services for SMEs and institutions. Specialises in regression analysis, causal inference, and machine learning using SPSS, Python, and R.", photo: "https://ipaceconcepts.com.ng/assets/images/Ridwan'.png", link: "https://olaniyanridwan.github.io/portfolio-site/", email: "olaniyanridwan232@gmail.com" },
  { name: "Adeleke Muheez", role: "Partner & Data Analyst", bio: "A skilled Data Analyst with a strong foundation in statistics and statistical modelling, using Excel, Power BI, and R to drive data-driven insights. A top instructor with expertise in research writing.", photo: "https://ipaceconcepts.com.ng/assets/images/Muiz.jpg", link: "https://www.linkedin.com/in/muheezadeleke/", email: "adelekemuheezolanrewaju07@gmail.com" },
  { name: "Olayanju Hikmat", role: "Partner & Administrative Lead", bio: "Spearheads organisational structure and growth-driven operations at iPace, ensuring seamless coordination across the firm's core pillars. Founder of SOVA and The Sophistyle Hive.", photo: "https://ipaceconcepts.com.ng/assets/images/Hikmat.jpg", link: "https://www.linkedin.com/in/hikmat-olayanju-3a45b2264", email: "olahikmat1@gmail.com" },
  { name: "Adegoke Hamdallah", role: "Partner & Creative Design Lead", bio: "A graphics and brand identity designer passionate about creating eye-catching visuals that elevate brands, blending creativity and strategy. Also a community manager and PR specialist.", photo: "https://ipaceconcepts.com.ng/assets/images/Hamdallah.jpg", link: "https://www.linkedin.com/in/hamdalat-adegoke-21395927b/", email: "ololadehamdallah@gmail.com" },
  { name: "Lawal Ganiyat", role: "Partner & Machine Learning Expert", bio: "A data-driven leader combining a strong statistics foundation with hands-on data science expertise. IBM-certified, using Python, machine learning, and EDA to uncover insights and drive strategic decisions.", photo: "https://ipaceconcepts.com.ng/assets/images/Ganiyat-plh.jpg", link: "https://www.linkedin.com/in/lawal-ganiyat-566346226/", email: "lawalganiyat03@gmail.com" },
  { name: "Ngobidi Emmanuella", role: "Associate & Community Manager", bio: "Leads communication, coordination, and community growth at iPace. Strong foundation in virtual assistance, ensuring structured operations and a seamless experience for learners and stakeholders.", photo: "https://ipaceconcepts.com.ng/assets/images/Emmanuela.jpg", link: "https://www.linkedin.com/in/ngobidiemmanuella/", email: "ngobidiemmanuella6@gmail.com" },
  { name: "Lucy Chioma Ifitezue", role: "Associate & Academy Operations Manager", bio: "Supports program coordination and fosters an active community of learners and professionals, creating supportive spaces that encourage collaboration, growth, and innovation within the iPace network.", photo: "https://ipaceconcepts.com.ng/assets/images/Chioma.jpg", link: "https://www.linkedin.com/in/itumoh-chioma-lucy-33428b21b/", email: "lucyifitezue2@gmail.com" },
];

const CONSULT_TOPICS = [
  { title: "Data Audits", icon: Database, desc: "Comprehensive reviews of your data infrastructure." },
  { title: "Research Analysis", icon: LineChart, desc: "Comprehensive research analysis for undergraduates, graduates, and post-grad students." },
  { title: "Growth Strategy", icon: BarChart3, desc: "Analytics-driven plans for business expansion." },
  { title: "Market Research", icon: Globe, desc: "In-depth insights into market trends and competitors." },
  { title: "AI Solutions", icon: FlaskConical, desc: "Custom machine learning models for automation." },
];

const WHY_CONSULT = [
  { title: "Expertise", icon: Award, desc: "Seasoned professionals with deep industry knowledge." },
  { title: "Customization", icon: Route, desc: "Tailored solutions that fit your unique business needs." },
  { title: "Results", icon: BarChart3, desc: "Proven track record of delivering measurable outcomes." },
  { title: "Support", icon: HeartHandshake, desc: "Ongoing guidance and post-consultation support." },
];

const CONSULT_FAQ = [
  { q: "What industries do you serve?", a: "We work across government, NGOs and development, private sector, and individuals — the four partner tiers our institute is built around." },
  { q: "How long does a typical project take?", a: "Project timelines vary based on complexity, but most consulting engagements range from 4 to 12 weeks." },
  { q: "Do you provide ongoing support?", a: "Yes — we offer post-consultation support to ensure the implementation of our recommendations is successful." },
  { q: "What is your pricing model?", a: "We offer flexible pricing based on project scope, including hourly rates and fixed-fee packages." },
];

const TUITION = [
  { code: "ADAP", name: "Applied Data Analysis Program", price: "₦70,000", features: ["Data Cleaning & Analysis", "Visualization & Insights", "Hands-on Projects", "Certificate Included"] },
  { code: "RDAP", name: "Research Data Analysis Program", price: "₦65,000", features: ["Statistical Analysis", "Research Methods", "Survey Data Interpretation", "Certificate Included"] },
  { code: "MLDIP", name: "Machine Learning & Data Intelligence Program", price: "₦80,000", features: ["Machine Learning Models", "Predictive Analytics", "Real-world Datasets", "Certificate Included"] },
];

const ACADEMY_FAQ = [
  { q: "When do classes start?", a: "Classes begin immediately after onboarding once you join your cohort group. The next cohort opens April 25, 2026." },
  { q: "Can I pay in installments?", a: "Yes — you can start with a ₦10,000 commitment fee and complete payments within the structured timeline." },
  { q: "Will I get a certificate?", a: "Yes, certificates are issued upon successful completion and full payment." },
  { q: "Are scholarships available?", a: "Yes — limited scholarships and discounts are available based on eligibility." },
];

const ACADEMY_APPLY_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeRmwGr8bwD1uKpdexrLr5AoOZWzB4sRZLyf7e7OcVv6pCF0A/viewform?usp=sharing&ouid=111703942489237670761";
const ACADEMY_COMMUNITY_URL = "https://chat.whatsapp.com/F6bwb5whWAO2CnJQ6IJ1Ws?mode=gi_t";

const INSIGHTS = [
  {
    title: "Navigating the Vast Data Universe: How to Find Your Fit",
    blurb: "Choosing a path in the data sector. Read our insights on being data literate.",
    url: "https://medium.com/@ipace2024/navigating-the-vast-data-universe-how-to-find-your-fit-0253ff2b9005",
  },
  {
    title: "Sales Strategies for Small Businesses: Driving Revenue and Growth",
    blurb: "Explore our insights on steps to grow and expand your business.",
    url: "https://medium.com/@ipace2024/sales-strategies-for-small-businesses-driving-growth-and-revenue-cff8b7ee2fef",
  },
  {
    title: "Machine Learning in Business",
    blurb: "How ML is revolutionizing decision-making for enterprises.",
    url: "https://medium.com/@ipace2024",
  },
];

const PROGRAMS = {
  adap: {
    code: "ADAP",
    name: "Applied Data Analysis Program",
    cohortLabel: "2026 Pilot Cohort · 4-Month Structured Program",
    tagline: "Analyze, interpret, and communicate data for business, policy, and decision-making.",
    isReal: true,
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    who: [
      { title: "Business Professionals", desc: "Seeking data skills for decision-making" },
      { title: "Students", desc: "Undergraduate and graduate students" },
      { title: "Policy Analysts", desc: "Government and NGO practitioners" },
      { title: "Career Changers", desc: "Seeking data analyst roles" },
    ],
    tools: ["Excel", "Python", "Power BI", "Tableau", "Statistics", "Data Cleaning"],
    skills: ["Statistical Reasoning", "Data Cleaning", "Dashboarding", "Data Analysis", "Interpretation", "Communication"],
    structure: { duration: "4 Months", mode: "Live Virtual Sessions", projects: "Mentored Capstone Project", certification: "iPace Data Academy Certificate" },
    modules: [
      { title: "Statistics for Data Analysis", meta: "3 Weeks (Month 1)", topics: ["Descriptive statistics and data visualization", "Probability theory and distributions", "Hypothesis testing and confidence intervals", "Statistical inference and interpretation"] },
      { title: "Data Cleaning and Preparation with Excel", meta: "3 Weeks (Month 1)", topics: ["Handling missing data and duplicates", "Data formatting and standardization", "Data readiness and validation", "Excel functions for data preparation"] },
      { title: "Excel for Data Analysis", meta: "Core Skill Across 4 Months", topics: ["Advanced Excel functions and formulas", "Pivot tables and data summarization", "Data analysis workflows in Excel", "Reporting and visualization in Excel"] },
      { title: "Exploratory Data Analysis with Python", meta: "4 Weeks (Month 3)", topics: ["Pandas for data manipulation", "NumPy for numerical operations", "Matplotlib for data visualization", "EDA techniques and best practices"] },
      { title: "Power BI for Data Visualization", meta: "2 Weeks (Month 4)", topics: ["Creating interactive dashboards", "Business reporting and KPIs", "Data modeling in Power BI", "Dashboard publishing and sharing"] },
      { title: "Tableau for Dashboard Design", meta: "5 Weeks (Month 3–4)", topics: ["Data storytelling principles", "Dashboard design and layout", "Interactive visualizations", "Dashboard presentation skills"] },
      { title: "Cross-Program Seminars", meta: "Invited Professionals", topics: ["Digital & Data Thinking (1 Day)", "Responsible Use of AI (1 Day)", "Data Visualization & Interpretation (2 Days)"] },
    ],
    tuition: "₦70,000",
    headOfProgram: { name: "Adeleke Muheez", photo: "https://ipaceconcepts.com.ng/assets/images/Muiz.jpg", quote: "ADAP transforms learners into elite data practitioners through rigorous academic workflows and applied research integration." },
    instructors: [
      { name: "Brown Favour Efe", role: "Excel Specialist", photo: "https://ipaceconcepts.com.ng/assets/images/favor.jpg" },
      { name: "Yaseer", role: "Tableau and Business Intelligence Expert", photo: "https://ipaceconcepts.com.ng/assets/images/Yaseer.jpg" },
      { name: "Lawal Ganiyat", role: "EDA Expert", photo: "https://ipaceconcepts.com.ng/assets/images/Ganiyat-plh.jpg" },
    ],
    startDate: "January 2026",
    brochureUrl: "https://ipaceconcepts.com.ng/assets/brochure/adap.pdf",
  },
  rdap: {
    code: "RDAP",
    name: "Research Data Analysis Program",
    cohortLabel: "2026 Pilot Cohort · 4-Month Structured Program",
    tagline: "Advanced skills for analysing research datasets and rigorous statistical interpretation.",
    isReal: false,
    heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    who: [
      { title: "Graduate Students", desc: "Thesis and dissertation research" },
      { title: "Academics", desc: "Faculty and research assistants" },
      { title: "NGO Researchers", desc: "Monitoring & evaluation teams" },
      { title: "Career Changers", desc: "Moving into research analysis roles" },
    ],
    tools: ["SPSS", "R", "Excel", "Statistical Software"],
    skills: ["Research Design", "Statistical Analysis", "Survey Interpretation", "Hypothesis Testing", "Academic Writing", "Communication"],
    structure: { duration: "4 Months", mode: "Live Virtual Sessions", projects: "Mentored Research Project", certification: "iPace Data Academy Certificate" },
    modules: [
      { title: "Research Design & Survey Methods", meta: "3 Weeks (Month 1)", topics: ["Formulating research questions", "Survey and sampling design", "Validity and reliability", "Ethics in data collection"] },
      { title: "Statistical Analysis with SPSS & R", meta: "4 Weeks (Month 2)", topics: ["Descriptive and inferential statistics", "Regression modelling", "ANOVA and hypothesis testing", "Interpreting statistical output"] },
      { title: "Data Cleaning for Research", meta: "2 Weeks (Month 2)", topics: ["Handling missing and inconsistent data", "Coding and recoding variables", "Preparing datasets for analysis"] },
      { title: "Inferential Statistics & Hypothesis Testing", meta: "3 Weeks (Month 3)", topics: ["Confidence intervals", "Significance testing", "Multivariate analysis", "Interpreting p-values responsibly"] },
      { title: "Qualitative Data Analysis", meta: "2 Weeks (Month 3)", topics: ["Coding qualitative data", "Thematic analysis", "Mixed-methods integration"] },
      { title: "Academic Report Writing", meta: "2 Weeks (Month 4)", topics: ["Structuring a research report", "Presenting statistical findings", "Referencing and academic integrity"] },
      { title: "Cross-Program Seminars", meta: "Invited Professionals", topics: ["Digital & Data Thinking (1 Day)", "Responsible Use of AI (1 Day)", "Data Visualization & Interpretation (2 Days)"] },
    ],
    tuition: "₦65,000",
    headOfProgram: null,
    instructors: [],
    startDate: "TBD",
    brochureUrl: null,
  },
  mldip: {
    code: "MLDIP",
    name: "Machine Learning & Data Intelligence Program",
    cohortLabel: "2026 Pilot Cohort · 4-Month Structured Program",
    tagline: "Design predictive models and intelligent systems for automated decision-making.",
    isReal: false,
    heroImage: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1200&q=80",
    who: [
      { title: "Data Analysts", desc: "Levelling up into machine learning" },
      { title: "Software Developers", desc: "Adding ML to their toolkit" },
      { title: "Students", desc: "Computer science and statistics majors" },
      { title: "Career Changers", desc: "Seeking machine learning roles" },
    ],
    tools: ["Python", "Scikit-learn", "TensorFlow", "SQL"],
    skills: ["Predictive Modelling", "Model Evaluation", "Feature Engineering", "Deep Learning Foundations", "Deployment Basics", "Communication"],
    structure: { duration: "4 Months", mode: "Live Virtual Sessions", projects: "Mentored Capstone Project", certification: "iPace Data Academy Certificate" },
    modules: [
      { title: "Python for Machine Learning", meta: "3 Weeks (Month 1)", topics: ["Python fundamentals for ML", "NumPy and Pandas refresher", "Data preprocessing pipelines"] },
      { title: "Supervised Learning Models", meta: "4 Weeks (Month 2)", topics: ["Regression and classification", "Decision trees and ensembles", "Model training workflows"] },
      { title: "Unsupervised Learning & Clustering", meta: "2 Weeks (Month 2)", topics: ["Clustering techniques", "Dimensionality reduction", "Pattern discovery"] },
      { title: "Model Evaluation & Tuning", meta: "3 Weeks (Month 3)", topics: ["Cross-validation", "Hyperparameter tuning", "Evaluation metrics"] },
      { title: "Deep Learning Foundations", meta: "3 Weeks (Month 3–4)", topics: ["Neural network basics", "Introduction to TensorFlow", "Practical deep learning workflows"] },
      { title: "Deploying ML Solutions", meta: "2 Weeks (Month 4)", topics: ["Packaging a trained model", "Basic deployment concepts", "Monitoring model performance"] },
      { title: "Cross-Program Seminars", meta: "Invited Professionals", topics: ["Digital & Data Thinking (1 Day)", "Responsible Use of AI (1 Day)", "Data Visualization & Interpretation (2 Days)"] },
    ],
    tuition: "₦80,000",
    headOfProgram: null,
    instructors: [],
    startDate: "TBD",
    brochureUrl: null,
  },
};

function Eyebrow({ children }) {
  return <div style={{ fontSize: 14, color: "var(--sage)" }}>{children}</div>;
}

function PageHeader({ eyebrow, title, lead }) {
  return (
    <div style={{ padding: "56px 0 40px", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 style={{ fontSize: 34, marginTop: 10, maxWidth: "26ch" }}>{title}</h1>
        <p style={{ marginTop: 14, fontSize: 16.5, maxWidth: "48ch", color: "#4A463F" }}>
          {lead}
        </p>
      </div>
    </div>
  );
}

function Photo({ src, alt, ratio, style }) {
  return (
    <div
      className="media-photo"
      style={{ aspectRatio: ratio || "1/1", ...style }}
    >
      <img src={src} alt={alt} />
    </div>
  );
}

function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div>
      {items.map((item, i) => (
        <div key={item.q} className="accordion-item">
          <button
            className={`accordion-trigger ${open === i ? "open" : ""}`}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span>{item.q}</span>
            <span className="plus">+</span>
          </button>
          <div className={`accordion-panel ${open === i ? "open" : ""}`}>
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function CaseStudiesSection() {
  const [tab, setTab] = useState("intelligence");
  const [openReport, setOpenReport] = useState(null);
  const list = CASE_STUDIES[tab];

  return (
    <section style={{ padding: "60px 0" }}>
      <div className="wrap">
        <div style={{ maxWidth: "56ch", marginBottom: 20 }}>
          <h2 style={{ fontSize: 27 }}>Case Studies</h2>
          <p style={{ marginTop: 12, fontSize: 15.5, color: "#4A463F" }}>
            A track record of data-driven solutions and research excellence.
          </p>
        </div>
        <div className="tab-switch">
          <button
            className={tab === "intelligence" ? "active" : ""}
            onClick={() => { setTab("intelligence"); setOpenReport(null); }}
          >
            Data Intelligence
          </button>
          <button
            className={tab === "research" ? "active" : ""}
            onClick={() => { setTab("research"); setOpenReport(null); }}
          >
            Research
          </button>
        </div>

        <div className="card-grid cols-3" style={{ marginTop: 28 }}>
          {list.map((c, i) => (
            <div key={c.title} className="card work-card">
              <Photo src={c.image} alt={c.title} ratio="4/3" />
              <h3 style={{ fontSize: 15 }}>{c.title}</h3>
              <p style={{ fontSize: 13, color: "#4A463F", marginTop: 6 }}>{c.blurb}</p>
              {c.tags && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
                  {c.tags.map((t) => (
                    <span key={t} className="tag-pill">{t}</span>
                  ))}
                </div>
              )}
              <button
                className="btn-ghost"
                style={{ marginTop: 12 }}
                onClick={() => setOpenReport(openReport === i ? null : i)}
              >
                {openReport === i ? "Hide report" : "Read Report"}
              </button>
              {openReport === i && (
                <div className="report-panel">
                  <div style={{ fontSize: 11.5, color: "var(--sage)", fontStyle: "italic" }}>
                    Mock report — placeholder content for design purposes only.
                  </div>
                  <h4 style={{ fontSize: 13, marginTop: 10 }}>Approach</h4>
                  <p style={{ fontSize: 13, color: "#4A463F", marginTop: 4 }}>{c.report.approach}</p>
                  <h4 style={{ fontSize: 13, marginTop: 12 }}>Key Findings</h4>
                  <ul style={{ margin: "4px 0 0", paddingLeft: 18 }}>
                    {c.report.findings.map((f) => (
                      <li key={f} style={{ fontSize: 13, color: "#4A463F", marginTop: 3 }}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Home({ go }) {
  return (
    <div>
      <section style={{ padding: "64px 0 48px" }}>
        <div className="wrap hero-grid">
          <div>
            <h1 style={{ fontSize: 40, maxWidth: "11ch" }}>
              Data-informed decisions, made together.
            </h1>
            <p style={{ marginTop: 18, fontSize: 17, maxWidth: "42ch", color: "#4A463F" }}>
              iPace Concepts is building a data institute for Nigeria and Africa —
              advisory, systems, and research support for government, NGOs, private
              sector, and individuals.
            </p>
            <div style={{ marginTop: 26, display: "flex", gap: 14, alignItems: "center" }}>
              <button className="btn-primary" onClick={() => go("contact")}>
                Book a Consultation
              </button>
              <button className="btn-ghost" onClick={() => go("services")}>
                See what we do
              </button>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <Photo
              src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1200&q=80"
              alt="Team reviewing work together around a laptop"
              ratio="4/5"
            />
            <div className="hero-badge-card">
              <div className="badge-circle small">
                <Route size={18} />
              </div>
              <div className="pillars">
                <strong>What we offer</strong>
                <span>Advisory · Systems · Research</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ background: "var(--navy)", color: "var(--sand)", padding: "26px 0" }}>
        <div className="wrap mantra-list">
          {["Inclusivity", "Excellence", "Walking the path together", "Data-informed decisions"].map(
            (m, i, arr) => (
              <span key={m} className="mantra-item" style={{ borderRight: i === arr.length - 1 ? "none" : undefined }}>
                <strong style={{ color: "var(--gold-soft)", fontWeight: 500 }}>{m}</strong>
              </span>
            )
          )}
        </div>
      </div>

      <section style={{ padding: "60px 0" }}>
        <div className="wrap split">
          <div>
            <h2 style={{ fontSize: 28, maxWidth: "16ch" }}>
              A data institute for Nigeria, built for Africa.
            </h2>
            <p style={{ marginTop: 16, color: "#4A463F", maxWidth: "44ch" }}>
              We started as a consultancy. What we're building is bigger: an
              institution where organisations and individuals across the continent
              can turn data into decisions — with the rigour of a research
              institute, and the warmth of a team that walks alongside you.
            </p>
            <p style={{ marginTop: 14 }}>
              <button className="btn-ghost" onClick={() => go("about")}>
                Read our story
              </button>
            </p>
          </div>
          <Photo
            src="https://images.unsplash.com/photo-1573496528621-017a88f62f4c?auto=format&fit=crop&w=1000&q=80"
            alt="A member of the iPace team at work"
          />
        </div>
      </section>

      <section style={{ padding: "42px 0" }}>
        <div className="wrap">
          <div style={{ maxWidth: "56ch", marginBottom: 36 }}>
            <h2 style={{ fontSize: 27 }}>What we do</h2>
            <p style={{ marginTop: 12, fontSize: 15.5, color: "#4A463F" }}>
              Three services. No jargon, no bundling — pick what your
              organisation actually needs.
            </p>
          </div>
          <div className="card-grid cols-3">
            {SERVICES.map((s) => (
              <div
                key={s.name}
                className="card card-clickable"
                onClick={() => go("services")}
              >
                <div className="badge-circle">
                  <s.icon size={22} />
                </div>
                <h3 style={{ fontSize: 18, marginTop: 18, color: "var(--navy-ink)" }}>{s.name}</h3>
                <p style={{ color: "#4A463F", fontSize: 14, marginTop: 10 }}>{s.short}</p>
                <div style={{ fontSize: 12.5, color: "var(--sage)", marginTop: 14 }}>{s.who}</div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 24 }}>
            <button className="btn-ghost" onClick={() => go("services")}>
              See full service details
            </button>
          </p>
        </div>
      </section>

      <section style={{ padding: "60px 0" }}>
        <div className="wrap">
          <div style={{ maxWidth: "56ch", marginBottom: 36 }}>
            <h2 style={{ fontSize: 27 }}>How an engagement unfolds</h2>
            <p style={{ marginTop: 12, fontSize: 15.5, color: "#4A463F" }}>
              The same five moves, whether it's a single audit or a multi-year
              partnership.
            </p>
          </div>
          <div className="card-grid cols-5">
            {PROCESS.map((s) => (
              <div key={s.step} className="card process-card">
                <div className="badge-circle">
                  <span className="step-num-inner">{s.step}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 0" }}>
        <div className="wrap">
          <div style={{ maxWidth: "56ch", marginBottom: 36 }}>
            <h2 style={{ fontSize: 27 }}>Who we walk with</h2>
            <p style={{ marginTop: 12, fontSize: 15.5, color: "#4A463F" }}>
              One institute, four kinds of partners — each on the same path
              toward better decisions.
            </p>
          </div>
          <div className="card-grid cols-4">
            {PARTNERS.map((p) => (
              <div
                key={p.name}
                className="card card-clickable"
                onClick={() => go("sectors")}
              >
                <div className="badge-circle">
                  <p.icon size={20} />
                </div>
                <h3 style={{ fontSize: 16, marginTop: 16 }}>{p.name}</h3>
                <p style={{ fontSize: 13, color: "#4A463F", marginTop: 8 }}>{p.short}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 30 }}>
            <button className="btn-ghost" onClick={() => go("sectors")}>
              More on who we serve
            </button>
          </p>
        </div>
      </section>

      <section style={{ padding: "42px 0" }}>
        <div className="wrap">
          <div className="card academy-callout">
            <div className="badge-circle">
              <Bell size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: 20 }}>iPace Data Academy — next cohort April 25, 2026</h3>
              <p style={{ color: "#4A463F", marginTop: 8, fontSize: 14.5, maxWidth: "48ch" }}>
                Applications are open now for ADAP, RDAP, and MLDIP — structured,
                university-model programs in data analysis, research, and
                machine learning.
              </p>
            </div>
            <button className="btn-outline" onClick={() => go("academy")}>
              View Programs
            </button>
          </div>
        </div>
      </section>

      <CaseStudiesSection />

      <section style={{ padding: "0 0 60px" }}>
        <div className="wrap">
          <div style={{ maxWidth: "56ch", marginBottom: 30 }}>
            <h2 style={{ fontSize: 27 }}>Build Your Portfolio</h2>
            <p style={{ marginTop: 12, fontSize: 15.5, color: "#4A463F" }}>
              Sharpen your skills and get noticed through our open competitions.
            </p>
          </div>
          <div className="card-grid cols-2">
            {COMPETITIONS.map((c) => (
              <div key={c.title} className="card">
                <div className="badge-circle small">
                  <Award size={16} />
                </div>
                <h3 style={{ fontSize: 17, marginTop: 14 }}>{c.title}</h3>
                <p style={{ color: "#4A463F", fontSize: 14, marginTop: 8 }}>{c.desc}</p>
                <div style={{ fontSize: 12, color: "var(--sage)", marginTop: 10 }}>Deadline: {c.deadline}</div>
                <a
                  className="btn-ghost"
                  style={{ marginTop: 12, display: "inline-block" }}
                  href="mailto:ipace2024@gmail.com?subject=Competition%20Participation"
                >
                  Participate
                </a>
              </div>
            ))}
          </div>
          <p className="placeholder-note">
            The live site's entry links point to broken Google Form placeholders,
            so these route to email until a real form is set up.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 0 50px", textAlign: "center" }}>
        <div className="wrap">
          <div style={{ fontSize: 12.5, color: "var(--sage)", letterSpacing: "0.04em", textTransform: "uppercase" }}>
            In Partnership With
          </div>
          <div style={{ fontFamily: "Fraunces, serif", fontSize: 20, color: "var(--navy-ink)", marginTop: 10 }}>
            NESA
          </div>
        </div>
      </section>

      <div style={{ background: "var(--sand-deep)" }}>
        <div className="wrap" style={{ padding: "56px 32px" }}>
          <div style={{ maxWidth: "56ch", marginBottom: 30 }}>
            <h2 style={{ fontSize: 27 }}>What people tell us</h2>
          </div>
          <div className="testimonial-grid">
            {TESTIMONIALS.map((t) => (
              <div key={t.who} className="testimonial-card">
                <div className="testimonial-head">
                  <div className="avatar-circle">{t.initials}</div>
                  <div>
                    <div className="stars">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={13} />
                      ))}
                    </div>
                    <span style={{ fontSize: 11.5, color: "var(--sage)" }}>{t.year}</span>
                  </div>
                </div>
                <blockquote style={{ fontSize: 15, fontFamily: "Fraunces, serif", color: "var(--navy-ink)" }}>
                  "{t.quote}"
                </blockquote>
                <cite style={{ display: "block", marginTop: 10, fontSize: 12.5, color: "var(--sage)", fontStyle: "normal" }}>
                  {t.who}
                </cite>
              </div>
            ))}
          </div>
          <p className="placeholder-note">
            Avatars and dates shown are placeholders, pending real client
            photos and verified review dates.
          </p>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <PageHeader
        eyebrow="About iPace"
        title="Building the data institution Africa hasn't had yet."
        lead="iPace is an innovative service-rendering corporation founded on the principle that data is the ultimate driver for success."
      />
      <section style={{ padding: "60px 0" }}>
        <div className="wrap split">
          <div>
            <h2 style={{ fontSize: 28, maxWidth: "16ch" }}>Where we started</h2>
            <p style={{ marginTop: 16, color: "#4A463F", maxWidth: "44ch" }}>
              iPace Concepts was founded in 2022 with a vision to help brands
              expand through statistical rigor for business decision-making —
              across Nigeria and the wider continent, organisations were making
              high-stakes decisions without the data foundation to support
              them. We started doing the work directly: audits, forecasting
              models, statistical consulting.
            </p>
            <p style={{ marginTop: 16, color: "#4A463F", maxWidth: "44ch" }}>
              That work is still at the core of what we do. But it pointed to
              something larger.
            </p>
          </div>
          <Photo
            src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1000&q=80"
            alt="Team working together"
          />
        </div>
      </section>
      <section style={{ padding: "0 0 60px" }}>
        <div className="wrap split">
          <Photo
            src="https://images.unsplash.com/photo-1573496528621-017a88f62f4c?auto=format&fit=crop&w=1000&q=80"
            alt="Focused, individual work at a desk"
            style={{ order: 2 }}
          />
          <div style={{ order: 1 }}>
            <h2 style={{ fontSize: 28, maxWidth: "16ch" }}>Where we're going</h2>
            <p style={{ marginTop: 16, color: "#4A463F", maxWidth: "44ch" }}>
              Nigeria and Africa don't lack data — they lack institutions that
              turn data into decisions consistently, credibly, and at scale.
              That's what we're building: a data institute, not just a
              consultancy. One home for advisory work, data systems, research
              support, and structured education through the Academy.
            </p>
            <p style={{ marginTop: 16, color: "#4A463F", maxWidth: "44ch" }}>
              Every client relationship, every research case study, every
              Academy cohort, is a brick in that same building.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 60px" }}>
        <div className="wrap">
          <div className="card-grid cols-3">
            <div className="card">
              <h3 style={{ fontSize: 18 }}>Our Mission</h3>
              <p style={{ color: "#4A463F", fontSize: 14.5, marginTop: 10 }}>
                To empower businesses in the modern economy through
                innovative, sustainable solutions and data-driven insights —
                walking the path together with guidance and empathy.
              </p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: 18 }}>Our Vision</h3>
              <p style={{ color: "#4A463F", fontSize: 14.5, marginTop: 10 }}>
                To be the trusted partner for organisations across Africa
                seeking cutting-edge services that drive growth, revenue
                optimisation, and long-term sustainability.
              </p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: 18 }}>Our Approach</h3>
              <p style={{ color: "#4A463F", fontSize: 14.5, marginTop: 10 }}>
                We emphasise methodological rigor, adaptive modelling, and a
                regime-based thinking framework to handle structural changes
                in data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-band">
        <div className="wrap">
          <div style={{ fontSize: 14, color: "var(--gold-soft)" }}>
            Our impact — figures pending final confirmation
          </div>
          <div className="stats-grid-wrap card-grid cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="stat-card">
                <div className="badge-circle">
                  <s.icon size={20} />
                </div>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section style={{ padding: "60px 0 42px" }}>
        <div className="wrap">
          <div style={{ maxWidth: "56ch", marginBottom: 36 }}>
            <h2 style={{ fontSize: 27 }}>Our Core Values</h2>
            <p style={{ marginTop: 12, fontSize: 15.5, color: "#4A463F" }}>
              Four commitments that shape every engagement, regardless of size
              or sector.
            </p>
          </div>
          <div className="card-grid cols-2">
            {ABOUT_VALUES.map((v) => (
              <div key={v.title} className="card value-card">
                <div className="badge-circle">
                  <v.icon size={20} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "42px 0 64px" }}>
        <div className="wrap">
          <div style={{ maxWidth: "56ch", marginBottom: 36 }}>
            <h2 style={{ fontSize: 27 }}>Our Story</h2>
            <p style={{ marginTop: 12, fontSize: 15.5, color: "#4A463F" }}>
              From a small data consulting firm to a data institute in the
              making.
            </p>
          </div>
          <div className="timeline-list">
            {ABOUT_TIMELINE.map((t) => (
              <div key={t.title} className="timeline-row">
                <div className="timeline-year">{t.year}</div>
                <div>
                  <h3 style={{ fontSize: 17 }}>{t.title}</h3>
                  <p style={{ color: "#4A463F", fontSize: 14.5, marginTop: 6 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Services({ go }) {
  return (
    <div>
      <PageHeader
        eyebrow="What we do"
        title="Three services. Pick what you need."
        lead="No bundling, no jargon. Each service stands on its own, and most clients start with just one."
      />
      <div className="wrap">
        {SERVICES.map((s) => (
          <div key={s.name} className="service-detail">
            <div className="service-detail-grid">
              <div>
                <div className="badge-circle">
                  <s.icon size={22} />
                </div>
                <h2 style={{ fontSize: 25, marginTop: 18 }}>{s.name}</h2>
                <span style={{ color: "var(--sage)", fontSize: 14, marginTop: 4, display: "block" }}>
                  {s.tag}
                </span>
                <p style={{ color: "#4A463F", marginTop: 14, maxWidth: "46ch" }}>{s.long}</p>
                <ul style={{ marginTop: 16, padding: 0, listStyle: "none" }}>
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      style={{
                        padding: "7px 0 7px 18px",
                        borderLeft: "2px solid var(--gold)",
                        marginBottom: 7,
                        fontSize: 14.5,
                        color: "#4A463F",
                      }}
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <Photo src={s.image} alt={s.alt} ratio="4/3" />
            </div>
          </div>
        ))}
      </div>

      <section style={{ padding: "50px 0" }}>
        <div className="wrap">
          <div style={{ maxWidth: "56ch", marginBottom: 30 }}>
            <h2 style={{ fontSize: 24 }}>Why Work With Us</h2>
            <p style={{ marginTop: 10, fontSize: 14.5, color: "#4A463F" }}>
              The same principles across every service, whatever the size of the engagement.
            </p>
          </div>
          <div className="card-grid cols-4">
            {ABOUT_VALUES.map((v) => (
              <div key={v.title} className="card" style={{ padding: 22 }}>
                <div className="badge-circle small">
                  <v.icon size={16} />
                </div>
                <h3 style={{ fontSize: 15, marginTop: 14 }}>{v.title}</h3>
                <p style={{ color: "#4A463F", fontSize: 13, marginTop: 8 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "42px 0", textAlign: "center" }}>
        <div className="wrap">
          <h2 style={{ fontSize: 24 }}>Not sure which one you need?</h2>
          <p style={{ color: "#4A463F", marginTop: 8 }}>
            Most first conversations end up being a mix of all three. That's
            normal — start with a consultation.
          </p>
          <p style={{ marginTop: 20 }}>
            <button className="btn-primary" onClick={() => go("contact")}>
              Book a Consultation
            </button>
          </p>
        </div>
      </section>
    </div>
  );
}

function Sectors({ go }) {
  return (
    <div>
      <PageHeader
        eyebrow="Who we serve"
        title="One institute, four kinds of partners."
        lead="Government, NGOs, private sector, and individuals — each walking the same path toward better decisions, at their own scale."
      />
      <div className="wrap">
        <div className="card-grid cols-2" style={{ padding: "40px 0" }}>
          {PARTNERS.map((p) => (
            <div key={p.name} className="card">
              <div className="badge-circle">
                <p.icon size={22} />
              </div>
              <h2 style={{ fontSize: 20, marginTop: 18 }}>{p.name}</h2>
              <span style={{ color: "var(--sage)", fontSize: 13, marginTop: 5, display: "block" }}>
                {p.tag}
              </span>
              <p style={{ color: "#4A463F", marginTop: 12 }}>{p.long}</p>
            </div>
          ))}
        </div>
      </div>
      <section style={{ padding: "42px 0", textAlign: "center" }}>
        <div className="wrap">
          <h2 style={{ fontSize: 24 }}>Don't see your kind of organisation?</h2>
          <p style={{ color: "#4A463F", marginTop: 8 }}>
            If you make decisions with data — or should be — we probably still
            have a place for you.
          </p>
          <p style={{ marginTop: 20 }}>
            <button className="btn-primary" onClick={() => go("contact")}>
              Book a Consultation
            </button>
          </p>
        </div>
      </section>
    </div>
  );
}

function Academy({ go }) {
  return (
    <div>
      <PageHeader
        eyebrow="iPace Data Academy"
        title="Build real data skills that power modern decisions."
        lead="Master applied data analysis, research analytics, and machine learning through practical programs designed for professionals, students, and organisations."
      />
      <section style={{ padding: "36px 0" }}>
        <div className="wrap">
          <div className="card" style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div className="badge-circle">
                <Bell size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: 17 }}>Next cohort begins April 25, 2026</h3>
                <p style={{ color: "#4A463F", fontSize: 13.5, marginTop: 4 }}>Applications are open now.</p>
              </div>
            </div>
            <a className="btn-primary" href={ACADEMY_APPLY_URL} target="_blank" rel="noreferrer">
              Apply Now
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: "24px 0 50px" }}>
        <div className="wrap card-grid cols-3">
          <div className="stat-inline"><strong>3</strong><span>Programs</span></div>
          <div className="stat-inline"><strong>4</strong><span>Months per cohort</span></div>
          <div className="stat-inline"><strong>100%</strong><span>Virtual delivery</span></div>
        </div>
      </section>

      <section style={{ padding: "0 0 60px" }}>
        <div className="wrap">
          <div style={{ maxWidth: "56ch", marginBottom: 30 }}>
            <h2 style={{ fontSize: 27 }}>Our Programs</h2>
            <p style={{ marginTop: 12, fontSize: 15.5, color: "#4A463F" }}>
              Choose the program that fits your career goals and learning needs.
            </p>
          </div>
          <div className="card-grid cols-3">
            <div className="card card-clickable" onClick={() => go("adap")}>
              <div className="badge-circle"><LineChart size={20} /></div>
              <h3 style={{ fontSize: 18, marginTop: 16 }}>ADAP</h3>
              <div style={{ fontSize: 12.5, color: "var(--sage)" }}>Applied Data Analysis Program</div>
              <p style={{ color: "#4A463F", fontSize: 14, marginTop: 10 }}>
                Transform raw data into insight with Excel, Python, and Power BI.
              </p>
              <div style={{ fontSize: 13, color: "var(--navy)", marginTop: 12 }}>₦70,000 · 4 months</div>
            </div>
            <div className="card card-clickable" onClick={() => go("rdap")}>
              <div className="badge-circle"><FlaskConical size={20} /></div>
              <h3 style={{ fontSize: 18, marginTop: 16 }}>RDAP</h3>
              <div style={{ fontSize: 12.5, color: "var(--sage)" }}>Research Data Analysis Program</div>
              <p style={{ color: "#4A463F", fontSize: 14, marginTop: 10 }}>
                Advanced skills for analysing research datasets and rigorous statistical interpretation.
              </p>
              <div style={{ fontSize: 13, color: "var(--navy)", marginTop: 12 }}>₦65,000 · 4 months</div>
            </div>
            <div className="card card-clickable" onClick={() => go("mldip")}>
              <div className="badge-circle"><Database size={20} /></div>
              <h3 style={{ fontSize: 18, marginTop: 16 }}>MLDIP</h3>
              <div style={{ fontSize: 12.5, color: "var(--sage)" }}>Machine Learning & Data Intelligence Program</div>
              <p style={{ color: "#4A463F", fontSize: 14, marginTop: 10 }}>
                Design predictive models and intelligent systems for automated decision-making.
              </p>
              <div style={{ fontSize: 13, color: "var(--navy)", marginTop: 12 }}>₦80,000 · 4 months</div>
            </div>
          </div>
          <p className="placeholder-note">
            RDAP and MLDIP program pages are modeled on ADAP's real structure —
            see each page for details on what's verified vs. estimated.
          </p>
        </div>
      </section>

      <div className="stats-band">
        <div className="wrap">
          <div style={{ fontSize: 14, color: "var(--gold-soft)" }}>Tuition & Enrollment</div>
          <h2 style={{ color: "var(--sand)", fontSize: 24, marginTop: 10 }}>Flexible learning, structured payment.</h2>
          <p style={{ color: "rgba(246,241,231,0.7)", marginTop: 8, maxWidth: "50ch" }}>
            Start your journey with just ₦10,000. 70% of tuition is due within
            the first month, and full payment is completed before the second
            assessment.
          </p>
          <div className="card-grid cols-3" style={{ marginTop: 30 }}>
            {TUITION.map((t) => (
              <div key={t.code} className={`card pricing-card dark ${t.code === "ADAP" ? "popular" : ""}`}>
                {t.code === "ADAP" && <span className="pricing-badge">Most Popular</span>}
                <div style={{ fontSize: 12.5, color: "var(--gold-soft)" }}>{t.code}</div>
                <h3 style={{ fontSize: 16, color: "var(--sand)", marginTop: 4 }}>{t.name}</h3>
                <div className="price">{t.price}</div>
                <div style={{ fontSize: 12, color: "rgba(246,241,231,0.5)" }}>₦10,000 to get started</div>
                <ul>
                  {t.features.map((f) => <li key={f}>✔ {f}</li>)}
                </ul>
                <a className="btn-outline" style={{ marginTop: 14, display: "inline-block" }} href={ACADEMY_APPLY_URL} target="_blank" rel="noreferrer">
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section style={{ padding: "60px 0" }}>
        <div className="wrap" style={{ maxWidth: 720 }}>
          <div style={{ maxWidth: "56ch", marginBottom: 20 }}>
            <h2 style={{ fontSize: 27 }}>Academy FAQ</h2>
          </div>
          <Accordion items={ACADEMY_FAQ} />
        </div>
      </section>

      <section style={{ padding: "0 0 60px" }}>
        <div className="wrap">
          <div className="card" style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap", justifyContent: "space-between" }}>
            <div>
              <h3 style={{ fontSize: 18 }}>Join the iPace community</h3>
              <p style={{ color: "#4A463F", fontSize: 14, marginTop: 6, maxWidth: "44ch" }}>
                Connect with learners and professionals in our WhatsApp community — updates, networking, and knowledge sharing.
              </p>
            </div>
            <a className="btn-primary" href={ACADEMY_COMMUNITY_URL} target="_blank" rel="noreferrer">
              Join Community
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function Team() {
  return (
    <div>
      <PageHeader
        eyebrow="Our Team"
        title="Meet the experts behind iPace Concepts."
        lead="Data scientists, researchers, and educators who are passionate about transforming data into actionable insights."
      />
      <section style={{ padding: "50px 0" }}>
        <div className="wrap card-grid cols-3">
          {TEAM.map((m) => (
            <div key={m.name} className="card team-card">
              <div className="team-photo">
                <img src={m.photo} alt={m.name} />
              </div>
              <h3 style={{ fontSize: 17 }}>{m.name}</h3>
              <div style={{ fontSize: 12.5, color: "var(--sage)", marginTop: 3 }}>{m.role}</div>
              <p style={{ color: "#4A463F", fontSize: 13.5, marginTop: 10 }}>{m.bio}</p>
              <div className="team-links">
                <a href={m.link} target="_blank" rel="noreferrer" aria-label={`${m.name} profile`}>
                  <Linkedin size={16} />
                </a>
                <a href={`mailto:${m.email}`} aria-label={`Email ${m.name}`}>
                  <Mail size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section style={{ padding: "0 0 60px", textAlign: "center" }}>
        <div className="wrap">
          <h2 style={{ fontSize: 22 }}>Join Our Team</h2>
          <p style={{ color: "#4A463F", marginTop: 8 }}>
            We're always looking for talented data professionals to join our
            growing team.
          </p>
          <p style={{ marginTop: 18, display: "flex", gap: 12, justifyContent: "center" }}>
            <a className="btn-primary" href="mailto:ipace2024@gmail.com">Send Your CV</a>
            <a className="btn-outline" href="https://wa.me/2348111986185" target="_blank" rel="noreferrer">WhatsApp Us</a>
          </p>
        </div>
      </section>
    </div>
  );
}

function Consultation({ go }) {
  return (
    <div>
      <PageHeader
        eyebrow="Book a Consultation"
        title="Get expert advice tailored to your business."
        lead="Data intelligence systems, audits, and statistical consulting — tailored to your specific needs."
      />
      <section style={{ padding: "50px 0 20px" }}>
        <div className="wrap">
          <div style={{ maxWidth: "56ch", marginBottom: 30 }}>
            <h2 style={{ fontSize: 24 }}>Talk to Us About</h2>
          </div>
          <div className="card-grid cols-5">
            {CONSULT_TOPICS.map((c) => (
              <div key={c.title} className="card" style={{ padding: 22 }}>
                <div className="badge-circle small">
                  <c.icon size={16} />
                </div>
                <h3 style={{ fontSize: 15, marginTop: 14 }}>{c.title}</h3>
                <p style={{ color: "#4A463F", fontSize: 13, marginTop: 8 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "50px 0" }}>
        <div className="wrap">
          <div style={{ maxWidth: "56ch", marginBottom: 30 }}>
            <h2 style={{ fontSize: 24 }}>Why Choose iPace Consulting?</h2>
          </div>
          <div className="card-grid cols-4">
            {WHY_CONSULT.map((c) => (
              <div key={c.title} className="card">
                <div className="badge-circle small">
                  <c.icon size={16} />
                </div>
                <h3 style={{ fontSize: 15, marginTop: 14 }}>{c.title}</h3>
                <p style={{ color: "#4A463F", fontSize: 13, marginTop: 8 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "20px 0 60px" }}>
        <div className="wrap" style={{ maxWidth: 720 }}>
          <div style={{ maxWidth: "56ch", marginBottom: 20 }}>
            <h2 style={{ fontSize: 24 }}>FAQ</h2>
          </div>
          <Accordion items={CONSULT_FAQ} />
        </div>
      </section>

      <section style={{ padding: "0 0 60px", textAlign: "center" }}>
        <div className="wrap">
          <h2 style={{ fontSize: 22 }}>Ready to talk?</h2>
          <p style={{ color: "#4A463F", marginTop: 8 }}>
            Tell us a little about your organisation and we'll follow up to
            set up a consultation.
          </p>
          <p style={{ marginTop: 18 }}>
            <button className="btn-primary" onClick={() => go("contact")}>
              Book a Consultation
            </button>
          </p>
        </div>
      </section>
    </div>
  );
}

function Blog() {
  return (
    <div>
      <PageHeader
        eyebrow="Insights"
        title="Notes on data, research, and growth."
        lead="Practical writing from the iPace team — published on Medium."
      />
      <section style={{ padding: "50px 0 70px" }}>
        <div className="wrap card-grid cols-3">
          {INSIGHTS.map((post) => (
            <a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className="card"
              style={{ display: "block", textDecoration: "none", color: "inherit" }}
            >
              <div className="badge-circle small">
                <LineChart size={16} />
              </div>
              <h3 style={{ fontSize: 16, marginTop: 16 }}>{post.title}</h3>
              <p style={{ color: "#4A463F", fontSize: 13.5, marginTop: 8 }}>{post.blurb}</p>
              <span style={{ fontSize: 12.5, color: "var(--gold)", marginTop: 12, display: "inline-block" }}>
                Read on Medium →
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

function ProgramPage({ program: p, go }) {
  return (
    <div>
      <PageHeader
        eyebrow={`${p.code} · ${p.cohortLabel}`}
        title={p.name}
        lead={p.tagline}
      />
      {!p.isReal && (
        <div className="wrap" style={{ paddingTop: 24 }}>
          <div className="mock-banner">
            This program's live page returns a 404 on the deployed site, so
            this page is modeled on ADAP's real structure using the program's
            known pricing and description — not verified curriculum details.
          </div>
        </div>
      )}

      <section style={{ padding: "36px 0" }}>
        <div className="wrap" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a className="btn-primary" href={ACADEMY_APPLY_URL} target="_blank" rel="noreferrer">
            Apply Now
          </a>
          {p.brochureUrl && (
            <a className="btn-outline" href={p.brochureUrl} target="_blank" rel="noreferrer">
              Download Brochure
            </a>
          )}
        </div>
      </section>

      <section style={{ padding: "0 0 50px" }}>
        <div className="wrap">
          <Photo src={p.heroImage} alt={p.name} ratio="16/7" />
        </div>
      </section>

      <section style={{ padding: "0 0 50px" }}>
        <div className="wrap">
          <div style={{ maxWidth: "56ch", marginBottom: 26 }}>
            <h2 style={{ fontSize: 24 }}>Who is this Program For?</h2>
          </div>
          <div className="card-grid cols-4">
            {p.who.map((w) => (
              <div key={w.title} className="card" style={{ padding: 22 }}>
                <h3 style={{ fontSize: 15 }}>{w.title}</h3>
                <p style={{ fontSize: 13, color: "#4A463F", marginTop: 8 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 50px" }}>
        <div className="wrap">
          <div className="split">
            <div>
              <h2 style={{ fontSize: 22 }}>Tools You Will Learn</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
                {p.tools.map((t) => <span key={t} className="tag-pill">{t}</span>)}
              </div>
            </div>
            <div>
              <h2 style={{ fontSize: 22 }}>What You Will Learn</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
                {p.skills.map((s) => <span key={s} className="tag-pill">{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-band">
        <div className="wrap">
          <div style={{ fontSize: 14, color: "var(--gold-soft)" }}>Program Structure</div>
          <div className="card-grid cols-4" style={{ marginTop: 18 }}>
            <div className="stat-card"><div className="stat-label">Duration</div><div className="stat-value" style={{ fontSize: 20 }}>{p.structure.duration}</div></div>
            <div className="stat-card"><div className="stat-label">Mode</div><div className="stat-value" style={{ fontSize: 20 }}>{p.structure.mode}</div></div>
            <div className="stat-card"><div className="stat-label">Projects</div><div className="stat-value" style={{ fontSize: 20 }}>{p.structure.projects}</div></div>
            <div className="stat-card"><div className="stat-label">Certification</div><div className="stat-value" style={{ fontSize: 17 }}>{p.structure.certification}</div></div>
          </div>
        </div>
      </div>

      <section style={{ padding: "50px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <div style={{ maxWidth: "56ch", marginBottom: 20 }}>
            <h2 style={{ fontSize: 24 }}>Course Descriptions</h2>
          </div>
          <Accordion items={p.modules.map((m) => ({ q: `${m.title} — ${m.meta}`, a: m.topics.join(" · ") }))} />
        </div>
      </section>

      {p.headOfProgram && (
        <section style={{ padding: "0 0 50px" }}>
          <div className="wrap card" style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
            <div className="team-photo" style={{ width: 70, height: 70, flexShrink: 0 }}>
              <img src={p.headOfProgram.photo} alt={p.headOfProgram.name} />
            </div>
            <div>
              <div style={{ fontSize: 12.5, color: "var(--sage)" }}>Words from the Head of Program</div>
              <blockquote style={{ fontFamily: "Fraunces, serif", fontSize: 16, marginTop: 6 }}>
                "{p.headOfProgram.quote}"
              </blockquote>
              <cite style={{ fontSize: 13, fontStyle: "normal", color: "var(--navy)" }}>{p.headOfProgram.name}</cite>
            </div>
          </div>
        </section>
      )}

      {p.instructors.length > 0 && (
        <section style={{ padding: "0 0 50px" }}>
          <div className="wrap">
            <div style={{ maxWidth: "56ch", marginBottom: 26 }}>
              <h2 style={{ fontSize: 22 }}>Instructors</h2>
            </div>
            <div className="card-grid cols-3">
              {p.instructors.map((ins) => (
                <div key={ins.name} className="card team-card">
                  <div className="team-photo"><img src={ins.photo} alt={ins.name} /></div>
                  <h3 style={{ fontSize: 15 }}>{ins.name}</h3>
                  <div style={{ fontSize: 12.5, color: "var(--sage)", marginTop: 3 }}>{ins.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section style={{ padding: "0 0 60px", textAlign: "center" }}>
        <div className="wrap">
          <div className="card" style={{ maxWidth: 620, margin: "0 auto" }}>
            <div style={{ fontSize: 13, color: "var(--sage)" }}>Tuition</div>
            <div className="price" style={{ margin: "6px 0 4px" }}>{p.tuition}</div>
            <div style={{ fontSize: 12.5, color: "#4A463F" }}>Installment plans available</div>
            <a className="btn-primary" style={{ marginTop: 18, display: "inline-block" }} href={ACADEMY_APPLY_URL} target="_blank" rel="noreferrer">
              Apply Now
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 60px" }}>
        <div className="wrap">
          <div className="card" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ fontSize: 12.5, color: "var(--sage)" }}>Program Starts</div>
              <div style={{ fontSize: 14 }}>{p.startDate}</div>
            </div>
            <div>
              <div style={{ fontSize: 12.5, color: "var(--sage)" }}>Delivery Mode</div>
              <div style={{ fontSize: 14 }}>100% Virtual (Live Sessions)</div>
            </div>
            <div>
              <div style={{ fontSize: 12.5, color: "var(--sage)" }}>Certificate</div>
              <div style={{ fontSize: 14 }}>iPace Data Academy Certificate</div>
            </div>
            <div>
              <div style={{ fontSize: 12.5, color: "var(--sage)" }}>Support</div>
              <div style={{ fontSize: 14 }}>24/7 Mentorship & Technical Support</div>
            </div>
          </div>
          <p className="placeholder-note">
            Questions? Contact us at ipace2024@gmail.com or WhatsApp +234 811 198 6185.
          </p>
        </div>
      </section>
    </div>
  );
}

function ADAPPage({ go }) { return <ProgramPage program={PROGRAMS.adap} go={go} />; }
function RDAPPage({ go }) { return <ProgramPage program={PROGRAMS.rdap} go={go} />; }
function MLDIPPage({ go }) { return <ProgramPage program={PROGRAMS.mldip} go={go} />; }

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div>
      <PageHeader
        eyebrow="Get in touch"
        title="Let's talk about your data."
        lead="Tell us a little about your organisation and what you're trying to decide — we'll follow up to set up a consultation."
      />
      <section style={{ padding: "60px 0" }}>
        <div className="wrap contact-grid">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <label className="form-label" htmlFor="name">Full name</label>
            <input className="text-input" type="text" id="name" placeholder="Your name" />

            <label className="form-label" htmlFor="org">Organisation (optional)</label>
            <input className="text-input" type="text" id="org" placeholder="Company, agency, or institution" />

            <label className="form-label" htmlFor="type">You are a...</label>
            <select className="text-input" id="type">
              <option>Government agency</option>
              <option>NGO / development organisation</option>
              <option>Private business</option>
              <option>Individual / researcher</option>
            </select>

            <label className="form-label" htmlFor="service">Interested in</label>
            <select className="text-input" id="service">
              <option>Advisory & Consultation</option>
              <option>Systems & Architecture</option>
              <option>Research & Analysis Support</option>
              <option>Not sure yet</option>
            </select>

            <label className="form-label" htmlFor="message">A bit about what you need</label>
            <textarea className="text-input" id="message" rows={4} placeholder="Tell us what you're working on" />

            <button type="submit" className="btn-primary" style={{ marginTop: 22 }}>
              {submitted ? "Message sent" : "Send message"}
            </button>
          </form>
          <div>
            <h3 style={{ fontSize: 17, marginBottom: 4 }}>Prefer to reach us directly?</h3>
            <div style={{ marginTop: 18 }}>
              <div style={{ fontSize: 12.5, color: "var(--sage)" }}>Email</div>
              <div style={{ fontSize: 15, marginTop: 2 }}>ipace2024@gmail.com</div>
            </div>
            <div style={{ marginTop: 18 }}>
              <div style={{ fontSize: 12.5, color: "var(--sage)" }}>WhatsApp</div>
              <div style={{ fontSize: 15, marginTop: 2 }}>+234 811 198 6185</div>
            </div>
            <div style={{ marginTop: 18 }}>
              <div style={{ fontSize: 12.5, color: "var(--sage)" }}>Location</div>
              <div style={{ fontSize: 15, marginTop: 2 }}>Nigeria</div>
            </div>
            <div style={{ marginTop: 18 }}>
              <div style={{ fontSize: 12.5, color: "var(--sage)" }}>Follow</div>
              <div style={{ fontSize: 15, marginTop: 2 }}>LinkedIn · Twitter/X · Medium</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const PAGES = {
  home: Home,
  about: About,
  services: Services,
  sectors: Sectors,
  academy: Academy,
  team: Team,
  blog: Blog,
  consultation: Consultation,
  contact: Contact,
  adap: ADAPPage,
  rdap: RDAPPage,
  mldip: MLDIPPage,
};

export default function App() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [newsEmail, setNewsEmail] = useState("");
  const [newsSent, setNewsSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setPage(id);
    setMenuOpen(false);
    document.getElementById("ipace-root")?.scrollTo?.(0, 0);
    window.scrollTo?.(0, 0);
  };

  const Page = PAGES[page];

  return (
    <div id="ipace-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=IBM+Plex+Sans:wght@400;500;600&display=swap');
        #ipace-root {
          --navy:#171310; --navy-ink:#0C0A07; --gold:#C9A227; --gold-soft:#E8D9A8;
          --sand:#FAF6EC; --sand-deep:#F1E9D4; --ink:#322D24; --sage:#8B6F3F;
          --line: rgba(23,19,16,0.14); --radius:4px; --card-radius:18px;
          font-family: 'IBM Plex Sans', sans-serif;
          color: var(--ink);
          background: var(--sand);
          line-height: 1.6;
          font-size: 16px;
        }
        #ipace-root * { box-sizing: border-box; }
        #ipace-root h1, #ipace-root h2, #ipace-root h3 {
          font-family: 'Fraunces', serif; font-weight: 500; line-height: 1.15;
          color: var(--navy-ink); letter-spacing: -0.01em; margin: 0;
        }
        #ipace-root p { margin: 0; }
        #ipace-root img { max-width: 100%; display: block; width: 100%; height: 100%; object-fit: cover; }
        #ipace-root .wrap { max-width: 1120px; margin: 0 auto; padding: 0 32px; }
        #ipace-root button { font-family: 'IBM Plex Sans'; cursor: pointer; }

        #ipace-root .btn-primary { background: var(--navy); color: var(--sand); padding: 10px 20px; border-radius: var(--radius); font-size: 14px; font-weight: 500; white-space: nowrap; border: none; transition: background .18s ease, transform .12s ease; }
        #ipace-root .btn-primary:hover { background: var(--navy-ink); }
        #ipace-root .btn-primary:active { transform: scale(0.97); }
        #ipace-root .btn-outline { border: 1px solid var(--navy); padding: 10px 18px; border-radius: var(--radius); font-size: 14px; white-space: nowrap; background: none; color: var(--navy-ink); transition: background .18s ease, color .18s ease, transform .12s ease; }
        #ipace-root .btn-outline:hover { background: var(--navy); color: var(--sand); }
        #ipace-root .btn-outline:active { transform: scale(0.97); }
        #ipace-root .btn-ghost { padding: 10px 0; font-size: 15px; border-bottom: 1px solid var(--navy); background: none; border-top: none; border-left: none; border-right: none; color: var(--navy-ink); border-radius: 0; position: relative; transition: color .18s ease, border-color .18s ease; }
        #ipace-root .btn-ghost:hover { border-color: var(--gold); color: var(--gold); }

        #ipace-root header { position: sticky; top: 0; background: var(--sand); border-bottom: 1px solid var(--line); z-index: 50; transition: box-shadow .25s ease; }
        #ipace-root header.scrolled { box-shadow: 0 6px 18px -12px rgba(23,19,16,0.35); }
        #ipace-root .nav-row { display: flex; align-items: center; justify-content: space-between; padding: 18px 32px; max-width: 1120px; margin: 0 auto; }
        #ipace-root .logo { font-family: 'Fraunces', serif; font-size: 20px; font-weight: 600; color: var(--navy-ink); background: none; border: none; }
        #ipace-root .logo span { color: var(--gold); }
        #ipace-root nav ul { display: flex; gap: 26px; list-style: none; font-size: 14.5px; margin: 0; padding: 0; }
        #ipace-root nav ul li a, #ipace-root nav ul li button { color: var(--navy-ink); opacity: 0.75; padding-bottom: 4px; background: none; border: none; font-size: 14.5px; border-bottom: 2px solid transparent; transition: opacity .18s ease, border-color .18s ease; }
        #ipace-root nav ul li button:hover { opacity: 1; border-color: var(--gold-soft); }
        #ipace-root nav ul li button.active { opacity: 1; border-bottom: 2px solid var(--gold); }
        #ipace-root nav ul li.has-dropdown { position: relative; }
        #ipace-root .nav-dropdown {
          position: absolute; top: 100%; left: 50%; transform: translateX(-50%) translateY(4px);
          background: #fff; border: 1px solid var(--line); border-radius: var(--radius);
          box-shadow: 0 16px 32px -16px rgba(23,19,16,0.3); padding: 6px; min-width: 130px;
          display: flex; flex-direction: column; opacity: 0; visibility: hidden; pointer-events: none;
          transition: opacity .18s ease, transform .18s ease; z-index: 60;
        }
        #ipace-root nav ul li.has-dropdown:hover .nav-dropdown {
          opacity: 1; visibility: visible; pointer-events: auto; transform: translateX(-50%) translateY(0);
        }
        #ipace-root .nav-dropdown button { width: 100%; text-align: left; padding: 8px 12px; font-size: 13.5px; border-bottom: none; border-radius: 3px; opacity: 0.8; }
        #ipace-root .nav-dropdown button:hover { background: var(--sand-deep); opacity: 1; }
        #ipace-root .mobile-submenu { display: flex; flex-direction: column; padding-left: 16px; border-left: 2px solid var(--gold-soft); margin: 4px 0 8px; }
        #ipace-root .mobile-submenu button { font-size: 13.5px; padding: 6px 0; opacity: 0.7; }
        #ipace-root .badge-soon { font-size: 11px; background: var(--sand-deep); color: var(--navy); padding: 2px 7px; border-radius: 20px; margin-left: 6px; border: 1px solid var(--line); }
        #ipace-root .nav-cta { display: flex; align-items: center; gap: 24px; }
        #ipace-root .nav-desktop { display: flex; align-items: center; gap: 24px; }
        #ipace-root .menu-toggle { display: none; background: none; border: none; color: var(--navy-ink); transition: transform .18s ease; }
        #ipace-root .menu-toggle:active { transform: scale(0.9); }
        #ipace-root .mobile-menu { display: flex; flex-direction: column; gap: 14px; padding: 0 32px; border-top: 1px solid transparent; max-height: 0; opacity: 0; overflow: hidden; transition: max-height .32s ease, opacity .22s ease, padding .32s ease; }
        #ipace-root .mobile-menu.open { max-height: 420px; opacity: 1; padding: 16px 32px 22px; border-top: 1px solid var(--line); }
        #ipace-root .mobile-menu button { text-align: left; background: none; border: none; color: var(--navy-ink); font-size: 15px; opacity: 0.8; transition: opacity .18s ease, padding-left .18s ease; }
        #ipace-root .mobile-menu button:hover { opacity: 1; padding-left: 4px; }

        @media (max-width: 780px) {
          #ipace-root .nav-desktop { display: none; }
          #ipace-root .menu-toggle { display: block; }
          #ipace-root .hero-grid { grid-template-columns: 1fr !important; }
          #ipace-root .split { grid-template-columns: 1fr !important; }
          #ipace-root .service-detail-grid { grid-template-columns: 1fr !important; }
          #ipace-root .work-grid { grid-template-columns: 1fr !important; }
          #ipace-root .testimonial-grid { grid-template-columns: 1fr !important; }
          #ipace-root .contact-grid { grid-template-columns: 1fr !important; }
          #ipace-root .footer-grid { grid-template-columns: 1fr !important; }
          #ipace-root .mantra-list { flex-direction: column; align-items: center; gap: 10px !important; }
          #ipace-root .mantra-item { border-right: none !important; padding: 0 !important; }
        }

        #ipace-root .hero-grid { display: grid; grid-template-columns: 1.15fr 1fr; gap: 48px; align-items: center; }
        #ipace-root .media-photo { border-radius: var(--radius); overflow: hidden; border: 1px solid var(--line); }
        #ipace-root .media-photo img { transition: transform .5s ease; }
        #ipace-root .hero-photo-wrap { position: relative; }
        #ipace-root .hero-badge-card {
          position: absolute; left: -18px; bottom: -22px; background: #fff;
          border: 1px solid var(--line); border-radius: var(--card-radius);
          box-shadow: 0 16px 40px -18px rgba(23,19,16,0.4); padding: 16px 20px;
          display: flex; gap: 14px; align-items: center;
        }
        #ipace-root .hero-badge-card .pillars { display: flex; flex-direction: column; gap: 2px; }
        #ipace-root .hero-badge-card .pillars span { font-size: 12.5px; color: var(--ink); }
        #ipace-root .hero-badge-card .pillars strong { font-size: 11px; color: var(--sage); text-transform: uppercase; letter-spacing: 0.04em; }
        @media (max-width: 780px) { #ipace-root .hero-badge-card { position: static; margin-top: 16px; } }

        /* Signature badge motif — echoes the logo's circular gold seal */
        #ipace-root .badge-circle {
          width: 54px; height: 54px; border-radius: 50%; flex-shrink: 0;
          background: radial-gradient(circle at 32% 28%, var(--gold-soft), var(--gold) 72%);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 18px -8px rgba(201,162,39,0.55);
          transition: transform .25s ease, box-shadow .25s ease;
        }
        #ipace-root .badge-circle svg { color: var(--navy-ink); }
        #ipace-root .badge-circle.small { width: 40px; height: 40px; }
        #ipace-root .badge-circle .step-num-inner { font-family: 'Fraunces', serif; font-weight: 600; font-size: 19px; color: var(--navy-ink); }

        #ipace-root .card {
          background: #fff; border-radius: var(--card-radius); border: 1px solid var(--line);
          box-shadow: 0 4px 20px -10px rgba(23,19,16,0.16); padding: 28px;
          transition: box-shadow .25s ease, transform .25s ease, border-color .25s ease;
        }
        #ipace-root .card:hover {
          box-shadow: 0 18px 36px -16px rgba(23,19,16,0.28); transform: translateY(-5px);
          border-color: var(--gold-soft);
        }
        #ipace-root .card:hover .badge-circle { transform: scale(1.08) rotate(-4deg); }
        #ipace-root .card-clickable { cursor: pointer; }
        #ipace-root .card-grid { display: grid; gap: 22px; }
        #ipace-root .card-grid.cols-3 { grid-template-columns: repeat(3, 1fr); }
        #ipace-root .card-grid.cols-4 { grid-template-columns: repeat(4, 1fr); }
        #ipace-root .card-grid.cols-5 { grid-template-columns: repeat(5, 1fr); }
        #ipace-root .card-grid.cols-2 { grid-template-columns: repeat(2, 1fr); }
        @media (max-width: 980px) {
          #ipace-root .card-grid.cols-5 { grid-template-columns: repeat(2, 1fr); }
          #ipace-root .card-grid.cols-4 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 780px) {
          #ipace-root .card-grid.cols-3, #ipace-root .card-grid.cols-4,
          #ipace-root .card-grid.cols-5, #ipace-root .card-grid.cols-2 { grid-template-columns: 1fr; }
        }

        #ipace-root .mantra-list { display: flex; flex-wrap: wrap; list-style: none; justify-content: center; gap: 0; font-size: 14.5px; padding: 0; margin: 0; }
        #ipace-root .mantra-item { padding: 0 20px; border-right: 1px solid rgba(246,241,231,0.25); }
        #ipace-root .split { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }

        #ipace-root .service-detail { padding: 44px 0; border-bottom: 1px solid var(--line); }
        #ipace-root .service-detail:last-child { border-bottom: none; }
        #ipace-root .service-detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; }
        #ipace-root .service-detail .media-photo:hover img { transform: scale(1.045); }

        #ipace-root .value-card p { color: #4A463F; font-size: 14.5px; margin-top: 12px; }
        #ipace-root .value-card h3 { font-size: 18px; margin-top: 16px; }

        #ipace-root .work-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        #ipace-root .work-card { border: 1px solid var(--line); border-radius: var(--card-radius); padding: 14px; background: var(--sand); transition: border-color .2s ease, transform .2s ease, box-shadow .2s ease; }
        #ipace-root .work-card:hover { border-color: var(--gold); transform: translateY(-3px); box-shadow: 0 10px 24px -16px rgba(23,19,16,0.3); }
        #ipace-root .work-card:hover .media-photo img { transform: scale(1.06); }
        #ipace-root .work-card .media-photo { margin-bottom: 12px; border-radius: calc(var(--card-radius) - 6px); }

        #ipace-root .testimonial-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        #ipace-root .testimonial-card { border: 1px solid var(--line); border-radius: var(--card-radius); padding: 22px; background: var(--sand); transition: border-color .2s ease, transform .2s ease; }
        #ipace-root .testimonial-card:hover { border-color: var(--gold); transform: translateY(-3px); }
        #ipace-root .testimonial-head { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }
        #ipace-root .avatar-circle { width: 38px; height: 38px; border-radius: 50%; background: var(--sand-deep); border: 1px solid var(--gold-soft); color: var(--navy-ink); font-family: 'Fraunces', serif; font-size: 14px; font-weight: 600; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        #ipace-root .stars { display: flex; gap: 2px; margin-top: 2px; }
        #ipace-root .stars svg { fill: var(--gold); color: var(--gold); }
        #ipace-root .placeholder-note { font-size: 12.5px; color: var(--sage); font-style: italic; margin-top: 24px; }

        #ipace-root .stats-band { background: var(--navy-ink); padding: 64px 0; }
        #ipace-root .stats-grid-wrap { margin-top: 20px; }
        #ipace-root .stat-card {
          background: rgba(246,241,231,0.04); border: 1px solid rgba(246,241,231,0.14);
          border-radius: var(--card-radius); padding: 26px 22px; text-align: left;
          transition: border-color .2s ease, transform .2s ease, background .2s ease;
        }
        #ipace-root .stat-card:hover { border-color: var(--gold); background: rgba(246,241,231,0.07); transform: translateY(-4px); }
        #ipace-root .stat-card .badge-circle { margin-bottom: 18px; }
        #ipace-root .stat-value { font-family: 'Fraunces', serif; font-size: 38px; color: var(--gold-soft); font-weight: 500; line-height: 1; }
        #ipace-root .stat-label { font-size: 13px; color: rgba(246,241,231,0.65); margin-top: 10px; letter-spacing: 0.02em; }

        #ipace-root .process-card { text-align: left; }
        #ipace-root .process-card .badge-circle { margin-bottom: 18px; }
        #ipace-root .process-card h3 { font-size: 16px; }
        #ipace-root .process-card p { font-size: 13.5px; color: #4A463F; margin-top: 8px; }

        #ipace-root .academy-callout { display: grid; grid-template-columns: auto 1fr auto; gap: 22px; align-items: center; }
        @media (max-width: 780px) { #ipace-root .academy-callout { grid-template-columns: 1fr; text-align: left; } }

        #ipace-root .timeline-list { display: flex; flex-direction: column; gap: 0; }
        #ipace-root .timeline-row { display: grid; grid-template-columns: 90px 1fr; gap: 24px; padding: 22px 0; border-bottom: 1px solid var(--line); }
        #ipace-root .timeline-row:last-child { border-bottom: none; }
        #ipace-root .timeline-year { font-family: 'Fraunces', serif; font-size: 22px; color: var(--gold); font-weight: 600; }
        @media (max-width: 780px) { #ipace-root .timeline-row { grid-template-columns: 60px 1fr; gap: 16px; } }

        #ipace-root .team-card { text-align: left; }
        #ipace-root .team-photo { width: 100%; aspect-ratio: 1/1; border-radius: calc(var(--card-radius) - 6px); overflow: hidden; background: var(--sand-deep); margin-bottom: 16px; }
        #ipace-root .team-photo img { width: 100%; height: 100%; object-fit: cover; }
        #ipace-root .team-links { display: flex; gap: 12px; margin-top: 14px; }
        #ipace-root .team-links a { color: var(--gold); transition: color .18s ease, transform .18s ease; display: flex; }
        #ipace-root .team-links a:hover { color: var(--navy-ink); transform: translateY(-2px); }

        #ipace-root .accordion-item { border-bottom: 1px solid var(--line); }
        #ipace-root .accordion-item:last-child { border-bottom: none; }
        #ipace-root .accordion-trigger { width: 100%; text-align: left; background: none; border: none; padding: 18px 4px; display: flex; justify-content: space-between; align-items: center; gap: 16px; cursor: pointer; font-size: 15px; color: var(--navy-ink); font-family: 'IBM Plex Sans'; }
        #ipace-root .accordion-trigger .plus { font-size: 20px; color: var(--gold); transition: transform .25s ease; flex-shrink: 0; }
        #ipace-root .accordion-trigger.open .plus { transform: rotate(45deg); }
        #ipace-root .accordion-panel { max-height: 0; overflow: hidden; transition: max-height .3s ease, padding .3s ease; }
        #ipace-root .accordion-panel.open { max-height: 300px; padding-bottom: 18px; }
        #ipace-root .accordion-panel p { color: #4A463F; font-size: 14.5px; }

        #ipace-root .pricing-card { position: relative; }
        #ipace-root .pricing-card.popular { border-color: var(--gold); }
        #ipace-root .pricing-badge { position: absolute; top: -12px; right: 24px; background: var(--gold); color: var(--navy-ink); font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 20px; }
        #ipace-root .pricing-card .price { font-family: 'Fraunces', serif; font-size: 32px; color: var(--navy-ink); margin-top: 6px; }
        #ipace-root .price { font-family: 'Fraunces', serif; font-size: 32px; color: var(--navy-ink); }
        #ipace-root .mock-banner { background: var(--sand-deep); border: 1px dashed var(--gold); border-radius: var(--card-radius); padding: 14px 18px; font-size: 13px; color: var(--sage); font-style: italic; }
        #ipace-root .pricing-card ul { list-style: none; padding: 0; margin-top: 16px; }
        #ipace-root .pricing-card li { font-size: 13.5px; color: #4A463F; padding: 5px 0; }
        #ipace-root .pricing-card.dark { background: rgba(246,241,231,0.04); border-color: rgba(246,241,231,0.14); }
        #ipace-root .pricing-card.dark:hover { border-color: var(--gold); background: rgba(246,241,231,0.07); }
        #ipace-root .pricing-card.dark .price { color: var(--sand); }
        #ipace-root .pricing-card.dark li { color: rgba(246,241,231,0.7); }

        #ipace-root .stat-inline { text-align: center; padding: 18px; border: 1px solid var(--line); border-radius: var(--card-radius); }
        #ipace-root .stat-inline strong { display: block; font-family: 'Fraunces', serif; font-size: 28px; color: var(--gold); }
        #ipace-root .stat-inline span { font-size: 12.5px; color: var(--sage); }

        #ipace-root .tab-switch { display: inline-flex; border: 1px solid var(--line); border-radius: 999px; padding: 4px; gap: 4px; }
        #ipace-root .tab-switch button { background: none; border: none; padding: 8px 18px; border-radius: 999px; font-size: 13.5px; color: var(--ink); opacity: 0.65; transition: background .2s ease, opacity .2s ease, color .2s ease; }
        #ipace-root .tab-switch button.active { background: var(--navy); color: var(--sand); opacity: 1; }
        #ipace-root .tab-switch button:hover:not(.active) { opacity: 1; }

        #ipace-root .tag-pill { font-size: 11px; background: var(--sand-deep); color: var(--sage); padding: 3px 9px; border-radius: 20px; border: 1px solid var(--line); }

        #ipace-root .report-panel { margin-top: 14px; padding-top: 14px; border-top: 1px dashed var(--line); }

        #ipace-root .newsletter-band { background: var(--navy); }
        #ipace-root .newsletter-grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 40px; align-items: center; padding: 48px 0; }
        #ipace-root .newsletter-grid h2 { color: var(--sand); font-size: 24px; max-width: 20ch; }
        #ipace-root .newsletter-grid p { color: rgba(246,241,231,0.7); margin-top: 10px; max-width: 42ch; }
        #ipace-root .newsletter-form { display: flex; gap: 10px; }
        #ipace-root .newsletter-form input { flex: 1; padding: 11px 13px; border-radius: var(--radius); border: 1px solid rgba(246,241,231,0.25); background: rgba(246,241,231,0.06); color: var(--sand); font-family: 'IBM Plex Sans'; font-size: 14.5px; transition: border-color .18s ease; }
        #ipace-root .newsletter-form input::placeholder { color: rgba(246,241,231,0.45); }
        #ipace-root .newsletter-form input:focus { outline: none; border-color: var(--gold); }
        #ipace-root .newsletter-form button { background: var(--gold); color: var(--navy-ink); border: none; padding: 0 20px; border-radius: var(--radius); font-size: 14px; font-weight: 600; white-space: nowrap; transition: background .18s ease, transform .12s ease; }
        #ipace-root .newsletter-form button:hover { background: var(--gold-soft); }
        #ipace-root .newsletter-form button:active { transform: scale(0.96); }
        #ipace-root .newsletter-note { font-size: 12px; color: rgba(246,241,231,0.5); margin-top: 8px; }
        @media (max-width: 780px) {
          #ipace-root .newsletter-grid { grid-template-columns: 1fr; padding: 40px 0; }
          #ipace-root .newsletter-form { flex-direction: column; }
        }

        #ipace-root .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
        #ipace-root .form-label { display: block; font-size: 13px; color: var(--navy); margin-bottom: 5px; margin-top: 16px; }
        #ipace-root .text-input { width: 100%; padding: 10px 11px; border: 1px solid var(--line); border-radius: var(--radius); background: #fff; font-family: 'IBM Plex Sans'; font-size: 14.5px; color: var(--ink); transition: border-color .18s ease, box-shadow .18s ease; }
        #ipace-root .text-input:focus { outline: none; border-color: var(--gold); box-shadow: 0 0 0 3px rgba(201,162,39,0.18); }
        #ipace-root footer { background: var(--navy-ink); color: var(--sand); padding: 44px 0 24px; }
        #ipace-root .footer-grid { display: grid; grid-template-columns: 1.4fr 1fr 1fr; gap: 32px; }
        #ipace-root footer h4 { font-size: 13.5px; color: var(--gold-soft); margin-bottom: 12px; }
        #ipace-root footer p, #ipace-root footer a, #ipace-root footer button { font-size: 13.5px; color: rgba(246,241,231,0.75); background: none; border: none; text-align: left; padding: 0; transition: color .18s ease; }
        #ipace-root footer ul li button:hover { color: var(--gold-soft); }
        #ipace-root footer ul { list-style: none; display: flex; flex-direction: column; gap: 7px; padding: 0; margin: 0; }
        #ipace-root .footer-bottom { margin-top: 36px; padding-top: 18px; border-top: 1px solid rgba(246,241,231,0.15); font-size: 12.5px; color: rgba(246,241,231,0.5); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px; align-items: center; }
        #ipace-root .social-row { display: flex; gap: 14px; }
        #ipace-root .social-row a { display: flex; color: rgba(246,241,231,0.6); transition: color .18s ease, transform .18s ease; }
        #ipace-root .social-row a:hover { color: var(--gold-soft); transform: translateY(-2px); }

        #ipace-root .page-transition { animation: ipace-page-in .32s ease both; }
        @keyframes ipace-page-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          #ipace-root .page-transition { animation: none; }
          #ipace-root * { transition: none !important; }
        }
      `}</style>

      <header className={scrolled ? "scrolled" : ""}>
        <div className="nav-row">
          <button className="logo" onClick={() => go("home")}>
            iPace<span>.</span>
          </button>
          <nav className="nav-desktop">
            <ul>
              {NAV.filter((n) => !n.mobileOnly).map((n) => (
                <li key={n.id} className={n.children ? "has-dropdown" : ""}>
                  <button className={page === n.id ? "active" : ""} onClick={() => go(n.id)}>
                    {n.label}
                    {n.badge && <span className="badge-soon">{n.badge}</span>}
                  </button>
                  {n.children && (
                    <div className="nav-dropdown">
                      {n.children.map((c) => (
                        <button key={c.id} onClick={() => go(c.id)}>
                          {c.label}
                        </button>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav-cta">
            <div className="nav-desktop">
              <button className="btn-primary" onClick={() => go("consultation")}>
                Book Consultation
              </button>
            </div>
            <button className="menu-toggle" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {NAV.map((n) => (
            <div key={n.id}>
              <button onClick={() => go(n.id)}>
                {n.label}
                {n.badge && <span className="badge-soon">{n.badge}</span>}
              </button>
              {n.children && (
                <div className="mobile-submenu">
                  {n.children.map((c) => (
                    <button key={c.id} onClick={() => go(c.id)}>
                      {c.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button className="btn-primary" style={{ marginTop: 6, width: "fit-content" }} onClick={() => go("consultation")}>
            Book Consultation
          </button>
        </div>
      </header>

      <div key={page} className="page-transition">
        <Page go={go} />
      </div>

      <div className="newsletter-band">
        <div className="wrap newsletter-grid">
          <div>
            <h2>Get updates from the institute</h2>
            <p>
              New research, case studies, and word the moment the Academy
              reopens — no noise, just the practical stuff.
            </p>
          </div>
          <div>
            <form
              className="newsletter-form"
              onSubmit={(e) => {
                e.preventDefault();
                if (newsEmail) setNewsSent(true);
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={newsEmail}
                onChange={(e) => setNewsEmail(e.target.value)}
                aria-label="Email address"
              />
              <button type="submit">{newsSent ? "Subscribed" : "Subscribe"}</button>
            </form>
            <div className="newsletter-note">Updates only. Unsubscribe anytime.</div>
          </div>
        </div>
      </div>

      <footer>
        <div className="wrap footer-grid">
          <div>
            <div className="logo" style={{ color: "var(--sand)" }}>
              iPace<span style={{ color: "var(--gold-soft)" }}>.</span>
            </div>
            <p style={{ marginTop: 12, maxWidth: "32ch" }}>
              A data institute for Nigeria and Africa. Advisory, systems, and
              research support — for government, NGOs, private sector, and
              individuals.
            </p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><button onClick={() => go("about")}>About</button></li>
              <li><button onClick={() => go("services")}>Services</button></li>
              <li><button onClick={() => go("sectors")}>Who We Serve</button></li>
              <li><button onClick={() => go("academy")}>Academy</button></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Mail size={14} /> ipace2024@gmail.com
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <MessageCircle size={14} /> +234 811 198 6185
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <MapPin size={14} /> Nigeria
              </li>
            </ul>
          </div>
        </div>
        <div className="wrap footer-bottom">
          <span>© 2026 iPace Concepts. Building Africa's data institute.</span>
          <span className="social-row">
            <a href="https://www.linkedin.com/company/ipace24" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={14} />
            </a>
            <a href="https://x.com/ipace2024" target="_blank" rel="noreferrer" aria-label="Twitter/X">
              <Twitter size={14} />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
