import padStart from 'lodash/padStart';

export function ms2Time(milliseconds) {
    let time = milliseconds;
    const ms = milliseconds % 1000;
    time = (time - ms) / 1000;
    const seconds = time % 60;
    time = (time - seconds) / 60;
    const minutes = time % 60;
    time = (time - minutes) / 60;
    const hours = time % 60;

    return `${padStart(hours, 2, '0')} : ${padStart(minutes, 2, '0')} : ${padStart(seconds, 2, '0')} : ${padStart(ms, 3, '0')}`;
}
