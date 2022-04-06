class Model {
  constructor() {
    this.formLabelName = {
      Name: ["Name", "Full Name:"],
      Description: [
        "Description",
        "Person description:",
        "Person sub description:",
      ],
      Education: [
        "Education",
        "Education Heading:",
        "Education desc:",
        "Duration:",
        "Score:",
      ],
      Project: ["Project", "Project heading:", "Project desc:"],
      "Campus Activities": [
        "CAMPUS ACTIVITIES",
        "Activity heading:",
        "Activity desc1:",
        "Activity desc2:",
      ],
      Contact: [
        "Contact",
        "Email Address:",
        "Phone No:",
        "Address:",
        "Linked In Id",
        "Github Link:",
      ],
      "Technical Skills": ["TECHNICAL SKILLS", "Skill:"],
      Achievement: [
        "ACHIEVEMENTS",
        "Activity heading:",
        "Activity description:",
      ],
      Certificate: [
        "CERTIFICATES",
        "Certificate Name:",
        "Certificate Description:",
      ],
      Interests: ["INTERESTS", "Interest:"],
    };

    this.data = {
      Description: [{}],
      Name: [{}],
      Contact: [{}],
      Education: [
        {
          title: "B. Tech in Computer Science And Engineering",
          description: "Institude Of Technology, Nirma University",
          duration: "07/2018 - Present",
          grad: "CGPA : 8.13",
        },
        {
          title: "HSC",
          description: "Kameshwar Vidhyalaya",
          duration: "06/2016 - 05/2018",
          grad: "99.48 percentile",
        },
      ],
      Project: [
        {
          title: "Codeforces Helper (10/2020)",
          description:
            "Application for competitive programers where the Major functionalities are Upcoming contests, upsolve contests, Problem List, bookmark problems, Download problem, Friend List, Profile etc. It is also published on Play Store.",
        },
        {
          title: "Bank Management System (05/2020)",
          description:
            "Online Management system, which can be used by the customer, employee, and manager for a different activity like login, signup, add employee/manager, view details, update details, transaction details, etc",
        },
      ],
      "Campus Activities": [
        {
          title: "Volunteering",
          place: "Jyot Foundation",
          description:
            "we worked for 21 days under Jyot Foundation for helping children suffering from Blood Cancer and helped oldage home",
        },
        {
          title: "Active Learning",
          place: "Nirma University",
          description:
            "Participated in various contests organized by seniors on codeforces platform under Nirma University group CodeAdda",
        },
      ],
      "Technical Skills": [
        {
          skill: "Data Structure",
        },
        {
          skill: "Algorithms",
        },
        {
          skill: "Problem Solving",
        },
        {
          skill: "C++",
        },
        {
          skill: "Java",
        },
        {
          skill: "Flutter",
        },
        {
          skill: "Dart",
        },
        {
          skill: "HTML",
        },
        {
          skill: "CSS",
        },
        {
          skill: "Node Js",
        },
        {
          skill: "Express Js",
        },
        {
          skill: "SQL",
        },
      ],
      Achievement: [
        {
          title: "Candidate Master on Codeforces",
          description: "ID: VRAJ1408 (Rating: 1910)",
        },
        {
          title: "Codeforces Helper",
          description:
            "2000+ downloads on play store with 4.9 rating (80+ review)",
        },
        {
          title: "Codeforces Round #629",
          description: "Rank: 289",
        },
        {
          title: "Qualified in Google Codejam (04/2020)",
          description: "Rank: 2102",
        },
        {
          title: "Five Star on Hackerrank",
          description: "Achievement: Gold Badge",
        },
      ],
      Certificate: [
        {
          title: "Introduction to Flutter Development (07/2020)",
          description: "Issued by appbrewery",
        },
      ],
      Interests: [
        {
          interest: "Chess",
        },
        {
          interest: "Puzzles",
        },
        {
          interest: "Gaming",
        },
        {
          interest: "Sports",
        },
        {
          interest: "Music",
        },
        {
          id: 5,
          interest: "Travelling",
        },
      ],
    };

    this.sampleData = {
      Education: {
        title: "Education Title Goes Here",
        description: "Education Description Goes Here",
        duration: "Education Duration Goes Here",
        grad: "Education Grad Goes Here",
      },
      Project: {
        title: "Project Title Goes Here",
        description: "Project Description Goes Here",
      },
      "Campus Activities": {
        title: "Activity Title Goes Here",
        place: "Activity Place Goes Here",
        description: "Activity Description Goes Here",
      },
      "Technical Skills": {
        skill: "SkIlL.!",
      },
      Achievement: {
        title: "Achivement Title Goes Here",
        description: "Achivement Description Goes Here",
      },
      Certificate: {
        title: "Certificate Title Goes Here",
        description: "Certificate Description Goes Here",
      },
      Interests: {
        interest: "InTeReSt.!",
      },
    };
  }

  // onchange -> update UI
  commit(data, selectedField) {
    this.onDataChange(data, selectedField, this.formLabelName, 1);
  }

  bindShowProjectSection(callback) {
    this.onshowProjectSection = callback;
  }
  bindShowEducationSection(callback) {
    this.onshowEducationSection = callback;
  }
  bindShowActivitySection(callback) {
    this.onshowActivitySection = callback;
  }
  bindShowSkillSection(callback) {
    this.onshowSkillSection = callback;
  }
  bindShowAchievementSection(callback) {
    this.onshowAchievementSection = callback;
  }
  bindShowCertificateSection(callback) {
    this.onshowCertificateSection = callback;
  }
  bindShowIntereseSection(callback) {
    this.onshowIntereseSection = callback;
  }
  bindDataChange(callback) {
    this.onDataChange = callback;
  }

  addField(selectedField) {
    this.data[selectedField].push({ ...this.sampleData[selectedField] });
    const len = this.data[selectedField].length;
    this.data[selectedField][len - 1].id = len - 1;
    this.commit(this.data, selectedField);
  }
  updateField(id, selectedField, headings, value) {
    headings.forEach((heading, index) => {
      this.data[selectedField][id][heading] = value[index];
    });
    this.commit(this.data, selectedField);
  }
  deleteField(id, selectedField) {
    const length = this.data[selectedField].length;
    this.data[selectedField] = [
      ...this.data[selectedField].slice(0, id),
    ].concat([...this.data[selectedField].slice(id + 1, length)]);
    this.commit(this.data, selectedField);
  }
}

