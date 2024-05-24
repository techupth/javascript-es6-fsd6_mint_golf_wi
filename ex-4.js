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
studentProfile.hobbies.push(...additionalHobbies);

const newStudentProfile = studentProfile;

console.log(newStudentProfile);
