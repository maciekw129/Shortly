const createLinkElement = (link, shortLink) => {
    const linksContainer = document.querySelector('.main__links-container');

    const listItemElement = document.createElement('li');
    const linkElement = document.createElement('p');
    const shortLinkElement = document.createElement('a');
    const copyButtonElement = document.createElement('button');
    const rightContainer = document.createElement('div');

    linkElement.appendChild(document.createTextNode(link));
    shortLinkElement.appendChild(document.createTextNode(shortLink));
    copyButtonElement.appendChild(document.createTextNode('Copy'));

    listItemElement.classList.add("main__link-item");
    rightContainer.classList.add("main__link");
    shortLinkElement.classList.add("main__short-link");
    copyButtonElement.classList.add("button");
    copyButtonElement.classList.add("button--small-border-radius");
    copyButtonElement.classList.add("link-button");

    copyButtonElement.addEventListener('click', () => {
        navigator.clipboard.writeText(shortLink);
        document.querySelectorAll('.link-button').forEach(button => {
            button.innerText = 'Copy';
        })
        copyButtonElement.innerText = 'Copied!';
    })

    shortLinkElement.href = shortLink;

    rightContainer.appendChild(shortLinkElement);
    rightContainer.appendChild(copyButtonElement);
    listItemElement.appendChild(linkElement);
    listItemElement.appendChild(rightContainer);
    linksContainer.appendChild(listItemElement);
}

export default createLinkElement;