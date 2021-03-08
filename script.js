function addOverviewImage() {
    let numOverviewImages = document.getElementsByClassName('overviewImages').length;
    
    let imageInputLabel = document.createElement('label');
    imageInputLabel.setAttribute('for', `overviewImage${numOverviewImages + 1}`);
    imageInputLabel.setAttribute('id', `overviewImageLabel${numOverviewImages + 1}`);
    imageInputLabel.textContent = `URL for image for overview tab`;

    let imageInput = document.createElement('input');
    imageInput.setAttribute('name', `overviewImage${numOverviewImages + 1}`)
    imageInput.setAttribute('id', `overviewImage${numOverviewImages + 1}`)
    imageInput.setAttribute('class', `overviewImages`)
    imageInput.setAttribute('type', `text`)
    imageInput.setAttribute('placeholder', `URL of an image for the overview tab`)

    document.getElementById('overviewImagesDiv').appendChild(imageInputLabel);
    document.getElementById('overviewImagesDiv').appendChild(imageInput);
}

function removeOverviewImage() {
    if (confirm("Delete the last overview image?")) {
        let numOverviewImages = document.getElementsByClassName('overviewImages').length;

        document.getElementById(`overviewImage${numOverviewImages}`).remove()
        document.getElementById(`overviewImageLabel${numOverviewImages}`).remove()
    }
}

function addItineraryDay() {
    let numItineraryDays = document.getElementsByClassName('itineraryDays').length;

    let dayContainer = document.createElement('div');
    dayContainer.setAttribute('class', 'itineraryDays')

    document.getElementById('itineraryDaysDiv').appendChild(dayContainer);

    let dayNumber = document.createElement('h3')
    dayNumber.textContent = `Day ${numItineraryDays + 1}`
    dayContainer.appendChild(dayNumber)

    const dayFieldContent = [['itineraryDay', 'Day title:', 'Title for this day', true], 
    ['dayHighlight', 'Day highlight:', 'Highlights for this day', false], 
    ['daySummary', 'Day summary:', 'Summary for this day', true], 
    ['checkbox', 'dayCycling', 'Is there is a route for this day?', true], 
    ['dayAccom', 'Accommodation:', 'Accomodation for this day', true], 
    ['dayMeals', 'Meals provided:', 'Meals provided for this day', true], 
    ['dayDistance', 'Cycling distance:', 'How long is this day\'s route', false], 
    ['dayClimb', 'Altitude gain:', 'What is the altitude gain for this day\'s route', false], 
    ['checkbox', 'dayImage', 'is there an Image for this day?', false], 
    ['checkbox', 'dayMap', 'is there a Map for this day?', false], 
    ['checkbox', 'dayProfile', 'is there a Profile for this day?', false]];

    for (const day of dayFieldContent) {
        if (day[0] === 'checkbox') {
            let inputLabel = document.createElement('label');
            inputLabel.setAttribute('for', `${day[1]}${numItineraryDays + 1}`);
            inputLabel.setAttribute('class', 'optional')
            inputLabel.textContent = `${day[2]}`;

            let input = document.createElement('input');
            input.setAttribute('type', `checkbox`)
            input.setAttribute('name', `${day[1]}${numItineraryDays + 1}`)
            input.setAttribute('id', `${day[1]}${numItineraryDays + 1}`)
            input.setAttribute('placeholder', day[2])

            dayContainer.appendChild(inputLabel);
            dayContainer.appendChild(input);
        }
        else if (day[0] === 'daySummary') {
            let inputLabel = document.createElement('label');
            inputLabel.setAttribute('for', `${day[0]}${numItineraryDays + 1}`);
            inputLabel.textContent = `${day[1]}`;

            let input = document.createElement('textarea');
            input.setAttribute('name', `${day[0]}${numItineraryDays + 1}`);
            input.setAttribute('id', `${day[0]}${numItineraryDays + 1}`);
            input.setAttribute('placeholder', day[2]);

            dayContainer.appendChild(inputLabel);
            dayContainer.appendChild(input);
        }
        else {
            let inputLabel = document.createElement('label');
            inputLabel.setAttribute('for', `${day[0]}${numItineraryDays + 1}`);
            inputLabel.textContent = day[1];

            let input = document.createElement('input');
            input.setAttribute('name', `${day[0]}${numItineraryDays + 1}`);
            input.setAttribute('id', `${day[0]}${numItineraryDays + 1}`);
            input.setAttribute('type', `text`);
            input.setAttribute('placeholder', day[2]);
            if (!day[3]){
                input.setAttribute('class', 'optional')
            }

            dayContainer.appendChild(inputLabel);
            dayContainer.appendChild(input);
        }
    }
    dayContainer.appendChild(document.createElement('hr'));
}

function removeItineraryDay() {
    if (confirm("Delete the itinerary day?")) {
        let days = document.getElementsByClassName('itineraryDays');
        days[days.length - 1].remove();
    }
}

