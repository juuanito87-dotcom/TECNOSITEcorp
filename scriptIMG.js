const gallerycontainer = document.querySelector('.gallery-container');
const gallerycontrolscontainer = document.querySelector('.gallery-controls');
const gallerycontrols = ['prev', 'next'];
const galleryitems = document.querySelectorAll('.gallery-item');

class Carousel {
    constructor(container, items, controls) {
        this.Carouselcontainer = container;
        this.Carouselcontrols = controls;
        this.CarouselArray = [...items];
    }
    
    updategallery() {
        this.CarouselArray.forEach(el => {
            el.classList.remove('gallery-item-1', 'gallery-item-2', 'gallery-item-3', 'gallery-item-4', 'gallery-item-5');
        });

        this.CarouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`gallery-item-${i + 1}`);
        });
    }

    setCurrentState(direction) {
        if (direction.className === 'gallery-controls-prev') {
            this.CarouselArray.unshift(this.CarouselArray.pop());
        } else {
            this.CarouselArray.push(this.CarouselArray.shift());
        }
        this.updategallery();
    }

    setupcontrols() {
        this.Carouselcontrols.forEach(control => {
            const button = document.createElement('button');
            button.className = `gallery-controls-${control}`;
            button.innerText = control;
            gallerycontrolscontainer.appendChild(button);
        });
    }

    usecontrols() {
        const triggers = [...gallerycontrolscontainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    } 
}

const exampleCarousel = new Carousel(gallerycontainer, galleryitems, gallerycontrols);
exampleCarousel.setupcontrols();
exampleCarousel.usecontrols();