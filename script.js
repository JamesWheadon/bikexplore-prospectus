function addOverviewImage() {
    let numOverviewImages = document.getElementsByClassName('overviewImages').length;
    let imageInputLabel = `<label for="overviewImage${numOverviewImages + 1}">URL for image for overview tab:</label>`;
    let imageInput = `<input name="overviewImage${numOverviewImages + 1}" ;id="overviewImage${numOverviewImages + 1}" class="OverviewImages" placeholder="URL of an image for the overview tab"/>`;
    document.getElementById('overviewImagesDiv').innerHTML += imageInputLabel;
    document.getElementById('overviewImagesDiv').innerHTML += imageInput;
    document.getElementById('overviewImagesDiv').innerHTML += "<br>";
}

function addItineraryDay() {
    let numItineraryDays = document.getElementsByClassName('itineraryDays').length;

    let dayTitleLabel = `<label for="itineraryDay${numItineraryDays + 1}>Day Title</label>`;
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
    dayContainer.innerHTML += dayProfileInput;

    document.getElementById('itineraryDaysDiv').innerHTML += dayContainer;
}