(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);



function openOffer() {
    document.getElementById('offerContainer').style.display = 'flex';
    document.getElementById('mainContent').classList.add('blur-background');
    document.body.style.overflow = 'hidden';
}

function closeOffer() {
    document.getElementById('offerContainer').style.display = 'none';
    document.getElementById('mainContent').classList.remove('blur-background');
    document.body.style.overflow = 'auto';
}

function claimOffer() {
    window.location.href = "hireme.html"; // Replace with your actual form link
}

// Optional: Automatically open popup after few seconds
window.onload = function() {
    setTimeout(openOffer, 2000); // 2 seconds delay
}

const offer = document.querySelector('.moving-offer');
offer.innerHTML = `<span>${offer.innerHTML}</span>`;
let lines = [
    "🎉 Special Offer: Get 30% OFF on all services! 🎉",
    "🚀 Hurry Up! Limited Time Deal is Waiting for You! 🚀"
];

let currentLine = 0;
const movingText = document.getElementById('movingText');

function changeLine() {
    movingText.innerHTML = lines[currentLine];
    currentLine = (currentLine + 1) % lines.length;
}

// First load
changeLine();

// Change every 5 seconds
setInterval(changeLine, 5000);

function createFlower() {
    const flower = document.createElement("img");
    flower.src = "./img/flower.png"; // your flower image path
    flower.classList.add("flower");

    // Random starting position
    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.animationDuration = (Math.random() * 3 + 3) + "s"; // 3-6s fall time

    document.body.appendChild(flower);

    // Remove flower after animation
    setTimeout(() => {
        flower.remove();
    }, 6000);
}

setInterval(createFlower, 300);

$('#videoModal').on('show.bs.modal', function (e) {
    var videoSrc = $(e.relatedTarget).data("src");
    $("#video").attr('src', videoSrc + "?autoplay=1&modestbranding=1&rel=0");
});

// When modal closes
$('#videoModal').on('hidden.bs.modal', function () {
    $("#video").attr('src', '');
});

