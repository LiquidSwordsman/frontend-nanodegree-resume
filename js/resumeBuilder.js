"use strict";
/* Data */
var bio = {
    "name": "Christopher Taylor",
    "role": "Front-End Web Developer",
    "welcomeMSG": "A WELCOME MESSAGE GOES HERE",
    "contact": {
        "location": "Seattle, WA",
        "github": "LiquidSwordsman",
        "email": "ctaylor@liquidswords.ninja",
        "cell": "206-922-9835"
    },
    "imageURL": "http://liquidswords.ninja/resume/images/pic.jpg",
    "skills": ["PHP", "HTML", "CSS", "JavaScript", "Git", "C#", "Python 2.X"],
    display: function(){
        $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
        $("#header").append(HTMLbioPic.replace("%data%", bio.imageURL));
        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMSG));
        var HTMLcontacts = "";
        for(var contact in this.contact){
            if (bio.contact.hasOwnProperty(contact)){
                HTMLcontacts += HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", bio.contact[contact]);
            }
        }
        $("#topContacts").append(HTMLcontacts);
        $("#footerContacts").append(HTMLcontacts);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

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
                "location": "Seattle, WA",
            },
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
                "location": "Seattle, WA",
            },
            "description": "This is a job description."
        },
        {
            "employer": "United Natural Foods",
            "title": "3rd Shift Order Selector",
            "dates": {
                //TODO: Get Start Date
                "start": new Date(2011, 5),
                "end": new Date(2011, 5),
            },
            "address": {
                "lineOne": "225 Cross Farm Ln",
                "lineTwo": "York PA 17406",
                "location": "York, PA",
            },
            "description": "This is a job description."
        },
        {
            "employer": "Rutter's Farm Store",
            "title": "3rd Shift Manager",
            "dates": {
                "start": new Date(2008, 8),
                //TODO: Get End Date
                "end": new Date(2008, 8),
            },
            "address": {
                "lineOne": "2125 N Susquehanna Trail",
                "lineTwo": "York PA 17406",
                "location": "York PA",
            },
            "description": "Promoted from deli to 3rd shift manager handled store daily paperwork, inventory rotation, deposits"
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
                "location": "Seattle, WA",
            },
            "description": "Cash handling, managing front end staff, promoted from bus boy to front end coordination"
        }
    ],
    display: function(){
        this.jobs.forEach(function (job) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployerTitle = HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title);
            var startDate = job.dates.start.getMonth().toString() + "/" + job.dates.start.getFullYear().toString();
            var endDate = job.dates.end.getMonth().toString() + "/" + job.dates.end.getFullYear().toString();

            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(HTMLworkDates.replace("%data%", startDate + "-" + endDate));
            $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
            $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.address.location));
        });
    }
};
var projects = [
    {
        "title": null,
        "dates": null,
        "description": null,
        "images": []
    }
];
var education = [
    {
        "name": "Central York High School",
        "attended": "2004-2007",
        "location": "York, PA, US",
        "address-line-a": "601 Mundis Mill Rd",
        "address-line-b": "York, PA 17406",
        "phone": 7174243801,
        "degree": "A.A.S.T.",
        "url": null, /* TODO: GET URL */
        "onlineCourses": {
            "title": null,
            "school": null,
            "dates": null,
            "url": null
        }
    },
    {
        "name": "Seattle Central College",
        "attended": "2013-2015",
        "location": "Seattle, WA, US",
        "degree": "A.A.S.T.",
        "major": "Programming",
        "url": "http://www.seattlecentral.edu/",
        "onlineCourses": {
            "title": null,
            "school": null,
            "dates": null,
            "url": null
        }
    },
    {
        "name": "Udacity",
        "attended": "2015-Present",
        "location": "Online",
        "degree": "Nanodegree",
        "major": "Front-End Web Developer",
        "url": "https://www.udacity.com/",
        "onlineCourses": {}
    }
];
function logClick(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    console.log(document.elementFromPoint(x, y) + " (X: " + x + ", Y: " + y + ")");
}
bio.display();
work.display();
$(document).click(loc => logClick(loc));