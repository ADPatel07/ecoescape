import type { RoomType, RoomPricing, BookingPricing, MonthlyPeakConfig } from "@/types/pricing";
export type { RoomType };

// Base prices for each room type (standard season)
const BASE_PRICES: Record<RoomType, number> = {
  suite: 3500,
  apartment: 5500,
  familyRoom: 4500,
  familyRoom2: 4000,
};

// Year-agnostic peak season configurations (applies to all years)
const MONTHLY_PEAK_CONFIGS: MonthlyPeakConfig[] = [
  // March: 1st-4th, 27th-31st (20% weekday, 25% weekend)
  { month: 2, dateRanges: [{start: 1, end: 4}, {start: 27, end: 31}], weekdayMarkup: 0.20, weekendMarkup: 0.25 },

  // April: 3rd-5th (20% flat)
  { month: 3, dateRanges: [{start: 3, end: 5}], weekdayMarkup: 0.20, weekendMarkup: 0.20 },

  // May: 1st-3rd, 16th-31st (20% weekday, 25% weekend)
  { month: 4, dateRanges: [{start: 1, end: 3}, {start: 16, end: 31}], weekdayMarkup: 0.20, weekendMarkup: 0.25 },

  // June: 1st-30th (25% weekday, 35% weekend)
  { month: 5, dateRanges: [{start: 1, end: 30}], weekdayMarkup: 0.25, weekendMarkup: 0.35 },

  // August: 14th-16th (20% weekday, 25% weekend)
  { month: 7, dateRanges: [{start: 14, end: 16}], weekdayMarkup: 0.20, weekendMarkup: 0.25 },

  // October: 2nd-4th, 17th-20th (20% flat)
  { month: 9, dateRanges: [{start: 2, end: 4}, {start: 17, end: 20}], weekdayMarkup: 0.20, weekendMarkup: 0.20 },

  // November: 6th-11th (20% flat)
  { month: 10, dateRanges: [{start: 6, end: 11}], weekdayMarkup: 0.20, weekendMarkup: 0.20 },

  // December: 24th-31st (20% flat)
  { month: 11, dateRanges: [{start: 24, end: 31}], weekdayMarkup: 0.20, weekendMarkup: 0.20 },

  // January: 1st-3rd, 23rd-26th (20% flat)
  { month: 0, dateRanges: [{start: 1, end: 3}, {start: 23, end: 26}], weekdayMarkup: 0.20, weekendMarkup: 0.20 },
];

// Special case: July - all weekends get 15% markup (year-agnostic)
const JULY_WEEKEND_ONLY_MARKUP = { month: 6, markup: 0.15 };

/**
 * Check if a given date is a weekend (Saturday or Sunday)
 */
function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6; // 0=Sunday, 6=Saturday
}

/**
 * Check if a specific date falls within any date range in a peak season config
 */
function isDateInRanges(date: Date, dateRanges: { start: number; end: number }[]): boolean {
  const day = date.getDate();
  return dateRanges.some(range => day >= range.start && day <= range.end);
}

/**
 * Get markup percentage for a specific date
 * Returns 0 for dates without markup (base price)
 * Checks July weekends first, then peak season configs
 * Applies year-agnostic pattern to all years
 */
export function getMarkupForDate(date: Date): number {
  const month = date.getMonth();
  // Special case: July - all weekends get 15% markup (applies to all years)
  if (month === JULY_WEEKEND_ONLY_MARKUP.month && isWeekend(date)) {
    return JULY_WEEKEND_ONLY_MARKUP.markup;
  }

  // Check if date matches any monthly peak season config (year-agnostic)
  const config = MONTHLY_PEAK_CONFIGS.find(
    config => config.month === month && isDateInRanges(date, config.dateRanges)
  );

  if (config) {
    return isWeekend(date) ? config.weekendMarkup : config.weekdayMarkup;
  }

  return 0; // No markup for non-peak dates
}

/**
 * Check if a given date has any markup (is in pricing season)
 */
export function isPeakSeason(date: Date): boolean {
  return getMarkupForDate(date) > 0;
}

/**
 * Get the base price for a room type (standard season)
 */
export function getBasePrice(roomType: RoomType): number {
  return BASE_PRICES[roomType] || 0;
}

/**
 * Get price for a specific date
 * Returns price with markup if applicable, otherwise base price
 */
export function getPriceForDate(roomType: RoomType, date: Date): number {
  const basePrice = getBasePrice(roomType);
  const markup = getMarkupForDate(date);
  return Math.round(basePrice * (1 + markup));
}

/**
 * Get current pricing based on today's date
 */
export function getCurrentPrice(roomType: RoomType): number {
  return getPriceForDate(roomType, new Date());
}

/**
 * Get complete pricing information for a room type
 */
export function getRoomPricing(roomType: RoomType): RoomPricing {
  const basePrice = getBasePrice(roomType);
  const currentPrice = getCurrentPrice(roomType);
  // Peak season price is now June's 35% markup (max)
  // Peak season price is now June's 35% markup
  const peakSeasonPrice = Math.round(basePrice * (1 + 0.35));

  return {
    basePrice,
    currentPrice,
    isPeakSeason: isPeakSeason(new Date()),
    peakSeasonPrice,
  };
}

/**
 * Calculate price for a booking period
 * Returns total price, breakdown, and relevant pricing info
 */
export function getBookingPrice(
  roomType: RoomType,
  checkIn: Date,
  checkOut: Date
): BookingPricing {
  const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));

  if (nights <= 0) {
    return {
      basePrice: getBasePrice(roomType),
      totalPrice: 0,
      nights: 0,
      isPeakSeason: false,
      priceBreakdown: [],
    };
  }

  const priceBreakdown: Array<{ date: Date; price: number }> = [];
  let totalPrice = 0;

  // Calculate price for each night
  for (let i = 0; i < nights; i++) {
    const nightDate = new Date(checkIn);
    nightDate.setDate(nightDate.getDate() + i);
    const price = getPriceForDate(roomType, nightDate);
    priceBreakdown.push({ date: nightDate, price });
    totalPrice += price;
  }

  // Check if any night falls in peak season
  const hasPeakSeasonNight = priceBreakdown.some(({ date }) => isPeakSeason(date));

  // Use the first night's price as the display price
  const basePrice = priceBreakdown[0]?.price || getBasePrice(roomType);

  return {
    basePrice,
    totalPrice,
    nights,
    isPeakSeason: hasPeakSeasonNight,
    priceBreakdown,
  };
}

/**
 * Format price for display
 * Rounds to nearest hundred for cleaner display
 * Example: 4375 → "₹4,400"
 */
export function formatPrice(price: number): string {
  const roundedPrice = Math.round(price / 100) * 100;
  return `₹${roundedPrice.toLocaleString("en-IN")}`;
}

/**
 * Format price exactly (no rounding)
 * Example: 4375 → "₹4,375"
 */
export function formatPriceExact(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`;
}

/**
 * Get peak season price for a room type (maximum markup: 35% for June weekends)
 */
export function getPeakSeasonPrice(roomType: RoomType): number {
  const basePrice = getBasePrice(roomType);
  return Math.round(basePrice * (1 + 0.35));
}

/**
 * Map room option values from booking form to RoomType
 */
export function mapRoomTypeToPricingType(roomOptionValue: string): RoomType | null {
  const roomTypeMap: Record<string, RoomType> = {
    "suite-mountain-view": "suite",
    "spacious-apartment": "apartment",
    "family-room": "familyRoom",
    "family-room-2": "familyRoom2",
  };
  return roomTypeMap[roomOptionValue] || null;
}
