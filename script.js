const { createApp, reactive, ref, computed, onMounted, watch } = Vue;

createApp({
    setup() {
        const form = reactive({
        date: '',
        duration: '',
        yearLevel: 'Year 1',
        studentCount: '',
        subject: 'Technology',
        focus: '',
        learningIntentions: '',
        successCriteria: '',
        links: '',
        classPriorities: '',
        context: '',
        assessmentInfo: '',
        evaluation: '',
        keyCompetencies: [],
        culturalCompetencies: [],
        vuwPriorities: [],
        achievementObjectives: [],
        activities: []
        });

        const subjects = ['English', 'Mathematics', 'Science', 'Social Studies', 'Technology', 'Health and PE', 'Languages', 'The Arts'];
        const years = Array.from({ length: 13 }, (_, i) => `Year ${i + 1}`);
        const objectives = ref([]);

        const objectivesData = {
            // achievement objectives by level and subject
            'Technology': {
                'Year 1': [
                    "<b>Technological Practice</b>: <i>Planning for Practice</i>. Outline a general plan to support the development of an outcome, identifying appropriate steps and resources.",
                    "<b>Technological Practice</b>: <i>Brief Development</i>. Describe the outcome they are developing and identify the attributes it should have, taking account of the need or opportunity and the resources available.",
                    "<b>Technological Practice</b>: <i>Outcome Development and Evaluation</i>. Investigate a context to communicate potential outcomes. Evaluate these against attributes; select and develop an outcome in keeping with the identified attributes.",
                    "<b>Technological Knowledge</b>: <i>Technological Modelling</i>. Understand that functional models are used to represent reality and test design concepts and that prototypes are used to test technological outcomes.",
                    "<b>Technological Knowledge</b>: <i>Technological Products</i>. Understand that technological products are made from materials that have performance properties.",
                    "<b>Technological Knowledge</b>: <i>Technological Systems</i>. Understand that technological systems have inputs, controlled transformations, and outputs.",
                    "<b>Nature of Technology</b>: <i>Characteristics of Technology</i>. Understand that technology is purposeful intervention through design.",
                    "<b>Nature of Technology</b>: <i>Characteristics of Technological Outcomes</i>. Understand that technological outcomes are products or systems developed by people and have a physical nature and a functional nature."
                ],
                'Year 3': [
                    "<b>Technological Practice</b>: <i>Planning for Practice</i>. Develop a plan that identifies the key stages and the resources required to complete an outcome.",
                    "<b>Technological Practice</b>: <i>Brief Development</i>. Explain the outcome they are developing and describe the attributes it should have, taking account of the need or opportunity and the resources available.",
                    "<b>Technological Practice</b>: <i>Outcome Development and Evaluation</i>. Investigate a context to develop ideas for potential outcomes. Evaluate these against the identified attributes; select and develop an outcome. Evaluate the outcome in terms of the need or opportunity.",
                    "<b>Technological Knowledge</b>: <i>Technological Modelling</i>. Understand that functional models are used to explore, test, and evaluate design concepts for potential outcomes and that prototyping is used to test a technological outcome for fitness of purpose.",
                    "<b>Technological Knowledge</b>: <i>Technological Products</i>. Understand that there is a relationship between a material used and its performance properties in a technological product.",
                    "<b>Technological Knowledge</b>: <i>Technological Systems</i>. Understand that there are relationships between the inputs, controlled transformations, and outputs occurring within simple technological systems.",
                    "<b>Nature of Technology</b>: <i>Characteristics of Technology</i>. Understand that technology both reflects and changes society and the environment and increases people’s capability.",
                    "<b>Nature of Technology</b>: <i>Characteristics of Technological Outcomes</i>. Understand that technological outcomes are developed through technological practice and have related physical and functional natures."
                ],
                'Year 5': [
                    "<b>Technological Practice</b>: <i>Planning for Practice</i>. Undertake planning to identify the key stages and resources required to develop an outcome. Revisit planning to include reviews of progress and identify implications for subsequent decision making.",
                    "<b>Technological Practice</b>: <i>Brief Development</i>. Describe the nature of an intended outcome, explaining how it addresses the need or opportunity. Describe the key attributes that enable development and evaluation of an outcome.",
                    "<b>Technological Practice</b>: <i>Outcome Development and Evaluation</i>. Investigate a context to develop ideas for potential outcomes. Trial and evaluate these against key attributes to select and develop an outcome to address the need or opportunity. Evaluate this outcome against the key attributes and how it addresses the need or opportunity.",
                    "<b>Technological Knowledge</b>: <i>Technological Modelling</i>. Understand that different forms of functional modelling are used to inform decision making in the development of technological possibilities and that prototypes can be used to evaluate the fitness of technological outcomes for further development.",
                    "<b>Technological Knowledge</b>: <i>Technological Products</i>. Understand the relationship between the materials used and their performance properties in technological products.",
                    "<b>Technological Knowledge</b>: <i>Technological Systems</i>. Understand that technological systems are represented by symbolic language tools and understand the role played by the “black box” in technological systems.",
                    "<b>Nature of Technology</b>: <i>Characteristics of Technology</i>. Understand how society and environments impact on and are influenced by technology in historical and contemporary contexts and that technological knowledge is validated by successful function.",
                    "<b>Nature of Technology</b>: <i>Characteristics of Technological Outcomes</i>. Understand that technological outcomes are recognisable as fit for purpose by the relationship between their physical and functional natures."
                ],
                'Year 7': [
                    "<b>Technological Practice</b>: <i>Planning for Practice</i>. Undertake planning that includes reviewing the effectiveness of past actions and resourcing, exploring implications for future actions and accessing of resources, and consideration of stakeholder feedback, to enable the development of an outcome.",
                    "<b>Technological Practice</b>: <i>Brief Development</i>. Justify the nature of an intended outcome in relation to the need or opportunity. Describe the key attributes identified in stakeholder feedback, which will inform the development of an outcome and its evaluation.",
                    "<b>Technological Practice</b>: <i>Outcome Development and Evaluation</i>. Investigate a context to develop ideas for feasible outcomes. Undertake functional modelling that takes account of stakeholder feedback in order to select and develop the outcome that best addresses the key attributes. Incorporating stakeholder feedback, evaluate the outcome’s fitness for purpose in terms of how well it addresses the need or opportunity.",
                    "<b>Technological Knowledge</b>: <i>Technological Modelling</i>. Understand how different forms of functional modelling are used to explore possibilities and to justify decision making and how prototyping can be used to justify refinement of technological outcomes.",
                    "<b>Technological Knowledge</b>: <i>Technological Products</i>. Understand that materials can be formed, manipulated, and/or transformed to enhance the fitness for purpose of a technological product.",
                    "<b>Technological Knowledge</b>: <i>Technological Systems</i>. Understand how technological systems employ control to allow for the transformation of inputs to outputs.",
                    "<b>Nature of Technology</b>: <i>Characteristics of Technology</i>. Understand how technological development expands human possibilities and how technology draws on knowledge from a wide range of disciplines.",
                    "<b>Nature of Technology</b>: <i>Characteristics of Technological Outcomes</i>. Understand that technological outcomes can be interpreted in terms of how they might be used and by whom and that each has a proper function as well as possible alternative functions."
                ],
                'Year 9': [
                    "<b>Technological Practice</b>: <i>Planning for Practice</i>. Analyse their own and others’ planning practices to inform the selection and use of planning tools. Use these to support and justify planning decisions (including those relating to the management of resources) that will see the development of an outcome through to completion.",
                    "<b>Technological Practice</b>: <i>Brief Development</i>. Justify the nature of an intended outcome in relation to the need or opportunity. Describe specifications that reflect key stakeholder feedback and that will inform the development of an outcome and its evaluation.",
                    "<b>Technological Practice</b>: <i>Outcome Development and Evaluation</i>. Analyse their own and others’ outcomes to inform the development of ideas for feasible outcomes. Undertake ongoing functional modelling and evaluation that takes account of key stakeholder feedback and trialling in the physical and social environments. Use the information gained to select and develop the outcome that best addresses the specifications. Evaluate the final outcome’s fitness for purpose against the brief.",
                    "<b>Technological Knowledge</b>: <i>Technological Modelling</i>. Understand how evidence, reasoning, and decision making in functional modelling contribute to the development of design concepts and how prototyping can be used to justify ongoing refinement of outcomes.",
                    "<b>Technological Knowledge</b>: <i>Technological Products</i>. Understand how materials are selected, based on desired performance criteria.",
                    "<b>Technological Knowledge</b>: <i>Technological Systems</i>. Understand the properties of subsystems within technological systems.",
                    "<b>Nature of Technology</b>: <i>Characteristics of Technology</i>. Understand how people’s perceptions and acceptance of technology impact on technological developments and how and why technological knowledge becomes codified.",
                    "<b>Nature of Technology</b>: <i>Characteristics of Technological Outcomes</i>. Understand that technological outcomes are fit for purpose in terms of time and context. Understand the concept of malfunction and how “failure” can inform future outcomes."
                ],
                'Year 11': [
                    "<b>Technological Practice</b>: <i>Planning for Practice</i>. Analyse their own and others’ planning practices to inform the selection and use of planning tools. Use these to support and justify planning decisions that will see the development of an outcome through to completion.",
                    "<b>Technological Practice</b>: <i>Brief Development</i>. Justify the nature of an intended outcome in relation to the need or opportunity. Describe specifications that reflect key stakeholder feedback and that will inform the development of an outcome and its evaluation.",
                    "<b>Technological Practice</b>: <i>Outcome Development and Evaluation</i>. Analyse their own and others’ outcomes to inform the development of ideas for feasible outcomes. Undertake ongoing functional modelling and evaluation that takes account of key stakeholder feedback and trialling. Use the information gained to select and develop the outcome that best addresses the specifications. Evaluate the final outcome’s fitness for purpose against the brief.",
                    "<b>Technological Knowledge</b>: <i>Technological Modelling</i>. Understand how evidence, reasoning, and decision making in functional modelling contribute to the development of design concepts and how prototyping can be used to justify ongoing refinement of outcomes.",
                    "<b>Technological Knowledge</b>: <i>Technological Products</i>. Understand how materials are selected, based on desired performance criteria.",
                    "<b>Technological Knowledge</b>: <i>Technological Systems</i>. Understand the properties of subsystems within technological systems.",
                    "<b>Nature of Technology</b>: <i>Characteristics of Technology</i>. Understand how people’s perceptions and acceptance of technology impact on technological developments and how and why technological knowledge becomes codified.",
                    "<b>Nature of Technology</b>: <i>Characteristics of Technological Outcomes</i>. Understand that technological outcomes are fit for purpose in terms of time and context. Understand the concept of malfunction and how “failure” can inform future outcomes."
                ],
                'Year 12': [
                    "<b>Technological Practice</b>: <i>Planning for Practice</i>. Critically analyse their own and others’ past and current planning and management practices in order to develop and employ project management practices that will ensure the effective development of an outcome to completion.",
                    "<b>Technological Practice</b>: <i>Brief Development</i>. Justify the nature of an intended outcome in relation to the issue to be resolved and justify specifications in terms of key stakeholder feedback and wider community considerations.",
                    "<b>Technological Practice</b>: <i>Outcome Development and Evaluation</i>. Critically analyse their own and others’ outcomes and evaluative practices to inform the development of ideas for feasible outcomes. Undertake a critical evaluation that is informed by ongoing experimentation and functional modelling, stakeholder feedback, and trialling in the physical and social environments. Use the information gained to select, justify, and develop an outcome. Evaluate this outcome’s fitness for purpose against the brief. Justify the evaluation using stakeholder feedback and demonstrate a critical understanding of the issue.",
                    "<b>Technological Knowledge</b>: <i>Technological Modelling</i>. Understand how the ‘should’ and ‘could’ decisions in technological modelling rely on an understanding of how evidence can change in value across contexts and how different tools are used to ascertain and mitigate risk.",
                    "<b>Technological Knowledge</b>: <i>Technological Products</i>. Understand the concepts and processes employed in materials evaluation and the implications of these for the design, development, maintenance, and disposal of technological products.",
                    "<b>Technological Knowledge</b>: <i>Technological Systems</i>. Understand the concepts of redundancy and reliability and their implications for the design, development, and maintenance of technological systems.",
                    "<b>Nature of Technology</b>: <i>Characteristics of Technology</i>. Understand the implications of ongoing contestation and competing priorities for complex and innovative decision making in technological development.",
                    "<b>Nature of Technology</b>: <i>Characteristics of Technological Outcomes</i>. Understand that technological outcomes are a resolution of form and function priorities and that malfunction affects how people view and accept outcomes."
                ],
                'Year 13': [
                    "<b>Technological Practice</b>: <i>Planning for Practice</i>. Critically analyse their own and others’ past and current planning and management practices in order to develop and employ project management practices that will ensure the efficient development of an outcome to completion.",
                    "<b>Technological Practice</b>: <i>Brief Development</i>. Justify the nature of an intended outcome in relation to the context and the issue to be resolved. Justify specifications in terms of key stakeholder feedback and wider community considerations.",
                    "<b>Technological Practice</b>: <i>Outcome Development and Evaluation</i>. Critically analyse their own and others’ outcomes and fitness-for-purpose determinations in order to inform the development of ideas for feasible outcomes. Undertake a critical evaluation that is informed by ongoing experimentation and functional modelling, stakeholder feedback, trialling in the physical and social environments, and an understanding of the issue as it relates to the wider context. Use the information gained to select, justify, and develop an outcome. Evaluate this outcome’s fitness for purpose against the brief. Justify the evaluation using feedback from stakeholders and demonstrating a critical understanding of the issue that takes account of all contextual dimensions.",
                    "<b>Technological Knowledge</b>: <i>Technological Modelling</i>. Understand the role of technological modelling as a key part of technological development, justifying its importance on moral, ethical, sustainable, cultural, political, economic, and historical grounds.",
                    "<b>Technological Knowledge</b>: <i>Technological Products</i>. Understand the concepts and processes employed in materials development and evaluation and the implications of these for the design, development, maintenance, and disposal of technological products.",
                    "<b>Technological Knowledge</b>: <i>Technological Systems</i>. Understand operational parameters and their role in the design, development, and maintenance of technological systems.",
                    "<b>Nature of Technology</b>: <i>Characteristics of Technology</i>. Understand the implications of technology as intervention by design and how interventions have consequences, known and unknown, intended and unintended.",
                    "<b>Nature of Technology</b>: <i>Characteristics of Technological Outcomes</i>. Understand that technological outcomes are a resolution of form and function priorities and that malfunction and failure can inform future developments and affect public acceptance."
                
                ]
            },
        };

        // Most achievement levels correspond to two year levels
        const evenYears = [2, 4, 6, 8, 10];
        const oddYears = [1, 3, 5, 7, 9];
        evenYears.forEach((evenYear, i) => {
            objectivesData['Technology'][`Year ${evenYear}`] = objectivesData['Technology'][`Year ${oddYears[i]}`];
        });


        function updateObjectives() {
            // If form.subject is undefined, you won't get an error by trying to access something nested within it
            // you will simply get 'undefined'
            // the double question marks mean, if what's on the left is undefined, use the right side
            const aoList = objectivesData[form.subject]?.[form.yearLevel] ?? [];
            objectives.value = aoList;
        }

        function addActivity() {
            form.activities.push({
                name: '',
                duration: '',
                teacher: '',
                student: '',
                resources: ''
            });
        }

        onMounted(() => {
            updateObjectives();
        });

        watch(() => [form.subject, form.yearLevel], updateObjectives);

        const lessonOutput = ref('')

        function generatePlan() {
        const checkedList = (items) => {
            if (!items.length) return '<span style="color:#888;">None selected</span>';
            return `<ul style="margin:0.3em 0 0.8em 1.2em; padding-left:1.2em;">` +
            items.map(item => `<li>${item}</li>`).join('') +
            `</ul>`;
        };

        let html = `
            <div style="border:1px solid #bbb; border-radius:8px; background:#fafbfc; padding:1.5em; margin-bottom:1.5em;">
            <h2 style="margin-top:0;">Lesson Plan</h2>
            <table style="width:100%; border-collapse:collapse;">
                <tr><td><strong>Date:</strong></td><td>${form.date || '-'}</td></tr>
                <tr><td><strong>Duration:</strong></td><td>${form.duration || '-'} mins</td></tr>
                <tr><td><strong>Year Level:</strong></td><td>${form.yearLevel || '-'}</td></tr>
                <tr><td><strong>Number of Students:</strong></td><td>${form.studentCount || '-'}</td></tr>
                <tr><td><strong>Subject:</strong></td><td>${form.subject || '-'}</td></tr>
                <tr><td><strong>Focus:</strong></td><td>${form.focus || '-'}</td></tr>
            </table>
            </div>

            <div style="margin-bottom:1.5em;">
            <h3>Curriculum Links</h3>
            <p><strong>Achievement Objectives:</strong><br>${checkedList(form.achievementObjectives)}</p>
            <p><strong>Key Competencies:</strong><br>${checkedList(form.keyCompetencies)}</p>
            <p><strong>Cultural Competencies:</strong><br>${checkedList(form.culturalCompetencies)}</p>
            </div>

            <div style="margin-bottom:1.5em;">
            <h3>Learning Intentions & Criteria</h3>
            <p><strong>Learning Intentions:</strong><br>${form.learningIntentions || '<span style="color:#888;">None</span>'}</p>
            <p><strong>Success Criteria:</strong><br>${form.successCriteria || '<span style="color:#888;">None</span>'}</p>
            <p><strong>Links with Other Areas:</strong><br>${form.links || '<span style="color:#888;">None</span>'}</p>
            </div>

            <div style="margin-bottom:1.5em;">
            <h3>Priorities & Context</h3>
            <p><strong>VUW Priorities:</strong><br>${checkedList(form.vuwPriorities)}</p>
            <p><strong>Class/School Priorities:</strong><br>${form.classPriorities || '<span style="color:#888;">None</span>'}</p>
            <p><strong>Context for Learning:</strong><br>${form.context || '<span style="color:#888;">None</span>'}</p>
            <p><strong>Assessment Info:</strong><br>${form.assessmentInfo || '<span style="color:#888;">None</span>'}</p>
            </div>

            <div style="margin-bottom:1.5em;">
            <h3>Activities</h3>`;

        if (!form.activities.length || form.activities.every(a =>
            !a.name && !a.duration && !a.teacher && !a.student && !a.resources)) {
            html += `<p style="color:#888;">No activities added.</p>`;
        } else {
            form.activities.forEach((a, i) => {
            html += `
                <div style="border:1px solid #ddd; border-radius:6px; background:#fff; margin-bottom:1em; padding:1em;">
                <strong>Activity ${i + 1}:</strong> ${a.name || '<span style="color:#888;">(No name)</span>'} 
                <span style="color:#666;">(${a.duration || '-'} mins)</span>
                <div style="margin-top:0.5em;">
                    <em>Teacher:</em> ${a.teacher || '<span style="color:#888;">None</span>'}<br>
                    <em>Students:</em> ${a.student || '<span style="color:#888;">None</span>'}<br>
                    <em>Resources:</em> ${a.resources || '<span style="color:#888;">None</span>'}
                </div>
                </div>`;
            });
        }

        html += `</div>
            <div style="margin-bottom:1.5em;">
            <h3>Evaluation Criteria</h3>
            <p>${form.evaluation || '<span style="color:#888;">None</span>'}</p>
            </div>`;

        lessonOutput.value = html;
        }


        function generatePDF() {
            if (!document.getElementById("lessonPlanOutput").innerHTML.trim()) {
                alert("Please generate the lesson plan first!");
                return;
            }
            html2pdf().from(document.getElementById("lessonPlanOutput")).save();
        }

        return {
            form,
            subjects,
            years,
            objectives,
            updateObjectives,
            addActivity,
            generatePlan,
            generatePDF,
            lessonOutput
        };
    }
}).mount("#app");