class View {
  constructor() {
    this.resumeFields = {
      Name: ["fullName"],
      Description: ["peronDescription", "peronSubDescription"],
      Education: [
        "educationHeading",
        "educationDescription",
        "duration",
        "grad",
      ],
      Project: ["projectHeading", "projectDescription"],
      "Campus Activities": [
        "activityHeading",
        "activityDescription1",
        "activityDescription2",
      ],
      Contact: ["email", "phone", "address", "linkedin", "github"],
      "Technical Skills": ["skill"],
      Achievement: ["achievementHeading", "achievementDescription"],
      Certificate: ["certificateHeading", "certificateDescription"],
      Interests: ["interest"],
    };

    this.formHeading = {
      Education: ["title", "description", "duration", "grad"],
      Project: ["title", "description"],
      "Campus Activities": ["title", "place", "description"],
      "Technical Skills": ["skill"],
      Achievement: ["title", "description"],
      Certificate: ["title", "description"],
      Interests: ["interest"],
    };

    this.isStaticField = {
      Name: true,
      Description: true,
      Contact: true,
      Education: false,
      Project: false,
      "Campus Activities": false,
      "Technical Skills": false,
      Achievement: false,
      Certificate: false,
      Interests: false,
    };

    this.educationContainer = document.getElementById("educationContainer");
    this.projectContainer = document.getElementById("projectContainer");
    this.activityContainer = document.getElementById("activityContainer");
    this.skillContainer = document.getElementById("skillContainer");
    this.achievementContainer = document.getElementById("achievementContainer");
    this.certificateContainer = document.getElementById("certificateContainer");
    this.interestContainer = document.getElementById("interestContainer");
    this.formContainer = document.getElementById("formContainer");

    this.reloadFieldSection = {
      Project: this.showProjectSection,
      Education: this.showEducationSection,
      "Campus Activities": this.showActivitySection,
      "Technical Skills": this.showSkillSection,
      Achievement: this.showAchievementSection,
      Certificate: this.showCertificateSection,
      Interests: this.showIntereseSection,
    };
  }

  resumeSectionSelector(data, selectedField) {
    this.reloadFieldSection[selectedField](data);
  }

  clearContainer(container) {
    while (container.children.length > 0) {
      container.removeChild(container.lastChild);
    }
  }

