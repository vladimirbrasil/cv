/*
Desafios:
Unir mesmas chaves utilizadas tanto em model quanto em view.
	Se referem a view, porém são armazenadas no model?

Desafio da internacionalização. (Mais abaixo).
	Encontrar lição do curso anterior sobre isso.

Colocar nome do objeto (escola, trabalho, perfil) ao clicar no marcador no mapa.
Aliás colocar todas as funções de mapa em octopus.
*/

/*
This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.
Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.
Cameron Pittman
*/



/*
The Internationalize Names challenge found in the lesson Flow Control from JavaScript Basics requires you to create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var $name = $('#name');
    var iName = inName($name.text()) || function(){};
    $name.html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in the lesson Flow Control from JavaScript Basics.
*/
var clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
});







// https://github.com/udacity/frontend-nanodegree-resume
$(function() {
    var model = {
      bio: {
        name: "Vladimir Bergier Dietrichkeit",
        role: 'My Role',
        contacts: {
          mobile: '9999-9999',
          email: 'email@example.com',
          github: 'github',
          twitter: '@twitter',
          location: 'São Paulo',
        },
        welcomeMessage: 'Welcome message' ,
        skills: ['skill 1', 'skill 2', 'skill 3'],
        biopic: 'http://2.design-milk.com/images/2013/08/Where-I-Work-BIO-Agency-1-Robin-Souter.jpg',        
      },
      
      education: {
        schools: [
          {
            //     array of objects with
            name: 'School Name',
            location: 'School location',
            degree: 'School  Degree',
            majors: ['Major 1', 'Major 2', 'Major 3'],
            dates: 'jan/2008 - dec/2010',
            url: 'https://upload.wikimedia.org/wikipedia/commons/8/82/2009-0617-Ontonagon-school.jpg',
          },
          {
            //     array of objects with
            name: 'School Name 2',
            location: 'School location 2',
            degree: 'School  Degree 2',
            majors: ['Major 1', 'Major 2', 'Major 3'],
            dates: 'jan/2008 - dec/2010',
            url: 'https://upload.wikimedia.org/wikipedia/commons/8/82/2009-0617-Ontonagon-school.jpg',
          },
        ],
        onlineCourses: [
          {
            //         array of objects with
            title: 'Online Course Title',
            school: 'Online Course School',
            dates: 'jan/2008 - dec/2010',
            url: 'http://www.delegreat.me/wp-content/uploads/2016/02/onlineLearning.jpg',
          },
          {
            //         array of objects with
            title: 'Online Course Title 2',
            school: 'Online Course School 2',
            dates: 'jan/2008 - dec/2010',
            url: 'http://www.delegreat.me/wp-content/uploads/2016/02/onlineLearning.jpg',
          }
        ], 
        display: function(){
          return 'taking no parameters';
        } 
      },

      
      projects: {
        projects: [
          {
            //     array of objects with
            title: 'Project Title' ,
            dates: 'jan/2012 - dec/2013',
            description: 'Project description',
            images: [
              'http://chpmaui.com/images/project_01.jpg',
              'http://st.hzcdn.com/simgs/6b81d78601703722_4-8646/traditional-landscape.jpg'
            ]
          }
        ],
        display: {

        } 
      },
      
      work: {
        jobs: [
          {
            //     array of objects with
            employer: 'Work Employer' ,
            title: 'Work Title' ,
            location: 'Work Location' ,
            dates: "jan/2012 - dec/2013",
            description: 'Lorem ipsum sit amet job description Lorem ipsum sit amet job description Lorem ipsum sit amet job description Lorem ipsum sit amet job description'  ,     
          },
          {
            //     array of objects with
            employer: 'Work Employer 2' ,
            title: 'Work Title 2' ,
            location: 'Work Location 2' ,
            dates: "dec/2010 - jan/2012",
            description: 'Lorem ipsum sit amet job description Lorem ipsum sit amet job description Lorem ipsum sit amet job description Lorem ipsum sit amet job description'  ,     
          }
        ],
      },

    };
  
    var octopus = {
      init: function() {
        view.init();
      },
      getBio: function(){ return model.bio; },
      getContacts: function(){ return model.bio.contacts; },
      getJobs: function(){ return model.work.jobs; },
      getProjects: function(){ return model.projects.projects; },
      getSchools: function(){ return model.education.schools; },
      getOnlineCourses: function(){ return model.education.onlineCourses; },
      getFormattedField: function(field, fieldStr, property, str){
        if (!field[property]) return;
        if (!str) str = "%data%";
        if ( typeof field[property] === 'string' ) {
          return view[fieldStr][property].replace(str, field[property]);
        } else {
          if (!field[property].length) return;
          var resp = "";
          field[property].forEach(function(prop){
            resp += view[fieldStr][property].replace(str, prop);
          })
          return resp;
        }
      },
    };  
  
    var view = { 
      bio: {
        name: '<h1 id="name">%data%</h1>',
        role: '<span>%data%</span><hr>',
        biopic: '<img src="%data%" class="biopic">',
        welcomeMessage: '<span class="welcome-message">%data%</span>',
        skillsInit: '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>',
        skills: '<li class="flex-item"><span class="white-text">%data%</span></li>',
      },
      contacts: {
        init: '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>',
        mobile: '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>',
        email: '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>',
        twitter: '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>',
        github: '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>',
        blog: '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>',
        location: '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>',
      },
      job: {
        init: '<div class="work-entry"></div>',
        employer: '<a href="#">%data%',
        title: ' - %data%</a>',
        location: '<div class="location-text">%data%</div>',
        dates: '<div class="date-text">%data%</div>',
        description: '<p><br>%data%</p>'
      },
      projects: {
        init: '<div class="project-entry"></div>',
        title: '<a href="#">%data%</a>',
        dates: '<div class="date-text">%data%</div>',
        description: '<p><br>%data%</p>',
        images: '<img style="height: 150px" src="%data%">',        
      },
      schools: {
        init: '<div class="education-entry"></div>',
        name: '<a href="#">%data%',
        degree: ' -- %data%</a>',
        dates: '<div class="date-text">%data%</div>',
        location: '<div class="location-text">%data%</div>',
        majors: '<em><br>Major: %data%</em>' 
      },
      onlineCourses: {
        init: '<h3>Online Classes</h3>',
        title: '<a href="#">%data%',
        school: ' - %data%</a>',
        dates: '<div class="date-text">%data%</div>',
        url: '<br><a href="#">%data%</a>'
      },
      googleMap: '<div id="map"></div>',
      internationalizeButton: '<button>Internationalize</button>',
      init: function() {
        var fieldStr = 'job',
            firstId = "#workExperience",
            followingIds = ".work-entry:last";
        octopus.getJobs().forEach(function(field){
          $(firstId).append( view[fieldStr].init );
          $(followingIds).append( octopus.getFormattedField(field, fieldStr, 'employer') 
                                      + octopus.getFormattedField(field, fieldStr, 'title') );
          $(followingIds).append( octopus.getFormattedField(field, fieldStr, 'dates') );
          $(followingIds).append( octopus.getFormattedField(field, fieldStr, 'location') );
          $(followingIds).append( octopus.getFormattedField(field, fieldStr, 'description') );
        })

        var fieldStr = 'projects',
            firstId = "#projects",
            followingIds = ".project-entry:last";
        octopus.getProjects().forEach(function(field){
          $(firstId).append( view[fieldStr].init );
          $(followingIds).append( octopus.getFormattedField(field, fieldStr, 'title') );
          $(followingIds).append( octopus.getFormattedField(field, fieldStr, 'dates') );
          $(followingIds).append( octopus.getFormattedField(field, fieldStr, 'description') );
          $(followingIds).append( octopus.getFormattedField(field, fieldStr, 'images') );
        })

        var fieldStr = 'schools',
            firstId = "#education",
            followingIds = ".education-entry:last";
        octopus.getSchools().forEach(function(field){
          $(firstId).append( view[fieldStr].init );
          $(followingIds).append( octopus.getFormattedField(field, fieldStr, 'name').replace("#", field.url)
                                + octopus.getFormattedField(field, fieldStr, 'degree') );
          $(followingIds).append( octopus.getFormattedField(field, fieldStr, 'dates') );
          $(followingIds).append( octopus.getFormattedField(field, fieldStr, 'location') );
          $(followingIds).append( octopus.getFormattedField(field, fieldStr, 'majors') );
        })        

        var fieldStr = 'onlineCourses';
        $(followingIds).append( view[fieldStr].init );
        octopus.getOnlineCourses().forEach(function(field){
          $(followingIds).append( octopus.getFormattedField(field, fieldStr, 'title')
                                + octopus.getFormattedField(field, fieldStr, 'school') );
          $(followingIds).append( octopus.getFormattedField(field, fieldStr, 'dates') );
          $(followingIds).append( octopus.getFormattedField(field, fieldStr, 'url') );
        })     
 
        fieldStr = 'bio';
        firstId = "#header";
        var field = octopus.getBio();
        $(firstId).prepend( octopus.getFormattedField(field, fieldStr, 'name') 
                         + octopus.getFormattedField(field, fieldStr, 'role') );

        fieldStr = 'contacts';
        firstId = "#topContacts";
        followingIds = firstId + ":last";
        var field = octopus.getContacts();
        $(firstId).append( octopus.getFormattedField(field, fieldStr, 'mobile') );
        $(followingIds).append( octopus.getFormattedField(field, fieldStr, 'email') );
        $(followingIds).append( octopus.getFormattedField(field, fieldStr, 'twitter') );
        $(followingIds).append( octopus.getFormattedField(field, fieldStr, 'github') );
        $(followingIds).append( octopus.getFormattedField(field, fieldStr, 'blog') );
        $(followingIds).append( octopus.getFormattedField(field, fieldStr, 'location') );

        firstId = "#footerContacts";
        followingIds = firstId + ":last";
        $(firstId).append( octopus.getFormattedField(field, fieldStr, 'mobile') );
        $(followingIds).append( octopus.getFormattedField(field, fieldStr, 'email') );
        $(followingIds).append( octopus.getFormattedField(field, fieldStr, 'twitter') );
        $(followingIds).append( octopus.getFormattedField(field, fieldStr, 'github') );
        $(followingIds).append( octopus.getFormattedField(field, fieldStr, 'blog') );
        $(followingIds).append( octopus.getFormattedField(field, fieldStr, 'location') );
        
        fieldStr = 'bio';
        var field = octopus.getBio();
        followingIds = "#header";
        $(followingIds).append( octopus.getFormattedField(field, fieldStr, 'biopic') );
        $(followingIds).append( octopus.getFormattedField(field, fieldStr, 'welcomeMessage') );
        $(followingIds).append( view[fieldStr].skillsInit );
        $(followingIds).append( octopus.getFormattedField(field, fieldStr, 'skills') );
  
        $("#mapDiv").append( view.googleMap );
        
        this.render();
      },
      render: function(){
      } 
    };
  
    octopus.init(); 
  

/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(model.bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    model.education.schools.forEach(function(school){
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    model.work.jobs.forEach(function(job){
      locations.push(job.location);
    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
      var infowindow = new google.maps.InfoWindow({
        content: name
      });      
      infowindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in 
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
 map.fitBounds(mapBounds);
});  
  
  

}());
