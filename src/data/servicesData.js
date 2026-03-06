export const services = [
  {
    id: 1,
    category: "skincare",
    title: "HydraSilk Facial",
    image: "/facial.png",
    description:
      "A deeply nourishing treatment designed to replenish moisture, restore the skin barrier, and leave the skin soft, plump, and luminous.",
    bestFor: ["Dry skin", "Dehydrated skin", "Dull or tight skin"],
    duration: "60 min",
    price: "$90",
  },

  {
    id: 2,
    category: "skincare",
    title: "Pure Balance Facial",
    image: "/bride.jpg",
    description:
      "A refining facial focused on regulating oil production, clearing congestion, and rebalancing the skin without over-stripping.",
    bestFor: ["Oily skin", "Combination", "Congested skin types"],
    duration: "60 min",
    price: "$90",
  },

  {
    id: 3,
    category: "skincare",
    title: "The Signature SORA Facial",
    image: "/dresser.jpg",
    description:
      "A luxury customized treatment tailored to your skin’s unique needs, combining hydration, correction, and glow-enhancing techniques.",
    bestFor: ["All skin types", "First-time clients", "Skin maintenance"],
    duration: "60 min",
    price: "$90",
  },

  {
    id: 4,
    category: "skincare",
    title: "Acne Restoration Facial",
    image: "/facial2.jpg",
    description:
      "A corrective treatment designed for ongoing acne management, targeting active breakouts, inflammation and post-acne marks.",
    duration: "60 min",
    price: "$90",
    badge: {
      text: "Not available for first-time clients",
      icon: "🚫",
    },
    restrictions: [
      "This facial is available to returning clients only",
      "New clients must first book a Custom Facial before this treatment can be scheduled",
    ],
  },

  // ✨ Example Waxing Services
  {
    id: 5,
    category: "waxing",
    title: "Full Face Wax",
    image: "/waxp.jpg",
    description:
      "A gentle waxing service to remove facial hair while maintaining skin comfort and smoothness.",
    duration: "30 min",
    price: "$45",
  },

  {
    id: 6,
    category: "waxing",
    title: "Eyebrow Shaping",
    image: "/eyebrowse.jpg",
    description:
      "Precision eyebrow waxing to enhance your natural shape and frame your features.",
    duration: "20 min",
    price: "$25",
  },
]