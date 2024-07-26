import React, { useRef } from 'react';
import './ourgallery.css'; // Import your CSS file
import orphan from './orphanage.jpeg';

import orp11 from './orp11.jpeg';
import orp22 from './orp22.jpeg';
import orp333 from './orp333.jpeg';
import orph444 from './orp4.jpeg';


export default function OurGallery() {
    const sliderListRef = useRef(null);
    const thumbnailRef = useRef(null);

    // Function for moving the slider
    const moveSlider = (direction) => {
        const sliderList = sliderListRef.current;
        const thumbnail = thumbnailRef.current;

        if (direction === 'next') {
            sliderList.appendChild(sliderList.firstElementChild);
            thumbnail.appendChild(thumbnail.firstElementChild);
        } else {
            sliderList.insertBefore(sliderList.lastElementChild, sliderList.firstElementChild);
            thumbnail.insertBefore(thumbnail.lastElementChild, thumbnail.firstElementChild);
        }
    };

    return (
        <div className="slider mt-60">
            <div className="list grid flex flex-col items-center" ref={sliderListRef}>
                {/* Slide items */}
                <div className="item opacity-3">
                    <img src={orp11} alt="" className='' />
                    <div className="content">
                        <div className="title">MAGIC SLIDER</div>
                        <div className="type">FLOWER</div>
                        <div className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit...
                        </div>
                        <div className="button">
                            <button>SEE MORE</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src={orp22} alt="" />
                    <div className="content">
                        <div className="title">MAGIC SLIDER</div>
                        <div className="type">NATURE</div>
                        <div className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit...
                        </div>
                        <div className="button">
                            <button>SEE MORE</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src={orp333} alt="" />
                    <div className="content">
                        <div className="title">MAGIC SLIDER</div>
                        <div className="type">PLANT</div>
                        <div className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit...
                        </div>
                        <div className="button">
                            <button>SEE MORE</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src={orph444} alt="" />
                    <div className="content">
                        <div className="title">MAGIC SLIDER</div>
                        <div className="type">NATURE</div>
                        <div className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit...
                        </div>
                        <div className="button">
                            <button>SEE MORE</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="thumbnail" ref={thumbnailRef}>
                {/* Thumbnail items */}
                <div className="item">
                    <img src={orp11} alt="" />
                </div>
                <div className="item">
                    <img src={orp22} alt="" />
                </div>
                <div className="item">
                    <img src={orp333} alt="" />
                </div>
                <div className="item">
                    <img src={orph444} alt="" />
                </div>
            </div>

            {/* Next and Previous buttons */}
            <div className="nextPrevArrows">
                <button className="prev bg-rose-900" onClick={() => moveSlider('prev')}>
                    back
                </button>
                <button className="next" onClick={() => moveSlider('next')}>
                    next
                </button>
            </div>
        </div>
    );
}