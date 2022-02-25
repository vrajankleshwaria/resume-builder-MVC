class Model {
    constructor() {
        this.formLabelName = {
            "Name" : ["Name","Full Name:"],
            "Description": ["Description","Person description:","Person sub description:"],
            "Education": ["Education","Education Heading:","Education desc:","Duration:","Score:"],
            "Project": ["Project","Project heading:","Project desc:"],
            "Campus Activities": ["CAMPUS ACTIVITIES","Activity heading:","Activity desc1:","Activity desc2:"],
            "Contact": ["Contact","Email Address:","Phone No:","Address:","Linked In Id","Github Link:"],
            "Technical Skills": ["TECHNICAL SKILLS","Skill:"],
            "Achievement": ["ACHIEVEMENTS","Activity heading:","Activity description:"],
            "Certificate": ["CERTIFICATES","Certificate Name:","Certificate Description:"],
            "Interests": ["INTERESTS","Interest:"],
        };

        this.formHeading = {
            "Education": ["title","description","duration","grad"],
            "Project": ["title","description"],
            "Campus Activities": ["title","place","description"],
            "Technical Skills": ["skill"],
            "Achievement": ["title","description"],
            "Certificate": ["title","description"],
            "Interests": ["interest"],
        };

        this.data = {
            "Description" : [
                {},        
            ],
            "Name" : [{}],
            "Contact" : [{}],
            "Education" : [
                {
                    "title" :"B. Tech in Computer Science And Engineering",
                    "description" :"Institude Of Technology, Nirma University",
                    "duration" : "07/2018 - Present",
                    "grad" : "CGPA : 8.13",
                },
                {
                    "title" :"HSC",
                    "description" :"Kameshwar Vidhyalaya",
                    "duration" : "06/2016 - 05/2018",
                    "grad" : "99.48 percentile",
                },
            ],
            "Project" : [
                {
                    "title" :"Codeforces Helper (10/2020)",
                    "description" :"Application for competitive programers where the Major functionalities are Upcoming contests, upsolve contests, Problem List, bookmark problems, Download problem, Friend List, Profile etc. It is also published on Play Store.",
                },
                {
                    "title" : "Bank Management System (05/2020)",
                    "description" : "Online Management system, which can be used by the customer, employee, and manager for a different activity like login, signup, add employee/manager, view details, update details, transaction details, etc",
                },
            ],
            "Campus Activities" : [
                {
                    "title" : "Volunteering",
                    "place" : "Jyot Foundation",
                    "description" : "we worked for 21 days under Jyot Foundation for helping children suffering from Blood Cancer and helped oldage home",
                },
                {
                    "title" : "Active Learning",
                    "place" : "Nirma University",
                    "description" : "Participated in various contests organized by seniors on codeforces platform under Nirma University group CodeAdda",
                },
            ],
            "Technical Skills" : [
                {
                    "skill" : "Data Structure",
                },
                {
                    "skill" : "Algorithms",
                },
                {
                    "skill" : "Problem Solving",
                },
                {
                    "skill" : "C++",
                },
                {
                    "skill" : "Java",
                },
                {
                    "skill" : "Flutter",
                },
                {
                    "skill" : "Dart",
                },
                {
                    "skill" : "HTML",
                },
                {
                    "skill" : "CSS",
                },
                {
                    "skill" : "Node Js",
                },
                {
                    "skill" : "Express Js",
                },
                {
                    "skill" : "SQL",
                },
            ],
            "Achievement" : [
                {
                    "title" : "Candidate Master on Codeforces",
                    "description" : "ID: VRAJ1408 (Rating: 1910)",
                },
                {
                    "title" : "Codeforces Helper",
                    "description" : "2000+ downloads on play store with 4.9 rating (80+ review)",
                },
                {
                    "title" : "Codeforces Round #629",
                    "description" : "Rank: 289",
                },
                {
                    "title" : "Qualified in Google Codejam (04/2020)",
                    "description" : "Rank: 2102",
                },
                {
                    "title" : "Five Star on Hackerrank",
                    "description" : "Achievement: Gold Badge",
                },
            ],
            "Certificate" : [
                {
                    "title" : "Introduction to Flutter Development (07/2020)",
                    "description" : "Issued by appbrewery",
                },
            ],
            "Interests" : [
                {
                    "interest" : "Chess",
                },
                {
                    "interest" : "Puzzles",
                },
                {
                    "interest" : "Gaming",
                },
                {
                    "interest" : "Sports",
                },
                {
                    "interest" : "Music",
                },
                {
                    "id" : 5,
                    "interest" : "Travelling",
                },
            ],
        }

        this.sampleData = {
            "Education" : {
                "title" :"Education Title Goes Here",
                "description" :"Education Description Goes Here",
                "duration" : "Education Duration Goes Here",
                "grad" : "Education Grad Goes Here",
            },
            "Project" : {
                "title" :"Project Title Goes Here",
                "description" :"Project Description Goes Here",
            },
            "Campus Activities" : {
                "title" : "Activity Title Goes Here",
                "place" : "Activity Place Goes Here",
                "description" : "Activity Description Goes Here",
            },
            "Technical Skills" : {
                "skill" : "SkIlL.!",
            },
            "Achievement" : {
                "title" :"Achivement Title Goes Here",
                "description" :"Achivement Description Goes Here",
            },
            "Certificate" : {
                "title" :"Certificate Title Goes Here",
                "description" :"Certificate Description Goes Here",
            },
            "Interests" : {
                "interest" : "InTeReSt.!"
            }
        };
    }

    // onchange -> update UI
    commit(data,selectedField) {
        this.onResumeSectionSelector(data,selectedField);
        this.onshowForm(data,this.formLabelName,this.inputs,this.values)
    }

    bindResumeSectionSelector(callback) {
        this.onResumeSectionSelector = callback
    }
    bindShowProjectSection(callback) {
        this.onshowProjectSection = callback
    }
    bindShowEducationSection(callback) {
        this.onshowEducationSection = callback
    }
    bindShowActivitySection(callback) {
        this.onshowActivitySection = callback
    }
    bindShowSkillSection(callback) {
        this.onshowSkillSection = callback
    }
    bindShowAchievementSection(callback) {
        this.onshowAchievementSection = callback
    }
    bindShowCertificateSection(callback) {
        this.onshowCertificateSection = callback
    }
    bindShowIntereseSection(callback) {
        this.onshowIntereseSection = callback
    }
    bindShowForm(callback) {
        this.onshowForm = callback
    }

    addField(selectedField) {
        this.data[selectedField].push({...this.sampleData[selectedField]});
        let len=this.data[selectedField].length
        this.data[selectedField][len-1].id = len-1;
        this.commit(this.data,selectedField);
    }
    updateField(id,selectedField,inputs) {
        this.formHeading[selectedField].forEach((heading,index1)=>{
            this.data[selectedField][id][heading] = document.getElementById(`${inputs[index1]}${id}`).value;
        });
        this.commit(this.data,selectedField);
    }
    deleteField(id,selectedField) {
        let length = this.data[selectedField].length
        this.data[selectedField] = [...this.data[selectedField].slice(0,id)].concat(
            [...this.data[selectedField].slice(id+1,length)]
        );
        this.commit(this.data,selectedField)
    }
}

