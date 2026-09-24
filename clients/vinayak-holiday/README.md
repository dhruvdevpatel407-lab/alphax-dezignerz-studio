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
- Email: vinayak2163@gmail.com
- Address: Near Post Office, Opp. Balbhavan, Khokhra, Ahmedabad 380050
- Services: Visa, Flights, Trains, Hotels, Packages
- Instagram: @vinayak_holiday_2163
- Domain on the card: www.vinayakholiday.com
- Hours: Monday to Sunday, 9:00 AM to 7:00 PM, from their travel directory listing

## Taken from the old website

The old site at vinayakholiday.com could not be opened from the build environment.
Its public search listings show these pages: Home, About Us, Air Ticket, International Tour, and destination pages.
It confirms the same destinations as the client's project files, such as Goa, South India, Uttarakhand, Rajasthan and Maldives.

## Sections

1. Top bar with phone, email and Instagram
2. Sticky header with mobile menu and a WhatsApp button
3. Hero with a "Plan my trip" form that opens WhatsApp with the details filled in
4. About: founder story, key numbers and the three-person team
5. Services: visa, flights, trains, hotels, holiday packages, dharmik tours and Bhagwat Saptah
6. Packages: the client's 16 real tours, 8 in India and 8 international, with filters and a WhatsApp enquiry button on each
7. Visa help steps and visa countries, led by USA, UK, Canada and Australia
8. Why choose us
9. Contact details for both phone lines, directions link and Google map
10. Footer and a floating WhatsApp button

## Still to do before going live

- **Swap the placeholder logo.** `assets/img/logo.svg` is a stand-in. Replace it with the client's real logo.
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
