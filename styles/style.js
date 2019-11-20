$('.slide').slick({
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1050,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        
    ]
});

$('.best_sellers-slide').slick({
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 1050,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    
    ]
});

const navSlide = () => {
    const burger = document.querySelector(".burger")
    const navList = document.querySelector(".main_nav-list");
    burger.addEventListener("click", () => {
        navList.classList.toggle("main_nav-list--show");
        burger.classList.toggle("toggler");
    });
}
navSlide();

var mybutton = document.getElementById("myBtn");


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        mybutton.style.opacity = "1";
    } else {
        mybutton.style.opacity = "0";
    }
}

function topFunction(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function () {
            if (window.scrollY != 0) {
                window.scrollBy(0, scrollStep);
            }
            else clearInterval(scrollInterval);
        }, 15);
}