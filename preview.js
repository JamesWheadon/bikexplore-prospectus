function preview() {
    refreshpreview();
    overviewTab();
    itineraryTab();
    datesPricesTab();
    holInfoTab();
    document.getElementById('preview').style.display = "block";
}

function refreshpreview() {
    let tabs = ['Overview', 'Itinerary', 'DandP', 'Info'];
    for (tab of tabs) {
        let tabDiv = document.getElementById(tab);
        tabDiv.innerHTML = "";
    }
}

function overviewTab() {
    let tourLeader = document.createElement('h1');
    tourLeader.textContent = document.getElementById('leaderName').value;
    document.getElementById('Overview').appendChild(tourLeader);

    let tourTitle = document.createElement('h1');
    tourTitle.textContent = document.getElementById('holidayTitle').value;
    document.getElementById('Overview').appendChild(tourTitle);

    let tourDates = document.createElement('h2');
    tourDates.textContent = document.getElementById('holidayDates').value;
    document.getElementById('Overview').appendChild(tourDates);

    let tourSummary = document.createElement('h5');
    tourSummary.textContent = document.getElementById('holidaySummary').value;
    document.getElementById('Overview').appendChild(tourSummary);

    let tourRatingValue = document.getElementById('rating').value;
    let tourRating = document.createElement('img');
    tourRating.setAttribute('class', 'Speedometer');
    tourRating.setAttribute('src', `https://www.bikexplore.co.uk/Portals/0/EasyGalleryImages/110/867/Speedo${tourRatingValue}.jpg`)
    tourRating.textContent = tourRatingValue;
    document.getElementById('Overview').appendChild(tourRating);

    let overviewImages = document.getElementsByClassName('OverviewImages');
    for (let image of overviewImages) {
        let overviewImage = document.createElement('img');
        overviewImage.setAttribute('class', 'map');
        overviewImage.setAttribute('src', image.value);
        document.getElementById('Overview').appendChild(overviewImage);
    }

    let prospectusURL = document.getElementById('holidayProspectus').value;
    if (prospectusURL != '') {
        let prospectus = document.createElement('a');
        prospectus.setAttribute('href', prospectusURL);
        prospectus.setAttribute('target', "_blank");
        prospectus.setAttribute('download', `${tourTitleName.split(' ').join('')}Prospectus`);
        prospectus.textContent = "Download Prospectus";
        document.getElementById('Overview').appendChild(prospectus);
    }

    let bookFormURL = document.getElementById('bookingForm').value;
    if (bookFormURL != '') {
        let bookForm = document.createElement('a');
        bookForm.setAttribute('href', bookFormURL);
        bookForm.setAttribute('target', "_blank");
        bookForm.setAttribute('download', `${tourTitleName.split(' ').join('')}BookingForm`);
        bookForm.textContent = "Download Booking Form";
        document.getElementById('Overview').appendChild(bookForm);
    }

    let bookCondURL = document.getElementById('bookingConditions').value;
    if (bookCondURL != '') {
        let bookCond = document.createElement('a');
        bookCond.setAttribute('href', bookCondURL);
        bookCond.setAttribute('target', "_blank");
        bookCond.setAttribute('download', `${tourTitleName.split(' ').join('')}BookingConditions`);
        bookCond.textContent = "Download Booking Conditions";
        document.getElementById('Overview').appendChild(bookCond);
    }
}

function itineraryTab() {
    let imageFolder = document.getElementById('imageFolder').value;
    let mapFolder = document.getElementById('mapFolder').value;
    let profileFolder = document.getElementById('profileFolder').value;
    let itineraryDays = document.getElementsByClassName('itineraryDays');
    for (let day in itineraryDays) {
        day++
        if (!isNaN(day)) {
            let dayContainer = document.createElement('div');

            let dayTitle = document.createElement('h3');
            dayTitle.textContent = document.getElementById(`itineraryDay${day}`).value;
            dayContainer.appendChild(dayTitle);

            let dayHighlight = document.createElement('h4');
            if (document.getElementById(`dayHighlight${day}`).value) {
                dayHighlight.textContent = document.getElementById(`dayHighlight${day}`).value;
                dayContainer.appendChild(dayHighlight);
            }

            let daySummary = document.createElement('p');
            daySummary.textContent = document.getElementById(`daySummary${day}`).value;
            dayContainer.appendChild(daySummary);

            let dayList = document.createElement('ul');
            dayList.setAttribute('class', 'itineraryList');

            if (document.getElementById(`dayCycling${day}`).checked) {
                let dayDistance = document.createElement('li');
                dayDistance.textContent = `Cycling Distance: ${document.getElementById(`dayDistance${day}`).value}`;
                dayList.appendChild(dayDistance);
                
                let dayClimb = document.createElement('li');
                dayClimb.textContent = `Altitude Gain: ${document.getElementById(`dayClimb${day}`).value}`;
                dayList.appendChild(dayClimb);
            }
            let dayAccom = document.createElement('li');
            dayAccom.textContent = `Accommodation: ${document.getElementById(`dayAccom${day}`).value}`;
            dayList.appendChild(dayAccom);
            
            let dayMeals = document.createElement('li');
            dayMeals.textContent = `Meals Provided: ${document.getElementById(`dayMeals${day}`).value}`;
            dayList.appendChild(dayMeals);

            dayContainer.appendChild(dayList);
            
            if (document.getElementById(`dayImage${day}`).checked) {
                let dayImage = document.createElement('img');
                dayImage.setAttribute('class', 'image');
                dayImage.setAttribute('src', `${imageFolder}day${day}image.jpg`);
                dayContainer.appendChild(dayImage);
            }
            
            if (document.getElementById(`dayMap${day}`).checked) {
                let dayImage = document.createElement('a');
                dayImage.setAttribute('target', '_blank');
                dayImage.setAttribute('href', `${mapFolder}day${day}map.jpg`);
                dayImage.textContent = `Map for day ${day}`
                dayContainer.appendChild(dayImage);
            }
            
            if (document.getElementById(`dayProfile${day}`).checked) {
                let dayImage = document.createElement('img');
                dayImage.setAttribute('class', 'elevation');
                dayImage.setAttribute('src', `${profileFolder}day${day}elevation.jpg`);
                dayContainer.appendChild(dayImage);
            }

            document.getElementById('Itinerary').appendChild(dayContainer);
        }
    }
}