function addPriceInc() {
    let numpriceInc = document.getElementsByClassName('priceIncludes').length;
    
    let priceIncLabel = document.createElement('label');
    priceIncLabel.setAttribute('for', `priceInc${numpriceInc + 1}`);
    priceIncLabel.setAttribute('id', `priceIncLabel${numpriceInc + 1}`)
    priceIncLabel.textContent = `Price includes:`;

    let priceInc = document.createElement('input');
    priceInc.setAttribute('name', `priceInc${numpriceInc + 1}`);
    priceInc.setAttribute('id', `priceInc${numpriceInc + 1}`);
    priceInc.setAttribute('class', `priceIncludes`);
    priceInc.setAttribute('type', `text`);
    priceInc.setAttribute('placeholder', `What does price include`);

    document.getElementById('priceIncDiv').appendChild(priceIncLabel);
    document.getElementById('priceIncDiv').appendChild(priceInc);
}

function removePriceInc() {
    if (confirm("Delete the item on the list?")) {
        let numpriceIncs = document.getElementsByClassName('priceIncludes').length;

        document.getElementById(`priceInc${numpriceIncs}`).remove()
        document.getElementById(`priceIncLabel${numpriceIncs}`).remove()
    }
}

function addPriceNotInc() {
    let numpriceNotInc = document.getElementsByClassName('priceNotIncludes').length;
    
    let priceNotIncLabel = document.createElement('label');
    priceNotIncLabel.setAttribute('for', `priceNotInc${numpriceNotInc + 1}`);
    priceIncLabel.setAttribute('id', `priceIncNotLabel${numpriceNotInc + 1}`)
    priceNotIncLabel.textContent = `Price includes:`;

    let priceNotInc = document.createElement('input');
    priceNotInc.setAttribute('name', `priceNotInc${numpriceNotInc + 1}`);
    priceNotInc.setAttribute('id', `priceNotInc${numpriceNotInc + 1}`);
    priceNotInc.setAttribute('class', `priceNotIncludes`);
    priceNotInc.setAttribute('type', `text`);
    priceNotInc.setAttribute('placeholder', `What does price include`);

    document.getElementById('priceNotIncDiv').appendChild(priceNotIncLabel);
    document.getElementById('priceNotIncDiv').appendChild(priceNotInc);
}

function removePriceNotInc() {
    if (confirm("Delete the last item on the list?")) {
        let numpriceNotIncs = document.getElementsByClassName('priceNotIncludes').length;

        document.getElementById(`priceNotInc${numpriceNotIncs}`).remove()
        document.getElementById(`priceNotIncLabel${numpriceNotIncs}`).remove()
    }
}

function addTableRow() {
    let numRows = document.getElementsByClassName('CancRow').length;
    let tableBody = document.getElementById("cancChargesBody");
    let newRow = document.createElement('tr');
    newRow.setAttribute('class', 'cancRow');
    let data1 = document.createElement('td');
    let data2 = document.createElement('td');

    let dateInput = document.createElement('input');
    dateInput.setAttribute('name', `cancDate${numRows + 1}`);
    dateInput.setAttribute('id', `cancDate${numRows + 1}`);
    dateInput.setAttribute('type', `text`);
    dateInput.setAttribute('placeholder', `When must notice be recieved by`);

    let chargeInput = document.createElement('input');
    chargeInput.setAttribute('name', `cancCharge${numRows + 1}`);
    chargeInput.setAttribute('id', `cancCharge${numRows + 1}`);
    chargeInput.setAttribute('type', `text`);
    chargeInput.setAttribute('placeholder', `What is the cancellation charge`);

    data1.appendChild(dateInput)
    newRow.appendChild(data1)

    data2.appendChild(chargeInput)
    newRow.appendChild(data2)

    tableBody.appendChild(newRow);
}

function removeTableRow() {
    if (confirm('Delete the last table row?')) {
        let rows = document.getElementsByClassName('cancRow');
        rows[rows.length - 1].remove();
    }
}

function addTableRowHolInfo() {
    let numRows = document.getElementsByClassName('holInfoRow').length;
    let tableBody = document.getElementById("holInfoBody");
    let newRow = document.createElement('tr');
    newRow.setAttribute('class', 'holInfoRow');
    let data1 = document.createElement('td');
    let data2 = document.createElement('td');

    let titleInput = document.createElement('input');
    titleInput.setAttribute('name', `holInfoTitle${numRows}`);
    titleInput.setAttribute('id', `holInfoTitle${numRows}`);
    titleInput.setAttribute('type', `text`);
    titleInput.setAttribute('placeholder', `Title of information panel`);

    let contentInput = document.createElement('textarea');
    contentInput.setAttribute('name', `holInfoContent${numRows}`);
    contentInput.setAttribute('id', `holInfoContent${numRows}`);
    contentInput.setAttribute('type', `text`);
    contentInput.setAttribute('placeholder', `Content of holiday information panel`);

    data1.appendChild(titleInput)
    newRow.appendChild(data1)

    data2.appendChild(contentInput)
    newRow.appendChild(data2)

    tableBody.appendChild(newRow);
}

function removeTableRowHolInfo() {
    if (confirm('Delete the last table row for holiday information?')) {
        let rows = document.getElementsByClassName('holInfoRow');
        rows[rows.length - 1].remove();
    }
}

// Get the modal
let modal = document.getElementById("myModal");

// When the user clicks on the button, open the modal
function openModal() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}