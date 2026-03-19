import type { RoomType } from "@/services/pricing";
import mountainView1 from "@/assets/suite/IMG_4065.webp";
import mountainView2 from "@/assets/suite/IMG_2630.webp";
import mountainView3 from "@/assets/suite/IMG_3599.webp";
import spacious1 from "@/assets/suite/img123.webp";
import spacious2 from "@/assets/two_bed_room_apartment/IMG_1597.webp";
import spacious3 from "@/assets/two_bed_room_apartment/IMG_1603.webp";
import spacious4 from "@/assets/two_bed_room_apartment/IMG_2901.webp";
import family1 from "@/assets/room-family.webp";
import family2 from "@/assets/suite/img4.webp";
import familyRoom2_1 from "@/assets/room-deluxe.webp";
import familyRoom2_2 from "@/assets/suite/13072eba-63ad-4695-9f00-11993563b5b2.jpg";
import familyRoom2_3 from "@/assets/suite/IMG_2902.jpg";

export interface RoomConfig {
  id: number;
  name: string;
  slug: string;
  roomType: RoomType;
  shortDescription: string;
  longDescription: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  images: string[];
  capacity: string;
  size: string;
  view: string;
  bedConfig: string;
  features: string[];
  amenities: string[];
  nearbyAttractions: Array<{ name: string; distance: string; description: string }>;
  faqs: Array<{ question: string; answer: string }>;
}

