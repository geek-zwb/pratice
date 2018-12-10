import _ from 'lodash';
function component() {
    const ele = document.createElement('div');
    ele.innerHTML = _.join(['Hello', 'winter'], ' ');
    return ele;
}

document.body.appendChild(component());
