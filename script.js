const slide = document.querySelectorAll('.carousel img');
        let slideindex = 0;
        let inter = null;

        document.addEventListener("DOMContentLoaded", (event) => {
            initalizer();
            if (typeof google !== 'undefined' && google.maps && typeof google.maps.Map === 'function') {
                Maps();
            } else {
                document.getElementById('map').addEventListener('load', Maps);
            }
        });

        function initalizer() {
            if (slide.length > 0) {
                slide[slideindex].classList.add("displayslide");
                inter = setInterval(slider, 3000);
            }
        }

        function slider() {
            slideindex++;

            if (slideindex >= slide.length) {
                slideindex = 0;
            }

            slide.forEach(sliders => {
                sliders.classList.remove("displayslide");
            });

            slide[slideindex].classList.add("displayslide");
        }

        function Maps() {
            var province = {lat: -6.200000, lng: 106.816666};
            var map = new google.maps.Map(document.getElementById("map"), {
                center: province,
                zoom: 15
            });
            var marker = new google.maps.Marker({
                position: province,
                map: map
            });
        }