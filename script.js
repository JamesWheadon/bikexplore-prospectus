function addOverviewImage() {
    let numOverviewImages = document.getElementsByClassName('overviewImages').length
    let imageInputLabel = `<label for="overviewImage${numOverviewImages + 1}">URL for image for overview tab:</label>`
    let imageInput = `<input name="overviewImage${numOverviewImages + 1}" id="overviewImage${numOverviewImages + 1}" class="OverviewImages" placeholder="URL of an image for the overview tab"/>`
    document.getElementById('overviewImagesDiv').innerHTML += imageInputLabel;
    document.getElementById('overviewImagesDiv').innerHTML += imageInput;
    document.getElementById('overviewImagesDiv').innerHTML += "<br>";
}