import _ from 'lodash';
import './style.css';
import png from '../assets/img/xiari.png';

function component() {
    const ele = document.createElement('div');
    ele.innerHTML = _.join(['Hello', 'winter'], ' ');
    ele.classList.add('hello');

    // add img
    const img = new Image();
    img.src = png;
    ele.appendChild(img);

    return ele;
}

document.body.appendChild(component());
