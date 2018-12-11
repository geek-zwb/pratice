import {join} from 'lodash';
import './style.css';
import png from '../assets/img/xiari.png';

function component() {
    const ele = document.createElement('div');
    ele.innerHTML = join(['Hello', 'winter'], ' ');
    ele.classList.add('hello');

    const icon = document.createElement('i');
    icon.classList.add('i-icon', 'i-icon-system');
    ele.insertBefore(icon, null);

    // add img
    const img = new Image();
    img.src = png;
    ele.appendChild(img);

    return ele;
}

document.body.appendChild(component());
