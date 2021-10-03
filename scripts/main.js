function setEmailAddressOnElement() {
  var email = ['m','a','i','l','t','o',':','j','o','s','e','.','v','a','z','q','u','e','z','.','d','e','v','@','g','m','a','i','l','.','c','o','m'];
  var anchorElement = document.getElementById('email');

  anchorElement.addEventListener('mouseover', function() {
    anchorElement.href = email.join('');
  });

  anchorElement.addEventListener('mouseleave', function() {
    anchorElement.href = '#';
  });
}

document.addEventListener('DOMContentLoaded', setEmailAddressOnElement);
