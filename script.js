function addOverviewImage() {
    let numOverviewImages = document.getElementsByClassName('overviewImages').length;
    
    let imageInputLabel = document.createElement('label');
    imageInputLabel.setAttribute('for', `overviewImage${numOverviewImages + 1}`);
    imageInputLabel.textContent = `URL for image for overview tab`;

    let imageInput = document.createElement('input');
    imageInput.setAttribute('name', `overviewImage${numOverviewImages + 1}`)
    imageInput.setAttribute('id', `overviewImage${numOverviewImages + 1}`)
    imageInput.setAttribute('class', `OverviewImages`)
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
    ['dayProfile', 'Profile for this day:', '"URL for the Elevation Profile for today']]

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
            input.setAttribute('name', `${day[0]}${numItineraryDays + 1}`)
            input.setAttribute('id', `${day[0]}${numItineraryDays + 1}`)
            input.setAttribute('placeholder', day[2])

            dayContainer.appendChild(inputLabel);
            dayContainer.appendChild(input);
            dayContainer.appendChild(document.createElement('br'));
        }
    }

    /* let dayTitleLabel = `<label for="itineraryDay${numItineraryDays + 1}>Day Title</label>`;
    let dayTitleInput = `<input name="itineraruDay${numItineraryDays + 1}" ;id="itineraruDay${numItineraryDays + 1}" placeholder="Title for this day of the holiday"/>`;

    let dayHighlightsLabel = `<label for="dayHighlight${numItineraryDays + 1}>Day higlights</label>`;
    let dayHighlightsInput = `<input name="dayHighlight${numItineraryDays + 1}" ;id="dayHighlight${numItineraryDays + 1}" placeholder="Highlights for this day of the holiday"/>`;

    let daySummaryLabel = `<label for="daySummary${numItineraryDays + 1}>Day summary</label>`;
    let daySummaryInput = `<input name="daySummary${numItineraryDays + 1}" ;id="daySummary${numItineraryDays + 1}" placeholder="Summary for this day of the holiday"/>`;

    let cyclingDayLabel = `<label for="dayCycling${numItineraryDays + 1}>Check if there is a route for this day</label>`;
    let cyclingDayBox = `<input type="checkbox" id="dayCycling${numItineraryDays + 1}" name="dayCycling${numItineraryDays + 1}" value="Route">`;

    let dayAccomLabel = `<label for="dayAccom${numItineraryDays + 1}>Day higlights</label>`;
    let dayAccomInput = `<input name="dayAccom${numItineraryDays + 1}" ;id="dayAccom${numItineraryDays + 1}" placeholder="Accommodation for this day of the holiday"/>`;

    let dayMealsLabel = `<label for="dayMeals${numItineraryDays + 1}>Meals provided</label>`;
    let dayMealsInput = `<input name="dayMeals${numItineraryDays + 1}" ;id="dayMeals${numItineraryDays + 1}" placeholder="Meals provided for this day of the holiday"/>`;

    let dayDistanceLabel = `<label for="dayDistance${numItineraryDays + 1}>Cycling distance</label>`;
    let dayDistanceInput = `<input name="dayDistance${numItineraryDays + 1}" ;id="dayDistance${numItineraryDays + 1}" placeholder="How long is the route for today"/>`;

    let dayClimbLabel = `<label for="dayClimb${numItineraryDays + 1}>Altitude gain</label>`;
    let dayClimbInput = `<input name="dayClimb${numItineraryDays + 1}" ;id="dayClimb${numItineraryDays + 1}" placeholder="what is the altitude gain for today"/>`;

    let dayImageLabel = `<label for="dayImage${numItineraryDays + 1}>Image for the day</label>`;
    let dayImageInput = `<input name="dayImage${numItineraryDays + 1}" ;id="dayImage${numItineraryDays + 1}" placeholder="URL for the Image for today"/>`;

    let dayMapLabel = `<label for="dayMap${numItineraryDays + 1}>Map for the day</label>`;
    let dayMapInput = `<input name="dayMap${numItineraryDays + 1}" ;id="dayMap${numItineraryDays + 1}" placeholder="URL for the Map for today"/>`;

    let dayProfileLabel = `<label for="dayProfile${numItineraryDays + 1}>Profile for the day</label>`;
    let dayProfileInput = `<input name="dayProfile${numItineraryDays + 1}" ;id="dayProfile${numItineraryDays + 1}" placeholder="URL for the Elevation Profile for today"/>`;

    let dayContainer = document.createElement('div');

    document.getElementById('itineraryDaysDiv').appendChild(dayContainer);
    
    dayContainer.className = "itineraryDays";
    dayContainer.innerHTML += dayTitleLabel;
    dayContainer.innerHTML += dayTitleInput;
    dayContainer.innerHTML += dayHighlightsLabel;
    dayContainer.innerHTML += dayHighlightsInput;
    dayContainer.innerHTML += daySummaryLabel;
    dayContainer.innerHTML += daySummaryInput;
    dayContainer.innerHTML += cyclingDayLabel;
    dayContainer.innerHTML += cyclingDayBox;
    dayContainer.innerHTML += dayAccomLabel;
    dayContainer.innerHTML += dayAccomInput;
    dayContainer.innerHTML += dayMealsLabel;
    dayContainer.innerHTML += dayMealsInput;
    dayContainer.innerHTML += dayDistanceLabel;
    dayContainer.innerHTML += dayDistanceInput;
    dayContainer.innerHTML += dayClimbLabel;
    dayContainer.innerHTML += dayClimbInput;
    dayContainer.innerHTML += dayImageLabel;
    dayContainer.innerHTML += dayImageInput;
    dayContainer.innerHTML += dayMapLabel;
    dayContainer.innerHTML += dayMapInput;
    dayContainer.innerHTML += dayProfileLabel;
    dayContainer.innerHTML += dayProfileInput; */
}