const myInfo = {
  fullName: "Nguyen Khai Hieu",
  lastName: "Nguyen Khai",
  firstName: "Hieu",
  dateOfBirth: "2002-11-30",
  occupation: "Java Developer, Young Boy, Human ",
  phoneNumber: "0343385XXX",
  email: "khaihieupc2@gmail.com",
  presentAddress: "Thu Duc City, Ho Chi Minh City, Vietnam",
  facebookLink: "facebook.com/hieu.khai.503",
  githubLink: "github.com/manunited-abc",
  linkedInLink: "linkedin.com/in/hieu-khai-b8351a220",
  mycv:"tinyurl.com/37skr6nr",
  education: [
    {
      schools: "Nong Lam University",
      industry: "Information Technology",
      startYear: "2019",
      endYear: "Present",
      note: "I have been studying at this school for 4 years, and I am proud of it.",
    },
    
  ],
  skills: {
    programLanguges: ["Java", "JavaScript", "HTML", "CSS", "C#", "Python"],
    framework: [
      "SpringMVC/Spring Boot",
      "JSP/Servlet",
      "ReactJS",
      "Boostrap",
      "JQuery",
    ],
    database: ["MySQL", "SQL Server"],
    foreignLanguages: ["Reading comprehension English documents"],
    orthers: ["OOP", "Git", "Github"],
  },
  summary:
    "My name is Hieu. Currently ,I'm IT student. I'd have good knowledge of Java, and OOP, I'd have experience with Java frameworks such as SpringBoot, JPA/Hibernate, and build some websites by ReactJS, and Restful API. I also spend time learning new technologies and best practices to become a better engineer",
  avatar: "",
};
// Fill infor

//Set name
document.querySelector(".profile h1 a").innerHTML = myInfo.fullName;
document.querySelector("#hero h1").innerHTML = myInfo.fullName;
//Set link
document.querySelector(".profile .facebook").setAttribute("href","https://www."+ myInfo.mycv);
  document.querySelector(".profile .facebook").setAttribute("href","https://www."+ myInfo.facebookLink);
  document.querySelector(".profile .linkedin").setAttribute("href","https://www."+ myInfo.linkedInLink);
  document.querySelector(".profile .github").setAttribute("href","https://www."+  myInfo.githubLink);
//Set summary
document.querySelector(".section-title p").innerHTML = myInfo.summary;
//Set occupation
document
  .querySelector("#hero span")
  .setAttribute("data-typed-items", myInfo.occupation);
//set info personal
let info = document.querySelectorAll("#info-personal li span");
let date = new Date(myInfo.dateOfBirth);
info[0].innerHTML = date.toLocaleString("en-GB", {
  month: "short",
  day: "numeric",
  year: "numeric",
});
info[1].innerHTML = myInfo.phoneNumber;
info[2].innerHTML = myInfo.email;
info[3].innerHTML = myInfo.presentAddress;
info[4].innerHTML = `<a href = "https://www.${myInfo.mycv}" target="_blank">${myInfo.mycv}</a>`;
info[5].innerHTML = `<a href = "https://www.${myInfo.githubLink}" target="_blank">${myInfo.githubLink}</a>`;
info[6].innerHTML = `<a href = "https://www.${myInfo.linkedInLink}" target="_blank">${myInfo.linkedInLink}</a>`;
//Set skills
function renderSkills(arrays, e1, e2) {
  let numRow1 = Math.ceil(arrays.length / 2);
  let proLanElements = document.querySelectorAll(".skills-content .col-lg-6");
  let pl = arrays;
  let html1 = [];
  for (let i = 0; i < numRow1; i++) {
    html1[i] = `<div class="progress mx-4">
                        <span class="skill">${pl[i]}<i class="val">${
      100 - i * 10 - 10
    }%</i></span>
                        <div class="progress-bar-wrap">
                            <div class="progress-bar" role="progressbar" aria-valuenow="${
                              100 - i * 10 - 10
                            }" aria-valuemin="0" aria-valuemax="100"></div>
                         </div>
                    </div>`;
  }
  proLanElements[e1].innerHTML = html1.join("");
  let html2 = [];
  for (let i = numRow1; i < pl.length; i++) {
    html2[i - numRow1] = `<div class="progress mx-4">
                        <span class="skill">${pl[i]}<i class="val">${
      100 - i * 10 - 10
    }%</i></span>
                        <div class="progress-bar-wrap">
                            <div class="progress-bar" role="progressbar" aria-valuenow="${
                              100 - i * 10 - 10
                            }" aria-valuemin="0" aria-valuemax="100"></div>
                         </div>
                    </div>`;
  }
  proLanElements[e2].innerHTML = html2.join("");
}
renderSkills(myInfo.skills.programLanguges, 0, 1);
renderSkills(myInfo.skills.framework, 2, 3);
document.querySelectorAll(
  ".skills-content .col-lg-6"
)[4].innerHTML = `<p class='mx-4'>${myInfo.skills.database.join(", ")}<h/p>`;
document.querySelectorAll(
  ".skills-content .col-lg-6"
)[5].innerHTML = `<p class='mx-4'>${myInfo.skills.foreignLanguages.join(
  ", "
)}<h/p>`;
document.querySelectorAll(
  ".skills-content .col-lg-6"
)[6].innerHTML = `<p class='mx-4'>${myInfo.skills.orthers.join(", ")}<h/p>`;
//Set education
let educations = myInfo.education;
let htmls = educations.map((element) => {
  return ` <div class="resume-item">
        <h4>${element.schools}</h4>
        <h5>${element.startYear} - ${element.endYear}</h5>
        <p><em>${element.industry}</em></p>
        <p>${element.note}</p>
      </div>`;
});
document.querySelector("#resume .col-md").innerHTML = htmls.join("");
document.querySelector(".info .address p").innerHTML = myInfo.presentAddress;
document.querySelector(".info .email p").innerHTML = myInfo.email;
document.querySelector(".info .phone p").innerHTML = myInfo.phoneNumber;