class View {
    constructor() {

        this.inputs = ["input1","input2","input3","input4","input5"];
        this.values = ["heading","value1","value2","value3","value4","value5"];

        this.resumeFields = {
            "Name" : ["fullName"],
            "Description": ["peronDescription","peronSubDescription"],
            "Education": ["educationHeading","educationDescription","duration","grad"],
            "Project": ["projectHeading","projectDescription"],
            "Campus Activities": ["activityHeading","activityDescription1","activityDescription2"],
            "Contact": ["email","phone","address","linkedin","github"],
            "Technical Skills": ["skill"],
            "Achievement": ["achievementHeading","achievementDescription"],
            "Certificate": ["certificateHeading","certificateDescription"],
            "Interests": ["interest"],
        };

        this.isStaticField = {
            "Name": 1,
            "Description": 1,
            "Contact": 1,
            "Education" : 0,
            "Project" : 0,
            "Campus Activities" : 0,
            "Technical Skills" : 0,
            "Achievement" : 0,
            "Certificate" : 0,
            "Interests" : 0
        }

        this.educationContainer = document.getElementById("educationContainer");
        this.projectContainer = document.getElementById("projectContainer");
        this.activityContainer = document.getElementById("activityContainer");
        this.skillContainer = document.getElementById("skillContainer");
        this.achievementContainer = document.getElementById("achievementContainer");
        this.certificateContainer = document.getElementById("certificateContainer");
        this.interestContainer = document.getElementById("interestContainer");
        this.formContainer = document.getElementById("formContainer");

        this.reloadFieldSection = {
            "Project" : this.showProjectSection,
            "Education" : this.showEducationSection,
            "Campus Activities" : this.showActivitySection,
            "Technical Skills" : this.showSkillSection,
            "Achievement" : this.showAchievementSection,
            "Certificate" : this.showCertificateSection,
            "Interests" : this.showIntereseSection,
        };
        this.functionSelector = ()=>{}
    }
    
