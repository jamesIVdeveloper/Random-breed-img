'use strict';

function getRandomBreed(inputValue) {
    let requiredUrl = `https://dog.ceo/api/breed/${inputValue}/images/random`

    fetch(requiredUrl)
        .then(response => response.json())
        .then(responseJson => displayImage(responseJson))
        .catch(error => alert('Sorry, breed not found.'));
}

function displayImage(responseJson) {
    console.log(responseJson);
    var image = new Image();
    image.src = responseJson.message;
    $('#container').append(image);
    
    $('.result').removeClass('hidden')
}

function watchForm() {
    $('form').submit(event => {
        $('#container').html('');
        event.preventDefault();
        let inputValue = $('#breed').val();
        getRandomBreed(inputValue);
    })
}

$(function() {
    console.log('App loaded.  Waiting for submit.');
    watchForm();
})
