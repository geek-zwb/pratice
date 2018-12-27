import React from 'react';

class SVG extends React.Component {
  render () {
    return (
        <div>
          <svg version="1.1"
               baseProfile="full"
               width="500" height="500"
               style={{background: '#ccc'}}
               xmlns="http://www.w3.org/2000/svg">
            {/*<circle cx="10" cy="10" r="2" fill="red"/>*/}
            {/*<path d="M 10 10 V 90 H 90 V 10" fill="transparent" stroke="black"/>*/}
            <path d="M10 100 H 90 V 190 H 10 Z" fill="transparent" stroke="black"/>

            <circle cx="10" cy="80" r="2" fill="red"/>
            <circle cx="180" cy="80" r="2" fill="red"/>
            <circle cx="95" cy="80" r="2" fill="red"/>

            {/*<path d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent"/>*/}

            <path d="M10 80 Q 95 10 180 80" stroke="black" fill="transparent"/>
            <path d="M10 80 Q 52.5 10, 95 80 T 180 80" stroke="black" fill="transparent"/>
          </svg>
          <svg version="1.1"
               baseProfile="full"
               width="500" height="500"
               xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="red" />

            <circle cx="150" cy="100" r="80" fill="green" />

            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

            <polyline points="0 110, 65 120, 70 115, 75 130, 80 125, 85 140, 90 135, 95 150, 100 145" fill="white"/>

            <polygon points="50 160, 55 180, 70 180, 60 190, 65 205, 50 195, 35 205, 40 190, 30 180, 45 180"/>

            <path d="M 20 230 Q 40 205, 50 230 T 90 230" fill="white"/>
          </svg>
        </div>
    );
  }
}

export default SVG;