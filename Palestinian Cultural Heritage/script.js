
    // Function to create heading and buttons dynamically
    function createElements() {
      const container = document.createElement('div');
      container.id = 'container';

      const heading = document.createElement('h1');
      heading.textContent = 'Code Shifted to Separate Repository';

      const viewCodeButton = document.createElement('button');
      viewCodeButton.id = 'view-code';
      viewCodeButton.textContent = 'View Code';

      const viewWebsiteButton = document.createElement('button');
      viewWebsiteButton.id = 'view-website';
      viewWebsiteButton.textContent = 'View Live Website';

      container.appendChild(heading);
      container.appendChild(viewCodeButton);
      container.appendChild(viewWebsiteButton);

      document.body.appendChild(container);
    }

    // Call the function to create elements
    createElements();

    // Add click event listeners to buttons (replace with your actual links)
    const viewCodeButton = document.getElementById('view-code');
    viewCodeButton.addEventListener('click', () => {
      window.open('#'); // Replace with your code repository link
    });

    const viewWebsiteButton = document.getElementById('view-website');
    viewWebsiteButton.addEventListener('click', () => {
      window.open('#'); // Replace with your live website link
    });