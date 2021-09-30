var breedImage=$('#breed-image');
var dropdown=$('#dog-breeds');
var allowSubmit=true;
var breed;

function fetchBreeds(data){
    let dogBreeds=data.message;
    for(let breed in dogBreeds){
        dropdown.append('<option value="'+breed+'">'+breed+'</option>')
    }
}

function fetchBreed(e){
    e.preventDefault();
    if(allowSubmit){
        breed=dropdown.val();
        displayDog(breed);
        allowSubmit=false;
    }
}

function showSameBreed(e){
    e.preventDefault();
    if(breed!==undefined){
        displayDog(breed);
    }
}

function fetchSameBreed(data){
    let imageUrl=data.message;
    breedImage.append('<img src="'+imageUrl+'" alt="'+breed+'">')
}

function displayDog(breed){
    let url='https://dog.ceo/api/breed/'+breed+'/images/random';
    $('#breed-image img').remove();
    $.get(url,fetchSameBreed);
}

$.get('https://dog.ceo/api/breeds/list/all',fetchBreeds);

dropdown.change(function(){
    allowSubmit=true;
});

$("form button").click(fetchBreed);

$("#next a").click(showSameBreed);