export const roomsConfig: RoomConfig[] = [
  {
    id: 1,
    name: "Suite with Mountain View",
    slug: "suite-with-mountain-view",
    roomType: "suite",
    shortDescription: "1 Bedroom Suite with Attached Washroom, Outside Sitting, Terrace and Garden Access. Stepless access - ideal for elderly guests.",
    longDescription: `Experience the epitome of mountain luxury in our east-facing Suite with breathtaking Himalayan sunrise views. This thoughtfully designed 280 sq ft suite offers a perfect blend of comfort and natural beauty, making it an ideal choice for couples seeking a romantic getaway or solo travelers looking for tranquility.

The suite features stepless access throughout, making it elderly-friendly and easily accessible. Wake up to stunning sunrise views over the Himalayan range from your private outside sitting area. The suite includes a comfortable king-sized bed, modern attached bathroom with 24/7 hot water supply, and direct access to our terrace and botanical garden.

What sets this suite apart is its east-facing orientation, ensuring you catch the first rays of sunrise painting the snow-capped peaks in golden hues. The private sitting area outside is perfect for morning coffee, evening reading, or simply soaking in the pristine mountain air.

Our suite comes equipped with modern amenities including high-speed 5G WiFi, electric kettle with complimentary tea and coffee supplies, and daily bottled water. The room service ensures you have everything you need without leaving the comfort of your suite.`,
    metaTitle: "Suite with East-Facing Mountain View | Romantic Stay Mukteshwar | Ecoescape",
    metaDescription: "Wake up to magical Himalayan sunrises. Book our 280 sq ft east-facing Suite in Mukteshwar. Features king bed, private sitting area, and stepless access. Ideal for couples & solo travelers. Book direct for best rates.",
    keywords: "suite with mountain view Mukteshwar, sunrise view room Mukteshwar, Himalayan view suite, couple suite Mukteshwar, king bed room Mukteshwar, luxury suite Mukteshwar, private sitting area room, elderly friendly accommodation",
    images: [mountainView1, mountainView2, mountainView3],
    capacity: "2 Guests",
    size: "280 sq ft",
    view: "Sunrise View",
    bedConfig: "King Bed",
    features: [
      "Stepless access - elderly friendly",
      "East-facing sunrise views",
      "Private bathroom with 24/7 hot water",
      "Outside sitting area",
      "Electric kettle with tea/coffee",
      "High-speed WiFi",
      "Terrace and garden access",
      "Private entrance",
    ],
    amenities: [
      "King-sized bed with premium linens",
      "Private bathroom with modern fixtures",
      "24/7 hot water supply",
      "Electric kettle with complimentary tea/coffee",
      "1L bottled water daily",
      "High-speed 5G WiFi",
      "Room service available",
      "Private entrance for enhanced privacy",
      "Heating available on request",
      "Daily housekeeping",
    ],
    nearbyAttractions: [
      {
        name: "Mukteshwar Mahadev Temple",
        distance: "7 km",
        description: "Ancient Shiva temple with stunning Himalayan views"
      },
      {
        name: "Chauli Ki Jali",
        distance: "8 km",
        description: "Scenic cliff edge perfect for rock climbing and rappelling"
      },
      {
        name: "Mukteshwar Inspection Bungalow",
        distance: "5 km",
        description: "Heritage British-era architecture with panoramic views"
      },
    ],
    faqs: [
      {
        question: "What time is the sunrise visible from the suite?",
        answer: "The best sunrise views are visible between 5:30 AM to 6:30 AM, depending on the season. The east-facing orientation ensures you get unobstructed views of the sun rising over the Himalayan range."
      },
      {
        question: "Is the suite suitable for elderly guests?",
        answer: "Yes! Our suite features stepless access throughout, making it elderly-friendly. There are no stairs or steps to navigate within the suite, and the private entrance is also easily accessible."
      },
      {
        question: "What is included in the room amenities?",
        answer: "The suite includes a king-sized bed, private bathroom with 24/7 hot water, electric kettle with complimentary tea and coffee, daily bottled water, high-speed WiFi, and room service. Heating is available on request."
      },
      {
        question: "Can I see the Himalayan peaks from the room?",
        answer: "Yes! The suite offers stunning views of the snow-capped Himalayan range. On clear days, you can see multiple peaks including Nanda Devi, Trishul, and Panchachuli. The full snow-capped range viewpoint is just 50-60m walk from the property."
      },
    ],
  },
  {
    id: 2,
    name: "Spacious Apartment",
    slug: "spacious-apartment",
    roomType: "apartment",
    shortDescription: "2 Bedrooms with Attached Washrooms, Living Area, Dining Area, Baywindow Sitting, Verandah outside room sitting, Terrace and Garden Access.",
    longDescription: `Our Spacious Apartment is perfect for families and groups seeking the comforts of home in the mountains. This expansive 550 sq ft apartment features two separate bedrooms, each with its own attached bathroom, ensuring privacy and convenience for all guests.

The apartment includes a dedicated living area with baywindow seating - perfect for curling up with a book or enjoying afternoon tea while taking in the mountain views. The dining area provides space for family meals and quality time together. Step outside to your private verandah for fresh mountain air, or head up to the terrace for panoramic Himalayan vistas.

What makes this apartment special is the thoughtful layout that provides separate sleeping spaces while maintaining common areas for bonding. Whether you're traveling with children, extended family, or friends, everyone has their own space to retreat to after a day of exploring.

The apartment comes fully equipped with modern amenities including electric kettle, tea/coffee supplies, high-speed WiFi, and daily bottled water. Both bedrooms feature comfortable queen-sized beds with premium linens, ensuring a good night's sleep for all guests.

The property's unique feature is that each unit has a private entrance, giving you the freedom to come and go as you please. The terrace and garden access provides additional space to relax and enjoy the natural surroundings.`,
    metaTitle: "Spacious 2-Bedroom Apartment Mukteshwar | Large Family Group Stay | Ecoescape",
    metaDescription: "Experience the comforts of home in the Himalayas. Our 550 sq ft 2-bedroom apartment features private living & dining areas, 2 attached baths, and a scenic baywindow. Perfect for families and groups.",
    keywords: "2 bedroom apartment Mukteshwar, family accommodation Mukteshwar, spacious apartment Mukteshwar, family room with living area, group stay Mukteshwar, apartment with dining room, baywindow sitting room, verandah room Mukteshwar",
    images: [spacious1, spacious2, spacious3, spacious4],
    capacity: "4 Guests",
    size: "550 sq ft",
    view: "Mountain View",
    bedConfig: "2 Queen Beds",
    features: [
      "2 bedrooms with attached washrooms",
      "Living area with baywindow sitting",
      "Dining area included",
      "Verandah outside room",
      "Terrace & garden access",
      "Electric kettle with tea/coffee",
      "Private entrance",
    ],
    amenities: [
      "2 queen-sized beds with premium linens",
      "2 private bathrooms with 24/7 hot water",
      "Living area with comfortable seating",
      "Baywindow seating for relaxation",
      "Dining area with table and chairs",
      "Electric kettle with complimentary tea/coffee",
      "1L bottled water daily per person",
      "High-speed 5G WiFi",
      "Room service available",
      "Private entrance for enhanced privacy",
    ],
    nearbyAttractions: [
      {
        name: "Mukteshwar Mahadev Temple",
        distance: "7 km",
        description: "Ancient Shiva temple with stunning Himalayan views"
      },
      {
        name: "Sitla Village",
        distance: "4 km",
        description: "Scenic village with fruit orchards and panoramic viewpoints"
      },
      {
        name: "Bhalu Gaad Waterfalls",
        distance: "6 km",
        description: "Seasonal waterfall perfect for nature treks"
      },
    ],
    faqs: [
      {
        question: "How many people can the apartment accommodate?",
        answer: "The apartment can comfortably accommodate up to 4 guests with 2 separate bedrooms, each featuring a queen-sized bed. Additional mattresses for children can be arranged on request."
      },
      {
        question: "Are both bedrooms equipped with attached bathrooms?",
        answer: "Yes! Both bedrooms have their own attached bathrooms with modern fixtures and 24/7 hot water supply, ensuring convenience and privacy for all guests."
      },
      {
        question: "Is there a kitchen in the apartment?",
        answer: "The apartment does not include a kitchen, but we have an in-house restaurant serving delicious home-cooked Kumaoni and North Indian cuisine. Room service is available for all meals."
      },
      {
        question: "What common areas are available in the apartment?",
        answer: "The apartment features a living area with baywindow seating, a dining area for family meals, and a private verandah. Guests also have access to the shared terrace and botanical garden."
      },
    ],
  },
  {
    id: 3,
    name: "Family Room",
    slug: "family-room",
    roomType: "familyRoom",
    shortDescription: "2 Bedrooms (large and small), 1 washroom, dining area, private balcony, terrace and garden access. Perfect for families.",
    longDescription: `Our Family Room is designed keeping in mind the needs of traveling families who want comfort, space, and togetherness. This 450 sq ft accommodation features a large bedroom and a smaller bedroom, making it perfect for parents and children or families with different sleeping preferences.

The room includes a dedicated dining area where families can share meals and create lasting memories together. Step out onto your private balcony to enjoy the fresh mountain air and stunning views, or head up to the terrace for panoramic Himalayan vistas. The garden access provides children with space to play and explore safely.

What makes this family room special is its practical layout - one large bedroom for adults and a smaller bedroom for children, combined with a shared bathroom. This arrangement ensures privacy while keeping the family close together. The private balcony is perfect for morning coffee while the kids are still sleeping, or for evening stargazing sessions.

The room comes equipped with family-friendly amenities including electric kettle, tea/coffee supplies, high-speed WiFi, and daily bottled water for all family members. The shared bathroom features modern fixtures with 24/7 hot water supply.

Like all our accommodations, this family room has a private entrance, giving your family the freedom to come and go as you please. The terrace and garden access provides additional space for family relaxation and outdoor activities.`,
    metaTitle: "Cozy 2-Bedroom Family Retreat | Private Balcony & Garden Access | Ecoescape",
    metaDescription: "The perfect space for your mountain family vacation. Our 450 sq ft Family Room features a parent's master bed, kids' room, private balcony, and shared dining area. Book your Himalayan escape today.",
    keywords: "family room Mukteshwar, 2 bedroom family room, family accommodation with balcony, kids friendly room Mukteshwar, family suite Mukteshwar, family room with dining area, private balcony family room, best family stay Mukteshwar",
    images: [family1, family2],
    capacity: "4 Guests",
    size: "450 sq ft",
    view: "Mountain View",
    bedConfig: "2 Bedrooms",
    features: [
      "2 bedrooms (large + small)",
      "1 shared bathroom",
      "Private balcony",
      "Dining area included",
      "Terrace & garden access",
      "Electric kettle with tea/coffee",
      "High-speed WiFi",
    ],
    amenities: [
      "Large bedroom with double bed",
      "Small bedroom with single/twin beds",
      "Shared bathroom with 24/7 hot water",
      "Private balcony with mountain views",
      "Dining area with table and chairs",
      "Electric kettle with complimentary tea/coffee",
      "1L bottled water daily per person",
      "High-speed 5G WiFi",
      "Room service available",
      "Private entrance for enhanced privacy",
    ],
    nearbyAttractions: [
      {
        name: "Mukteshwar Mahadev Temple",
        distance: "7 km",
        description: "Ancient Shiva temple with stunning Himalayan views"
      },
      {
        name: "Chauli Ki Jali",
        distance: "8 km",
        description: "Scenic cliff edge perfect for rock climbing and rappelling"
      },
      {
        name: "Mukteshwar Inspection Bungalow",
        distance: "5 km",
        description: "Heritage British-era architecture with panoramic views"
      },
    ],
    faqs: [
      {
        question: "What is the bed configuration in the family room?",
        answer: "The family room features a large bedroom with a double bed (perfect for parents) and a smaller bedroom with single/twin beds (ideal for children). The arrangement can accommodate up to 4 guests comfortably."
      },
      {
        question: "Is there a private bathroom?",
        answer: "The family room includes one shared bathroom with modern fixtures and 24/7 hot water supply. The bathroom is accessible from both bedrooms for convenience."
      },
      {
        question: "What facilities are available for children?",
        answer: "The family room includes a smaller bedroom perfect for kids, garden access for safe play, and a private balcony. We can provide additional mattresses on request. The property is child-safe with secure premises."
      },
      {
        question: "Can we cook our own meals in the family room?",
        answer: "The family room does not include a kitchen, but we have an in-house restaurant serving delicious home-cooked meals. The dining area in the room is perfect for family meals with room service available."
      },
    ],
  },
  {
    id: 4,
    name: "Family Room 2",
    slug: "family-room-2",
    roomType: "familyRoom2",
    shortDescription: "1 Bedroom Quadruple with 2 king size double sharing beds, 1 washroom, private balcony, dining area, terrace and garden access.",
    longDescription: `Our Family Room 2 offers a unique accommodation option perfect for families who prefer to stay together in one large space. This 380 sq ft room features two king-size double-sharing beds, making it ideal for families with children or groups of friends traveling together.

The room's standout feature is the two comfortable king-size beds, ensuring everyone gets a good night's sleep without the need for separate bedrooms. The private balcony offers stunning views and is perfect for morning coffee or evening relaxation while enjoying the fresh mountain air.

What makes this room special is its practicality for families - everything in one space with a dedicated dining area for shared meals. The private balcony provides additional space to relax and take in the views, while terrace and garden access gives children room to play and explore.

The room comes equipped with all essential amenities including electric kettle, tea/coffee supplies, high-speed WiFi, and daily bottled water. The private bathroom features modern fixtures with 24/7 hot water supply.

Like all our accommodations, this family room has a private entrance, giving you the freedom to come and go as you please. The east-facing orientation ensures you catch beautiful sunrise views right from your balcony.`,
    metaTitle: "East-Facing Family Room 2 | Quadruple Room with Sunrise View | Ecoescape",
    metaDescription: "Perfect for close-knit families and groups. Our Quadruple Family Room 2 features two king-size beds, a private sunrise-view balcony, and shared dining space. Enjoy the ultimate Himalayan group retreat.",
    keywords: "family room 2 king beds Mukteshwar, quadruple room Mukteshwar, 2 king beds room, family room with sunrise view, group accommodation Mukteshwar, king size bed room Mukteshwar, family room with balcony, double sharing room Mukteshwar",
    images: [familyRoom2_1, familyRoom2_2, familyRoom2_3],
    capacity: "4 Guests",
    size: "380 sq ft",
    view: "Sunrise View",
    bedConfig: "2 King Beds",
    features: [
      "2 king size double sharing beds",
      "Private balcony",
      "Dining area included",
      "Terrace & garden access",
      "Electric kettle with tea/coffee",
      "High-speed WiFi",
      "East-facing sunrise views",
    ],
    amenities: [
      "2 king-size beds with premium linens",
      "Private bathroom with 24/7 hot water",
      "Private balcony with sunrise views",
      "Dining area with table and chairs",
      "Electric kettle with complimentary tea/coffee",
      "1L bottled water daily per person",
      "High-speed 5G WiFi",
      "Room service available",
      "Private entrance for enhanced privacy",
      "East-facing orientation for sunrise views",
    ],
    nearbyAttractions: [
      {
        name: "Mukteshwar Mahadev Temple",
        distance: "7 km",
        description: "Ancient Shiva temple with stunning Himalayan views"
      },
      {
        name: "Chauli Ki Jali",
        distance: "8 km",
        description: "Scenic cliff edge perfect for rock climbing and rappelling"
      },
      {
        name: "Sitla Village",
        distance: "4 km",
        description: "Scenic village with fruit orchards and panoramic viewpoints"
      },
    ],
    faqs: [
      {
        question: "How many people can Family Room 2 accommodate?",
        answer: "The room can comfortably accommodate up to 4 guests with 2 king-size double-sharing beds. Each bed can sleep 2 adults, making it perfect for families or groups of friends."
      },
      {
        question: "Are both beds king-size?",
        answer: "Yes! The room features two king-size beds, ensuring all guests get a comfortable night's sleep. The beds are fitted with premium linens for added comfort."
      },
      {
        question: "Does the room have sunrise views?",
        answer: "Yes! The room is east-facing with a private balcony, offering beautiful sunrise views. Wake up to the first rays of sunlight painting the Himalayan peaks in golden hues."
      },
      {
        question: "Is there a dining area in the room?",
        answer: "Yes! The room includes a dedicated dining area with table and chairs, perfect for family meals. Room service is available from our in-house restaurant serving home-cooked meals."
      },
    ],
  },
];

export function getRoomBySlug(slug: string): RoomConfig | undefined {
  return roomsConfig.find((room) => room.slug === slug);
}

export function getRoomById(id: number): RoomConfig | undefined {
  return roomsConfig.find((room) => room.id === id);
}

export function getRoomByType(roomType: RoomType): RoomConfig | undefined {
  return roomsConfig.find((room) => room.roomType === roomType);
}

export function getAllRooms(): RoomConfig[] {
  return roomsConfig;
}
