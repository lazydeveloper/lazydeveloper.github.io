document.addEventListener('DOMContentLoaded', function () {
    // Fetch the Lunr index
    fetch('/lunr.json') // Updated path to lunr.json
        .then(response => response.json())
        .then(data => {
            // Initialize Lunr
            var idx = lunr(function () {
                this.ref('id')
                this.field('title', { boost: 10 })
                this.field('content')

                data.forEach(function (doc) {
                    this.add(doc)
                }, this)
            });

            // Handle search input
            var searchInputDesktop = document.getElementById('search-input-desktop');
            var searchInputMobile = document.getElementById('search-input-mobile');

            function performSearch(query) {
                var results = idx.search(query);
                displayResults(results);
            }

            function displayResults(results) {
                // Implement the logic to display search results
                // For example, update the DOM with the search results
            }

            if (searchInputDesktop) {
                searchInputDesktop.addEventListener('input', function () {
                    performSearch(searchInputDesktop.value);
                    handleSearchDropdownDisplay(searchInputDesktop.value.trim().length > 0, 'search-dropdown-desktop');
                });
            }

            if (searchInputMobile) {
                searchInputMobile.addEventListener('input', function () {
                    performSearch(searchInputMobile.value);
                    handleSearchDropdownDisplay(searchInputMobile.value.trim().length > 0, 'search-dropdown-mobile');
                });
            }
        });

    // Function to handle search dropdown display
    function handleSearchDropdownDisplay(show, dropdownId) {
        var searchDropdown = document.getElementById(dropdownId);
        if (show) {
            searchDropdown.style.display = 'block';
        } else {
            searchDropdown.style.display = 'none';
        }
    }

    // Close search dropdown when clicking outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.search')) {
            document.getElementById('search-dropdown-desktop').style.display = 'none';
            document.getElementById('search-dropdown-mobile').style.display = 'none';
        }
    });
});
