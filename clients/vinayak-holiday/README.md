# Vinayak Holiday website

One-page website for **Vinayak Holiday**, a travel agency in Khokhra, Ahmedabad.
It is plain HTML, CSS and JavaScript, with no build step and no dependencies.

## Business details used

These come from the client's business card files in Drive.

- Director: Chirag Patel
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
Their own destinations are Goa, South India, Uttarakhand, Rajasthan and Maldives, so those appear first.
The South India and Uttarakhand cards use the places the old site names, such as Madurai, Thanjavur, Badrinath and Kedarnath.

## Sections

1. Top bar with phone, email and Instagram
2. Sticky header with mobile menu and a WhatsApp button
3. Hero with a "Plan my trip" form that opens WhatsApp with the details filled in
4. Services: visa, flights, trains, hotels, holiday packages
5. Packages: the client's 16 real tours, 8 in India and 8 international, with filters and a WhatsApp enquiry button on each
6. Visa help steps and popular visa countries
7. Why choose us
8. Contact details, directions link and Google map
9. Footer and a floating WhatsApp button

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
