
 bio = {
	"name": "Jason",
	"role": "student",
	"contacts": {
		"mobile": "15957111462",
		"email": "zse002@vip.qq.com",
		"github": "jason@github.com",
		"location": "Hangzhou"
	},
	"welcomeMessage": "Hi!Nice to meet you.",
	"skills": ["java", "web"],
	"biopic": "images/fry.jpg"
};
bio.display = function(){
  var name = HTMLheaderName.replace("%data%",bio.name);
  var role = HTMLheaderRole.replace("%data%",bio.role);
  var mobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  var email = HTMLemail.replace("%data%",bio.contacts.email);
  var github = HTMLgithub.replace("%data%",bio.contacts.github);
  var location = HTMLlocation.replace("%data%",bio.contacts.location);
  var msg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
  var pic = HTMLbioPic.replace("%data%",bio.biopic);
  var header = $("#header");
  var top = $("#topContacts");
  var footer = $("#footerContacts");
  var sks = $("#skills");
  header.prepend(name,role);
  top.append(mobile,email,github,location);
  header.append(pic,msg,HTMLskillsStart);
  bio.skills.forEach(function(skill){
    var sk = HTMLskills.replace("%data%",skill);
    $("#skills").append(sk);
  });
  footer.append(mobile,email,github,location);
}
bio.display();
education ={
	"schools": [{
		"name": "HDU",
		"location": "Hangzhou",
		"degree": "bachelor",
		"majors": ["CS"],
		"dates": "2014-2018",
		"url": "http://www.hdu.edu.cn/"
	}, {
		"name": "Ouhai middle school",
		"location": "Wenzhou",
		"degree": "senior school",
		"majors": ["science"],
		"dates": "2011-2014",
		"url": "http://www.ohzx.net/"
	}],
	"onlineCourses": [{
		"title": "front-end-web-developer",
		"school": "Udacity",
		"dates": "2016",
		"url": "https://cn.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}]
};
education.display = function(){

  $("#education").append(HTMLschoolStart);
  education.schools.forEach(function(school){
      var str =  HTMLschoolName.replace("%data%",school.name)+
      HTMLschoolDegree.replace("%data%",school.degree)+
      HTMLschoolDates.replace("%data%",school.dates)+
      HTMLschoolLocation.replace("%data%",school.location)+
      HTMLschoolMajor.replace("%data%",school.majors);
      $(".education-entry").append(str);

  })
  $(".education-entry").append(HTMLonlineClasses);
  education.onlineCourses.forEach(function(onlineCourse){
    var str = HTMLonlineTitle.replace("%data%",onlineCourse.title)+
    HTMLonlineSchool.replace("%data%",onlineCourse.school)+
    HTMLonlineDates.replace("%data%",onlineCourse.dates)+
    HTMLonlineURL.replace("%data%",onlineCourse.url);
    $(".education-entry").append(str);
  })
}
education.display();
work = {
	"jobs": [{
		"employer": "Ali",
		"title": "front end web",
		"location": "Hangzhou ",
		"dates": "2019-2020",
		"description": "A new start"
	}, {
		"employer": "Baidu",
		"title": "deep learning",
		"location": "Beijing",
		"dates": "2020-2025",
		"description": "A fast develop"
	}]
}
work.display = function(){
  $("#workExperience").append(HTMLworkStart);
  work.jobs.forEach(function(job){
    var str = HTMLworkEmployer.replace("%data%",job.employer)+
    HTMLworkTitle.replace("%data%",job.title)+
    HTMLworkDates.replace("%data%",job.dates)+
    HTMLworkLocation.replace("%data%",job.location)+
    HTMLworkDescription.replace("%data%",job.description);
    $(".work-entry").append(str);
  })
};
work.display();
projects = {
	"projects": [{
		"title": "library",
		"dates": "2016-6",
		"description": "A system to borrow and return book",
		"images": ["http://placekitten.com/200/300","http://placekitten.com/200/300"]
	}, {
		"title": "news push",
		"dates": "2016-8",
		"description": "A system to send news",
		"images": ["http://placekitten.com/200/300","http://placekitten.com/200/300","http://placekitten.com/200/300"]
	}]
};

projects.display = function(){
  $("#projects").append(HTMLprojectStart);
  projects.projects.forEach(function(pro){
    var str = HTMLprojectTitle.replace("%data%",pro.title)+
    HTMLprojectDates.replace("%data%",pro.dates)+
    HTMLprojectDescription.replace("%data%",pro.description);
    pro.images.forEach(function(image){
      str += HTMLprojectImage.replace("%data%",image);
    })
    $(".project-entry").append(str);
  })
}
projects.display();

$("#mapDiv").append(googleMap);
