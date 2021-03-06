function addOverviewImage() {
    let numOverviewImages = document.getElementsByClassName('overviewImages').length
    let imageInputLabel = document.createElement('label')
    let imageInput = `<input name="overviewImage${numOverviewImages + 1}" id="overviewImage${numOverviewImages + 1}" class="OverviewImages" placeholder="URL of an image for the overview tab"/>`
    document.getElementById('overviewImagesDiv').innerHTML += imageInput;
}