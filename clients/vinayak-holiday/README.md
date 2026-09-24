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

## Sections

1. Top bar with phone, email and Instagram
2. Sticky header with mobile menu and a WhatsApp button
3. Hero with a "Plan my trip" form that opens WhatsApp with the details filled in
4. Services: visa, flights, trains, hotels, holiday packages
5. Packages: 12 tours with India and International filters, each with a WhatsApp enquiry button
6. Visa help steps and popular visa countries
7. Why choose us
8. Contact details, directions link and Google map
9. Footer and a floating WhatsApp button

## Still to do before going live

- **Swap the placeholder logo.** `assets/img/logo.svg` is a stand-in. Replace it with the client's real logo.
- **Add photos.** See `assets/img/README.md` for the file names. Cards show colour gradients until then.
- **Check the packages.** Tours, durations and inclusions are typical examples, not the client's own list. Edit the `PACKAGES` list at the top of `assets/js/main.js`.
- **Prices** show "On request" on purpose. Add real prices only once the client confirms them.
- **Match the demo890 layout** if needed. The demo890 source and the client's zip were too large to open from this environment.

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
