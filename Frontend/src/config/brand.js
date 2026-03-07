export const brand = {
  name: "SŌRA",
  subName: "AESTHETICS",

  logo: {
    type: "image",
    value: "/soralogo.svg",
  },

  footer: {
    slogan: "Made with ❤️ for your skin",
    copyright: "© 2026 SŌRA Aesthetics. All rights reserved.",
  },

  contact: {
    whatsapp: "201000000000",
  },

  data: {
    visit: {
      mapImage: "/map.png",
      contacts: [
        { id: "reservation", icon: "/calendar-clock.svg" },
        { id: "email", icon: "/email.svg" },
        { id: "instagram", icon: "/insta.svg" },
        { id: "whatsapp", icon: "/whatsapp.svg" },
      ],
    },

    about: {
      image: "/about.jpg",
    },

    addons: {
      backgroundImage: "/addons-bg.jpg",
      items: [{ id: 1 }, { id: 2 }],
    },

    heroContent: {
      title: "EMBRACE YOUR\nNATURAL BEAUTY",
      description:
        "Experience luxury beauty treatments in a serene, feminine sanctuary — hijab-friendly, all-female staffed, and completely camera-free.",
      buttonText: "Book your Facial",
    },

    heroSlides: [
      { main: "/hijab2.jpg", secondary: "/hijab1.jpg" },
      { main: "/pic2.2.jpg", secondary: "/facial2.jpg" },
      { main: "/pic3.3.jpg", secondary: "/eyebrowse.jpg" },
      { main: "/pic4.4.jpg", secondary: "/bride.jpg" },
      { main: "/pic5.5.jpg", secondary: "/nails.jpg" },
    ],

    navigation: {
      links: [
        { id: 1, label: { en: "HOME", ar: "الرئيسية" }, href: "/" },
        { id: 2, label: { en: "SERVICES", ar: "الخدمات" }, href: "#services" },
        { id: 3, label: { en: "POLICIES", ar: "السياسات" }, href: "/policies" },
      ],
      bookButton: {
        label: { en: "Book Now", ar: "احجزي الآن" },
      },
    },

    policies: {
      title: {
        en: "Cancellation & Late Policy",
        ar: "سياسة الإلغاء والتأخير",
      },
      points: {
        en: [
          "A 10-minute grace period is allowed",
          "After 10 minutes, your appointment is considered canceled",
          "Cancellations must be made at least 24 hours in advance",
          "No Show/Failure to do so may result in restricted or prohibited future bookings",
        ],
        ar: [
          "يُسمح بفترة سماح مدتها ١٠ دقائق.",
          "بعد مرور ١٠ دقائق، يُعتبر موعدك ملغيًا.",
          "يجب الإلغاء قبل ٢٤ ساعة على الأقل.",
          "قد يؤدي عدم الحضور أو عدم الالتزام بسياسة الإلغاء إلى تقييد أو منع الحجوزات المستقبلية.",
        ],
      },
      note: {
        en: "Thank you for respecting my time",
        ar: "شكرًا لتقديركم وقتي.",
      },
    },

    reviews: {
      backgroundImage: "/review.jpg",
      items: [{ id: 1 }, { id: 2 }, { id: 3 }],
    },

    services: [
      { id: 1, category: "skincare", image: "/facial.png" },
      { id: 2, category: "skincare", image: "/bride.jpg" },
      { id: 3, category: "skincare", image: "/dresser.jpg" },
      { id: 4, category: "skincare", image: "/facial2.jpg" },
      { id: 5, category: "waxing", image: "/waxp.jpg" },
      { id: 6, category: "waxing", image: "/eyebrowse.jpg" },
    ],

    trust: [
      { id: 5, icon: "/care-icon.svg" },
      { id: 2, icon: "/nocctv-icon.svg" },
      { id: 3, icon: "/women-icon.svg" },
      { id: 4, icon: "/secure-icon.svg" },
      { id: 1, icon: "/hijab-icon.svg" },
    ],

    whyChoose: {
      image: {
        src: "/why-full.jpg",
        sliceHeight: 200,
      },
      features: [
        { id: "hijabFriendly", icon: "/heart-icon.svg" },
        { id: "customized", icon: "/heart-icon.svg" },
        { id: "medicalGrade", icon: "/heart-icon.svg" },
        { id: "privateStudio", icon: "/heart-icon.svg" },
        { id: "resultsDriven", icon: "/heart-icon.svg" },
      ],
    },
  },

  theme: {
    colors: {
      primary: "#E35C6A",
      primarySoft: "#F3D9DB",
      navbarBg: "#F5ECEB",
      background: "#FFFFFF",
      textMain: "#4B4B4B",
      textDark: "#111111",

      footerBg: "#F5ECEB",
      footerTitle: "#E35C6A",
      footerText: "#7A6F6D",
      footerCopyright: "#5A4B48",
    },
  },
}
