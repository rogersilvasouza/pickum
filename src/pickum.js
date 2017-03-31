var $address;

// $address = document.getElementsByTagName('address');

function holdDownAddress() {

    alert('touch');

}

function loadPage() {

    $address = document.getElementById('pickum');

    $address.addEventListener('touchstart', holdDownAddress, false);

}

document.addEventListener('DOMContentLoaded', loadPage, false);
