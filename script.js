function addOverviewImage() {
    let numOverviewImages = document.getElementsByClassName('overviewImages').length;
    
    let imageInputLabel = document.createElement('label');
    imageInputLabel.setAttribute('for', `overviewImage${numOverviewImages + 1}`);
    imageInputLabel.textContent = `URL for image for overview tab`;

    let imageInput = document.createElement('input');
    imageInput.setAttribute('name', `overviewImage${numOverviewImages + 1}`)
    imageInput.setAttribute('id', `overviewImage${numOverviewImages + 1}`)
    imageInput.setAttribute('class', `OverviewImages`)
    imageInput.setAttribute('type', `text`)
    imageInput.setAttribute('placeholder', `URL of an image for the overview tab`)

    document.getElementById('overviewImagesDiv').appendChild(imageInputLabel);
    document.getElementById('overviewImagesDiv').appendChild(imageInput);
    document.getElementById('overviewImagesDiv').appendChild(document.createElement('br'));
}

function addItineraryDay() {
    let numItineraryDays = document.getElementsByClassName('itineraryDays').length;

    let dayContainer = document.createElement('div');

    document.getElementById('itineraryDaysDiv').appendChild(dayContainer);

    const dayFieldContent = [['itineraryDay', 'Day title:', 'Title for this day'], 
    ['dayHighlight', 'Day highlight:', 'Highlights for this day'], 
    ['daySummary', 'Day summary:', 'Summary for this day'], 'checkbox', 
    ['dayAccom', 'Accommodation:', 'Accomodation for this day'], 
    ['dayMeals', 'Meals provided:', 'Meals provided for this day'], 
    ['dayDistance', 'Cycling distance:', 'How long is this day\'s route'], 
    ['dayClimb', 'Altitude gain:', 'What is the altitude gain for this day\'s route'], 
    ['dayImage', 'Image for this day:', 'URL for the Image for this day'], 
    ['dayMap', 'Map for this day:', 'URL for the Map for today'], 
    ['dayProfile', 'Profile for this day:', '"URL for the Elevation Profile for today']];

    for (const day of dayFieldContent) {
        if (day === 'checkbox') {
            let inputLabel = document.createElement('label');
            inputLabel.setAttribute('for', `dayCycling${numItineraryDays + 1}`);
            inputLabel.textContent = 'Check if there is a route for this day';

            let input = document.createElement('input');
            input.setAttribute('type', `checkbox`)
            input.setAttribute('name', `dayCycling${numItineraryDays + 1}`)
            input.setAttribute('id', `dayCycling${numItineraryDays + 1}`)
            input.setAttribute('placeholder', day[2])

            dayContainer.appendChild(inputLabel);
            dayContainer.appendChild(input);
            dayContainer.appendChild(document.createElement('br'));
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

            dayContainer.appendChild(inputLabel);
            dayContainer.appendChild(input);
            dayContainer.appendChild(document.createElement('br'));
        }
    }
}

function addPriceInc() {
    let numpriceInc = document.getElementsByClassName('priceIncludes').length;
    
    let priceIncLabel = document.createElement('label');
    priceIncLabel.setAttribute('for', `priceInc${numpriceInc + 1}`);
    priceIncLabel.textContent = `Price includes:`;

    let priceInc = document.createElement('input');
    priceInc.setAttribute('name', `priceInc${numpriceInc + 1}`);
    priceInc.setAttribute('id', `priceInc${numpriceInc + 1}`);
    priceInc.setAttribute('class', `priceIncludes`);
    priceInc.setAttribute('type', `text`);
    priceInc.setAttribute('placeholder', `What does price include`);

    document.getElementById('priceIncDiv').appendChild(priceIncLabel);
    document.getElementById('priceIncDiv').appendChild(priceInc);
    document.getElementById('priceIncDiv').appendChild(document.createElement('br'));
}

function addPriceNotInc() {
    let numpriceNotInc = document.getElementsByClassName('priceNotIncludes').length;
    
    let priceNotIncLabel = document.createElement('label');
    priceNotIncLabel.setAttribute('for', `priceNotInc${numpriceNotInc + 1}`);
    priceNotIncLabel.textContent = `Price includes:`;

    let priceNotInc = document.createElement('input');
    priceNotInc.setAttribute('name', `priceNotInc${numpriceNotInc + 1}`);
    priceNotInc.setAttribute('id', `priceNotInc${numpriceNotInc + 1}`);
    priceNotInc.setAttribute('class', `priceNotIncludes`);
    priceNotInc.setAttribute('type', `text`);
    priceNotInc.setAttribute('placeholder', `What does price include`);

    document.getElementById('priceNotIncDiv').appendChild(priceNotIncLabel);
    document.getElementById('priceNotIncDiv').appendChild(priceNotInc);
    document.getElementById('priceNotIncDiv').appendChild(document.createElement('br'));;
}

function addTableRow() {
    let numRows = document.getElementsByClassName('CancRow').length;
    let tableBody = document.getElementById("cancChargesBody");
    let newRow = document.createElement('tr');
    newRow.setAttribute('class', 'cancRow');
    let data1 = document.createElement('td');
    let data2 = document.createElement('td');

    let dateInput = document.createElement('input');
    dateInput.setAttribute('name', `cancDate${numRows}`);
    dateInput.setAttribute('id', `cancDate${numRows}`);
    dateInput.setAttribute('type', `text`);
    dateInput.setAttribute('placeholder', `When must notice be recieved by`);

    let chargeInput = document.createElement('input');
    chargeInput.setAttribute('name', `cancCharge${numRows}`);
    chargeInput.setAttribute('id', `cancCharge${numRows}`);
    chargeInput.setAttribute('type', `text`);
    chargeInput.setAttribute('placeholder', `What is the cancellation charge`);

    data1.appendChild(dateInput)
    newRow.appendChild(data1)

    data2.appendChild(chargeInput)
    newRow.appendChild(data2)

    tableBody.appendChild(newRow);
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
    contentInput.setAttribute('name', `holInforContent${numRows}`);
    contentInput.setAttribute('id', `holInforContent${numRows}`);
    contentInput.setAttribute('type', `text`);
    contentInput.setAttribute('placeholder', `Content of holiday information panel`);

    data1.appendChild(titleInput)
    newRow.appendChild(data1)

    data2.appendChild(contentInput)
    newRow.appendChild(data2)

    tableBody.appendChild(newRow);
}