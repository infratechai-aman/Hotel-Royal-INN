// Mock data for Royal Inn

export const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1920&q=85",
    title: "Luxury Rooms & Suites",
    subtitle: "Experience Royal Comfort"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85",
    title: "Fine Dining & Bar",
    subtitle: "Exquisite Culinary Experience"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=85",
    title: "Premium Lounge",
    subtitle: "Unwind in Elegance"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=85",
    title: "Highway Convenience",
    subtitle: "Your Perfect Stop on Pune-Nashik Highway"
  }
];

export const amenities = [
  { icon: "Clock", title: "24/7 Front Desk", description: "Round-the-clock concierge service" },
  { icon: "Car", title: "Free Parking", description: "Secure, ample parking space" },
  { icon: "MapPin", title: "Highway Access", description: "Prime highway connectivity" },
  { icon: "Shield", title: "CCTV & Security", description: "24/7 surveillance & safety" },
  { icon: "Users", title: "Family Friendly", description: "Comfortable for all ages" },
  { icon: "Wine", title: "Bar & Restaurant", description: "Fine dining & premium spirits" },
  { icon: "Droplet", title: "Hot Water 24/7", description: "All-day comfort guaranteed" },
  { icon: "Wifi", title: "High-Speed WiFi", description: "Stay seamlessly connected" },
  { icon: "UtensilsCrossed", title: "Room Service", description: "At your convenience" }
];

export const rooms = [
  {
    id: 1,
    category: "Standard Room",
    price: "₹1,500 - ₹2,000",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    features: ["Queen Size Bed", "AC", "Hot Water", "LED TV", "WiFi", "Attached Bathroom"],
    description: "Comfortable rooms perfect for solo travelers and couples"
  },
  {
    id: 2,
    category: "Deluxe Room",
    price: "₹2,500 - ₹3,500",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    features: ["King Size Bed", "Premium AC", "Mini Bar", "Smart TV", "Work Desk", "Premium Toiletries"],
    description: "Spacious rooms with premium amenities for discerning guests"
  },
  {
    id: 3,
    category: "Family Suite",
    price: "₹4,000 - ₹5,500",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
    features: ["2 Bedrooms", "Living Area", "Kitchenette", "2 Bathrooms", "Dining Space", "Balcony"],
    description: "Perfect for families seeking space and luxury"
  }
];

export const foodMenu = [
  {
    category: "Starters",
    items: [
      { name: "Chicken Tikka", price: "₹280", veg: false },
      { name: "Paneer Tikka", price: "₹240", veg: true },
      { name: "Tandoori Mushroom", price: "₹220", veg: true },
      { name: "Mutton Seekh Kebab", price: "₹320", veg: false }
    ]
  },
  {
    category: "Main Course",
    items: [
      { name: "Butter Chicken", price: "₹380", veg: false },
      { name: "Paneer Butter Masala", price: "₹280", veg: true },
      { name: "Dal Makhani", price: "₹240", veg: true },
      { name: "Mutton Rogan Josh", price: "₹450", veg: false },
      { name: "Veg Biryani", price: "₹280", veg: true },
      { name: "Chicken Biryani", price: "₹350", veg: false }
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Gulab Jamun", price: "₹120", veg: true },
      { name: "Chocolate Brownie", price: "₹180", veg: true },
      { name: "Ice Cream (3 Scoops)", price: "₹150", veg: true }
    ]
  }
];

export const drinksMenu = [
  {
    category: "Cocktails",
    items: [
      { name: "Royal Blue Martini", price: "₹450" },
      { name: "Golden Sunset", price: "₹420" },
      { name: "Classic Mojito", price: "₹380" },
      { name: "Long Island Iced Tea", price: "₹480" }
    ]
  },
  {
    category: "Premium Spirits",
    items: [
      { name: "Whisky (60ml)", price: "₹350 - ₹800" },
      { name: "Vodka (60ml)", price: "₹300 - ₹600" },
      { name: "Rum (60ml)", price: "₹280 - ₹550" },
      { name: "Gin (60ml)", price: "₹320 - ₹650" }
    ]
  },
  {
    category: "Mocktails & Beverages",
    items: [
      { name: "Virgin Mojito", price: "₹180" },
      { name: "Fresh Lime Soda", price: "₹120" },
      { name: "Iced Coffee", price: "₹150" },
      { name: "Fresh Juice", price: "₹140" }
    ]
  }
];

export const reviews = [
  {
    id: 1,
    name: "Rajesh Sharma",
    rating: 5,
    comment: "Excellent stay! Clean rooms, great food, and very helpful staff. Perfect stopover on Pune-Nashik highway.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Priya Desai",
    rating: 5,
    comment: "Loved the ambience of the restobar. Food was delicious and service was prompt. Highly recommended!",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Amit Patel",
    rating: 4,
    comment: "Good value for money. Rooms are spacious and clean. Bar has good collection. Will visit again.",
    date: "3 weeks ago"
  }
];

