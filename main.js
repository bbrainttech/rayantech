const animate_cards = () => {
  let project_cards = q('.projects .cards .card', 0), cards = q('.projects .cards');
  cards.onmousemove = e => {
    for (const card of project_cards) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`)
      card.style.setProperty('--mouse-y', `${y}px`)
    }
  }
};
animate_cards();

const initiate_swiping = (element, gap) => {
  new Swiper(element,
    {
      slidesPerView: 3,
      spaceBetween: gap,
      loop: true,
      centerSlide: true,
      fade: true,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        850: {
          slidesPerView: 2,
        },
        1300: {
          slidesPerView: 3,
        },
      }
    });
};

initiate_swiping('.slide_contents', 35)

document.addEventListener("DOMContentLoaded", () => {
  new ApexCharts(q("#reportsChart"), {
    series: [{
      name: 'Frontend developer',
      data: [27, 44, 32, 55, 46, 86, 72],
    }, {
      name: 'Sales',
      data: [13, 35, 48, 35, 42, 65, 44]
    }, {
      name: 'Animation',
      data: [3, 22, 34, 47, 36, 54, 33]
    }, {
      name: 'Graphic designing',
      data: [16, 12, 23, 19, 40, 25, 12]
    }],
    chart: {
      height: 500,
      type: 'area',
      toolbar: {
        show: false
      },
    },
    markers: {
      size: 4
    },
    colors: ['#0dcaf0', '#2eca6a', '#ff771d', '#2f80f9'],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: .5,
        opacityTo: .2,
        stops: [0, 90, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 1
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    }
  }).render();
});
q("video",0).forEach(video => {
  video.oncontextmenu = (e)=>{e.preventDefault();}
});