  showProjectSection = (data) => {
    this.clearContainer(this.projectContainer);
    data["Project"].forEach((project, projectIndex) => {
      const projectDiv = document.createElement("div");
      projectDiv.className = "padding3";
      const projectHeading = document.createElement("div");
      projectHeading.classList.add("h2", "padding1");
      projectHeading.textContent = project["title"];
      const projectHeadingId = this.resumeFields["Project"][0];
      projectHeading.id = `${projectHeadingId}${projectIndex}`;
      const ul = document.createElement("ul");
      const projectDescription = document.createElement("li");
      const projectDescriptionId = this.resumeFields["Project"][1];
      projectDescription.id = `${projectDescriptionId}${projectIndex}`;
      projectDescription.textContent = project["description"];
      projectDiv.className = "h1";

      ul.appendChild(projectDescription);
      projectDiv.appendChild(projectHeading);
      projectDiv.appendChild(ul);
      this.projectContainer.appendChild(projectDiv);
    });
  };

  showEducationSection = (data) => {
    this.clearContainer(this.educationContainer);

    data["Education"].forEach((education, educationIndex) => {
      const educationDiv = document.createElement("div");
      educationDiv.className = "extend-raw";

      const styling = document.createElement("div");
      styling.classList.add("blank-container", "blue");
      styling.textContent = "___";

      const mainEducationDiv = document.createElement("div");
      mainEducationDiv.className = "fullwidth";

      const educationHeading = document.createElement("div");
      educationHeading.className = "h3";
      const educationHeadingId = this.resumeFields["Education"][0];
      educationHeading.id = `${educationHeadingId}${educationIndex}`;
      educationHeading.textContent = education["title"];

      const educationDescription = document.createElement("div");
      educationDescription.className = "h2";
      const educationDescriptionId = this.resumeFields["Education"][1];
      educationDescription.id = `${educationDescriptionId}${educationIndex}`;
      educationDescription.textContent = education["description"];

      const extraInfo = document.createElement("div");
      extraInfo.classList.add("upper-container", "h1", "blue");

      const educationDuration = document.createElement("div");
      educationDuration.className = "left-container";
      const educationDurationId = this.resumeFields["Education"][2];
      educationDuration.id = `${educationDurationId}${educationIndex}`;
      educationDuration.textContent = education["duration"];

      const educationGrad = document.createElement("div");
      educationGrad.className = "right-container";
      const educationGradId = this.resumeFields["Education"][3];
      educationGrad.id = `${educationGradId}${educationIndex}`;
      educationGrad.textContent = education["grad"];

      extraInfo.appendChild(educationDuration);
      extraInfo.appendChild(educationGrad);
      mainEducationDiv.appendChild(educationHeading);
      mainEducationDiv.appendChild(educationDescription);
      mainEducationDiv.appendChild(extraInfo);
      educationDiv.appendChild(styling);
      educationDiv.appendChild(mainEducationDiv);
      this.educationContainer.appendChild(educationDiv);
    });
  };

  showActivitySection = (data) => {
    this.clearContainer(this.activityContainer);
    data["Campus Activities"].forEach((activity, activityIndex) => {
      const activityDiv = document.createElement("div");
      activityDiv.className = "extend-raw";

      const styling = document.createElement("div");
      styling.classList.add("blank-container", "blue");
      styling.textContent = "___";

      const mainactivityDiv = document.createElement("div");
      mainactivityDiv.className = "fullwidth";

      const activityHeading = document.createElement("div");
      activityHeading.className = "h3";
      const activityHeadingId = this.resumeFields["Campus Activities"][0];
      activityHeading.id = `${activityHeadingId}${activityIndex}`;
      activityHeading.textContent = activity["title"];

      const activityPlace = document.createElement("div");
      activityPlace.className = "h2";
      const activityPlaceId = this.resumeFields["Campus Activities"][1];
      activityPlace.id = `${activityPlaceId}${activityIndex}`;
      activityPlace.textContent = activity["place"];

      const activityDescription = document.createElement("div");
      activityDescription.classList.add("h2", "opacity");
      const activityDescriptionId = this.resumeFields["Campus Activities"][2];
      activityDescription.id = `${activityDescriptionId}${activityIndex}`;
      activityDescription.textContent = activity["description"];

      mainactivityDiv.appendChild(activityHeading);
      mainactivityDiv.appendChild(activityPlace);
      mainactivityDiv.appendChild(activityDescription);
      activityDiv.appendChild(styling);
      activityDiv.appendChild(mainactivityDiv);
      this.activityContainer.appendChild(activityDiv);
    });
  };

