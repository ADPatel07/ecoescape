import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  formatPrice,
  formatPriceExact,
  isPeakSeason,
  getPriceForDate,
  getBookingPrice,
  getRoomPricing,
  type RoomType
} from "@/services/pricing";

const ROOM_TYPES: RoomType[] = ['suite', 'apartment', 'familyRoom', 'familyRoom2'];

const ROOM_NAMES: Record<RoomType, string> = {
  suite: 'Suite with Mountain View',
  apartment: 'Spacious Apartment',
  familyRoom: 'Family Room',
  familyRoom2: 'Family Room 2',
};

export function PricingTestPage() {
  const [testDate, setTestDate] = useState(new Date().toISOString().split('T')[0]);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [selectedRoom, setSelectedRoom] = useState<RoomType>('suite');

  const parsedTestDate = new Date(testDate);
  const isTestDatePeak = isPeakSeason(parsedTestDate);

  // Calculate booking price if dates are selected
  const bookingCalc = checkInDate && checkOutDate
    ? getBookingPrice(selectedRoom, new Date(checkInDate), new Date(checkOutDate))
    : null;

  const resetToToday = () => {
    setTestDate(new Date().toISOString().split('T')[0]);
  };

  const setJuneDate = () => {
    const currentYear = new Date().getFullYear();
    setTestDate(`${currentYear}-06-15`);
  };

  const setSampleBooking = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const nextWeek = new Date(today);
    nextWeek.setDate(nextWeek.getDate() + 3);

    setCheckInDate(today.toISOString().split('T')[0]);
    setCheckOutDate(nextWeek.toISOString().split('T')[0]);
  };

  const setJuneBooking = () => {
    const currentYear = new Date().getFullYear();
    setCheckInDate(`${currentYear}-06-10`);
    setCheckOutDate(`${currentYear}-06-15`);
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Dynamic Pricing Test Page</h1>
          <p className="text-muted-foreground">
            Verify the pricing system works correctly for different dates and scenarios
          </p>
        </div>

        {/* Current Status */}
        <div className="bg-card rounded-lg p-6 mb-6 border">
          <h2 className="text-xl font-semibold mb-4">Current System Status</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Today's Date</p>
              <p className="text-lg font-medium">{new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Current Season</p>
              <p className={`text-lg font-medium ${isPeakSeason(new Date()) ? 'text-red-600' : 'text-green-600'}`}>
                {isPeakSeason(new Date()) ? '🔥 PEAK SEASON (June)' : '✅ Standard Season'}
              </p>
            </div>
          </div>
        </div>

        {/* All Room Prices (Current) */}
        <div className="bg-card rounded-lg p-6 mb-6 border">
          <h2 className="text-xl font-semibold mb-4">All Room Prices (Current/Today)</h2>
          <div className="space-y-3">
            {ROOM_TYPES.map((roomType) => {
              const pricing = getRoomPricing(roomType);
              return (
                <div key={roomType} className="flex justify-between items-center p-3 bg-secondary rounded">
                  <div>
                    <p className="font-medium">{ROOM_NAMES[roomType]}</p>
                    <p className="text-sm text-muted-foreground">
                      Base: ₹{pricing.basePrice.toLocaleString()} | Peak: ₹{pricing.peakSeasonPrice.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">{formatPrice(pricing.currentPrice)}</p>
                    <p className={`text-sm ${pricing.isPeakSeason ? 'text-red-600' : 'text-green-600'}`}>
                      {pricing.isPeakSeason ? 'Peak Season' : 'Standard'}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Test Specific Date */}
        <div className="bg-card rounded-lg p-6 mb-6 border">
          <h2 className="text-xl font-semibold mb-4">Test Specific Date</h2>
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <Label htmlFor="testDate">Select Date</Label>
              <Input
                id="testDate"
                type="date"
                value={testDate}
                onChange={(e) => setTestDate(e.target.value)}
                className="mt-1"
              />
            </div>
            <div className="flex items-end gap-2">
              <Button onClick={resetToToday} variant="outline">Today</Button>
              <Button onClick={setJuneDate} variant="outline">June 15</Button>
            </div>
          </div>

          <div className="p-4 bg-secondary rounded">
            <p className="text-sm text-muted-foreground mb-2">
              Selected Date: {parsedTestDate.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className={`text-lg font-medium ${isTestDatePeak ? 'text-red-600' : 'text-green-600'}`}>
              {isTestDatePeak ? '🔥 PEAK SEASON (June)' : '✅ Standard Season'}
            </p>
          </div>

          <div className="mt-4 space-y-2">
            <p className="font-medium">Prices on Selected Date:</p>
            {ROOM_TYPES.map((roomType) => {
              const price = getPriceForDate(roomType, parsedTestDate);
              return (
                <div key={roomType} className="flex justify-between text-sm p-2 bg-background rounded">
                  <span>{ROOM_NAMES[roomType]}</span>
                  <span className="font-medium">{formatPriceExact(price)}/night</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Booking Calculator */}
        <div className="bg-card rounded-lg p-6 mb-6 border">
          <h2 className="text-xl font-semibold mb-4">Booking Price Calculator</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <Label htmlFor="roomSelect">Room Type</Label>
              <select
                id="roomSelect"
                value={selectedRoom}
                onChange={(e) => setSelectedRoom(e.target.value as RoomType)}
                className="w-full mt-1 h-10 px-3 rounded-md border border-input bg-background"
              >
                {ROOM_TYPES.map((rt) => (
                  <option key={rt} value={rt}>{ROOM_NAMES[rt]}</option>
                ))}
              </select>
            </div>
            <div className="flex items-end gap-2">
              <Button onClick={setSampleBooking} variant="outline" className="flex-1">Sample (3 nights)</Button>
              <Button onClick={setJuneBooking} variant="outline" className="flex-1">June Booking</Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <Label htmlFor="checkIn">Check-in Date</Label>
              <Input
                id="checkIn"
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="checkOut">Check-out Date</Label>
              <Input
                id="checkOut"
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="mt-1"
              />
            </div>
          </div>

          {bookingCalc ? (
            <div className="p-4 bg-secondary rounded">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">Room</p>
                  <p className="font-medium">{ROOM_NAMES[selectedRoom]}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-medium">{bookingCalc.nights} night{bookingCalc.nights > 1 ? 's' : ''}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Rate (from first night)</p>
                  <p className="font-medium">₹{bookingCalc.basePrice.toLocaleString()}/night</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Season</p>
                  <p className={`font-medium ${bookingCalc.isPeakSeason ? 'text-red-600' : 'text-green-600'}`}>
                    {bookingCalc.isPeakSeason ? '🔥 Peak Season' : '✅ Standard'}
                  </p>
                </div>
              </div>

              <div className="border-t pt-4 mt-4">
                <p className="text-sm text-muted-foreground mb-1">Total Price</p>
                <p className="text-3xl font-bold">₹{bookingCalc.totalPrice.toLocaleString('en-IN')}</p>
              </div>

              {/* Price breakdown */}
              <details className="mt-4">
                <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                  View nightly breakdown
                </summary>
                <div className="mt-2 space-y-1 text-sm max-h-40 overflow-y-auto">
                  {bookingCalc.priceBreakdown.map((item, idx) => (
                    <div key={idx} className="flex justify-between p-1 bg-background rounded">
                      <span>{item.date.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}</span>
                      <span className={isPeakSeason(item.date) ? 'text-red-600' : ''}>
                        ₹{item.price.toLocaleString()} {isPeakSeason(item.date) ? '(Peak)' : ''}
                      </span>
                    </div>
                  ))}
                </div>
              </details>
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-8">
              Select check-in and check-out dates to calculate price
            </p>
          )}
        </div>

        {/* Quick Test Cases */}
        <div className="bg-card rounded-lg p-6 border">
          <h2 className="text-xl font-semibold mb-4">Quick Test Scenarios</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Button
              onClick={() => { setTestDate('2025-06-15'); setJuneDate(); }}
              variant="outline"
            >
              Test June 2025 (Peak)
            </Button>
            <Button
              onClick={() => { setTestDate('2025-05-15'); resetToToday(); }}
              variant="outline"
            >
              Test May 2025 (Standard)
            </Button>
            <Button
              onClick={() => { setTestDate('2025-07-15'); }}
              variant="outline"
            >
              Test July 2025 (Standard)
            </Button>
            <Button
              onClick={() => {
                const year = new Date().getFullYear();
                setCheckInDate(`${year}-06-01`);
                setCheckOutDate(`${year}-06-05`);
                setSelectedRoom('suite');
              }}
              variant="outline"
            >
              Test June Booking (Suite, 4 nights)
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
