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
    priceNotIncLabel.setAttribute('id', `priceNotIncLabel${numpriceNotInc + 1}`)
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

function openModalTitle() {
    let modalContent = document.getElementById('modalText');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    p1.textContent = "Welcome to the prospectus maker for Bikexplore tour leaders. Filling in this form will allow you to generate a prospectus to display to potential customers. Go through the form, filling in the information fields below. Any field with a red background is an essential field and must be filled in, the other fields in green are optional and can be left blank.";
    p2.textContent = "Once you have filled in the form, hit preview to view what your tour prospectus will look like on the Bikexplore website. When you are happy with your prospectus, save the page and email the saved file to Neil.";
    p3.textContent = "Below, you can see 3 optional fields asking for URLs of folders for any images, maps and elevation profiles you would like to use for the itinerary tab. If you choose to use images for your itinerary, make sure that they are saved in the required form eg day4image.jpg";
    modalContent.appendChild(p1);
    modalContent.appendChild(p2);
    modalContent.appendChild(p3);
    openModal();
}

function openModalOverview() {
    let modalContent = document.getElementById('modalText');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    p1.textContent = "This section covers the information required for the holiday overview tab of the prospectus. This section gives customers a quick look at the tour, it is your first chance to really sell the tour. This tab will have the tour leader's name, as well as the dates of the tour and a summary of the tour.";
    p2.textContent = "You are able to add images to the overview tab by clicking the first button below to open up a field in which you paste the full URL of the image you want. If you make too many new rows, the second button will remove the last row you made.";
    p3.textContent = "There are also optional fields for a tour prospectus, booking form and booking conditions. If these are left blank, Neil will use this form to generate a prospectus for the holiday and insert the standard Bikexplore booking form and booking conditions.";
    modalContent.appendChild(p1);
    modalContent.appendChild(p2);
    modalContent.appendChild(p3);
    openModal();
}

function openModalItinerary() {
    let modalContent = document.getElementById('modalText');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    p1.textContent = "This section creates the itinerary tab for the website, this gives customers an idea of what each day of your tour will be like. Click the button below to add a day to the form. If you make too many days, you are able to delete them again by pressing the second button below.";
    p2.textContent = "Each day requires a day title, even if this is just Day 1, a summary of what the customer can expect on that day and the accomodation for that night and the meals that are provided. There is an optional field to add a highlight or two of the day if you want something to stand out.";
    p3.textContent = "There is a checkbox to indicate wether there is a route planned for that day, and if there is a route then there are two furhter fields below for you to insert the route distance in kilometres and the route altitude gain in metres. These are optional but encouraged, you are selling cycling holidays after all.";
    p4.textContent = "Finally, there are 3 checkboxes that let you choose if you want to have an image, map and/or elevation profile for that day. PLEASE NOTE that you can only check yes to these if there is a folder provided for the picture you want to use. e.g. if you want a map for day 4, you must have given a URL for the folder containing all the maps, and there must be a map called day4map.png in there."
    modalContent.appendChild(p1);
    modalContent.appendChild(p2);
    modalContent.appendChild(p3);
    modalContent.appendChild(p4);
    openModal();
}

function openModalDandP() {
    let modalContent = document.getElementById('modalText');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    p1.textContent = "This section covers any topics relating to payment dates, cost, and what customers get for that price. The two fields related to the price of the tour are marked as optional, but if you want people to pay you its a good idea to fill in at least 1.";
    p2.textContent = "For the other sections in this tab, there are individual information panels to clarify what you have to do.";
    modalContent.appendChild(p1);
    modalContent.appendChild(p2);
    openModal();
}

function openModalPriceInc() {
    let modalContent = document.getElementById('modalText');
    let p1 = document.createElement('p');
    p1.textContent = "Here you can let customers know what that price gets them on this tour, as well as a great holiday. Keep adding things that the price gets them by clicking the \"Add another field\" button. If you add a few too many, just take off the bottom ones with the \"Remove the last item\" button.";
    modalContent.appendChild(p1);
    openModal();
}

function openModalPriceNotInc() {
    let modalContent = document.getElementById('modalText');
    let p1 = document.createElement('p');
    p1.textContent = "Id hope someone who leads cycle tours can work out how this section works given what you just did, but just in case: Here you can let customers know what that price does not include for tour. Maybe you want to point out that ceremonial scottish kilts are an extra they have to pay for? Keep adding things that the price gets them by clicking the \"Add another field\" button. If you add a few too many, just take off the bottom ones with the \"Remove the last item\" button.";
    modalContent.appendChild(p1);
    openModal();
}

function openModalCancCharges() {
    let modalContent = document.getElementById('modalText');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    p1.textContent = "If your customers cancel after all your hard effort, you are going to want to keep some money so you arent out of pocket. Here you can tell people just how much you will keep if they choose to pull out. Add and remove rows to the table using the buttons, sound familiar?. The first column contains the date by which you must recieve written notice of the cancellation, the second column showing how much you will charge the customer for cancelling by this date.";
    p2.textContent = "Finally, you must tell people how to make a booking, or all your planning is wasted because no one will be able to come on your tour.";
    modalContent.appendChild(p1);
    openModal();
}

function openModalHolInfo() {
    let modalContent = document.getElementById('modalText');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    p1.textContent = "HOME STRETCH!!! Last few things to do before you can get rid of my snarky \"help\" buttons. Here you can make an FAQ style resource for your potential customers to answer and burning questions they have so your inbox doesnt get set on fire by 1000 potential patrons postulating problematically (its late ive been coding all day shut up). Blah blah buttons you know it I know it lets get on with it.";
    p2.textContent = "The first column, the 'title of information' is the question that you think customers might want to know the answer to. The second column is where you put the answer to that question.";
    p3.textContent = "Then, once you are done, hit the preview button to see what your prospectus will look like on Bikexplore.co.uk. Go back and make any changes you want to until you are happy with the finished product, then hit save and send it to Neil where he *cough*James*cough* will perform technical wizardry and BOOM WEBSITE STUFF. You're welcome."
    modalContent.appendChild(p1);
    modalContent.appendChild(p2);
    modalContent.appendChild(p3);
    openModal();
}

function openModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function closeModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
    let modalContent = document.getElementById('modalText');
    modalContent.innerHTML = "";
}

window.onclick = function(event) {
    let modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
        let modalContent = document.getElementById('modalText');
        modalContent.innerHTML = "";
    }
}