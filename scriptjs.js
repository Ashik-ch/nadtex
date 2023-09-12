$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 10) {
      $(".navbar").addClass("active");
    } else {
      $(".navbar").removeClass("active");
    }
  });
});

// caresose;kl
//
// // Params
// let mainSliderSelector = ".main-slider",
//   navSliderSelector = ".nav-slider",
//   interleaveOffset = 0.5;

// // Main Slider
// let mainSliderOptions = {
//   loop: true,
//   speed: 1000,
//   autoplay: {
//     delay: 3000,
//   },
//   loopAdditionalSlides: 10,
//   grabCursor: true,
//   watchSlidesProgress: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   on: {
//     init: function () {
//       this.autoplay.stop();
//     },
//     imagesReady: function () {
//       this.el.classList.remove("loading");
//       this.autoplay.start();
//     },
//     slideChangeTransitionEnd: function () {
//       let swiper = this,
//         captions = swiper.el.querySelectorAll(".caption");
//       for (let i = 0; i < captions.length; ++i) {
//         captions[i].classList.remove("show");
//       }
//       swiper.slides[swiper.activeIndex]
//         .querySelector(".caption")
//         .classList.add("show");
//     },
//     progress: function () {
//       let swiper = this;
//       for (let i = 0; i < swiper.slides.length; i++) {
//         let slideProgress = swiper.slides[i].progress,
//           innerOffset = swiper.width * interleaveOffset,
//           innerTranslate = slideProgress * innerOffset;

//         swiper.slides[i].querySelector(".slide-bgimg").style.transform =
//           "translateX(" + innerTranslate + "px)";
//       }
//     },
//     touchStart: function () {
//       let swiper = this;
//       for (let i = 0; i < swiper.slides.length; i++) {
//         swiper.slides[i].style.transition = "";
//       }
//     },
//     setTransition: function (speed) {
//       let swiper = this;
//       for (let i = 0; i < swiper.slides.length; i++) {
//         swiper.slides[i].style.transition = speed + "ms";
//         swiper.slides[i].querySelector(".slide-bgimg").style.transition =
//           speed + "ms";
//       }
//     },
//   },
// };
// let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

// // Navigation Slider
// let navSliderOptions = {
//   loop: true,
//   loopAdditionalSlides: 10,
//   speed: 1000,
//   spaceBetween: 5,
//   slidesPerView: 5,
//   centeredSlides: true,
//   touchRatio: 0.2,
//   slideToClickedSlide: true,
//   direction: "vertical",
//   on: {
//     imagesReady: function () {
//       this.el.classList.remove("loading");
//     },
//     click: function () {
//       mainSlider.autoplay.stop();
//     },
//   },
// };
// let navSlider = new Swiper(navSliderSelector, navSliderOptions);

// // Matching sliders
// mainSlider.controller.control = navSlider;
// navSlider.controller.control = mainSlider;

// slideer

$(".overlay").addClass("overlay-blue");

// DATA

