var data = {
  header: {
    firstName: "Mariem",
    lastName: "CHEHAIMA",
    dateofB: "24th-ap-1994",
    placeofB: "Casablanca",
    email: "mariemchehaima@gmail.com",
    phone: "(+212) 06 37 59 97 81",
    address: "Hay Hassani bloc 2, Casablanca, MOROCCO, 20 230",
    permis: "Driving Licence - B",
	github: "https://github.com/Mariem1994",
    avatar: "./img/picture.png"
  },
  sections: [
    {
      id: "s1",
      type: "skills",
      title: "SKILLS",
      content: [
        {
          label: "Network Security",
          score: 80
        },
        {
          label: "Operating Systems",
          score: 70
        },
        {
          label: "Pentesting",
          score: 85
        },
        {
          label: "Telecommunications",
          score: 55
        },
        {
          label: "Python",
          score: 30
        },
        {
          label: "PHP",
          score: 60
        },
        {
          label: "C",
          score: 70
        },
        {
          label: "C++",
          score: 55
        },
        {
          label: "VB.net",
          score: 80
        },
        {
          label: "Linux/Unix",
          score: 65
        },
        {
          label: "Firewalls",
          score: 75
        },
        {
          label: "Cryptography",
          score: 60
        },
        {
          label: "Electronics",
          score: 70
        },
        {
          label: "IPS IDS",
          score: 65
        }
      ]
    },
    {
      id: "s2",
      type: "edu",
      title: "EDUCATION",
      content: [
        {
          degree: "Master",
          deration: "2016-2018",
          description:
            "2nd year Student Researcher in Security of Information Systems",
          at: "National School of Applied Sciences - Kénitra"
        },
        {
          degree: "Bachelor",
          deration: "2015-2016",
          description:
            "Bachelor Degree in Network and Telecommunications",
          at: "Faculty of Sciences Moulay Ismail - Meknes"
        },
        {
          degree: "University Degree of Technology",
          deration: "2013-2015",
          description: "U.D.T Degree in Network and Telecommunications",
          at: "Superior School of Technology - Fez"
        },
      ]
    },
    {
      id: "s3",
      title: "PROFESSIONAL EXPERIENCES",
      type: "exp",
      content: [
        {
          title: "20-02-2018 to 20-08-2018 ",
          description: "Graduate Technical Intern at System Engineering Laboratory at ENSA - Kénitra"
        },
        {
          title: "28-09-2017 to 20-01-2018 ",
          description:
            "Graduate Research Intern at ODTU - ANKARA Turkey"
        },
        {
          title: "18-04-2016 to 18-06-2016 ",
          description: "Student Internship at ONEE - Casablanca"
        },
        {
          title: "20-04-2015 to 20-06-2015 ",
          description: "Student Internship at OCP - Khouribga"
        },
        {
          title: "20-08-2014 to 20-09-2014 ",
          description: "Student Internship at Prefecture of Ain Sebaa - Casablanca"
        },
      ]
    },
    {
      id: "s4",
      type: "proj",
      title: "PROJECTS",
      content: [
        {
          title: "Contribution to the Protection Project against internal and external attacks",
          description: "Python 3, Logserver, Firewalls,Ubuntu,IDS IPS"
        },
        {
          title: "Acceleration of DPDK packets on FreeBSD",
          description: "FreeBSD, Operating System Security"
        },
        {
          title:
            "Power supply failure problem on a DR3000 relay station",
          description:
            "Relay station,Antenna transmission "
        },
        {
          title:
            "Mass deployment of operating systems by the RIS service on Windows server 2003 and WDS on WS2008",
          description: "WS2008, WS2003 "
        },
        {
          title:
            "Deployment of a website made with ASP.net and MSQL Server, with the configuration of an ASA5505 firewall and a Cisco router",
          description: "Firewall, ASP.net , MSQL Server"
        },
      ]
    },
    {
      id: "s5",
      title: "LANGUAGES ABILITY",
      type: "lang",
      content: [
        {
          lang: "Arabic",
          level: 5
        },
        {
          lang: "French",
          level: 4
        },
        {
          lang: "English",
          level: 4
        }
      ]
    },
    {
      id: "s6",
      type: "hob",
      title: "HOBBIES",
      content: [
        {
          imgUrl: "./img/it-security.png",
          title: "IT Security"
        },
        {
          imgUrl: "./img/music.png",
          title: "Music"
        },
        {
          imgUrl: "./img/web-p.png",
          title: "Programing"
        },
        {
          imgUrl: "./img/travel.png",
          title: "Traveling"
        }
      ]
    }
  ]
};

module.exports = data;
