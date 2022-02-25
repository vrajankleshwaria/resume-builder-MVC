class Model {
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

        this.labelName = {
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
                    "id" : 0,
                    "title" :"Codeforces Helper (10/2020)",
                    "description" :"Application for competitive programers where the Major functionalities are Upcoming contests, upsolve contests, Problem List, bookmark problems, Download problem, Friend List, Profile etc. It is also published on Play Store.",
                },
                {
                    "id" : 1,
                    "title" : "Bank Management System (05/2020)",
                    "description" : "Online Management system, which can be used by the customer, employee, and manager for a different activity like login, signup, add employee/manager, view details, update details, transaction details, etc",
                },
            ],
            "Campus Activities" : [
                {
                    "id" : 0,
                    "title" : "Volunteering",
                    "place" : "Jyot Foundation",
                    "description" : "we worked for 21 days under Jyot Foundation for helping children suffering from Blood Cancer and helped oldage home",
                },
                {
                    "id" : 1,
                    "title" : "Active Learning",
                    "place" : "Nirma University",
                    "description" : "Participated in various contests organized by seniors on codeforces platform under Nirma University group CodeAdda",
                },
            ],
            "Technical Skills" : [
                {
                    "id" : 0,
                    "skill" : "Data Structure",
                },
                {
                    "id" : 1,
                    "skill" : "Algorithms",
                },
                {
                    "id" : 2,
                    "skill" : "Problem Solving",
                },
                {
                    "id" : 3,
                    "skill" : "C++",
                },
                {
                    "id" : 4,
                    "skill" : "Java",
                },
                {
                    "id" : "5",
                    "skill" : "Flutter",
                },
                {
                    "id" : "6",
                    "skill" : "Dart",
                },
                {
                    "id" : "7",
                    "skill" : "HTML",
                },
                {
                    "id" : "8",
                    "skill" : "CSS",
                },
                {
                    "id" : "9",
                    "skill" : "Node Js",
                },
                {
                    "id" : "10",
                    "skill" : "Express Js",
                },
                {
                    "id" : "11",
                    "skill" : "SQL",
                },
            ],
            "Achievement" : [
                {
                    "id" : 0,
                    "title" : "Candidate Master on Codeforces",
                    "description" : "ID: VRAJ1408 (Rating: 1910)",
                },
                {
                    "id" : 1,
                    "title" : "Codeforces Helper",
                    "description" : "2000+ downloads on play store with 4.9 rating (80+ review)",
                },
                {
                    "id" : 2,
                    "title" : "Codeforces Round #629",
                    "description" : "Rank: 289",
                },
                {
                    "id" : 3,
                    "title" : "Qualified in Google Codejam (04/2020)",
                    "description" : "Rank: 2102",
                },
                {
                    "id" : 4,
                    "title" : "Five Star on Hackerrank",
                    "description" : "Achievement: Gold Badge",
                },
            ],
            "Certificate" : [
                {
                    "id" : 0,
                    "title" : "Introduction to Flutter Development (07/2020)",
                    "description" : "Issued by appbrewery",
                },
            ],
            "Interests" : [
                {
                    "id" : 0,
                    "interest" : "Chess",
                },
                {
                    "id" : 1,
                    "interest" : "Puzzles",
                },
                {
                    "id" : 2,
                    "interest" : "Gaming",
                },
                {
                    "id" : 3,
                    "interest" : "Sports",
                },
                {
                    "id" : 4,
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

    commit(data,SELECTED_FIELD) {
        this.onResumeSectionSelector(data,this.resumeFields,SELECTED_FIELD);
        this.onshowForm(data,this.labelName,this.inputs,this.values,this.resumeFields)
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

    addButton(id,SELECTED_FIELD) {
        this.data[SELECTED_FIELD].push({...this.sampleData[SELECTED_FIELD]});
        let len=this.data[SELECTED_FIELD].length
        this.data[SELECTED_FIELD][len-1].id = len-1;
        this.commit(this.data,SELECTED_FIELD);
    }
    updateButton(id,SELECTED_FIELD,staticField) {

        if(Boolean(staticField)) {
            this.resumeFields[SELECTED_FIELD].forEach((field,index1)=>{
                document.getElementById(`${field}${id}`).innerHTML = document.getElementById(`${this.inputs[index1]}${id}`).value;
            });
        } else {
            this.formHeading[SELECTED_FIELD].forEach((heading,index1)=>{
                this.data[SELECTED_FIELD][id][heading] = document.getElementById(`${this.inputs[index1]}${id}`).value;
            });
            this.commit(this.data,SELECTED_FIELD);
        }

    }
    deleteButton(id,SELECTED_FIELD) {
        let length = this.data[SELECTED_FIELD].length
        this.data[SELECTED_FIELD] = [...this.data[SELECTED_FIELD].slice(0,id)].concat(
            [...this.data[SELECTED_FIELD].slice(id+1,length)]
        );
        // this.data[SELECTED_FIELD].forEach((_data,index)=>{
        //     _data.id=index;
        // })
        this.commit(this.data,SELECTED_FIELD)
    }
}

class View {
    constructor() {
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

    resumeSectionSelector(data,resumeFields,SELECTED_FIELD) {
        this.functionSelector = this.reloadFieldSection[SELECTED_FIELD] 
        this.functionSelector(data,resumeFields)
    }

    showProjectSection(data,resumeFields) {
        while (this.projectContainer.children.length > 0) {
            this.projectContainer.removeChild(this.projectContainer.lastChild);
        }
        data["Project"].forEach((project,index)=>{
            const projectDiv = document.createElement("div");
            projectDiv.className = "padding3";
            const projectHeading = document.createElement("div");
            projectHeading.classList.add("size2", "padding1");
            projectHeading.textContent = project["title"];
            projectHeading.id= `${resumeFields["Project"][0]}${index}`;
            const ul = document.createElement("ul");
            const projectDescription = document.createElement("li");
            projectDescription.id = `${resumeFields["Project"][1]}${index}`;
            projectDescription.textContent = project["description"];
            projectDiv.className = "size1";
            
            ul.appendChild(projectDescription);
            projectDiv.appendChild(projectHeading);
            projectDiv.appendChild(ul);
            this.projectContainer.appendChild(projectDiv);
        });
    }

    showEducationSection(data,resumeFields) {

        while (this.educationContainer.children.length > 0) {
            this.educationContainer.removeChild(this.educationContainer.lastChild);
        }
    
        data["Education"].forEach((education,index)=>{
            const educationDiv = document.createElement("div");
            educationDiv.className = "extendraw";
    
            const styling = document.createElement("div");
            styling.classList.add("temp","blue_font");
            styling.textContent="___";
    
            const mainEducationDiv = document.createElement("div");
            mainEducationDiv.className="fullwidth";
    
            const educationHeading = document.createElement("div");
            educationHeading.className="size3";
            educationHeading.id=`${resumeFields["Education"][0]}${index}`;
            educationHeading.textContent = education["title"];
    
            const educationDescription = document.createElement("div");
            educationDescription.className="size2";
            educationDescription.id=`${resumeFields["Education"][1]}${index}`;
            educationDescription.textContent = education["description"];
    
            const extraInfo = document.createElement("div");
            extraInfo.classList.add("div-upper","size1","blue_font");
    
            const educationDuration = document.createElement("div");
            educationDuration.className="div-left";
            educationDuration.id=`${resumeFields["Education"][2]}${index}`;
            educationDuration.textContent = education["duration"];
    
            const educationGrad = document.createElement("div");
            educationGrad.className="div-right";
            educationGrad.id=`${resumeFields["Education"][3]}${index}`;
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

    showActivitySection(data,resumeFields) {
        while (this.activityContainer.children.length > 0) {
            this.activityContainer.removeChild(this.activityContainer.lastChild);
        }
        data["Campus Activities"].forEach((activity,index)=>{
            const activityDiv = document.createElement("div");
            activityDiv.className = "extendraw";
    
            const styling = document.createElement("div");
            styling.classList.add("temp","blue_font");
            styling.textContent="___";
    
            const mainactivityDiv = document.createElement("div");
            mainactivityDiv.className="fullwidth";
    
            const activityHeading = document.createElement("div");
            activityHeading.className="size3";
            activityHeading.id=`${resumeFields["Campus Activities"][0]}${index}`;
            activityHeading.textContent = activity["title"];
    
            const activityPlace = document.createElement("div");
            activityPlace.className="size2";
            activityPlace.id=`${resumeFields["Campus Activities"][1]}${index}`;
            activityPlace.textContent = activity["place"];
    
            const activityDescription = document.createElement("div");
            activityDescription.classList.add("size2","opacity");
            activityDescription.id=`${resumeFields["Campus Activities"][2]}${index}`;
            activityDescription.textContent = activity["description"];
    
            mainactivityDiv.appendChild(activityHeading);
            mainactivityDiv.appendChild(activityPlace);
            mainactivityDiv.appendChild(activityDescription);
            activityDiv.appendChild(styling);
            activityDiv.appendChild(mainactivityDiv);
            this.activityContainer.appendChild(activityDiv);
        });
    }

    showSkillSection(data,resumeFields) {
        while (this.skillContainer.children.length > 0) {
            this.skillContainer.removeChild(this.skillContainer.lastChild);
        }
        data["Technical Skills"].forEach((skill,index)=>{
            const skillHeading = document.createElement("div");
            skillHeading.className="boxed";
            skillHeading.id=`${resumeFields["Technical Skills"][0]}${index}`;
            skillHeading.textContent = skill["skill"];
    
            this.skillContainer.appendChild(skillHeading);
        });
    }

    showAchievementSection(data,resumeFields) {
        while (this.achievementContainer.children.length > 0) {
            this.achievementContainer.removeChild(this.achievementContainer.lastChild);
        }
        data["Achievement"].forEach((achievement,index)=>{
            const achievementDiv = document.createElement("div");
            achievementDiv.className = "padding2";
            
            const achievementHeading = document.createElement("div");
            achievementHeading.className="size2";
            achievementHeading.id=`${resumeFields["Achievement"][0]}${index}`;
            achievementHeading.textContent = achievement["title"];
    
            const achievementDescription = document.createElement("div");
            achievementDescription.classList.add("size1","opacity");
            achievementDescription.id=`${resumeFields["Achievement"][1]}${index}`;
            achievementDescription.textContent = achievement["description"];
    
            achievementDiv.appendChild(achievementHeading);
            achievementDiv.appendChild(achievementDescription);
            this.achievementContainer.appendChild(achievementDiv);
        });
    }

    showCertificateSection(data,resumeFields) {
        while (this.certificateContainer.children.length > 0) {
            this.certificateContainer.removeChild(this.certificateContainer.lastChild);
        }
        data["Certificate"].forEach((certificate,index)=>{
            const certificateDiv = document.createElement("div");
            certificateDiv.className = "padding2";
            
            const certificateHeading = document.createElement("div");
            certificateHeading.className="size2";
            certificateHeading.id=`${resumeFields["Certificate"][0]}${index}`;
            certificateHeading.textContent = certificate["title"];
    
            const certificateDescription = document.createElement("div");
            certificateDescription.classList.add("size1","opacity");
            certificateDescription.id=`${resumeFields["Certificate"][1]}${index}`;
            certificateDescription.textContent = certificate["description"];
    
            certificateDiv.appendChild(certificateHeading);
            certificateDiv.appendChild(certificateDescription);
            this.certificateContainer.appendChild(certificateDiv);
        });
    }

    showIntereseSection(data,resumeFields) {
        while (this.interestContainer.children.length > 0) {
            this.interestContainer.removeChild(this.interestContainer.lastChild);
        }
        data["Interests"].forEach((interest,index)=>{
            const interestHeading = document.createElement("div");
            interestHeading.className="boxed1";
            interestHeading.id=`${resumeFields["Interests"][0]}${index}`;
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

    showForm(data,labelName,inputs,values,resumeFields) {
        let SELECTED_FIELD = document.getElementById('selectField').value;
        let staticField = 0;
        if(SELECTED_FIELD=="Name" || SELECTED_FIELD=="Description" || SELECTED_FIELD=="Contact") {staticField=1;}
        
        while (formContainer.children.length > 0) {
            formContainer.removeChild(formContainer.lastChild);
        }
        data[SELECTED_FIELD].forEach((dt,index)=>{
            const FormHeading = document.createElement("div");
            FormHeading.classList.add("size3","blue_font","padding1");
            FormHeading.id=values[index];
            FormHeading.innerHTML=`${labelName[SELECTED_FIELD][0]} ${index+1} `;
            formContainer.appendChild(FormHeading);
            labelName[SELECTED_FIELD].forEach((lab,index1)=>{
                if (index1==0) {}
                else{
                    let label=document.createElement("label");
                    label.classList.add("size2","label");
                    label.id=`${values[index1-1]}${index}`;
                    label.innerHTML=lab;
                    let input=document.createElement("textarea");
                    input.id=`${inputs[index1-1]}${index}`;
                    input.value=document.getElementById(`${resumeFields[SELECTED_FIELD][index1-1]}${index}`).textContent.trim();
                    formContainer.appendChild(label);
                    formContainer.appendChild(input);
                    formContainer.appendChild(document.createElement("br"));
                }
            });
    
            this.updateFieldButton(index);
            this.deleteFieldButton(index,staticField);
            
        });

        this.addFieldButton(staticField);
    }

    bindAddButton(handler) {
        this.formContainer.addEventListener('click', event => {
            if (event.target.className === 'add') {
                let SELECTED_FIELD = document.getElementById('selectField').value;
                const id = event.target.id
                handler(id,SELECTED_FIELD)
            }   
        })
    }
    
    bindDeleteButton(handler) {
        this.formContainer.addEventListener('click', event => {
          if (event.target.className === 'delete') {
            let SELECTED_FIELD = document.getElementById('selectField').value;
            const id = parseInt(event.target.id)
            handler(id,SELECTED_FIELD)
          }
        })
    }
    
    bindUpdateButton(handler) {
        this.formContainer.addEventListener('click', event => {
            if (event.target.className === 'update') {
                let SELECTED_FIELD = document.getElementById('selectField').value;
                const id = event.target.id  
                let staticField=0;
                if(SELECTED_FIELD=="Name" || SELECTED_FIELD=="Description" || SELECTED_FIELD=="Contact") {staticField=1;}
                handler(id,SELECTED_FIELD,staticField)
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

        this.onshowProjectSection(this.model.data,this.model.resumeFields)
        this.onshowEducationSection(this.model.data,this.model.resumeFields)
        this.onshowActivitySection(this.model.data,this.model.resumeFields)
        this.onshowSkillSection(this.model.data,this.model.resumeFields)
        this.onshowAchievementSection(this.model.data,this.model.resumeFields)
        this.onshowCertificateSection(this.model.data,this.model.resumeFields)
        this.onshowIntereseSection(this.model.data,this.model.resumeFields)

        this.view.bindAddButton(this.handleAddButton)
        this.view.bindUpdateButton(this.handleUpdateButton)
        this.view.bindDeleteButton(this.handleDeleteButton)

        document.getElementById("selectField").addEventListener("change", ()=>{
            this.onshowForm(this.model.data,this.model.labelName,this.model.inputs,this.model.values,this.model.resumeFields)
        });
    }

    onResumeSectionSelector = (data,resumeFields,SELECTED_FIELD) => {
        this.view.resumeSectionSelector(data,resumeFields,SELECTED_FIELD)
    }
    onshowProjectSection = (data,resumeFields) => {
        this.view.showProjectSection(data,resumeFields)
    }
    onshowEducationSection = (data,resumeFields) => {
        this.view.showEducationSection(data,resumeFields)
    }
    onshowActivitySection = (data,resumeFields) => {
        this.view.showActivitySection(data,resumeFields)
    }
    onshowSkillSection = (data,resumeFields) => {
        this.view.showSkillSection(data,resumeFields)
    }
    onshowAchievementSection = (data,resumeFields) => {
        this.view.showAchievementSection(data,resumeFields)
    }
    onshowCertificateSection = (data,resumeFields) => {
        this.view.showCertificateSection(data,resumeFields)
    }
    onshowIntereseSection = (data,resumeFields) => {
        this.view.showIntereseSection(data,resumeFields)
    }
    onshowForm = (data,labelName,inputs,values,resumeFields) => {
        this.view.showForm(data,labelName,inputs,values,resumeFields)
    }

    handleAddButton = (id,SELECTED_FIELD) => {
        this.model.addButton(id,SELECTED_FIELD)
    }
    
    handleUpdateButton = (id,SELECTED_FIELD,staticField) => {
        this.model.updateButton(id,SELECTED_FIELD,staticField);
    }
    
    handleDeleteButton = (id,SELECTED_FIELD) => {
        this.model.deleteButton(id,SELECTED_FIELD)
    }
}

const app = new Controller(new Model(), new View())