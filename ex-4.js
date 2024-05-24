let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
  hobbies: ["Football", "Coding"],
};

let additionalHobbies = ["Painting", "Yoga"];

// Start coding here
const newStudentHobbies = [...studentProfile.hobbies, ...additionalHobbies];
studentProfile.hobbies = newStudentHobbies;
const newStudentProfile = studentProfile;

console.log(newStudentProfile);
