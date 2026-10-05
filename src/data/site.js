// ============================================================
// ============================================================
//
//              MADE TO LAUNCH - WEBSITE SETTINGS
//
// ============================================================
// ============================================================
//
// START HERE
//
// This is the main file used to customise your website.
//
// In most cases, you ONLY need to edit this file and replace
// your project images.
//
// ------------------------------------------------------------
//
// DEMO CONTENT:
//
// This file has been filled with a FICTIONAL example company.
//
// Dragon Plumbing & Heating is NOT a real business.
//
// Replace all example information with real customer details
// before publishing a customer's website.
//
// ------------------------------------------------------------
//
// HOW TO EDIT:
//
// 1. Replace the text inside "quotation marks"
// 2. Keep all commas , brackets { } and [ ] in place
// 3. Save the file when you're finished
//
// DO NOT change words on the LEFT side of a colon.
//
// GOOD:
//
// businessName: "Smith Plumbing"
//
// DON'T DO:
//
// Smith Plumbing: "businessName"
//
// ------------------------------------------------------------
//
// PROJECT PHOTOS:
//
// public/images/projects/
//
// Replace:
//
// projects-1.png
// projects-2.png
// projects-3.png
//
// Keep those filenames the same.
//
// ============================================================


export const site = {


  // ==========================================================
  // 1. BUSINESS DETAILS
  // ==========================================================
  //
  // Add your main business information here.
  //

  businessName:
    "Dragon Plumbing & Heating",

  shortName:
    "Dragon Plumbing",

  eyebrow:
    "PLUMBING & HEATING SERVICES ACROSS SWANSEA",

  tagline:
    "Reliable plumbing. Quality heating. No hassle.",

  description:
    "Friendly, reliable plumbing and heating services for homes and small businesses across Swansea and the surrounding area. From everyday repairs to heating work and bathroom installations, we focus on tidy workmanship, clear communication and dependable service.",


  // The number customers will see.

  phoneDisplay:
    "01632 960123",

  // Your phone number without spaces works best here.
  // Example: 01792123456

  phoneLink:
    "01632960123",

  email:
    "hello@dragonplumbing.example",

  location:
    "Swansea & South Wales",


  // ==========================================================
  // 2. WEBSITE COLOURS
  // ==========================================================
  //
  // Change these two codes to change the website colour.
  //
  // Example colours:
  //
  // Green:
  // #0E9952
  //
  // Blue:
  // #2563EB
  //
  // Navy:
  // #1E3A5F
  //
  // Red:
  // #DC2626
  //
  // Purple:
  // #7C3AED
  //
  // Keep the # symbol.
  //

  primaryColour:
    "#0E9952",

  primaryHover:
    "#0B7D43",


  // ==========================================================
  // 3. TRUST POINTS
  // ==========================================================
  //
  // These appear underneath the main buttons near the top.
  //
  // Examples:
  //
  // "Fully Insured"
  // "Free Quotations"
  // "Local & Reliable"
  //

  trustPoints: [
    "Free Quotations",
    "Local & Reliable",
    "Friendly Service",
  ],


  // ==========================================================
  // 4. SERVICES SECTION
  // ==========================================================

  servicesSection: {

    eyebrow:
      "OUR SERVICES",

    heading:
      "Plumbing & heating services you can rely on.",

    description:
      "From small plumbing repairs to heating work and complete bathroom installations, we provide practical, professional help for homes across Swansea and nearby areas.",

  },


  // ==========================================================
  // 5. SERVICES
  // ==========================================================
  //
  // Add your three main services below.
  //

  services: [

    {
      number:
        "01",

      title:
        "Plumbing Repairs",

      description:
        "Leaks, taps, toilets, pipework and everyday plumbing problems repaired quickly and professionally.",
    },

    {
      number:
        "02",

      title:
        "Boiler & Heating",

      description:
        "Heating repairs, radiator work and boiler-related services to help keep your home warm and running efficiently.",
    },

    {
      number:
        "03",

      title:
        "Bathroom Installations",

      description:
        "Complete bathroom plumbing and installation support, from replacing fixtures to full room upgrades.",
    },

  ],


  // ==========================================================
  // 6. ABOUT YOUR BUSINESS
  // ==========================================================

  about: {

    heading:
      "Local service, straightforward advice and quality workmanship.",

    paragraphOne:
      "Dragon Plumbing & Heating is a fictional demonstration business created to show how a completed Made To Launch website can look. The business is presented as a local plumbing and heating company serving Swansea and surrounding communities.",

    paragraphTwo:
      "The example brand is built around clear communication, dependable appointments and tidy workmanship. Every section on this demo can be replaced with a real customer's business information, services, projects, reviews and service areas.",

  },


  // ==========================================================
  // 7. BUSINESS STATS
  // ==========================================================
  //
  // Examples:
  //
  // value: "10+"
  // label: "Years Experience"
  //
  // Only use information that is genuinely true.
  //

  stats: [

    {
      value:
        "10+",

      label:
        "Years Experience",
    },

    {
      value:
        "8",

      label:
        "Areas Covered",
    },

    {
      value:
        "3",

      label:
        "Core Services",
    },

    {
      value:
        "100%",

      label:
        "Customer Focus",
    },

  ],


  // ==========================================================
  // 8. PROJECTS / PREVIOUS WORK
  // ==========================================================
  //
  // Change the project information below.
  //
  // PROJECT PHOTOS:
  //
  // Go to:
  //
  // public/images/projects/
  //
  // Replace the three images while keeping these filenames:
  //
  // projects-1.png
  // projects-2.png
  // projects-3.png
  //

  projectsSection: {

    eyebrow:
      "OUR WORK",

    heading:
      "Recent projects completed across Swansea & South Wales.",

    buttonText:
      "Start Your Project →",

  },


  projects: [

    {
      category:
        "Bathroom Installation",

      title:
        "Modern Bathroom Plumbing Upgrade",

      location:
        "Swansea",

      image:
        "/images/projects/projects-1.png",

      // Leave this one as true.
      // This makes the first project larger.

      featured:
        true,
    },

    {
      category:
        "Heating Upgrade",

      title:
        "Radiator & Heating System Refresh",

      location:
        "Llanelli",

      image:
        "/images/projects/projects-2.png",

      featured:
        false,
    },

    {
      category:
        "Plumbing Repair",

      title:
        "Kitchen Pipework & Tap Replacement",

      location:
        "Neath",

      image:
        "/images/projects/projects-3.png",

      featured:
        false,
    },

  ],


  // ==========================================================
  // 9. CUSTOMER REVIEWS
  // ==========================================================
  //
  // Only use genuine customer reviews on a real website.
  //
  // The reviews below are FICTIONAL EXAMPLES for this demo.
  //

  reviewsSection: {

    eyebrow:
      "CUSTOMER REVIEWS",

    heading:
      "What our customers have to say.",

  },


  reviews: [

    {
      stars:
        "★★★★★",

      text:
        "Example review: Really pleased with the service. Friendly, tidy and everything was explained clearly from start to finish.",

      name:
        "Example Customer 1",

      location:
        "Swansea",
    },

    {
      stars:
        "★★★★★",

      text:
        "Example review: Quick response, straightforward communication and the job was completed exactly as discussed.",

      name:
        "Example Customer 2",

      location:
        "Llanelli",
    },

    {
      stars:
        "★★★★★",

      text:
        "Example review: Professional throughout and left everything clean and tidy. Would happily use the service again.",

      name:
        "Example Customer 3",

      location:
        "Neath",
    },

  ],


  // ==========================================================
  // 10. AREAS YOU COVER
  // ==========================================================

  areasSection: {

    eyebrow:
      "AREAS WE COVER",

    heading:
      "Serving customers across Swansea & South Wales.",

    description:
      "Based in Swansea and covering nearby towns and communities across South West Wales.",

  },


  // Change the areas below.
  //
  // You can add or remove areas if needed.

  areas: [
    "Swansea",
    "Llanelli",
    "Neath",
    "Port Talbot",
    "Gorseinon",
    "Pontarddulais",
    "Ammanford",
    "Carmarthen",
  ],


  // ==========================================================
  // 11. FREQUENTLY ASKED QUESTIONS
  // ==========================================================
  //
  // Change each question and answer below.
  //
  // You can also copy an entire question block to add more.
  //

  faqSection: {

    eyebrow:
      "FREQUENTLY ASKED QUESTIONS",

    heading:
      "Questions we often get asked.",

    description:
      "Find answers to some of the most common questions about our services.",

  },


  faqs: [

    {
      question:
        "Do you provide free quotations?",

      answer:
        "Yes. Get in touch with a few details about the work and we can arrange a free, no-obligation quotation.",
    },

    {
      question:
        "Which areas do you cover?",

      answer:
        "The example business covers Swansea, Llanelli, Neath, Port Talbot, Gorseinon, Pontarddulais, Ammanford and Carmarthen.",
    },

    {
      question:
        "Are you fully insured?",

      answer:
        "This is a fictional demonstration company, so any real business should replace this answer with its own genuine insurance information.",
    },

    {
      question:
        "How quickly can you attend?",

      answer:
        "Response times depend on availability and the type of job. Contact us with the details and we'll let you know the earliest appointment available.",
    },

    {
      question:
        "What types of work do you carry out?",

      answer:
        "We provide general plumbing repairs, boiler and heating work, radiator services and bathroom plumbing and installation support.",
    },

  ],


  // ==========================================================
  // 12. CONTACT / QUOTE SECTION
  // ==========================================================
  //
  // Your phone number, email and location are automatically
  // taken from BUSINESS DETAILS at the top of this file.
  //

  contactSection: {

    eyebrow:
      "GET A FREE QUOTE",

    heading:
      "Tell us what you need help with.",

    description:
      "Send us a few details about the job and we'll get back to you to discuss what you need and arrange a quotation.",

    buttonText:
      "Request My Free Quote →",

    formNote:
      "No obligation. We'll contact you to discuss your enquiry.",

  },


  // ==========================================================
  // 13. FOOTER
  // ==========================================================
  //
  // The business name, phone number, email and service areas
  // are automatically taken from the information above.
  //
  // Change the short description below if needed.
  //

  footer: {

    description:
      "Friendly, reliable plumbing and heating services across Swansea and South Wales.",

    privacyText:
      "Privacy Policy",

    termsText:
      "Terms & Conditions",

  },


  // ==========================================================
  // 14. GOOGLE / BROWSER SETTINGS
  // ==========================================================
  //
  // This controls how your website appears in browser tabs
  // and may also be used by search engines such as Google.
  //
  // TITLE:
  //
  // Keep this fairly short.
  //
  // Example:
  //
  // "Smith Plumbing | Plumber in Swansea"
  //
  // DESCRIPTION:
  //
  // Write a short description explaining what your business
  // does and where you operate.
  //
  // Example:
  //
  // "Reliable plumbing and heating services across Swansea.
  // Free quotations available."
  //

  seo: {

    title:
      "Dragon Plumbing & Heating | Plumber in Swansea",

    description:
      "Reliable plumbing, heating and bathroom services across Swansea and South Wales. Free quotations available.",

  },


  // ==========================================================
  // 15. WEBSITE ICON & SOCIAL PREVIEW
  // ==========================================================
  //
  // These images are stored inside the PUBLIC folder.
  //
  // ----------------------------------------------------------
  // FAVICON
  // ----------------------------------------------------------
  //
  // This is the small icon shown in the browser tab.
  //
  // Replace:
  //
  // public/favicon.png
  //
  // with your own square logo image.
  //
  // Recommended size:
  //
  // 512 x 512 pixels
  //
  // IMPORTANT:
  //
  // Keep the filename exactly:
  //
  // favicon.png
  //
  //
  // ----------------------------------------------------------
  // SOCIAL PREVIEW IMAGE
  // ----------------------------------------------------------
  //
  // This is the image that may appear when somebody shares
  // your website on services such as WhatsApp, Facebook,
  // LinkedIn or other social platforms.
  //
  // Replace:
  //
  // public/social-preview.png
  //
  // Recommended size:
  //
  // 1200 x 630 pixels
  //
  // IMPORTANT:
  //
  // Keep the filename exactly:
  //
  // social-preview.png
  //

  social: {

    
      favicon: "/favicon.png?v=2",

    previewImage:
      "/social-preview.png",

  },


  // ==========================================================
  // SOCIAL MEDIA LINKS
  // ==========================================================
  //
  // Paste your business social media links below.
  //
  // IMPORTANT:
  //
  // Use the FULL website address.
  //
  // Example:
  //
  // "https://www.facebook.com/yourbusiness"
  //
  // If you do not use a social platform,
  // leave the quotation marks empty:
  //
  // instagram: "",
  //

  socialLinks: {

    facebook:
      "",

    instagram:
      "",

    linkedin:
      "",

  },


  // ==========================================================
  // 16. QUOTE FORM
  // ==========================================================
  //
  // This connects your website quote form to Formspree.
  //
  // HOW TO SET IT UP:
  //
  // 1. Create an account at Formspree
  //
  // 2. Create a new form
  //
  // 3. Copy your Formspree endpoint.
  //
  // It will look similar to:
  //
  // https://formspree.io/f/abcdefgh
  //
  // 4. Paste the FULL link below.
  //
  // IMPORTANT:
  //
  // This is NOT your email address.
  //

  quoteForm: {

    endpoint:
      "PASTE YOUR FORMSPREE ENDPOINT HERE",

  },


};