export const offers = [
  {
    id: 1,
    title: "Room + Dinner Combo",
    description: "Book any room and get 20% off on dinner at our restobar",
    discount: "20% OFF",
    validTill: "31st Dec 2025"
  },
  {
    id: 2,
    title: "Happy Hours",
    description: "Buy 1 Get 1 on selected cocktails and premium drinks",
    discount: "BOGO",
    validTill: "Daily 5 PM - 7 PM"
  },
  {
    id: 3,
    title: "Weekend DJ Nights",
    description: "Live DJ every Friday & Saturday. Free entry for hotel guests",
    discount: "FREE",
    validTill: "Every Weekend"
  }
];

export const galleryImages = [
  { id: 1, category: "rooms", url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80", title: "Deluxe Room" },
  { id: 2, category: "rooms", url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80", title: "Premium Suite" },
  { id: 3, category: "food", url: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80", title: "Butter Chicken" },
  { id: 4, category: "food", url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80", title: "Gourmet Pizza" },
  { id: 5, category: "bar", url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80", title: "Premium Bar" },
  { id: 6, category: "bar", url: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80", title: "Cocktails" },
  { id: 7, category: "property", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80", title: "Hotel Exterior" },
  { id: 8, category: "property", url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80", title: "Reception Area" }
];

export const events = [
  {
    id: 1,
    title: "Live Band Fridays",
    description: "Enjoy live music every Friday evening from 8 PM onwards",
    date: "Every Friday",
    time: "8:00 PM - 11:00 PM",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80"
  },
  {
    id: 2,
    title: "DJ Nights",
    description: "Dance to the best tracks with our resident DJ",
    date: "Saturday & Sunday",
    time: "9:00 PM - 1:00 AM",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80"
  },
  {
    id: 3,
    title: "Festive Buffets",
    description: "Special buffet spreads on festivals and special occasions",
    date: "On Special Occasions",
    time: "12:00 PM - 11:00 PM",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80"
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "New Year Celebration 2025 — Book Your Table Now!",
    excerpt: "Join us for an unforgettable New Year's Eve with live music, DJ, and special buffet.",
    date: "15th Dec 2024",
    image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&q=80",
    category: "Events"
  },
  {
    id: 2,
    title: "Highway Travel Tips: Making Your Journey Comfortable",
    excerpt: "Essential tips for travelers on the Pune-Nashik highway. Plan your stops, stay safe, and enjoy the journey.",
    date: "10th Dec 2024",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
    category: "Travel Tips"
  },
  {
    id: 3,
    title: "Introducing Our New Menu — A Culinary Journey",
    excerpt: "We've revamped our menu with exciting new dishes. Come taste the difference!",
    date: "5th Dec 2024",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    category: "Announcements"
  }
];

export const faqs = [
  {
    question: "What are the check-in and check-out timings?",
    answer: "Check-in: 12:00 PM | Check-out: 11:00 AM. Early check-in and late check-out subject to availability."
  },
  {
    question: "Do you provide parking facilities?",
    answer: "Yes, we offer complimentary parking for all our guests with 24/7 security."
  },
  {
    question: "Is food available 24/7?",
    answer: "Our restaurant is open from 7:00 AM to 11:00 PM. Room service is available 24/7 with limited menu."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Free cancellation up to 24 hours before check-in. Cancellations within 24 hours will be charged 50% of the booking amount."
  },
  {
    question: "Do you allow pets?",
    answer: "Unfortunately, we do not allow pets except for service animals."
  },
  {
    question: "Is alcohol served at the property?",
    answer: "Yes, we have a fully licensed bar with a wide selection of premium spirits, wines, and beers."
  }
];

export const contactInfo = {
  phone: "+91 99225 51414",
  restaurantPhone: "+91 99225 51414",
  whatsapp: "+91 99225 51414",
  email: "info@royalinn.com",
  address: "Pune-Nashik Highway, Opposite Highway Industries, Kurali, Maharashtra",
  hours: "24/7 Reception | Restaurant: 7 AM - 11 PM | Bar: 11 AM - 1 AM",
  coordinates: { lat: 19.0760, lng: 72.8777 }
};

export const nearbyPlaces = [
  { name: "Highway Industries MIDC", distance: "0.5 km" },
  { name: "HP Petrol Pump", distance: "1 km" },
  { name: "Kurali Market", distance: "2 km" },
  { name: "Nashik City Center", distance: "35 km" },
  { name: "Pune City Center", distance: "85 km" }
];
