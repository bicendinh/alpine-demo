function initData() {
    return {
        product: {
            "name": "Full Cut Panty",
            "galleries": [
                "https://thygesen.com.vn/wp-content/uploads/2023/082/custom-full-cut-panty-manufacturing-sexy-black-underwear.webp",
                "https://thygesen.com.vn/wp-content/uploads/2023/082/custom-full-cut-panty-manufacturing-premium-quality.webp",
                "https://thygesen.com.vn/wp-content/uploads/2023/082/custom-full-cut-panty-manufacturing-comfortable-feeling.webp",
                "https://thygesen.com.vn/wp-content/uploads/2023/082/custom-full-cut-panty-manufacturing-various-style.webp"
            ],
            "description": "<p>Embrace the perfect combination of fit, comfort, and quality with our Full Cut Panties Manufacturing.</p><br/></p>Throughout our manufacturing process, we consistently employ premium-quality fabrics to ensure a superior product. The lightweight nylon fabric used in these panties feels incredibly smooth and silky against the skin, providing a luxurious wearing experience. To enhance the garment’s durability and flexibility, we incorporate spandex, which adds strength and allows for optimal stretch. The generous cut of our panties delicately shapes and conforms to the body’s natural contours, ensuring they stay in place without slipping or riding up.</p>",
            "attributes": [
                { "label": "Material", "text": "90% Nylon + 10% Spandex or any other blend as per customer’s requirement" },
                { "label": "Functionality", "text": "Soft, smooth, no irritation, no bouncing, no chafing" },
                { "label": "Size", "text": "All sizes available." },
                { "label": "Customization", "text": "Customized printings/colors as per client’s requirements." }
            ]

        },
        activeSlide: 0,
        activeThumbnails: true,
        openGalleries: false,
        initSlider() {
            // Initialize the slider
            this.$nextTick(() => {
                new Splide(this.$el, {
                    direction: 'ttb', // Top to bottom
                    heightRatio: 1, // 1:1 aspect ratio
                }).mount();
            });
        },
        next() {
            if (this.activeSlide < this.product.galleries.length - 1) {
                this.activeSlide++;
            }
        },
        prev() {
            if (this.activeSlide > 0) {
                this.activeSlide--;
            }
        },
        changeSlide(index) {
            this.activeSlide = index;
        },
    };
}