    resumeSectionSelector(data,selectedField) {
        this.functionSelector = this.reloadFieldSection[selectedField] 
        this.functionSelector(data)
    }

    showProjectSection(data) {
        while (this.projectContainer.children.length > 0) {
            this.projectContainer.removeChild(this.projectContainer.lastChild);
        }
        data["Project"].forEach((project,projectIndex)=>{
            const projectDiv = document.createElement("div");
            projectDiv.className = "padding3";
            const projectHeading = document.createElement("div");
            projectHeading.classList.add("size2", "padding1");
            projectHeading.textContent = project["title"];
            projectHeading.id= `${this.resumeFields["Project"][0]}${projectIndex}`;
            const ul = document.createElement("ul");
            const projectDescription = document.createElement("li");
            projectDescription.id = `${this.resumeFields["Project"][1]}${projectIndex}`;
            projectDescription.textContent = project["description"];
            projectDiv.className = "size1";
            
            ul.appendChild(projectDescription);
            projectDiv.appendChild(projectHeading);
            projectDiv.appendChild(ul);
            this.projectContainer.appendChild(projectDiv);
        });
    }

    showEducationSection(data) {

        while (this.educationContainer.children.length > 0) {
            this.educationContainer.removeChild(this.educationContainer.lastChild);
        }
    
        data["Education"].forEach((education,educationIndex)=>{
            const educationDiv = document.createElement("div");
            educationDiv.className = "extendraw";
    
            const styling = document.createElement("div");
            styling.classList.add("temp","blue_font");
            styling.textContent="___";
    
            const mainEducationDiv = document.createElement("div");
            mainEducationDiv.className="fullwidth";
    
            const educationHeading = document.createElement("div");
            educationHeading.className="size3";
            educationHeading.id=`${this.resumeFields["Education"][0]}${educationIndex}`;
            educationHeading.textContent = education["title"];
    
            const educationDescription = document.createElement("div");
            educationDescription.className="size2";
            educationDescription.id=`${this.resumeFields["Education"][1]}${educationIndex}`;
            educationDescription.textContent = education["description"];
    
            const extraInfo = document.createElement("div");
            extraInfo.classList.add("div-upper","size1","blue_font");
    
            const educationDuration = document.createElement("div");
            educationDuration.className="div-left";
            educationDuration.id=`${this.resumeFields["Education"][2]}${educationIndex}`;
            educationDuration.textContent = education["duration"];
    
            const educationGrad = document.createElement("div");
            educationGrad.className="div-right";
            educationGrad.id=`${this.resumeFields["Education"][3]}${educationIndex}`;
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
    }

    showActivitySection(data) {
        while (this.activityContainer.children.length > 0) {
            this.activityContainer.removeChild(this.activityContainer.lastChild);
        }
        data["Campus Activities"].forEach((activity,activityIndex)=>{
            const activityDiv = document.createElement("div");
            activityDiv.className = "extendraw";
    
            const styling = document.createElement("div");
            styling.classList.add("temp","blue_font");
            styling.textContent="___";
    
            const mainactivityDiv = document.createElement("div");
            mainactivityDiv.className="fullwidth";
    
            const activityHeading = document.createElement("div");
            activityHeading.className="size3";
            activityHeading.id=`${this.resumeFields["Campus Activities"][0]}${activityIndex}`;
            activityHeading.textContent = activity["title"];
    
            const activityPlace = document.createElement("div");
            activityPlace.className="size2";
            activityPlace.id=`${this.resumeFields["Campus Activities"][1]}${activityIndex}`;
            activityPlace.textContent = activity["place"];
    
            const activityDescription = document.createElement("div");
            activityDescription.classList.add("size2","opacity");
            activityDescription.id=`${this.resumeFields["Campus Activities"][2]}${activityIndex}`;
            activityDescription.textContent = activity["description"];
    
            mainactivityDiv.appendChild(activityHeading);
            mainactivityDiv.appendChild(activityPlace);
            mainactivityDiv.appendChild(activityDescription);
            activityDiv.appendChild(styling);
            activityDiv.appendChild(mainactivityDiv);
            this.activityContainer.appendChild(activityDiv);
        });
    }

    showSkillSection(data) {
        while (this.skillContainer.children.length > 0) {
            this.skillContainer.removeChild(this.skillContainer.lastChild);
        }
        data["Technical Skills"].forEach((skill,skillIndex)=>{
            const skillHeading = document.createElement("div");
            skillHeading.className="boxed";
            skillHeading.id=`${this.resumeFields["Technical Skills"][0]}${skillIndex}`;
            skillHeading.textContent = skill["skill"];
    
            this.skillContainer.appendChild(skillHeading);
        });
    }

    showAchievementSection(data) {
        while (this.achievementContainer.children.length > 0) {
            this.achievementContainer.removeChild(this.achievementContainer.lastChild);
        }
        data["Achievement"].forEach((achievement,achievementIndex)=>{
            const achievementDiv = document.createElement("div");
            achievementDiv.className = "padding2";
            
            const achievementHeading = document.createElement("div");
            achievementHeading.className="size2";
            achievementHeading.id=`${this.resumeFields["Achievement"][0]}${achievementIndex}`;
            achievementHeading.textContent = achievement["title"];
    
            const achievementDescription = document.createElement("div");
            achievementDescription.classList.add("size1","opacity");
            achievementDescription.id=`${this.resumeFields["Achievement"][1]}${achievementIndex}`;
            achievementDescription.textContent = achievement["description"];
    
            achievementDiv.appendChild(achievementHeading);
            achievementDiv.appendChild(achievementDescription);
            this.achievementContainer.appendChild(achievementDiv);
        });
    }

    showCertificateSection(data) {
        while (this.certificateContainer.children.length > 0) {
            this.certificateContainer.removeChild(this.certificateContainer.lastChild);
        }
        data["Certificate"].forEach((certificate,certificateIndex)=>{
            const certificateDiv = document.createElement("div");
            certificateDiv.className = "padding2";
            
            const certificateHeading = document.createElement("div");
            certificateHeading.className="size2";
            certificateHeading.id=`${this.resumeFields["Certificate"][0]}${certificateIndex}`;
            certificateHeading.textContent = certificate["title"];
    
            const certificateDescription = document.createElement("div");
            certificateDescription.classList.add("size1","opacity");
            certificateDescription.id=`${this.resumeFields["Certificate"][1]}${certificateIndex}`;
            certificateDescription.textContent = certificate["description"];
    
            certificateDiv.appendChild(certificateHeading);
            certificateDiv.appendChild(certificateDescription);
            this.certificateContainer.appendChild(certificateDiv);
        });
    }

    showIntereseSection(data) {
        while (this.interestContainer.children.length > 0) {
            this.interestContainer.removeChild(this.interestContainer.lastChild);
        }
        data["Interests"].forEach((interest,interestIndex)=>{
            const interestHeading = document.createElement("div");
            interestHeading.className="boxed1";
            interestHeading.id=`${this.resumeFields["Interests"][0]}${interestIndex}`;
            interestHeading.textContent = interest["interest"];
    
            this.interestContainer.appendChild(interestHeading);
        });
    }

    updateFieldButton(index) {
        const updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.className="update";
        updateButton.id=index;
        formContainer.appendChild(updateButton);
    }

    deleteFieldButton(index,staticField) {
        if(!Boolean(staticField)) {
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.className="delete";
            deleteButton.id=index;
            formContainer.appendChild(deleteButton);
        }
    }

    addFieldButton(staticField) {
        if(!Boolean(staticField)) {
            const addButton = document.createElement("button");
            addButton.className="add";
            addButton.textContent = "Add";
            formContainer.appendChild(document.createElement("br"));
            formContainer.appendChild(addButton);
        }
    }

    showForm(data,formLabelName) {
        let selectedField = document.getElementById('selectField').value;
        let staticField = this.isStaticField[selectedField];
        
        while (formContainer.children.length > 0) {
            formContainer.removeChild(formContainer.lastChild);
        }
        data[selectedField].forEach((_data,dataIndex)=>{
            const formHeading = document.createElement("div");
            formHeading.classList.add("size3","blue_font","padding1");
            formHeading.id=this.values[dataIndex];
            formHeading.innerHTML=`${formLabelName[selectedField][0]} ${dataIndex+1} `;
            formContainer.appendChild(formHeading);
            formLabelName[selectedField].forEach((labelvalue,labelIndex)=>{
                if (Boolean(labelIndex)) {
                    let label=document.createElement("label");
                    label.classList.add("size2","label");
                    label.id=`${this.values[labelIndex-1]}${dataIndex}`;
                    label.innerHTML=labelvalue;
                    let input=document.createElement("textarea");
                    input.id=`${this.inputs[labelIndex-1]}${dataIndex}`;
                    input.value=document.getElementById(`${this.resumeFields[selectedField][labelIndex-1]}${dataIndex}`).textContent.trim();
                    formContainer.appendChild(label);
                    formContainer.appendChild(input);
                    formContainer.appendChild(document.createElement("br"));
                }
            });
            
            this.updateFieldButton(dataIndex);
            this.deleteFieldButton(dataIndex,staticField);
            
        });

        this.addFieldButton(staticField);
    }

    bindAddField(handler) {
        this.formContainer.addEventListener('click', event => {
            if (event.target.className === 'add') {
                let selectedField = document.getElementById('selectField').value;
                handler(selectedField)
            }   
        })
    }
    
    bindDeleteField(handler) {
        this.formContainer.addEventListener('click', event => {
          if (event.target.className === 'delete') {
            let selectedField = document.getElementById('selectField').value;
            const id = parseInt(event.target.id)
            handler(id,selectedField)
          }
        })
    }
    
    bindUpdateField(handler) {
        this.formContainer.addEventListener('click', event => {
            if (event.target.className === 'update') {
                let selectedField = document.getElementById('selectField').value;
                let staticField = this.isStaticField[selectedField];
                const id = event.target.id  
                if(Boolean(staticField)) {
                    this.resumeFields[selectedField].forEach((field,fieldIndex)=>{
                        document.getElementById(`${field}${id}`).innerHTML = document.getElementById(`${this.inputs[fieldIndex]}${id}`).value;
                    });
                } else {
                    handler(id,selectedField,this.inputs)
                }
            }
        })
    }
}

class Controller {
    constructor(model,view) {
        this.model = model
        this.view = view

        this.model.bindResumeSectionSelector(this.onResumeSectionSelector)

        this.model.bindShowProjectSection(this.onshowProjectSection)
        this.model.bindShowEducationSection(this.onshowEducationSection)
        this.model.bindShowActivitySection(this.onshowActivitySection)
        this.model.bindShowSkillSection(this.onshowSkillSection)
        this.model.bindShowAchievementSection(this.onshowAchievementSection)
        this.model.bindShowCertificateSection(this.onshowCertificateSection)
        this.model.bindShowIntereseSection(this.onshowIntereseSection)

        this.model.bindShowForm(this.onshowForm)

        this.onshowProjectSection(this.model.data)
        this.onshowEducationSection(this.model.data)
        this.onshowActivitySection(this.model.data)
        this.onshowSkillSection(this.model.data)
        this.onshowAchievementSection(this.model.data)
        this.onshowCertificateSection(this.model.data)
        this.onshowIntereseSection(this.model.data)

        this.view.bindAddField(this.handleAddField)
        this.view.bindUpdateField(this.handleUpdateField)
        this.view.bindDeleteField(this.handleDeleteField)

        document.getElementById("selectField").addEventListener("change", ()=>{
            this.onshowForm(this.model.data,this.model.formLabelName)
        });
    }

    onResumeSectionSelector = (data,selectedField) => {
        this.view.resumeSectionSelector(data,selectedField)
    }
    onshowProjectSection = (data) => {
        this.view.showProjectSection(data)
    }
    onshowEducationSection = (data) => {
        this.view.showEducationSection(data)
    }
    onshowActivitySection = (data) => {
        this.view.showActivitySection(data)
    }
    onshowSkillSection = (data) => {
        this.view.showSkillSection(data)
    }
    onshowAchievementSection = (data) => {
        this.view.showAchievementSection(data)
    }
    onshowCertificateSection = (data) => {
        this.view.showCertificateSection(data)
    }
    onshowIntereseSection = (data) => {
        this.view.showIntereseSection(data)
    }
    onshowForm = (data,formLabelName) => {
        this.view.showForm(data,formLabelName)
    }

    handleAddField = (selectedField) => {
        this.model.addField(selectedField)
    }
    
    handleUpdateField = (id,selectedField,inputs) => {
        this.model.updateField(id,selectedField,inputs);
    }
    
    handleDeleteField = (id,selectedField) => {
        this.model.deleteField(id,selectedField)
    }
}

const app = new Controller(new Model(), new View())