function preview() {
    overviewTab();
    itineraryTab();
    document.getElementById('preview').style.display = "block";
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
            console.log(itineraryDays[day - 1])
            console.log(document.getElementById(`itineraryDay${day}`))
            console.log(itineraryDay1)
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
                dayImage.setAttribute('href', `${imageFolder}day${day}image.jpg`);
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