function datesPricesTab() {
    let Tab = document.getElementById('DandP');
    let tourDates = document.createElement('h2');
    tourDates.textContent = document.getElementById('holidayDates').value;
    Tab.appendChild(tourDates);

    let cost = document.createElement('h2');
    cost.textContent = "Cost";
    Tab.appendChild(cost);

    if (document.getElementById('landOnly').value != '') {
        let landCost = document.createElement('p')
        landCost.textContent = `Land only - ${document.getElementById('landOnly').value}`;
        Tab.appendChild(landCost);
    }

    if (document.getElementById('flightInc').value != '') {
        let flightsIncCost = document.createElement('p')
        flightsIncCost.textContent = `Land only - ${document.getElementById('flightInc').value}`;
        Tab.appendChild(flightsIncCost);
    }

    let paymentSched = document.createElement('h2');
    paymentSched.textContent = "Payment Schedule";
    Tab.appendChild(paymentSched);
    
    let payments = document.createElement('p');
    payments.textContent = document.getElementById('paymentSched').value;
    Tab.appendChild(payments);

    let priceInc = document.createElement('h3');
    priceInc.textContent = "Price includes:";
    Tab.appendChild(priceInc);

    let priceIncList = document.createElement('ul');
    priceIncList.setAttribute('class', 'priceList');

    let priceIncs = document.getElementsByClassName('priceIncludes');
    for (let inc in priceIncs) {
        inc++
        if (!isNaN(inc)) {
            let priceInc = document.createElement('li');
            priceInc.textContent = document.getElementById(`priceInc${inc}`).value;
            priceIncList.appendChild(priceInc);
        }
    }

    Tab.appendChild(priceIncList);

    let priceNotInc = document.createElement('h3');
    priceNotInc.textContent = "Price does not include:";
    Tab.appendChild(priceNotInc);

    let priceNotIncList = document.createElement('ul');
    priceNotIncList.setAttribute('class', 'priceList');

    let priceNotIncs = document.getElementsByClassName('priceNotIncludes');
    for (let inc in priceNotIncs) {
        inc++
        if (!isNaN(inc)) {
            let priceNotInc = document.createElement('li');
            priceNotInc.textContent = document.getElementById(`priceNotInc${inc}`).value;
            priceNotIncList.appendChild(priceNotInc);
        }
    }

    Tab.appendChild(priceNotIncList);

    let cancel = document.createElement('h2');
    cancel.textContent = "Cancellations";
    Tab.appendChild(cancel);

    let cancTable = document.createElement('table');
    let cancTableHead = document.createElement('thead');
    let cancTableHeadRow = document.createElement('tr');
    let notice = document.createElement('th');
    notice.textContent = 'Written Notice Received:';
    cancTableHeadRow.appendChild(notice);
    let charge = document.createElement('th');
    charge.textContent = 'Cancellation Charge:';
    cancTableHeadRow.appendChild(charge);
    cancTableHead.appendChild(cancTableHeadRow);
    cancTable.appendChild(cancTableHead);
    let cancTableBody = document.createElement('tbody');
    let cancTableRows = document.getElementsByClassName('cancRow');
    for (let cancRow in cancTableRows) {
        cancRow++;
        if (!isNaN(cancRow)) {
            cancTableRow = document.createElement('tr');
            cancDate = document.createElement('td');
            console.log(cancRow)
            cancDate.textContent = document.getElementById(`cancDate${cancRow}`).value;
            cancTableRow.appendChild(cancDate);
            cancCharge = document.createElement('td');
            cancCharge.textContent = document.getElementById(`cancCharge${cancRow}`).value;
            cancTableRow.appendChild(cancCharge);
            cancTableBody.appendChild(cancTableRow)
        }
    }
    cancTable.appendChild(cancTableBody);
    Tab.appendChild(cancTable);

    let booking = document.createElement('h2');
    booking.textContent = "How to make a booking:";
    Tab.appendChild(cost);

    let bookingHow = document.createElement('p');
    bookingHow.textContent = document.getElementById('makeBooking').value;
    Tab.appendChild(bookingHow);
}

function holInfoTab() {
    let Tab = document.getElementById('Info');
    let holInfoTopics = document.getElementsByClassName('holInfoRow');
    for (let row of holInfoTopics) {
        if (!isNaN(row)) {
            let accordButton = document.createElement('button');
            accordButton.setAttribute('class', 'accordion');
            accordButton.setAttribute('type', 'button');
            accordButton.textContent = document.getElementById(`holInfoTitle${row}`).value;
            Tab.appendChild(accordButton);
            let panel = document.createElement('div');
            panel.setAttribute('class', 'panel');
            let panelContent = document.createElement('p');
            panelContent.textContent = document.getElementById(`holInfoContent${row}`).value;
            panel.appendChild(panelContent);
            Tab.appendChild(panel);
        }
    }
}