var product = [
  {
    img: "assets/a.jpg",
    title: "GEOTEXTILE ",
    decreption:
      "Geotextiles are permeable fabrics made from synthetic materials, such as polyester or polypropylene. They are commonly used in civil engineering and environmental projects to improve soil stability, drainage, filtration, and erosion control",
  },
  {
    img: "assets/n.webp",
    title: "Geomembrane  ",
    decreption:
      "Geomembranes are synthetic membranes used in construction and environmental engineering projects for their impermeable properties. They are made from a variety of materials, including high-density polyethylene (HDPE), linear low-density polyethylene (LLDPE), polyvinyl chloride (PVC), and ethylene propylene diene terpolymer (EPDM) ",
  },
  {
    img: "assets/geocell.jpeg",
    title: "GEOCELL ",
    decreption:
      "GEOCELL is a three-dimensional, lightweight, and flexible material consisting of polyethylene strips, ultrasonically bonded to form the shape of honeycomb.",
  },
  {
    img: "assets/GCL.jpg",
    title: "GCL – GEOSYNTHETIC CLAY LINER ",
    decreption:
      "A geosynthetic clay liner (GCL) is comprised of two geotextiles that are needle punched together, encapsulating a layer of sodium bentonite clay between them. GCLs are known for having consistent, very low permeability. They have the unique ability to seal around penetrations, self-heal punctures, and self-seam at the overlaps.",
  },
  {
    img: "assets/e.webp",
    title: "SALT BARRIER / GEOCOMPOSITE ",
    decreption:
      "A Salt Barrier / Geocomposite consists of combination of one or more geosynthetics, specifically a geogrid, a geotextile, a geomembrane, and / or a geonet to perform multiple number of geosynthetic functions such as separation, reinforcement, filtration, drainage and containment.",
  },
  {
    img: "assets/f.png",
    title: "FIBERGLASS GEOGRID  ",
    decreption:
      "FIBERGLASS GEOGRID is made of high strength Glass Fiber with specially designed polymer coating. A unique feature is the pressure sensitive adhesive backing of the grid, which ensures a quick and efficient installation and provides an excellent bond with the surface. It can be installed directly on an old asphalt surface or on a levelling course. For the application on a concrete pavement, the installation of a levelling course is recommended. ",
  },
  {
    img: "assets/h.jpg",
    title: "EXTRUDED HDPE FOIL + GEOTEXTILE ",
    decreption:
      "The design of an extruded HDPE foil with Geotextile are based on a dimpled geomembrane being a synthetic barrier and a geotextile layer combined with it. The specificity of these geocomposites lies in their thickness/height (the height of dimples is approx. 20 mm), so an amount of more than 12 l/ms of water can be drained. This product is well-known on the market, are designed to drain groundwater or rainwater to further drainage systems, thereby protecting civil engineering structures, bridge, and tunnel abutments, against moisture and damp.",
  },
  {
    img: "assets/i.jpg",
    title: "COMPOSITE DIMPED GEOMEMBRANE ",
    decreption:
      " Composite Dimpled Geomembrane used for the construction of green roof systems. Specially developed dense perforation of approximately 400 holes/m2 in the top part of the membrane, ensures the excess water to flow to the bottom (drainage) side of the green roof system, preventing water retention in the form of spills during heavy rainfall. ",
  },
  {
    img: "assets/j.jpeg",
    title: "DRAINAGE CELL ",
    decreption:
      " Drainage Cell functions as a protective membrane for waterproofing and provides ventilation to concrete slabs which eliminates head induced stress and cracking. Drain Cell is available in PP and HDPE ",
  },
  {
    img: "assets/HDPE DUCT SPACER.png",
    title: "HDPE DUCT SPACER ",
    decreption:
      " HDPE Duct Spacer is used to maintain a fixed separation between multiple parallel conduits or ducts that are laid underground or on overhead structures. ",
  },
  {
    img: "assets/l.jpg",
    title: "Underground Cable protection cover tiles ",
    decreption:
      " It is a heavy protection product manufactured from high impact virgin / medium impact recycled polyethylene. It is ideal for Optical Fibre and Heavy Electric cables. Cable Protection covers are fully jointed, laid overlapped and held firm with plastic pegs. ",
  },
  {
    img: "assets/m.jpg",
    title: "Detectable & non detectable warning tape ",
    decreption:
      " We have a wide range of Detectable & Non-Detectable Warning tape that can prevent the dangers of digging into buried utility lines of all type. These kinds of tape installed directly above. The utility and warns those digging to stop ",
  },
];

function generateCards() {
  var productContainer = document.getElementById("productContainer");

  product.forEach(function (item) {
    // Create a new card
    var card = document.createElement("div");
    card.className = "swiper-slide swiper-slide-active";
    card.style.width = "370px";
    card.style.marginRight = "30px";

    // Card content
    card.innerHTML = `
          <div class="service-1-block">
              <h4 class="service-1-title fs_25">${item.title}</h4>
              <div class="service-1-image">
                  <img src="${item.img}" class="img" alt="">
                  <p class="image-text">${item.decreption}</p>
              </div>
          </div>
      `;

    // Append the card to the product container
    productContainer.appendChild(card);
  });
}

// Call the function to generate cards
generateCards();
