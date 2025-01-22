
    function toggleDetails(element) {
        const content = element.nextElementSibling; // Get the sibling `.project-content`
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            content.style.display = 'block';
        } else {
            content.classList.add('hidden');
            content.style.display = 'none';
        }
    }

