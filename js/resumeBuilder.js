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
        
        for(var contact in bio.contact){
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
            "location": "Seattle, WA",
            "description": "This is a job description."
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
            $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
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

bio.display();
work.display();