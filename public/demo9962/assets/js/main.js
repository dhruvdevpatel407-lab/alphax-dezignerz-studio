(function () {
  "use strict";

  var WHATSAPP = "917624016110"; // same line the client's own site uses
  document.documentElement.classList.remove("no-js");

  /*
   * Package list, taken from the client's own project files
   * (lib/domestic-tours.ts and lib/international-tours.ts).
   * region: "india" or "world". img: file name inside assets/img/.
   * Two colours make the card's fallback gradient when no photo exists.
   * Every tour includes sights, hotels, meals and transport.
   */
  var INCLUDES = ["Sights", "Hotels", "Meals", "Transport"];
  var PACKAGES = [
    { name: "Goa", slug: "goa", region: "india", tag: "Sun, sand & fun", places: "Baga, Palolem, Anjuna, Fort Aguada, Old Goa", c: ["#0E7490", "#FBBF24"] },
    { name: "Rajasthan", slug: "rajasthan", region: "india", tag: "Royal splendour", places: "Jaipur, Jodhpur, Udaipur, Pushkar, Thar Desert", c: ["#9A3412", "#FDBA74"] },
    { name: "Uttarakhand", slug: "uttarakhand", region: "india", tag: "Devbhumi, land of gods", places: "Rishikesh, Badrinath, Kedarnath, Valley of Flowers, Chopta", c: ["#334155", "#93C5FD"] },
    { name: "Char Dham", slug: "char-dham", region: "india", tag: "Sacred yatra", places: "Yamunotri, Gangotri, Kedarnath, Badrinath", c: ["#7C2D12", "#FCD34D"] },
    { name: "South India", slug: "south-india", region: "india", tag: "Temples & traditions", places: "Chennai, Madurai, Thanjavur, Bangalore, Pondicherry", c: ["#065F46", "#34D399"] },
    { name: "Kerala", slug: "kerala", region: "india", tag: "Backwaters & tea hills", places: "Alleppey, Munnar, Periyar Tiger Reserve", c: ["#14532D", "#86EFAC"] },
    { name: "Himachal Pradesh", slug: "himachal-pradesh", region: "india", tag: "Himalayan wonders", places: "Shimla, Manali, Dharamshala, McLeod Ganj", c: ["#1E3A8A", "#93C5FD"] },
    { name: "Andaman & Nicobar", slug: "andaman-nicobar", region: "india", tag: "Island escape", places: "Port Blair, Havelock, Neil Island", c: ["#0369A1", "#5EEAD4"] },
    { name: "Dubai", slug: "dubai", region: "world", tag: "Modern marvels", places: "Burj Khalifa, Palm Jumeirah, Dubai Creek, Desert Safari", c: ["#78350F", "#FCD34D"] },
    { name: "Maldives", slug: "maldives", region: "world", tag: "Tropical paradise", places: "Overwater villas, coral reefs, local islands", c: ["#0E7490", "#A5F3FC"] },
    { name: "Bangkok & Pattaya", slug: "bangkok-pattaya", region: "world", tag: "City & beach", places: "Wat Pho, Wat Arun, Coral Island, Alcazar Show", c: ["#7C2D12", "#F472B6"] },
    { name: "Phuket & Krabi", slug: "phuket-krabi", region: "world", tag: "Thai islands", places: "Patong Beach, Phuket Old Town, Railay, Ao Nang", c: ["#0F766E", "#FDE68A"] },
    { name: "Singapore & Malaysia", slug: "singapore-malaysia", region: "world", tag: "Two countries, one trip", places: "Singapore, Kuala Lumpur, Cameron Highlands, Penang, Langkawi", c: ["#312E81", "#F87171"] },
    { name: "Bali", slug: "bali", region: "world", tag: "Island of gods", places: "Temples, rice terraces, waterfalls, beaches", c: ["#14532D", "#FDE68A"] },
    { name: "Sri Lanka", slug: "sri-lanka", region: "world", tag: "Pearl of the Indian Ocean", places: "Sigiriya, Anuradhapura, tea country, wildlife safari", c: ["#166534", "#FCA5A5"] },
    { name: "Viet Nam", slug: "vietnam", region: "world", tag: "Timeless landscapes", places: "Hanoi, Halong Bay, Hoi An, Ho Chi Minh City", c: ["#1E293B", "#C4B5FD"] }
  ];

  function waLink(text) {
    return "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(text);
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }

  /* Render package cards */
  var grid = document.getElementById("packageGrid");
  if (grid) {
    PACKAGES.forEach(function (p) {
      var card = el("article", "pkg reveal");
      card.dataset.region = p.region;

      var img = el("div", "pkg__img");
      img.style.backgroundImage =
        "url('assets/img/" + p.slug + ".jpg'), linear-gradient(135deg, " + p.c[0] + ", " + p.c[1] + ")";
      img.setAttribute("role", "img");
      img.setAttribute("aria-label", p.name + " holiday");
      img.appendChild(el("span", "pkg__tag", p.tag));
      img.appendChild(el("span", "pkg__days", p.region === "india" ? "India" : "International"));

      var body = el("div", "pkg__body");
      body.appendChild(el("h3", "", p.name));
      body.appendChild(el("p", "pkg__places", p.places));
      var inc = el("ul", "pkg__inc");
      INCLUDES.forEach(function (i) { inc.appendChild(el("li", "", i)); });
      body.appendChild(inc);

      var foot = el("div", "pkg__foot");
      var price = el("span", "pkg__price", "Price");
      price.appendChild(el("b", "", "On request"));
      var btn = el("a", "btn btn--sm btn--accent", "Enquire");
      btn.href = waLink("Hi Vinayak Holiday, please share details and price for the " + p.name + " tour.");
      btn.target = "_blank";
      btn.rel = "noopener";
      foot.appendChild(price);
      foot.appendChild(btn);
      body.appendChild(foot);

      card.appendChild(img);
      card.appendChild(body);
      grid.appendChild(card);
    });
  }

  /* Fill the destination dropdown from the same list */
  var sel = document.getElementById("destSelect");
  if (sel) {
    PACKAGES.forEach(function (p) {
      var o = document.createElement("option");
      o.textContent = p.name;
      sel.insertBefore(o, sel.lastElementChild);
    });
    sel.insertBefore(new Option("Somewhere else"), sel.lastElementChild);
    sel.value = "Not sure yet";
  }

  /* Filters */
  var filters = document.querySelectorAll(".filter");
  filters.forEach(function (f) {
    f.addEventListener("click", function () {
      var want = f.dataset.filter;
      filters.forEach(function (x) {
        var on = x === f;
        x.classList.toggle("is-active", on);
        x.setAttribute("aria-selected", on ? "true" : "false");
      });
      document.querySelectorAll(".pkg").forEach(function (card) {
        card.hidden = !(want === "all" || card.dataset.region === want);
      });
    });
  });

  /* Mobile menu */
  var menuBtn = document.querySelector(".menu-btn");
  var nav = document.getElementById("nav");
  if (menuBtn && nav) {
    var setMenu = function (open) {
      nav.classList.toggle("is-open", open);
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    menuBtn.addEventListener("click", function () {
      setMenu(!nav.classList.contains("is-open"));
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenu(false);
    });
  }

  /* Enquiry form: validates, then opens WhatsApp with the details */
  var form = document.getElementById("enquiry");
  if (form) {
    var note = form.querySelector(".form-note");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var name = String(d.get("name") || "").trim();
      var phone = String(d.get("phone") || "").trim();
      var okPhone = /^[0-9+ ]{10,15}$/.test(phone);

      form.elements["name"].setAttribute("aria-invalid", name ? "false" : "true");
      form.elements["phone"].setAttribute("aria-invalid", okPhone ? "false" : "true");
      if (!name || !okPhone) {
        note.textContent = !name ? "Please enter your name." : "Please enter a valid mobile number.";
        (!name ? form.elements["name"] : form.elements["phone"]).focus();
        return;
      }
      note.textContent = "";

      var month = d.get("month");
      var monthText = "Flexible";
      if (month) {
        var parts = String(month).split("-");
        monthText = new Date(+parts[0], +parts[1] - 1, 1)
          .toLocaleDateString("en-IN", { month: "long", year: "numeric" });
      }

      var msg = [
        "Hi Vinayak Holiday, I want to plan a trip.",
        "Name: " + name,
        "Mobile: " + phone,
        "Email: " + (String(d.get("email") || "").trim() || "Not given"),
        "Destination: " + d.get("destination"),
        "Travel month: " + monthText,
        "Tourists: " + (d.get("pax") || "Not given")
      ].join("\n");

      window.open(waLink(msg), "_blank", "noopener");
    });
  }

  /* Reveal on scroll */
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("is-in");
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (i) { io.observe(i); });
  } else {
    items.forEach(function (i) { i.classList.add("is-in"); });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
