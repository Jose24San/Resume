var bio = {
    "name": "Jose Sanchez ",
    "role": " Front End Web Developer",
    "welcomeMessage": "Hello my name is Jose and I am a Biomedical Engineering Technologist who also happens to do a lot of programming to learn how build the front end of web pages. I've recently graduated from DeVry University in Irving, Texas. I am passionate about learning how to create what I believe is beautiful, meaningful and most importantly impactful. Most of my time is spent acquiring knowledge to be better in my job and in my relationships. The little time I do not spend expanding my knowledge base I spend in the GYM pumping iron and anything that I can do to be active. A healthy life style is important to me so I also love finding ways to cook delicious but healthy food. Giving back is also a priority for me and I do so through volunteer work in the Mentor 2.0 organization as a mentor for a highschool kid that attends a low income school. I strive to live the good life.",

    "image": "img/me.JPG",
    "contacts": [{
        "mobile": "928-846-1010",
        "GitHub": "Jose24San",
        "location": "Dallas, TX",
        "email": "Sanchez24Jose@gmail.com"
    }],
    "skills": ["HTML", "CSS", "JavaScript", "jQuery", "Version Control"]
};

var work = {
    "jobs": [{
        "employer": "Vonco Medical ",
        "title": "Biomedical Technical Manager",
        "dates": "2015 - current",
        "location": "Dallas, TX",
        "description": " Quality control on all biomedical equipment sold by my company. I also perform troubleshooting and repair on any peice of equipment that Vonco Medical sells. That includes on site repair for therapy clinics and rehabilitaion hospitals that do not have a Biomed department in house."
    }, {
        "employer": "DeVry University",
        "title": "Federal Work Study Student",
        "dates": "2013-2015",
        "location": "Irving, TX",
        "description": " Managed call flow and routed students to the proper advisor or department to solve their issues as quickly as possible. Greeted and assisted new students with adapting to college enviroment by speaking at orientations and teaching freshman about resources available to them. "
    }]
};

var projects = {
    "project": [{
        "title": "Project portfolio",
        "dates": "2015",
        "description": "The second project of the Front end Nanodegree entailed creating a responsive portfolio to house all future projects. This portfolio can be found at Josedevport.com , the source codes can be viewed on my GitHub account under my username Jose24San. ",
        
    }]
};

var education = {
    "schools": [{
        "name": "DeVry University",
        "location": "Irving, Texas",
        "degree": "Bachelor of Science",
        "majors": " Biomedical Engineering Technology",
        "dates": "2011 - 2015",
        "url": "DeVry.edu"
    }, {
        "name": "Udacity",
        "location": "Online",
        "degree": "Front-End Web Developer Nanodegree (in progress)",
        "majors": "Front End Development",
        "dates": " 2015",
        "url": "https://www.udacity.com/course/nd001"
    }, {
        "name": "Team Tree House",
        "location": "Online",
        "degree": "Front-End Web Development Track (in progress)",
        "majors": "Front End Development",
        "dates": " 2015",
        "url": "https://www.udacity.com/course/nd001"
    
    }, {
        "name": "Exercism.io",
        "location": "Online",
        "degree": "JavaScript Track (in progress)",
        "majors": "JavaScript",
        "dates": " 2015",
        "url": "https://www.udacity.com/course/nd001"
    }]
};


bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedImage = HTMLbioPic.replace("%data%", bio.image);
    var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage, formattedMessage);
    $("#header").append(HTMLskillsStart);

    for (skill in bio.skills) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkills);
    };

    for (contact in bio.contacts) {
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
        var formattedGithub = HTMLcontactGeneric.replace("%contact%", "GitHub").replace("%data%", bio.contacts[contact].GitHub);
        $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub);
    };
};

education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedName + formattedDegree, formattedDates, formattedLocation, formattedMajor);
    }
};

work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployer + formattedTitle, formattedDates, formattedDescription);
    }
};

projects.display = function() {
    for (item in projects.project) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[item].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.project[item].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[item].description);

        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
        for (image in projects.project[item].images) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.project[item].images[image]);
            $(".project-entry:last").append(formattedImage);
        };



    }
};

function inName(name) {
    console.log(name);
    var newName = name;
    newName = newName[0].toUpperCase() + newName.slice(1, newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();

    return newName;
};


work.display();
projects.display();
education.display();
bio.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);