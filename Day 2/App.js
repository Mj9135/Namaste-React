import React from "react";
import ReactDOM from "react-dom/client";

const people = [
  {
    name: "John Doe",
    age: 30,
    job: "Developer",
    location: "New York, NY",
    email: "john.doe@example.com",
    skills: ["JavaScript", "React", "Node.js"],
    experience: 8,
    education: {
      degree: "Bachelor of Science in Computer Science",
      university: "University of California, Berkeley",
      graduationYear: 2014,
    },
    hobbies: ["Hiking", "Reading", "Gaming"],
  },
  {
    name: "Jane Doe",
    age: 25,
    job: "Designer",
    location: "San Francisco, CA",
    email: "jane.doe@example.com",
    skills: ["Adobe Photoshop", "Illustrator", "Figma"],
    experience: 5,
    education: {
      degree: "Bachelor of Arts in Graphic Design",
      university: "Rhode Island School of Design",
      graduationYear: 2018,
    },
    hobbies: ["Photography", "Traveling", "Cooking"],
  },
  {
    name: "Jim Smith",
    age: 35,
    job: "Engineer",
    location: "Seattle, WA",
    email: "jim.smith@example.com",
    skills: ["Python", "Django", "Machine Learning"],
    experience: 12,
    education: {
      degree: "Master of Science in Electrical Engineering",
      university: "Stanford University",
      graduationYear: 2010,
    },
    hobbies: ["Cycling", "Chess", "Woodworking"],
  },
  {
    name: "Alice Johnson",
    age: 28,
    job: "Marketing Manager",
    location: "Chicago, IL",
    email: "alice.johnson@example.com",
    skills: ["SEO", "Content Marketing", "Social Media"],
    experience: 7,
    education: {
      degree: "Bachelor of Business Administration",
      university: "University of Michigan",
      graduationYear: 2015,
    },
    hobbies: ["Blogging", "Yoga", "Traveling"],
  },
  {
    name: "Robert Brown",
    age: 40,
    job: "Project Manager",
    location: "Austin, TX",
    email: "robert.brown@example.com",
    skills: ["Agile", "Scrum", "Risk Management"],
    experience: 15,
    education: {
      degree: "Bachelor of Science in Project Management",
      university: "University of Texas at Austin",
      graduationYear: 2009,
    },
    hobbies: ["Golf", "Reading", "Cooking"],
  },
  {
    name: "Mary Davis",
    age: 32,
    job: "Data Scientist",
    location: "Boston, MA",
    email: "mary.davis@example.com",
    skills: ["R", "Python", "Machine Learning"],
    experience: 10,
    education: {
      degree: "Master of Science in Data Science",
      university: "Harvard University",
      graduationYear: 2012,
    },
    hobbies: ["Running", "Puzzles", "Cooking"],
  },
  {
    name: "Michael Wilson",
    age: 27,
    job: "Software Tester",
    location: "Denver, CO",
    email: "michael.wilson@example.com",
    skills: ["Selenium", "JIRA", "Test Automation"],
    experience: 6,
    education: {
      degree: "Bachelor of Science in Information Technology",
      university: "Colorado State University",
      graduationYear: 2016,
    },
    hobbies: ["Video Games", "Fishing", "Reading"],
  },
  {
    name: "Patricia Martinez",
    age: 24,
    job: "Content Writer",
    location: "Miami, FL",
    email: "patricia.martinez@example.com",
    skills: ["Copywriting", "SEO", "Blogging"],
    experience: 3,
    education: {
      degree: "Bachelor of Arts in English",
      university: "University of Florida",
      graduationYear: 2019,
    },
    hobbies: ["Writing", "Traveling", "Photography"],
  },
  {
    name: "James Garcia",
    age: 38,
    job: "Operations Manager",
    location: "Houston, TX",
    email: "james.garcia@example.com",
    skills: ["Operations Management", "Logistics", "Inventory Control"],
    experience: 14,
    education: {
      degree: "Master of Business Administration",
      university: "Rice University",
      graduationYear: 2010,
    },
    hobbies: ["Fishing", "Traveling", "Cycling"],
  },
  {
    name: "Linda Rodriguez",
    age: 29,
    job: "HR Specialist",
    location: "Atlanta, GA",
    email: "linda.rodriguez@example.com",
    skills: ["Recruitment", "Employee Relations", "HRIS"],
    experience: 8,
    education: {
      degree: "Bachelor of Arts in Human Resources Management",
      university: "Georgia State University",
      graduationYear: 2014,
    },
    hobbies: ["Reading", "Yoga", "Hiking"],
  },
  {
    name: "David Martinez",
    age: 45,
    job: "Chief Technology Officer",
    location: "San Jose, CA",
    email: "david.martinez@example.com",
    skills: ["Leadership", "Software Development", "Cloud Computing"],
    experience: 20,
    education: {
      degree: "Master of Science in Computer Science",
      university: "University of Southern California",
      graduationYear: 2004,
    },
    hobbies: ["Golf", "Reading", "Traveling"],
  },
  {
    name: "Barbara Anderson",
    age: 33,
    job: "UX/UI Designer",
    location: "Portland, OR",
    email: "barbara.anderson@example.com",
    skills: ["Sketch", "Figma", "User Research"],
    experience: 11,
    education: {
      degree: "Bachelor of Fine Arts in Interaction Design",
      university: "Savannah College of Art and Design",
      graduationYear: 2013,
    },
    hobbies: ["Drawing", "Traveling", "Cycling"],
  },
  {
    name: "Charles Thomas",
    age: 50,
    job: "Financial Analyst",
    location: "Philadelphia, PA",
    email: "charles.thomas@example.com",
    skills: ["Financial Modeling", "Data Analysis", "Excel"],
    experience: 25,
    education: {
      degree: "Master of Business Administration",
      university: "University of Pennsylvania",
      graduationYear: 1998,
    },
    hobbies: ["Investing", "Reading", "Traveling"],
  },
  {
    name: "Susan Jackson",
    age: 37,
    job: "Accountant",
    location: "Charlotte, NC",
    email: "susan.jackson@example.com",
    skills: ["Accounting", "QuickBooks", "Financial Reporting"],
    experience: 15,
    education: {
      degree: "Bachelor of Science in Accounting",
      university: "University of North Carolina at Charlotte",
      graduationYear: 2007,
    },
    hobbies: ["Cooking", "Reading", "Gardening"],
  },
  {
    name: "Christopher Harris",
    age: 26,
    job: "Sales Executive",
    location: "Dallas, TX",
    email: "christopher.harris@example.com",
    skills: ["Salesforce", "Customer Service", "Lead Generation"],
    experience: 4,
    education: {
      degree: "Bachelor of Business Administration in Marketing",
      university: "Southern Methodist University",
      graduationYear: 2020,
    },
    hobbies: ["Basketball", "Traveling", "Music"],
  },
  {
    name: "Karen Lewis",
    age: 31,
    job: "Business Analyst",
    location: "Phoenix, AZ",
    email: "karen.lewis@example.com",
    skills: ["Data Analysis", "SQL", "Business Process Improvement"],
    experience: 9,
    education: {
      degree: "Bachelor of Science in Business Administration",
      university: "Arizona State University",
      graduationYear: 2013,
    },
    hobbies: ["Hiking", "Yoga", "Reading"],
  },
  {
    name: "Matthew Walker",
    age: 29,
    job: "IT Support Specialist",
    location: "San Diego, CA",
    email: "matthew.walker@example.com",
    skills: ["Windows", "Linux", "Networking"],
    experience: 7,
    education: {
      degree: "Bachelor of Science in Information Technology",
      university: "San Diego State University",
      graduationYear: 2015,
    },
    hobbies: ["Surfing", "Video Games", "Reading"],
  },
  {
    name: "Nancy Hill",
    age: 36,
    job: "Legal Consultant",
    location: "Nashville, TN",
    email: "nancy.hill@example.com",
    skills: ["Contract Law", "Legal Research", "Compliance"],
    experience: 14,
    education: {
      degree: "Juris Doctor",
      university: "Vanderbilt University Law School",
      graduationYear: 2010,
    },
    hobbies: ["Reading", "Traveling", "Cooking"],
  },
  {
    name: "Paul Scott",
    age: 42,
    job: "Architect",
    location: "Las Vegas, NV",
    email: "paul.scott@example.com",
    skills: ["AutoCAD", "Revit", "Project Management"],
    experience: 18,
    education: {
      degree: "Master of Architecture",
      university: "University of Nevada, Las Vegas",
      graduationYear: 2006,
    },
    hobbies: ["Photography", "Traveling", "Hiking"],
  },
  {
    name: "Sarah Green",
    age: 34,
    job: "Public Relations Specialist",
    location: "Orlando, FL",
    email: "sarah.green@example.com",
    skills: ["Media Relations", "Crisis Management", "Event Planning"],
    experience: 12,
    education: {
      degree: "Bachelor of Arts in Communications",
      university: "University of Central Florida",
      graduationYear: 2012,
    },
    hobbies: ["Traveling", "Reading", "Cooking"],
  },
  {
    name: "Kevin White",
    age: 39,
    job: "Web Developer",
    location: "Salt Lake City, UT",
    email: "kevin.white@example.com",
    skills: ["HTML", "CSS", "JavaScript", "Angular"],
    experience: 16,
    education: {
      degree: "Bachelor of Science in Computer Science",
      university: "University of Utah",
      graduationYear: 2008,
    },
    hobbies: ["Coding", "Mountain Biking", "Reading"],
  },
];

const Card = ({ name, age, job, location, education }) => {
  const { degree, university } = education;
  return (
    <div className="card1">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Job: {job}</p>
      <p>Degree: {degree}</p>
      <p>University: {university}</p>
      <p>Location: {location}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="cardd">
      {people.map((people) => (
        <Card {...people} key="name" />
      ))}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
