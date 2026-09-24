(function () {
  "use strict";

  var WHATSAPP = "919904203946";
  document.documentElement.classList.remove("no-js");

  /*
   * Package list. Edit this array to add, remove or change tours.
   * region: "india" or "world". img: file name inside assets/img/.
   * Two colours make the card's fallback gradient when no photo exists.
   */
  var PACKAGES = [
    { name: "Goa", region: "india", days: "3 Nights / 4 Days", places: "North Goa, South Goa, Old Goa", tag: "Sun, sand & fun", img: "goa.jpg", c: ["#0E7490", "#FBBF24"], inc: ["Beach resort", "Sightseeing", "Airport transfers"] },
    { name: "South India", region: "india", days: "7 Nights / 8 Days", places: "Madurai, Thanjavur, Bangalore, Pondicherry", tag: "Temples & heritage", img: "south-india.jpg", c: ["#065F46", "#34D399"], inc: ["Meenakshi Temple", "Brihadeshwara Temple", "Private cab"] },
    { name: "Uttarakhand", region: "india", days: "6 Nights / 7 Days", places: "Badrinath, Kedarnath, Valley of Flowers, Chopta", tag: "Himalayan yatra", img: "uttarakhand.jpg", c: ["#334155", "#93C5FD"], inc: ["Char Dham options", "Chandrashila trek", "Hotels"] },
    { name: "Rajasthan", region: "india", days: "6 Nights / 7 Days", places: "Jaipur, Udaipur, Jodhpur, Jaisalmer", tag: "Royal splendour", img: "rajasthan.jpg", c: ["#9A3412", "#FDBA74"], inc: ["Forts & palaces", "Lake Pichola", "Desert camp"] },
    { name: "Kashmir", region: "india", days: "6 Nights / 7 Days", places: "Srinagar, Gulmarg, Pahalgam, Sonamarg", tag: "Paradise on earth", img: "kashmir.jpg", c: ["#1E3A8A", "#60A5FA"], inc: ["Houseboat stay", "Shikara ride", "Private cab"] },
    { name: "Andaman", region: "india", days: "5 Nights / 6 Days", places: "Port Blair, Havelock, Neil Island", tag: "Islands", img: "andaman.jpg", c: ["#0369A1", "#5EEAD4"], inc: ["Ferry tickets", "Radhanagar Beach", "Transfers"] },
    { name: "Maldives", region: "world", days: "4 Nights / 5 Days", places: "Male, Resort Island", tag: "Tropical paradise", img: "maldives.jpg", c: ["#0E7490", "#A5F3FC"], inc: ["Overwater villa option", "Speedboat transfer", "Meal plans"] },
    { name: "Dubai", region: "world", days: "4 Nights / 5 Days", places: "Dubai City, Desert Safari, Marina, Abu Dhabi", tag: "Most asked", img: "dubai.jpg", c: ["#78350F", "#FCD34D"], inc: ["Visa help", "Desert safari", "Dhow cruise"] },
    { name: "Thailand", region: "world", days: "5 Nights / 6 Days", places: "Pattaya, Bangkok, Coral Island", tag: "Value pick", img: "thailand.jpg", c: ["#7C2D12", "#F472B6"], inc: ["Coral Island tour", "City tour", "Transfers"] },
    { name: "Bali", region: "world", days: "5 Nights / 6 Days", places: "Kuta, Ubud, Nusa Penida", tag: "Honeymoon", img: "bali.jpg", c: ["#14532D", "#FDE68A"], inc: ["Pool villa option", "Ubud tour", "Transfers"] },
    { name: "Singapore & Malaysia", region: "world", days: "6 Nights / 7 Days", places: "Singapore, Kuala Lumpur, Genting", tag: "Kids love it", img: "singapore.jpg", c: ["#312E81", "#F87171"], inc: ["Universal Studios", "Night Safari", "City tours"] },
    { name: "Europe", region: "world", days: "10 Nights / 11 Days", places: "Paris, Switzerland, Italy", tag: "Dream trip", img: "europe.jpg", c: ["#1E293B", "#C4B5FD"], inc: ["Schengen visa help", "Eiffel Tower", "Mt. Titlis"] }
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
        "url('assets/img/" + p.img + "'), linear-gradient(135deg, " + p.c[0] + ", " + p.c[1] + ")";
      img.setAttribute("role", "img");
      img.setAttribute("aria-label", p.name + " holiday");
      img.appendChild(el("span", "pkg__tag", p.tag));
      img.appendChild(el("span", "pkg__days", p.days));

      var body = el("div", "pkg__body");
      body.appendChild(el("h3", "", p.name));
      body.appendChild(el("p", "pkg__places", p.places));
      var inc = el("ul", "pkg__inc");
      p.inc.forEach(function (i) { inc.appendChild(el("li", "", i)); });
      body.appendChild(inc);

      var foot = el("div", "pkg__foot");
      var price = el("span", "pkg__price", "Price");
      price.appendChild(el("b", "", "On request"));
      var btn = el("a", "btn btn--sm btn--accent", "Enquire");
      btn.href = waLink("Hi Vinayak Holiday, please share details and price for the " + p.name + " package (" + p.days + ").");
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
        "Destination: " + d.get("destination"),
        "Travel month: " + monthText,
        "Travellers: " + (d.get("pax") || "Not given")
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
