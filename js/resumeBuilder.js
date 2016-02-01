"use strict";
function logClick(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    console.log(document.elementFromPoint(x, y) + " (X: " + x + ", Y: " + y + ")");
}
function dateHelper(startDate, endDate) {
    var start = "";
    var end = "";
    if (startDate.getMonth().toString()) {
        start += startDate.getMonth().toString() + "/";
    }
    start += startDate.getFullYear().toString();
    if (endDate.getMonth().toString()) {
        end += endDate.getMonth().toString() + "/";
    }
    end += endDate.getFullYear().toString();
    return start + "-" + end;
}

/* Data */
var bio = {
    "name": "Christopher Taylor",
    "role": "Front-End Web Developer",
    "welcomeMsg": "A WELCOME MESSAGE GOES HERE",
    "contacts": {
        "location": "Seattle, WA",
        "github": "LiquidSwordsman",
        "email": "ctaylor@liquidswords.ninja",
        "cell": "206-922-9835"
    },
    "imageURL": "http://liquidswords.ninja/resume/images/pic.jpg",
    "skills": ["PHP", "HTML", "CSS", "JavaScript", "jQuery", "Git", "C#", "Python 2.X"],
    buildContacts: function () {
        var contacts = "";
        contacts += HTMLmobile.replace(new RegExp("%data%", 'g'), this.contacts.cell);
        contacts += HTMLgithub.replace(new RegExp("%data%", 'g'), this.contacts.github);
        contacts += HTMLemail.replace(new RegExp("%data%", 'g'), this.contacts.email);
        contacts += HTMLlocation.replace("%data%", this.contacts.location);
        return contacts;
    },
    display: function(){
        $("header").prepend(HTMLbioPic.replace("%data%", bio.imageURL));
        $("#bio-box").prepend(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));
        $("#bio-box").prepend(HTMLheaderRole.replace("%data%", bio.role));
        $("#bio-box").prepend(HTMLheaderName.replace("%data%", bio.name));
        var contacts = this.buildContacts();
        $("#topContacts").append(contacts);
        $("#footerContacts").append(contacts);

        if (bio.skills.length > 0) {
            $("#bio-box").append(HTMLskillsStart);

            bio.skills.forEach(function (skill) {
                $("#skills").append(HTMLskills.replace("%data%", skill));
            });
        }
    }
};
var work = {
    "jobs": [
        {
            "employer": "Radio Shack",
            "title": "Sales Associate",
            "dates": {
                "start": new Date(2013, 2),
                "end": new Date(2013, 8)
            },
            "address": {
                "lineOne": "1523 3rd Ave",
                "lineTwo": "Seattle, WA 98101",
            },
            "location": "Seattle, WA",
            "description": "This is a job description."
        },
        {
            "employer": "Cameras West",
            "title": "Sales Associate",
            "dates": {
                "start": new Date(2011, 7),
                "end": new Date(2013, 2)
            },
            "address": {
                "lineOne": "1908 4th Ave",
                "lineTwo": "Seattle, WA 98101",
            },
            "location": "Seattle, WA",
            "description": "This is a job description."
        },
        {
            "employer": "United Natural Foods",
            "title": "3rd Shift Order Selector",
            "dates": {
                "start": new Date(2010, 5, 9),
                "end": new Date(2011, 5),
            },
            "address": {
                "lineOne": "225 Cross Farm Ln",
                "lineTwo": "York PA 17406",
            },
            "location": "York, PA",
            "description": "This is a job description."
        },
        {
            "employer": "Rutter's Farm Store",
            "title": "3rd Shift Manager",
            "dates": {
                "start": new Date(2008, 8),
                "end": new Date(2010, 5, 9),
            },
            "address": {
                "lineOne": "2125 N Susquehanna Trail",
                "lineTwo": "York PA 17406",
            },
            "location": "York PA",
            "description": "Managed third shift employees, prepared stores daily paperwork, handled inventory rotation, made deposits."
        },
        {
            "employer": "Old Country Buffet",
            "title": "Line Coordinator",
            "dates": {
                "start": new Date(2006, 11),
                "end": new Date(2008, 8)
            },
            "address": {
                "lineOne": "905 Loucks Rd",
                "lineTwo": "York, PA 17404",
            },
            "location": "Seattle, WA",
            "description": "Cash handling, managing front end staff, promoted from bus boy to front end coordination"
        }
    ],
    display: function(){
        this.jobs.forEach(function (job) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployerTitle = HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title);
            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(HTMLworkDates.replace("%data%", dateHelper(job.dates.start, job.dates.end)));
            $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
            $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
        });
    }
};
var projects = {
    "projects": [
        {
            "title": null,
            "dates": {
                start: null,
                end: null
            },
            "description": null,
            "images": [null, null]
        }
    ],
    display: function () {
        if (this.projects.length > 0) {
            this.projects.forEach(function (project) {
                $("#projects").append(HTMLprojectStart);
                $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
                $(".project-entry:last").append(HTMLprojectDates.replace("%data%", dateHelper(project.dates.start, project.dates.end)));
                $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));
                project.images.forEach(function(img) {
                    $(".project-entry:last").append(HTMLprojectImage.replace("%data%", img));
                });
            });
        }
    }
};
var education = {
    "schools": [
        {
            "name": "Udacity",
            "attended": {
                "start": new Date(2016, 1),
                "end": new Date(2016, 4)
            },
            "location": "Online",
            "degree": "Nanodegree",
            "major": "Front-End Web Developer",
        },
        {
            "name": "Seattle Central College",
            "attended": {
                "start": new Date(2013),
                "end": new Date(2015)
            },
            "location": "Seattle, WA, US",
            "degree": "A.A.S.T.",
            "major": "Programming",
        },
        {
            "name": "Central York High School",
            "attended": {
                "start": new Date(2004),
                "end": new Date(2007)
            },
            "location": "York, PA, US",
            "address-line-a": "601 Mundis Mill Rd",
            "address-line-b": "York, PA 17406",
            "degree": "Diploma",
            "major": "Computer Science",
        },
    ],
    "onlineCourses": [
            {
                "title": "Intro to HTML and CSS",
                "school": "Udacity",
                "dates": 2015,
                "url": "http://www.udacity.com"
            },
            {
                "title": "Responsive Web Design Fundamentals",
                "school": "Udacity",
                "dates": 2015,
                "url": "http://www.udacity.com"
            },
            {
                "title": "Responsive Images",
                "school": "Udacity",
                "dates": 2015,
                "url": "http://www.udacity.com"
            },
            {
                "title": "Javascript Basics",
                "school": "Udacity",
                "dates": 2015,
                "url": "http://www.udacity.com"
            },
            {
                "title": "Intro to jQuery",
                "school": "Udacity",
                "dates": 2015,
                "url": "http://www.udacity.com"
            },
            {
                "title": "How to Use Git and GitHub",
                "school": "Udacity",
                "dates": 2015,
                "url": "http://www.udacity.com"
            }
    ],
    buildSchools: function () {
        this.schools.forEach(function (school) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name));
            $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", school.degree));
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", dateHelper(school.attended.start, school.attended.end)));
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", school.major));
        });
    },
    buildOnlineClasses: function() {
        $("#education").append(HTMLonlineClasses);
        this.onlineCourses.forEach(function (course) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", course.title));
            $(".education-entry:last").append(HTMLonlineSchool.replace("%data%", course.school));
            $(".education-entry:last").append(HTMLonlineDates.replace("%data%", course.dates));
             $(".education-entry:last").append(HTMLonlineURL.replace("%data%", course.url));
        });
    },
    display: function () {
        this.buildSchools();
        this.buildOnlineClasses();
    }
};
bio.display();
work.display();
//projects.display();
education.display();
$("#mapDiv").append(googleMap);
$(document).click(loc => logClick(loc));