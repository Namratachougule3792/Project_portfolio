function showOverlay() {
      document.querySelector('.overlay').style.display = 'block';
      document.querySelector('.delete-message').style.display = 'block';
    }
    
    function hideOverlay() {
      document.querySelector('.overlay').style.display = 'none';
      document.querySelector('.delete-message').style.display = 'none';
    }
    

  function viewPost() {
      window.location.href = 'post.html';
    }

  function toggleDropdown(element) {
      var dropdown = element.parentNode.querySelector('.dropdown');
      dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
    }


    


    