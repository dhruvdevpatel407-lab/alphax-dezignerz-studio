# Vinayak Holiday website

One-page website for **Vinayak Holiday**, a travel agency in Khokhra, Ahmedabad.
It is plain HTML, CSS and JavaScript, with no build step and no dependencies.

## Business details used

These come from the client's business card and from the About Us page in their own project (`app/about-us/page.tsx` in the `vinayak-holiday-18-9` Drive folder).

- Founder and CEO: Mr. Vinod Patel, running tours since 2004
- 200+ Bhagwat Saptah organised across India
- Charity: Kamdhenu Lok Kalyan Mandal
- Mr. Chirag Patel: with the company since 2008, tourist visas for the USA, UK, Canada and Australia
- Mr. Nikhil Patel: with the company since 2015, international tickets and tours, +91 76240 16110
- Director on the business card: Chirag Patel
- Phone and WhatsApp: +91 99042 03946
- Other lines on their contact page: +91 76240 16110 and +91 97272 73841
- Email: vinayak2163@gmail.com
- Address: Near Post Office, Opp. Balbhavan, Khokhra, Ahmedabad 380008.
  Their own contact page and directory listings say 380008. The business card says 380050, which looks like a card error. Confirm with the client.
- Services: Visa, Flights, Trains, Hotels, Packages
- Instagram: @vinayak_holiday_2163
- Domain on the card: www.vinayakholiday.com
- Hours: open 7 days a week, per their contact page. The 9 AM to 7 PM times come from a directory listing.
- Visa types on their visa page: USA, Canada, UK, Australia, Student Visa, E-Visa
- Airlines on their air ticket page: Air India, Air France, Akasa Air, Emirates, Etihad, IndiGo, KLM, Malaysia Airlines, Qatar, Singapore Airlines

## Taken from the old website

The old site at vinayakholiday.com could not be opened from the build environment.
Its public search listings show these pages: Home, About Us, Air Ticket, International Tour, and destination pages.
It confirms the same destinations as the client's project files, such as Goa, South India, Uttarakhand, Rajasthan and Maldives.

## Sections

Text comes from the client's own project in the `vinayak-holiday-18-9` Drive folder (`app/components`, `app/*/page.tsx`, `lib/*.ts`).

1. Top bar with phone, email and Instagram
2. Sticky header with mobile menu and a WhatsApp button
3. Hero with their banner line and a "Plan my trip" form that opens WhatsApp
4. About: founder story, key numbers and the three-person team
5. Services: visa, flights, trains, hotels, packages, dharmik tours and Bhagwat Saptah, passport services, custom and group tours
6. Packages: their 16 tours, 8 in India and 8 international, with filters and a WhatsApp enquiry button on each
7. Activities: their 12 tour types
8. Visa: their six visa types with their own taglines
9. Air tickets: corporate fares and the airlines they book
10. "Embark on a journey": their four promises
11. "Find travel perfection": their three planning steps
12. Their 10 real client reviews
13. Contact details for all three phone lines, directions link and Google map
14. Footer with their text, tour links, Facebook and Instagram, and their red, orange and blue stripe colours

WhatsApp: general, tour and flight enquiries go to +91 76240 16110, the same line their own site uses. Visa enquiries go to Chirag Patel on +91 99042 03946.

## Still to do before going live

- **Add photos.** See `assets/img/README.md` for the file names. Cards show colour gradients until then.
- **Packages** come from the client's own project in the `vinayak-holiday-18-9` Drive folder, in `lib/domestic-tours.ts` and `lib/international-tours.ts`. Their data has no trip lengths or prices, so none are shown. Edit the `PACKAGES` list at the top of `assets/js/main.js`.
- **Prices** show "On request" on purpose. Add real prices only once the client confirms them.
- **Match the demo890 layout.** Demo890 is a client file and must never be changed or deleted.
  A duplicate named `vinayak-holiday-from-demo890-frame.zip` sits beside `gv-demo890-deploy.zip` in the same Drive folder.
  Build from the duplicate only. Neither zip could be opened from this environment, so this page does not use its layout yet.

## Run locally

```bash
cd clients/vinayak-holiday
python3 -m http.server 8080
```

Then open http://localhost:8080.

## Deploy on Vercel

Import the repository as a new Vercel project.
Set **Root Directory** to `clients/vinayak-holiday` and **Framework Preset** to `Other`.
Leave the build command empty.