  showSkillSection = (data) => {
    this.clearContainer(this.skillContainer);
    data["Technical Skills"].forEach((skill, skillIndex) => {
      const skillHeading = document.createElement("div");
      skillHeading.className = "boxed";
      const skillHeadingId = this.resumeFields["Technical Skills"][0];
      skillHeading.id = `${skillHeadingId}${skillIndex}`;
      skillHeading.textContent = skill["skill"];

      this.skillContainer.appendChild(skillHeading);
    });
  };

  showAchievementSection = (data) => {
    this.clearContainer(this.achievementContainer);
    data["Achievement"].forEach((achievement, achievementIndex) => {
      const achievementDiv = document.createElement("div");
      achievementDiv.className = "padding2";

      const achievementHeading = document.createElement("div");
      achievementHeading.className = "h2";
      const achievementHeadingId = this.resumeFields["Achievement"][0];
      achievementHeading.id = `${achievementHeadingId}${achievementIndex}`;
      achievementHeading.textContent = achievement["title"];

      const achievementDescription = document.createElement("div");
      achievementDescription.classList.add("h1", "opacity");
      const achievementDescriptionId = this.resumeFields["Achievement"][1];
      achievementDescription.id = `${achievementDescriptionId}${achievementIndex}`;
      achievementDescription.textContent = achievement["description"];

      achievementDiv.appendChild(achievementHeading);
      achievementDiv.appendChild(achievementDescription);
      this.achievementContainer.appendChild(achievementDiv);
    });
  };

  showCertificateSection = (data) => {
    this.clearContainer(this.certificateContainer);
    data["Certificate"].forEach((certificate, certificateIndex) => {
      const certificateDiv = document.createElement("div");
      certificateDiv.className = "padding2";

      const certificateHeading = document.createElement("div");
      certificateHeading.className = "h2";
      const certificateHeadingId = this.resumeFields["Certificate"][0];
      certificateHeading.id = `${certificateHeadingId}${certificateIndex}`;
      certificateHeading.textContent = certificate["title"];

      const certificateDescription = document.createElement("div");
      certificateDescription.classList.add("h1", "opacity");
      const certificateDescriptionId = this.resumeFields["Certificate"][1];
      certificateDescription.id = `${certificateDescriptionId}${certificateIndex}`;
      certificateDescription.textContent = certificate["description"];

      certificateDiv.appendChild(certificateHeading);
      certificateDiv.appendChild(certificateDescription);
      this.certificateContainer.appendChild(certificateDiv);
    });
  };

  showIntereseSection = (data) => {
    this.clearContainer(this.interestContainer);
    data["Interests"].forEach((interest, interestIndex) => {
      const interestHeading = document.createElement("div");
      interestHeading.className = "boxed-transparent";
      const interestHeadingId = this.resumeFields["Interests"][0];
      interestHeading.id = `${interestHeadingId}${interestIndex}`;
      interestHeading.textContent = interest["interest"];

      this.interestContainer.appendChild(interestHeading);
    });
  };

  createButton(textContent, className) {
    const button = document.createElement("button");
    button.textContent = textContent;
    button.className = className;
    return button;
  }

  appendUpdateButton(index) {
    const button = this.createButton("Update", "update");
    button.id = index;
    formContainer.appendChild(button);
  }

  appendDeleteButton(index, staticField) {
    if (!Boolean(staticField)) {
      const button = this.createButton("Delete", "delete");
      button.id = index;
      formContainer.appendChild(button);
    }
  }

  appendAddButton(staticField) {
    if (!Boolean(staticField)) {
      const button = this.createButton("Add", "add");
      formContainer.appendChild(document.createElement("br"));
      formContainer.appendChild(button);
    }
  }

  showForm(data, formLabelName) {
    const selectedField = document.getElementById("selectField").value;
    const staticField = this.isStaticField[selectedField];

    while (formContainer.children.length > 0) {
      formContainer.removeChild(formContainer.lastChild);
    }
    data[selectedField].forEach((_data, dataIndex) => {
      const formHeading = document.createElement("div");
      formHeading.classList.add("h3", "blue", "padding1");
      formHeading.innerHTML = `${formLabelName[selectedField][0]} ${
        dataIndex + 1
      } `;
      formContainer.appendChild(formHeading);
      formLabelName[selectedField].forEach((labelvalue, labelIndex) => {
        if (Boolean(labelIndex)) {
          const label = document.createElement("label");
          label.classList.add("h2", "label");
          label.id = `value${labelIndex}${dataIndex}`;
          label.innerHTML = labelvalue;
          const input = document.createElement("textarea");
          input.id = `input${labelIndex}${dataIndex}`;
          const formId = document.getElementById(
            `${this.resumeFields[selectedField][labelIndex - 1]}${
              this.isStaticField[selectedField] ? "" : dataIndex
            }`
          );
          input.value = formId.textContent.trim();
          formContainer.appendChild(label);
          formContainer.appendChild(input);
          formContainer.appendChild(document.createElement("br"));
        }
      });

      this.appendUpdateButton(dataIndex);
      this.appendDeleteButton(dataIndex, staticField);
    });

    this.appendAddButton(staticField);
  }

