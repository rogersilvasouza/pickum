var $address;

// $address = document.getElementsByTagName('address');

function holdDownAddress() {

    alert('touch');

}

function loadPage() {

    $address = document.getElementById('pickum');

    $address.addEventListener('touchstart', holdDownAddress, false);

    $address.addEventListener('auxclick', holdDownAddress, false);

    $address.addEventListener('pointerlockchange', holdDownAddress, false);

    $address.addEventListener('click', holdDownAddress, false);

}

document.addEventListener('DOMContentLoaded', loadPage, false);
