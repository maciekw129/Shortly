import './styles/style.scss';

import illustrationWorking from './images/illustration-working.svg';
import brandRecognitionIcon from './images/icon-brand-recognition.svg';
import detailedRecordsIcon from './images/icon-detailed-records.svg';
import fullyCustomizableIcon from './images/icon-fully-customizable.svg';

import axios from 'axios';
import createLinkElement from './helpers/createLinkElement';

const mainButton = document.querySelector('.main__button');
const mainInput = document.querySelector('.main__input');

const form = document.querySelector('.main__input-wrapper');
form.onsubmit = formSubmit;

function formSubmit(event) {
    event.preventDefault();
    const link = document.querySelector('.main__input');
    axios.post(`https://api.shrtco.de/v2/shorten?url=${link.value}`)
    .then(response => {
        createLinkElement(link.value, response.data.result.full_short_link2);
        link.value = '';
    })
    .catch(error => {
        console.log(error)
    })
}