  dataChange(data, selectedField, formLabelName, loadResumeSection) {
    if (loadResumeSection) this.resumeSectionSelector(data, selectedField);
    this.showForm(data, formLabelName);
  }

  bindAddField(handler) {
    const collection = document.querySelectorAll(".add");
    collection.forEach((button) => {
      button.addEventListener("click", () => {
        const selectedField = document.getElementById("selectField").value;
        handler(selectedField);
      });
    });
  }

  bindDeleteField(handler) {
    const collection = document.querySelectorAll(".delete");
    collection.forEach((button) => {
      button.addEventListener("click", (event) => {
        const selectedField = document.getElementById("selectField").value;
        const id = parseInt(event.target.id);
        handler(id, selectedField);
      });
    });
  }

  bindUpdateField(handler) {
    const collection = document.querySelectorAll(".update");
    collection.forEach((button) => {
      button.addEventListener("click", (event) => {
        const selectedField = document.getElementById("selectField").value;
        const staticField = this.isStaticField[selectedField];
        const id = event.target.id;
        if (Boolean(staticField)) {
          this.resumeFields[selectedField].forEach((field, fieldIndex) => {
            document.getElementById(
              `${field}${this.isStaticField[selectedField] ? "" : id}`
            ).innerHTML = document.getElementById(
              `input${fieldIndex + 1}${id}`
            ).value;
          });
        } else {
          let value = [];
          let headings = [];
          this.formHeading[selectedField].forEach((heading, headingIndex) => {
            value.push(
              document.getElementById(`input${headingIndex + 1}${id}`).value
            );
            headings.push(heading);
          });
          handler(id, selectedField, headings, value);
        }
      });
    });
  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.bindShowProjectSection(this.onshowProjectSection);
    this.model.bindShowEducationSection(this.onshowEducationSection);
    this.model.bindShowActivitySection(this.onshowActivitySection);
    this.model.bindShowSkillSection(this.onshowSkillSection);
    this.model.bindShowAchievementSection(this.onshowAchievementSection);
    this.model.bindShowCertificateSection(this.onshowCertificateSection);
    this.model.bindShowIntereseSection(this.onshowIntereseSection);

    this.model.bindDataChange(this.onDataChange);

    this.onshowProjectSection(this.model.data);
    this.onshowEducationSection(this.model.data);
    this.onshowActivitySection(this.model.data);
    this.onshowSkillSection(this.model.data);
    this.onshowAchievementSection(this.model.data);
    this.onshowCertificateSection(this.model.data);
    this.onshowIntereseSection(this.model.data);

    document.getElementById("selectField").addEventListener("change", () => {
      const selectedField = document.getElementById("selectField").value;
      this.onDataChange(
        this.model.data,
        selectedField,
        this.model.formLabelName,
        0
      );
    });
  }

  onshowProjectSection = (data) => {
    this.view.showProjectSection(data);
  };
  onshowEducationSection = (data) => {
    this.view.showEducationSection(data);
  };
  onshowActivitySection = (data) => {
    this.view.showActivitySection(data);
  };
  onshowSkillSection = (data) => {
    this.view.showSkillSection(data);
  };
  onshowAchievementSection = (data) => {
    this.view.showAchievementSection(data);
  };
  onshowCertificateSection = (data) => {
    this.view.showCertificateSection(data);
  };
  onshowIntereseSection = (data) => {
    this.view.showIntereseSection(data);
  };
  onDataChange = (data, selectedField, formLabelName, loadResumeSection) => {
    this.view.dataChange(data, selectedField, formLabelName, loadResumeSection);
    this.view.bindAddField(this.handleAddField);
    this.view.bindUpdateField(this.handleUpdateField);
    this.view.bindDeleteField(this.handleDeleteField);
  };

  handleAddField = (selectedField) => {
    this.model.addField(selectedField);
  };
  handleUpdateField = (id, selectedField, headings, value) => {
    this.model.updateField(id, selectedField, headings, value);
  };
  handleDeleteField = (id, selectedField) => {
    this.model.deleteField(id, selectedField);
  };
}

const app = new Controller(new Model(), new View());
