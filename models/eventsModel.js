const { DateTime } = require("luxon");
const { v4: uuidv4 } = require("uuid");

const events = [
  {
    id: "1",
    category: "Athletics",
    title: "Charlotte 49ers Women's Soccer vs Virginia Tech",
    hostName: "UNC Charlotte/ESPN",
    // i need to hardcode the startDate and endDate for the first 12 but then get the form startDate and endDate for the following ones
    startDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    endDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    details: "Charlotte 49ers Women's Soccer vs Virginia Tech.",
    image: "/images/fillerImage.jpg",
    location: "ESPN Online",
  },
  {
    id: "2",
    category: "Athletics",
    title: "Charlotte 49ers Women's Volleyball vs Xavier",
    hostName: "UNC Charlotte/ESPN",
    startDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    endDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    details: "Charlotte 49ers Women's Volleyball vs Xavier",
    image: "/images/fillerImage.jpg",
    location: "ESPN Online",
  },
  {
    id: "3",
    category: "Athletics",
    title: "WATERFALL DAY HIKE TO SOUTH MOUNTAINS STATE PARK",
    hostName: "UNC Charlotte",
    startDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    endDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    details:
      "Join Venture Outdoor Leadership for a hike to the beautiful waterfalls at South Mountains State Park! Designed for both beginners and experience hikers, our adventure trip leaders will guide and teach as you enjoy one of the most popular waterfall hikes in our region.",
    image: "/images/fillerImage.jpg",
    location: "South Mountains State Park",
  },
  {
    id: "4",
    category: "Academic",
    title: "From Burnout to Balance",
    hostName: "CAPS",
    startDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    endDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    details:
      "Feeling unmotivated, struggling to find the energy to take on your to-do list, or just feeling flat out burnt out? Join CAPS for this one-hour workshop to learn more about burnout, focusing on ways to overcome burnout, foster wellbeing and take on those to-do list tasks. The end of this presentation will also include an overview of CAPS services and resources to help you get connected beyond this workshop.",
    image: "/images/fillerImage.jpg",
    location: "UNC Charlotte",
  },
  {
    id: "5",
    category: "Academic",
    title: "Intro to Stress Survival",
    hostName: "CAPS",
    startDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    endDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    details:
      "Join CAPS for this asynchronous 30-minutes workshop focused on identifying how stress manifests for you and exploring practical strategies to tap into the positive benefits of stress and minimize its negative impact throughout the semester. The end of this presentation will also include an overview of CAPS services and resources for additional support beyond this workshop.",
    image: "/images/fillerImage.jpg",
    location: "UNC Charlotte",
  },
  {
    id: "6",
    category: "Academic",
    title: "Niners Helping Niners",
    hostName: "CAPS",
    startDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    endDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    details:
      "Students are often supporting their fellow students and may be the first to learn of their mental health concerns and struggles. Join CAPS for this brief workshop focused on learning warning signs of mental health concerns, strategies to support other students, and ways to refer to campus resources when appropriate.",
    image: "/images/fillerImage.jpg",
    location: "UNC Charlotte",
  },
  {
    id: "7",
    category: "Career",
    title: "GMail: Organizing Your Email",
    hostName: "UNC Charlotte",
    startDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    endDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    details:
      "Spend a lot of time searching your inbox? Learn tips on how to better organize your email.",
    image: "/images/fillerImage.jpg",
    location: "UNC Charlotte",
  },
  {
    id: "8",
    category: "Career",
    title: "Professional In Residence: Piedmont Airlines",
    hostName: "Piedmont Airlines",
    startDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    endDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    details:
      "Come have your resume reviewed by a professional from Piedmont Airlines. No appointments necessary! Drop in between 11am-2pm!",
    image: "/images/fillerImage.jpg",
    location: "UNC Charlotte",
  },
  {
    id: "9",
    category: "Career",
    title: "IGS: Networking For International Students",
    hostName: "IGS",
    startDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    endDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    details:
      "Are you familiar with the saying, it's not what you know, 'it's who you know'? In the US, connections with people carry a lot of weight when looking for a job. This is why networking is a fundamental skill for launching and furthering your career. However, when we hear the word 'networking,' we often think of 'doing lunch,' selling ourselves, and handing out business cards. If we changed the word to “connecting,” we might feel better about it.",
    image: "/images/fillerImage.jpg",
    location: "UNC Charlotte",
  },
  {
    id: "10",
    category: "Creative",
    title: "CAB Cinema on the 49th Acre",
    hostName: "CAB Cinema",
    startDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    endDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    details:
      "Join the Campus Activities Board (CAB) for a movie night on The 49th Acre! Grab some free food and watch 'Spider-Man: Across the Spider-Verse' from 8-11 p.m. on Thursday, Sept. 7.",
    image: "/images/fillerImage.jpg",
    location: "The 49th Acre",
  },
  {
    id: "11",
    category: "Creative",
    title: "Friday Morning Writing in Bioinformatics",
    hostName: "UNC Charlotte",
    startDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    endDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    details:
      "Have trouble finding the motivation to write? Does your kid/dog/roommate constantly interrupt you? Are you distracted by cat memes when you should be finishing that chapter?",
    image: "/images/fillerImage.jpg",
    location: "Bioinformatics",
  },
  {
    id: "12",
    category: "Creative",
    title: "3D Modeling Workshop",
    hostName: "UNC Charlotte",
    startDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    endDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    details:
      "Learn how to construct your first design for 3D printing using TinkerCAD. This workshop is open to all levels of makers, no 3D modeling experience necessary. Please bring your own laptop. Open to current UNC Charlotte students, staff, and faculty.",
    image: "/images/fillerImage.jpg",
    location: "UNC Charlotte",
  },
];


exports.find = () => events

exports.findById = (id) => {
  return events.find(event => event.id === id);
}

exports.save = (event, body) => {
  event.id = uuidv4();
  event.startDate = DateTime.fromISO(body.start).toFormat(
    "ff"
  );
  event.endDate = DateTime.fromISO(body.end).toFormat(
    "ff"
  );
  // event.image = body.image;
  event.image = "/images/fillerImage.jpg";
  events.push(event);
}