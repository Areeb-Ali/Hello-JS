const container = document.createElement('div');
document.body.appendChild(container);

const heading = document.createElement('h1');
heading.textContent = 'Code and Live Website';
container.appendChild(heading);

const message = document.createElement('p');
message.textContent = 'Code has been shifted to a separate repository.';
container.appendChild(message);

const codeButton = document.createElement('button');
codeButton.textContent = 'See Code';
container.appendChild(codeButton);

const websiteButton = document.createElement('button');
websiteButton.textContent = 'See Live Website';
container.appendChild(websiteButton);

// Handle button clicks (replace with actual links)
codeButton.addEventListener('click', () => {
  window.open('https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories', '_blank'); // Replace with your code repository URL
});

websiteButton.addEventListener('click', () => {
  window.open('https://themeisle.com/blog/what-is-a-website-url/', '_blank'); // Replace with your website URL
});
