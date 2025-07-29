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

        const subjects = ['English', 'Mathematics', 'Science', 'Social Sciences', 'Technology', 'Health and PE', 'Languages', 'The Arts'];
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
            'English': {
                'Year 1': [
                    "<b>Listening, Reading, and Viewing</b>: <i>Processes and strategies</i>. Acquire and begin to use sources of information, processes, and strategies to identify, form, and express ideas.",
                    "<b>Listening, Reading, and Viewing</b>: <i>Purposes and audiences</i>. Recognise that texts are shaped for different purposes and audiences.",
                    "<b>Listening, Reading, and Viewing</b>: <i>Ideas</i>. Recognise and identify ideas within and across texts.",
                    "<b>Listening, Reading, and Viewing</b>: <i>Language features</i>. Recognise and begin to understand how language features are used for effect within and across texts.",
                    "<b>Listening, Reading, and Viewing</b>: <i>Structure</i>. Recognise and begin to understand text structures.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Processes and strategies</i>. Acquire and begin to use sources of information, processes, and strategies to identify, form, and express ideas.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Purposes and audiences</i>. Recognise how to shape texts for a purpose and an audience.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Ideas</i>. Form and express ideas on a range of topics.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Language features</i>. Use language features, showing some recognition of their effects.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Structure</i>. Organise texts, using simple structures."
                ],
                'Year 3': [
                    "<b>Listening, Reading, and Viewing</b>: <i>Processes and strategies</i>. Select and use sources of information, processes, and strategies with some confidence to identify, form, and express ideas.",
                    "<b>Listening, Reading, and Viewing</b>: <i>Purposes and audiences</i>. Show some understanding of how texts are shaped for different purposes and audiences.",
                    "<b>Listening, Reading, and Viewing</b>: <i>Ideas</i>. Show some understanding of ideas within, across, and beyond texts.",
                    "<b>Listening, Reading, and Viewing</b>: <i>Language features</i>. Show some understanding of how language features are used for effect within and across texts.",
                    "<b>Listening, Reading, and Viewing</b>: <i>Structure</i>. Show some understanding of text structures.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Processes and strategies</i>. Select and use sources of information, processes, and strategies with some confidence to identify, form, and express ideas.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Purposes and audiences</i>. Show some understanding of how to shape texts for different purposes and audiences.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Ideas</i>. Select, form, and express ideas on a range of topics.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Language features</i>. Use language features appropriately, showing some understanding of their effects.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Structure</i>. Organise texts, using a range of structures."
                ],
                'Year 5': [
                    "<b>Listening, Reading, and Viewing</b>: <i>Processes and strategies</i>. Integrate sources of information, processes, and strategies with developing confidence to identify, form, and express ideas.",
                    "<b>Listening, Reading, and Viewing</b>: <i>Purposes and audiences</i>. Show a developing understanding of how texts are shaped for different purposes and audiences.",
                    "<b>Listening, Reading, and Viewing</b>: <i>Ideas</i>. Show a developing understanding of ideas within, across, and beyond texts.",
                    "<b>Listening, Reading, and Viewing</b>: <i>Language features</i>. Show a developing understanding of how language features are used for effect within and across texts.",
                    "<b>Listening, Reading, and Viewing</b>: <i>Structure</i>. Show a developing understanding of text structures.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Processes and strategies</i>. Integrate sources of information, processes, and strategies with developing confidence to identify, form, and express ideas.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Purposes and audiences</i>. Show a developing understanding of how to shape texts for different purposes and audiences.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Ideas</i>. Select, form, and communicate ideas on a range of topics.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Language features</i>. Use language features appropriately, showing a developing understanding of their effects.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Structure</i>. Organise texts, using a range of appropriate structures."
                ],
                'Year 7': [
                    "<b>Listening, Reading, and Viewing</b>: <i>Processes and strategies</i>. Integrate sources of information, processes, and strategies confidently to identify, form, and express ideas.",
                    "<b>Listening, Reading, and Viewing</b>: <i>Purposes and audiences</i>. Show an increasing understanding of how texts are shaped for different purposes and audiences.",
                    "<b>Listening, Reading, and Viewing</b>: <i>Ideas</i>. Show an increasing understanding of ideas within, across, and beyond texts.",
                    "<b>Listening, Reading, and Viewing</b>: <i>Language features</i>. Show an increasing understanding of how language features are used for effect within and across texts.",
                    "<b>Listening, Reading, and Viewing</b>: <i>Structure</i>. Show an increasing understanding of text structures.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Processes and strategies</i>. Integrate sources of information, processes, and strategies confidently to identify, form, and express ideas.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Purposes and audiences</i>. Show an increasing understanding of how to shape texts for different purposes and audiences.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Ideas</i>. Select, develop, and communicate ideas on a range of topics.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Language features</i>. Use a range of language features appropriately, showing an increasing understanding of their effects.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Structure</i>. Organise texts, using a range of appropriate structures."
                ],
                'Year 9': [
                    "<b>Listening, Reading, and Viewing</b>: <i>Processes and strategies</i>. Integrate sources of information, processes, and strategies purposefully and confidently to identify, form, and express increasingly sophisticated ideas.",
                    "<b>Listening, Reading, and Viewing</b>: <i>Purposes and audiences</i>. Show an understanding of how texts are shaped for different purposes and audiences.",
                    "<b>Listening, Reading, and Viewing</b>: <i>Ideas</i>. Show an understanding of ideas within, across, and beyond texts.",
                    "<b>Listening, Reading, and Viewing</b>: <i>Language features</i>. Show an understanding of how language features are used for effect within and across texts.",
                    "<b>Listening, Reading, and Viewing</b>: <i>Structure</i>. Show an understanding of a range of structures.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Processes and strategies</i>. Integrate sources of information, processes, and strategies purposefully and confidently to identify, form, and express increasingly sophisticated ideas.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Purposes and audiences</i>. Show an understanding of how to shape texts for different audiences and purposes.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Ideas</i>. Select, develop, and communicate purposeful ideas on a range of topics.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Language features</i>. Select and use a range of language features appropriately, showing an understanding of their effects.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Structure</i>. Organise texts, using a range of appropriate, effective structures."
                ],
                'Year 11': [
                    "<b>Listening, Reading, and Viewing</b>: <i>Processes and strategies</i>. Integrate sources of information, processes, and strategies purposefully and confidently to identify, form, and express increasingly sophisticated ideas.",
                    "<b>Listening, Reading, and Viewing</b>: <i>Purposes and audiences</i>. Show a developed understanding of how texts are shaped for different purposes and audiences.",
                    "<b>Listening, Reading, and Viewing</b>: <i>Ideas</i>. Show a developed understanding of ideas within, across, and beyond texts.",
                    "<b>Listening, Reading, and Viewing</b>: <i>Language features</i>. Show a developed understanding of how language features are used for effect within and across texts.",
                    "<b>Listening, Reading, and Viewing</b>: <i>Structure</i>. Show a developed understanding of a range of structures.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Processes and strategies</i>. Integrate sources of information, processes, and strategies purposefully and confidently to identify, form, and express increasingly sophisticated ideas.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Purposes and audiences</i>. Show a developed understanding of how to shape texts for different audiences and purposes.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Ideas</i>. Select, develop, and communicate connected ideas on a range of topics.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Language features</i>. Select and use a range of language features appropriately for a variety of effects.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Structure</i>. Organise texts, using a range of appropriate, effective structures."
                ],
                'Year 12': [
                    "<b>Listening, Reading, and Viewing</b>: <i>Processes and strategies</i>. Integrate sources of information, processes, and strategies purposefully, confidently, and precisely to identify, form, and express increasingly sophisticated ideas.",
                    "<b>Listening, Reading, and Viewing</b>: <i>Purposes and audiences</i>. Show a discriminating understanding of how texts are shaped for different purposes and audiences.",
                    "<b>Listening, Reading, and Viewing</b>: <i>Ideas</i>. Show a discriminating understanding of ideas within, across, and beyond texts.",
                    "<b>Listening, Reading, and Viewing</b>: <i>Language features</i>. Show a discriminating understanding of how language features are used for effect within and across texts.",
                    "<b>Listening, Reading, and Viewing</b>: <i>Structure</i>. Show a discriminating understanding of a range of structures.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Processes and strategies</i>. Integrate sources of information, processes, and strategies purposefully, confidently, and precisely to identify, form, and express increasingly sophisticated ideas.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Purposes and audiences</i>. Show a discriminating understanding of how to shape texts for different audiences and purposes.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Ideas</i>. Select, develop, and communicate sustained ideas on a range of topics.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Language features</i>. Select and integrate a range of language features appropriately for a variety of effects.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Structure</i>. Organise texts, using a range of appropriate, coherent, and effective structures."
                ],
                'Year 13': [
                    "<b>Listening, Reading, and Viewing</b>: <i>Processes and strategies</i>. Integrate sources of information, processes, and strategies purposefully, confidently, and precisely to identify, form, and express increasingly sophisticated ideas.",
                    "<b>Listening, Reading, and Viewing</b>: <i>Purposes and audiences</i>. Show a discriminating understanding of how texts are shaped for different purposes and audiences.",
                    "<b>Listening, Reading, and Viewing</b>: <i>Ideas</i>. Show a discriminating and insightful understanding of ideas within, across, and beyond texts.",
                    "<b>Listening, Reading, and Viewing</b>: <i>Language features</i>. Show a discriminating and insightful understanding of how language features are used for effect within and across texts.",
                    "<b>Listening, Reading, and Viewing</b>: <i>Structure</i>. Show a discriminating understanding of a range of structures.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Processes and strategies</i>. Integrate sources of information, processes, and strategies purposefully, confidently, and precisely to identify, form, and express increasingly sophisticated ideas.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Purposes and audiences</i>. Show a discriminating understanding of how to shape texts for different purposes and audiences.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Ideas</i>. Select, develop, and communicate sustained and insightful ideas on a range of topics.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Language features</i>. Select, integrate, and sustain the use of a range of language features appropriately for a variety of effects.",
                    "<b>Speaking, Writing, and Presenting</b>: <i>Structure</i>. Organise texts, using a range of appropriate, coherent, and effective structures."
                ]
            },
            'Mathematics': {
                'Year 1': [
                    "<b>Number and Algebra</b>: <i>Number strategies</i>. Use a range of counting, grouping, and equal-sharing strategies with whole numbers and fractions.",
                    "<b>Number and Algebra</b>: <i>Number knowledge</i>. Know the forward and backward counting sequences of whole numbers to 100. Know groupings with five, within ten, and with ten.",
                    "<b>Number and Algebra</b>: <i>Equations and expressions</i>. Communicate and explain counting, grouping, and equal-sharing strategies, using words, numbers, and pictures.",
                    "<b>Number and Algebra</b>: <i>Patterns and relationships</i>. Generalise that the next counting number gives the result of adding one object to a set and that counting the number of objects in a set tells how many. Create and continue sequential patterns.",
                    "<b>Geometry and Measurement</b>: <i>Measurement</i>. Order and compare objects or events by length, area, volume and capacity, weight (mass), turn (angle), temperature, and time by direct comparison and/or counting whole numbers of units.",
                    "<b>Geometry and Measurement</b>: <i>Shape</i>. Sort objects by their appearance.",
                    "<b>Geometry and Measurement</b>: <i>Position and orientation</i>. Give and follow instructions for movement that involve distances, directions, and half or greater turns. Describe their position relative to a person or object.",
                    "<b>Geometry and Measurement</b>: <i>Transformation</i>. Communicate and record the results of translations, reflections, and rotations on plane shapes.",
                    "<b>Statistics</b>: <i>Statistical investigation</i>. Conduct investigations using the statistical enquiry cycle: posing and answering questions; gathering, sorting and counting, and displaying category data; discussing the results.",
                    "<b>Statistics</b>: <i>Statistical literacy</i>. Interpret statements made by others from statistical investigations and probability activities.",
                    "<b>Statistics</b>: <i>Probability</i>. Investigate situations that involve elements of chance, acknowledging and anticipating possible outcomes."
                ],
                'Year 3': [
                    "<b>Number and Algebra</b>: <i>Number strategies</i>. Use simple additive strategies with whole numbers and fractions.",
                    "<b>Number and Algebra</b>: <i>Number knowledge</i>. Know forward and backward counting sequences with whole numbers to at least 1000. Know the basic addition and subtraction facts. Know how many ones, tens, and hundreds are in whole numbers to at least 1000. Know simple fractions in everyday use.",
                    "<b>Number and Algebra</b>: <i>Equations and expressions</i>. Communicate and interpret simple additive strategies, using words, diagrams (pictures), and symbols.",
                    "<b>Number and Algebra</b>: <i>Patterns and relationships</i>. Generalise that whole numbers can be partitioned in many ways. Find rules for the next member in a sequential pattern.",
                    "<b>Geometry and Measurement</b>: <i>Measurement</i>. Create and use appropriate units and devices to measure length, area, volume and capacity, weight (mass), turn (angle), temperature, and time. Partition and/or combine like measures and communicate them, using numbers and units.",
                    "<b>Geometry and Measurement</b>: <i>Shape</i>. Sort objects by their spatial features, with justification. Identify and describe the plane shapes found in objects.",
                    "<b>Geometry and Measurement</b>: <i>Position and orientation</i>. Create and use simple maps to show position and direction. Describe different views and pathways from locations on a map.",
                    "<b>Geometry and Measurement</b>: <i>Transformation</i>. Predict and communicate the results of translations, reflections, and rotations on plane shapes.",
                    "<b>Statistics</b>: <i>Statistical investigation</i>. Conduct investigations using the statistical enquiry cycle: posing and answering questions; gathering, sorting, and displaying category and whole-number data; communicating findings based on the data.",
                    "<b>Statistics</b>: <i>Statistical literacy</i>. Compare statements with the features of simple data displays from statistical investigations or probability activities undertaken by others.",
                    "<b>Statistics</b>: <i>Probability</i>. Investigate simple situations that involve elements of chance, recognising equal and different likelihoods and acknowledging uncertainty."
                ],
                'Year 5': [
                    "<b>Number and Algebra</b>: <i>Number strategies</i>. Use a range of additive and simple multiplicative strategies with whole numbers, fractions, decimals, and percentages.",
                    "<b>Number and Algebra</b>: <i>Number knowledge</i>. Know basic multiplication and division facts. Know counting sequences for whole numbers. Know how many tenths, tens, hundreds, and thousands are in whole numbers. Know fractions and percentages in everyday use.",
                    "<b>Number and Algebra</b>: <i>Equations and expressions</i>. Record and interpret additive and simple multiplicative strategies, using words, diagrams, and symbols, with an understanding of equality.",
                    "<b>Number and Algebra</b>: <i>Patterns and relationships</i>. Generalise the properties of addition and subtraction with whole numbers. Connect members of sequential patterns with their ordinal position and use tables, graphs, and diagrams to find relationships between successive elements of number and spatial patterns.",
                    "<b>Geometry and Measurement</b>: <i>Measurement</i>. Use linear scales and whole numbers of metric units for length, area, volume and capacity, weight (mass), angle, temperature, and time. Find areas of rectangles and volumes of cuboids by applying multiplication.",
                    "<b>Geometry and Measurement</b>: <i>Shape</i>. Classify plane shapes and prisms by their spatial features. Represent objects with drawings and models.",
                    "<b>Geometry and Measurement</b>: <i>Position and orientation</i>. Use a co-ordinate system or the language of direction and distance to specify locations and describe paths.",
                    "<b>Geometry and Measurement</b>: <i>Transformation</i>. Describe the transformations (reflection, rotation, translation, or enlargement) that have mapped one object onto another.",
                    "<b>Statistics</b>: <i>Statistical investigation</i>. Conduct investigations using the statistical enquiry cycle: gathering, sorting, and displaying multivariate category and whole-number data and simple time-series data to answer questions; identifying patterns and trends in context, within and between data sets; communicating findings, using data displays.",
                    "<b>Statistics</b>: <i>Statistical literacy</i>. Evaluate the effectiveness of different displays in representing the findings of a statistical investigation or probability activity undertaken by others.",
                    "<b>Statistics</b>: <i>Probability</i>. Investigate simple situations that involve elements of chance by comparing experimental results with expectations from models of all the outcomes, acknowledging that samples vary."
                ],
                'Year 7': [
                    "<b>Number and Algebra</b>: <i>Number strategies and knowledge</i>. Use a range of multiplicative strategies when operating on whole numbers. Understand addition and subtraction of fractions, decimals, and integers. Find fractions, decimals, and percentages of amounts expressed as whole numbers, simple fractions, and decimals. Apply simple linear proportions, including ordering fractions.",
                    "<b>Number and Algebra</b>: <i>Equations and expressions</i>. Form and solve simple linear equations.",
                    "<b>Number and Algebra</b>: <i>Patterns and relationships</i>. Generalise properties of multiplication and division with whole numbers. Use graphs, tables, and rules to describe linear relationships found in number and spatial patterns.",
                    "<b>Geometry and Measurement</b>: <i>Measurement</i>. Use appropriate scales, devices, and metric units for length, area, volume and capacity, weight (mass), temperature, angle, and time. Convert between metric units, using whole numbers and commonly used decimals. Use side or edge lengths to find the perimeters and areas of rectangles, parallelograms, and triangles and the volumes of cuboids. Interpret and use scales, timetables, and charts.",
                    "<b>Geometry and Measurement</b>: <i>Shape</i>. Identify classes of two- and three-dimensional shapes by their geometric properties. Relate three-dimensional models to two-dimensional representations, and vice versa.",
                    "<b>Geometry and Measurement</b>: <i>Position and orientation</i>. Communicate and interpret locations and directions, using compass directions, distances, and grid references.",
                    "<b>Geometry and Measurement</b>: <i>Transformation</i>. Use the invariant properties of figures and objects under transformations (reflection, rotation, translation, or enlargement).",
                    "<b>Statistics</b>: <i>Statistical investigation</i>. Plan and conduct investigations using the statistical enquiry cycle: determining appropriate variables and data collection methods; gathering, sorting, and displaying multivariate category, measurement, and time-series data to detect patterns, variations, relationships, and trends; comparing distributions visually; communicating findings, using appropriate displays.",
                    "<b>Statistics</b>: <i>Statistical literacy</i>. Evaluate statements made by others about the findings of statistical investigations and probability activities.",
                    "<b>Statistics</b>: <i>Probability</i>. Investigate situations that involve elements of chance by comparing experimental distributions with expectations from models of the possible outcomes, acknowledging variation and independence. Use simple fractions and percentages to describe probabilities."
                ],
                'Year 9': [
                    "<b>Number and Algebra</b>: <i>Number strategies and knowledge</i>. Reason with linear proportions. Use prime numbers, common factors and multiples, and powers including square roots. Understand operations on fractions, decimals, percentages, and integers. Use rates and ratios.",
                    "<b>Number and Algebra</b>: <i>Equations and expressions</i>. Form and solve linear and simple quadratic equations.",
                    "<b>Number and Algebra</b>: <i>Patterns and relationships</i>. Generalise the properties of operations with fractional numbers and integers. Relate tables, graphs, and equations to linear and simple quadratic relationships found in number and spatial patterns.",
                    "<b>Geometry and Measurement</b>: <i>Measurement</i>. Select and use appropriate metric units for length, area, volume and capacity, weight (mass), temperature, angle, and time, with awareness that measurements are approximate. Convert between metric units, using decimals. Derive and use formulae to find the perimeters and areas of polygons and the volumes of prisms. Find the perimeters and areas of circles and composite shapes and the volumes of prisms, including cylinders.",
                    "<b>Geometry and Measurement</b>: <i>Shape</i>. Deduce the angle properties of intersecting and parallel lines and the angle properties of polygons and apply these properties. Create accurate nets for simple polyhedra and connect three-dimensional solids with different two-dimensional representations.",
                    "<b>Geometry and Measurement</b>: <i>Position and orientation</i>. Construct and describe simple loci. Interpret points and lines on co-ordinate planes, including scales and bearings on maps.",
                    "<b>Geometry and Measurement</b>: <i>Transformation</i>. Define and use transformations and describe the invariant properties of figures and objects under these transformations. Apply trigonometric ratios and Pythagoras' theorem in two dimensions.",
                    "<b>Statistics</b>: <i>Statistical investigation</i>. Plan and conduct surveys and experiments using the statistical enquiry cycle: determining appropriate variables and measures; considering sources of variation; gathering and cleaning data; using multiple displays, and re-categorising data to find patterns, variations, relationships, and trends in multivariate data sets; comparing sample distributions visually, using measures of centre, spread, and proportion; presenting a report of findings.",
                    "<b>Statistics</b>: <i>Statistical literacy</i>. Evaluate statistical investigations or probability activities undertaken by others, including data collection methods, choice of measures, and validity of findings.",
                    "<b>Statistics</b>: <i>Probability</i>. Compare and describe the variation between theoretical and experimental distributions in situations that involve elements of chance. Calculate probabilities, using fractions, percentages, and ratios."
                ],
                'Year 11': [
                    "<b>Number and Algebra</b>: <i>Number strategies and knowledge</i>. Apply direct and inverse relationships with linear proportions. Extend powers to include integers and fractions. Apply everyday compounding rates. Find optimal solutions, using numerical approaches.",
                    "<b>Number and Algebra</b>: <i>Equations and expressions</i>. Form and solve linear equations and inequalities, quadratic and simple exponential equations, and simultaneous equations with two unknowns.",
                    "<b>Number and Algebra</b>: <i>Patterns and relationships</i>. Generalise the properties of operations with rational numbers, including the properties of exponents. Relate graphs, tables, and equations to linear, quadratic, and simple exponential relationships found in number and spatial patterns. Relate rate of change to the gradient of a graph.",
                    "<b>Geometry and Measurement</b>: <i>Measurement</i>. Measure at a level of precision appropriate to the task. Apply the relationships between units in the metric system, including the units for measuring different attributes and derived measures. Calculate volumes, including prisms, pyramids, cones, and spheres, using formulae.",
                    "<b>Geometry and Measurement</b>: <i>Shape</i>. Deduce and apply the angle properties related to circles. Recognise when shapes are similar and use proportional reasoning to find an unknown length. Use trigonometric ratios and Pythagoras' theorem in two and three dimensions.",
                    "<b>Geometry and Measurement</b>: <i>Position and orientation</i>. Use a co-ordinate plane or map to show points in common and areas contained by two or more loci.",
                    "<b>Geometry and Measurement</b>: <i>Transformation</i>. Compare and apply single and multiple transformations. Analyse symmetrical patterns by the transformations used to create them.",
                    "<b>Statistics</b>: <i>Statistical investigation</i>. Plan and conduct investigations using the statistical enquiry cycle: justifying the variables and measures used; managing sources of variation, including through the use of random sampling; identifying and communicating features in context (trends, relationships between variables, and differences within and between distributions), using multiple displays; making informal inferences about populations from sample data; justifying findings, using displays and measures.",
                    "<b>Statistics</b>: <i>Statistical literacy</i>. Evaluate statistical reports in the media by relating the displays, statistics, processes, and probabilities used to the claims made.",
                    "<b>Statistics</b>: <i>Probability</i>. Investigate situations that involve elements of chance: comparing discrete theoretical distributions and experimental distributions, appreciating the role of sample size; calculating probabilities in discrete situations."
                ],
                'Year 12': [
                    "<b>Number and Algebra</b>: <i>Patterns and relationships</i>. Apply co-ordinate geometry techniques to points and lines. Display the graphs of linear and non-linear functions and connect the structure of the functions with their graphs. Use arithmetic and geometric sequences and series. Apply trigonometric relationships, including the sine and cosine rules, in two and three dimensions. Choose appropriate networks to find optimal solutions.",
                    "<b>Number and Algebra</b>: <i>Equations and expressions</i>. Manipulate rational, exponential, and logarithmic algebraic expressions. Form and use linear, quadratic, and simple trigonometric equations. Form and use pairs of simultaneous equations, one of which may be nonlinear.",
                    "<b>Number and Algebra</b>: <i>Calculus</i>. Sketch the graphs of functions and their gradient functions and describe the relationship between these graphs. Apply differentiation and anti-differentiation techniques to polynomials.",
                    "<b>Statistics</b>: <i>Statistical investigation</i>. Carry out investigations of phenomena, using the statistical enquiry cycle: conducting surveys that require random sampling techniques, conducting experiments, and using existing data sets; evaluating the choice of measures for variables and the sampling and data collection methods used; using relevant contextual knowledge, exploratory data analysis, and statistical inference. Make inferences from surveys and experiments: making informal predictions, interpolations, and extrapolations; using sample statistics to make point estimates of population parameters; recognising the effect of sample size on the variability of an estimate.",
                    "<b>Statistics</b>: <i>Statistical literacy</i>. Evaluate statistically based reports: interpreting risk and relative risk; identifying sampling and possible non-sampling errors in surveys, including polls.",
                    "<b>Statistics</b>: <i>Probability</i>. Investigate situations that involve elements of chance: comparing theoretical continuous distributions, such as the normal distribution, with experimental distributions; calculating probabilities, using such tools as two-way tables, tree diagrams, simulations, and technology."
                ],
                'Year 13': [
                    "<b>Number and Algebra</b>: <i>Patterns and relationships</i>. Apply the geometry of conic sections. Display and interpret the graphs of functions with the graphs of their inverse and/or reciprocal functions. Use permutations and combinations. Use curve fitting, log modelling, and linear programming techniques. Develop network diagrams to find optimal solutions, including critical paths.",
                    "<b>Number and Algebra</b>: <i>Equations and expressions</i>. Manipulate trigonometric expressions. Form and use trigonometric, polynomial, and other non-linear equations. Form and use systems of simultaneous equations, including three linear equations and three variables, and interpret the solutions in context. Manipulate complex numbers and present them graphically.",
                    "<b>Number and Algebra</b>: <i>Calculus</i>. Identify discontinuities and limits of functions. Choose and apply a variety of differentiation, integration, and anti-differentiation techniques to functions and relations, using both analytical and numerical methods. Form differential equations and interpret the solutions.",
                    "<b>Statistics</b>: <i>Statistical investigation</i>. Carry out investigations of phenomena, using the statistical enquiry cycle: conducting experiments using experimental design principles, conducting surveys, and using existing data sets; finding, using, and assessing appropriate models (including linear regression for bivariate data and additive models for time-series data), seeking explanations, and making predictions; using informed contextual knowledge, exploratory data analysis, and statistical inference; communicating findings and evaluating all stages of the cycle. Make inferences from surveys and experiments: determining estimates and confidence intervals for means, proportions, and differences, recognising the relevance of the central limit theorem; using methods such as resampling or randomisation to assess the strength of evidence.",
                    "<b>Statistics</b>: <i>Statistical literacy</i>. Evaluate a wide range of statistically based reports, including surveys and polls, experiments, and observational studies: critiquing causal-relationship claims; interpreting margins of error.",
                    "<b>Statistics</b>: <i>Probability</i>. Investigate situations that involve elements of chance: calculating probabilities of independent, combined, and conditional events; calculating and interpreting expected values and standard deviations of discrete random variables; applying distributions such as the Poisson, binomial, and normal."
                ]
            },
            'Science': {
                'Year 1': [
                    "<b>Nature of Science</b>: <i>Understanding about science</i>. Learn that scientists ask questions about our world that lead to investigations and that open-mindedness is important because there may be more than one explanation.",
                    "<b>Nature of Science</b>: <i>Investigating in science</i>. Extend their experiences and personal explanations of the natural world through exploration, play, asking questions, and discussing simple models.",
                    "<b>Nature of Science</b>: <i>Communicating in science</i>. Build their language and develop their understanding of the many ways the natural world can be represented.",
                    "<b>Nature of Science</b>: <i>Participating and contributing</i>. Explore and act on issues and questions that link their science learning to their daily living.",
                    "<b>Living World</b>: <i>Life processes</i>. Recognise that all living things have certain requirements so they can stay alive.",
                    "<b>Living World</b>: <i>Ecology</i>. Recognise that living things are suited to their particular habitat.",
                    "<b>Living World</b>: <i>Evolution</i>. Recognise that there are lots of different living things in the world and that they can be grouped in different ways. Explain how we know that some living things from the past are now extinct.",
                    "<b>Planet Earth and Beyond</b>: <i>Earth systems</i>. Explore and describe natural features and resources.",
                    "<b>Planet Earth and Beyond</b>: <i>Interacting systems</i>. Describe how natural features are changed and resources affected by natural events and human actions.",
                    "<b>Planet Earth and Beyond</b>: <i>Astronomical systems</i>. Share ideas and observations about the Sun and the Moon and their physical effects on the heat and light available to Earth.",
                    "<b>Physical World</b>: <i>Physical inquiry and physics concepts</i>. Explore everyday examples of physical phenomena, such as movement, forces, electricity and magnetism, light, sound, waves, and heat. Seek and describe simple patterns in physical phenomena.",
                    "<b>Material World</b>: <i>Properties and changes of matter</i>. Observe, describe, and compare physical and chemical properties of common materials and changes that occur when materials are mixed, heated, or cooled.",
                    "<b>Material World</b>: <i>Chemistry and society</i>. Find out about the uses of common materials and relate these to their observed properties."
                ],
                'Year 3': [
                    "<b>Nature of Science</b>: <i>Understanding about science</i>. Appreciate that science is a way of explaining the world and that science knowledge changes over time. Identify ways in which scientists work together and provide evidence to support their ideas.",
                    "<b>Nature of Science</b>: <i>Investigating in science</i>. Build on prior experiences, working together to share and examine their own and others' knowledge. Ask questions, find evidence, explore simple models, and carry out appropriate investigations to develop simple explanations.",
                    "<b>Nature of Science</b>: <i>Communicating in science</i>. Begin to use a range of scientific symbols, conventions, and vocabulary. Engage with a range of science texts and begin to question the purposes for which these texts are constructed.",
                    "<b>Nature of Science</b>: <i>Participating and contributing</i>. Use their growing science knowledge when considering issues of concern to them. Explore various aspects of an issue and make decisions about possible actions.",
                    "<b>Living World</b>: <i>Life processes</i>. Recognise that there are life processes common to all living things and that these occur in different ways.",
                    "<b>Living World</b>: <i>Ecology</i>. Explain how living things are suited to their particular habitat and how they respond to environmental changes, both natural and human-induced.",
                    "<b>Living World</b>: <i>Evolution</i>. Begin to group plants, animals, and other living things into science-based classifications. Explore how the groups of living things we have in the world have changed over long periods of time and appreciate that some living things in New Zealand are quite different from living things in other areas of the world.",
                    "<b>Planet Earth and Beyond</b>: <i>Earth systems</i>. Appreciate that water, air, rocks and soil, and life forms make up our planet and recognise that these are also Earth's resources.",
                    "<b>Planet Earth and Beyond</b>: <i>Interacting systems</i>. Investigate the water cycle and its effect on climate, landforms, and life.",
                    "<b>Planet Earth and Beyond</b>: <i>Astronomical systems</i>. Investigate the components of the solar system, developing an appreciation of the distances between them.",
                    "<b>Physical World</b>: <i>Physical inquiry and physics concepts</i>. Explore, describe, and represent patterns and trends for everyday examples of physical phenomena, such as movement, forces, electricity and magnetism, light, sound, waves, and heat.",
                    "<b>Material World</b>: <i>Properties and changes of matter</i>. Group materials in different ways, based on the observations and measurements of the characteristic chemical and physical properties of a range of different materials. Compare chemical and physical changes.",
                    "<b>Material World</b>: <i>The structure of matter</i>. Begin to develop an understanding of the particle nature of matter and use this to explain observed changes.",
                    "<b>Material World</b>: <i>Chemistry and society</i>. Relate the observed, characteristic chemical and physical properties of a range of different materials to technological uses and natural processes."
                ],
                'Year 5': [
                    "<b>Nature of Science</b>: <i>Understanding about science</i>. Understand that scientists' investigations are informed by current scientific theories and aim to collect evidence that will be interpreted through processes of logical argument.",
                    "<b>Nature of Science</b>: <i>Investigating in science</i>. Develop and carry out more complex investigations, including using models. Show an increasing awareness of the complexity of working scientifically, including recognition of multiple variables. Begin to evaluate the suitability of the investigative methods chosen.",
                    "<b>Nature of Science</b>: <i>Communicating in science</i>. Use a wider range of science vocabulary, symbols, and conventions. Apply their understandings of science to evaluate both popular and scientific texts (including visual and numerical literacy).",
                    "<b>Nature of Science</b>: <i>Participating and contributing</i>. Develop an understanding of socio-scientific issues by gathering relevant scientific information in order to draw evidence-based conclusions and to take action where appropriate.",
                    "<b>Living World</b>: <i>Life processes</i>. Identify the key structural features and functions involved in the life processes of plants and animals. Describe the organisation of life at the cellular level.",
                    "<b>Living World</b>: <i>Ecology</i>. Investigate the interdependence of living things (including humans) in an ecosystem.",
                    "<b>Living World</b>: <i>Evolution</i>. Describe the basic processes by which genetic information is passed from one generation to the next.",
                    "<b>Planet Earth and Beyond</b>: <i>Earth systems</i>. Investigate the composition, structure, and features of the geosphere, hydrosphere, and atmosphere.",
                    "<b>Planet Earth and Beyond</b>: <i>Interacting systems</i>. Investigate how heat from the Sun, the Earth, and human activities is distributed around Earth by the geosphere, hydrosphere, and atmosphere.",
                    "<b>Planet Earth and Beyond</b>: <i>Astronomical systems</i>. Investigate the conditions on the planets and their moons, and the factors affecting them.",
                    "<b>Physical World</b>: <i>Physical inquiry and physics concepts</i>. Identify and describe the patterns associated with physical phenomena found in simple everyday situations involving movement, forces, electricity and magnetism, light, sound, waves, and heat.",
                    "<b>Physical World</b>: <i>Using physics</i>. Explore a technological or biological application of physics.",
                    "<b>Material World</b>: <i>Properties and changes of matter</i>. Investigate the chemical and physical properties of different groups of substances, for example, acids and bases, fuels, and metals. Distinguish between pure substances and mixtures and between elements and compounds.",
                    "<b>Material World</b>: <i>The structure of matter</i>. Describe the structure of the atoms of different elements. Distinguish between an element and a compound, a pure substance and a mixture at particle level.",
                    "<b>Material World</b>: <i>Chemistry and society</i>. Link the properties of different groups of substances to the way they are used in society or occur in nature."
                ],
                'Year 7': [
                    "<b>Nature of Science</b>: <i>Understanding about science</i>. Understand that scientists have an obligation to connect their new ideas to current and historical scientific knowledge and to present their findings for peer review and debate.",
                    "<b>Nature of Science</b>: <i>Investigating in science</i>. Develop and carry out investigations that extend their science knowledge, including developing their understanding of the relationship between investigations and scientific theories and models.",
                    "<b>Nature of Science</b>: <i>Communicating in science</i>. Use accepted science knowledge, vocabulary, symbols, and conventions when evaluating accounts of the natural world and consider the wider implications of the methods of communication and/or representation employed.",
                    "<b>Nature of Science</b>: <i>Participating and contributing</i>. Use relevant information to develop a coherent understanding of socio-scientific issues that concern them, to identify possible responses at both personal and societal levels.",
                    "<b>Living World</b>: <i>Life processes</i>. Explore the diverse ways in which animals and plants carry out the life processes.",
                    "<b>Living World</b>: <i>Ecology</i>. Explore ecological distribution patterns and explain possible causes for these patterns.",
                    "<b>Living World</b>: <i>Evolution</i>. Understand that DNA and the environment interact in gene expression.",
                    "<b>Planet Earth and Beyond</b>: <i>Earth systems and interacting systems</i>. Develop an understanding of the causes of natural hazards and their interactions with human activity on Earth.",
                    "<b>Planet Earth and Beyond</b>: <i>Astronomical systems</i>. Explain the nature and life cycles of different types of stars in terms of energy changes and time.",
                    "<b>Physical World</b>: <i>Physical inquiry and physics concepts</i>. Investigate physical phenomena (in the areas of mechanics, electricity, electromagnetism, light and waves, and atomic and nuclear physics) and produce qualitative and quantitative explanations for a variety of unfamiliar situations. Analyze data to deduce complex trends and relationships in physical phenomena.",
                    "<b>Physical World</b>: <i>Using physics</i>. Use physics ideas to explain a technological or biological application of physics.",
                    "<b>Material World</b>: <i>Properties and changes of matter</i>. Investigate and measure the chemical and physical properties of a range of groups of substances, for example, acids and bases, oxidants and reductants, and selected organic and inorganic compounds.",
                    "<b>Material World</b>: <i>The structure of matter</i>. Relate properties of matter to structure and bonding. Develop an understanding of and use the fundamental concepts of chemistry (for example, equilibrium and thermochemical principles) to interpret observations.",
                    "<b>Material World</b>: <i>Chemistry and society</i>. Apply knowledge of chemistry to explain aspects of the natural world and how chemistry is used in society to meet needs, resolve issues, and develop new technologies."
                ],
                'Year 9': [
                    "<b>Nature of Science</b>: <i>Understanding about science</i>. Understand how the nature of science is reflected in the processes of investigating, communicating, and participating in science.",
                    "<b>Nature of Science</b>: <i>Investigating in science</i>. Develop and carry out investigations that demonstrate an understanding of the nature of science, including the relationship between investigations and scientific theories and models.",
                    "<b>Nature of Science</b>: <i>Communicating in science</i>. Use accepted science knowledge, vocabulary, symbols, and conventions to communicate scientific ideas, and consider the wider implications of the methods of communication and/or representation employed.",
                    "<b>Nature of Science</b>: <i>Participating and contributing</i>. Use relevant information to develop a coherent understanding of socio-scientific issues that concern them, to identify possible responses at both personal and societal levels, and to justify their decisions.",
                    "<b>Living World</b>: <i>Life processes</i>. Relate key structural features and functions to the life processes of plants, animals, and micro-organisms and investigate environmental factors that affect these processes.",
                    "<b>Living World</b>: <i>Ecology</i>. Investigate the impact of natural events and human actions on a New Zealand ecosystem.",
                    "<b>Living World</b>: <i>Evolution</i>. Explore patterns in the inheritance of genetically controlled characteristics. Explain the importance of variation within a changing environment.",
                    "<b>Planet Earth and Beyond</b>: <i>Earth systems</i>. Investigate the external and internal processes that shape and change the surface features of New Zealand.",
                    "<b>Planet Earth and Beyond</b>: <i>Interacting systems</i>. Develop an understanding of how the geosphere, hydrosphere, atmosphere, and biosphere interact to cycle carbon around Earth.",
                    "<b>Planet Earth and Beyond</b>: <i>Astronomical systems</i>. Investigate the interactions between the solar, lunar, and Earth cycles and the effect of these on Earth.",
                    "<b>Physical World</b>: <i>Physical inquiry and physics concepts</i>. Investigate trends and relationships in physical phenomena (in the areas of mechanics, electricity, electromagnetism, heat, light and waves, and atomic and nuclear physics). Demonstrate an understanding of physical phenomena and concepts by explaining and solving questions and problems that relate to straightforward situations.",
                    "<b>Physical World</b>: <i>Using physics</i>. Investigate how physics knowledge is used in a technological or biological application.",
                    "<b>Material World</b>: <i>Properties and changes of matter</i>. Identify patterns and trends in the properties of a range of groups of substances, for example, acids and bases, metals, metal compounds, and hydrocarbons. Explore factors that affect chemical processes.",
                    "<b>Material World</b>: <i>The structure of matter</i>. Distinguish between atoms, molecules, and ions (includes covalent and ionic bonding). Link atomic structure to the organisation of the periodic table. Use particle theory to explain factors that affect chemical processes.",
                    "<b>Material World</b>: <i>Chemistry and society</i>. Investigate how chemical knowledge is used in a technological application of chemistry."
                ],
                'Year 11': [
                    "<b>Nature of Science</b>: <i>Understanding about science</i>. Understand how scientists work collaboratively to develop scientific knowledge that is open to challenge by new evidence and different interpretations.",
                    "<b>Nature of Science</b>: <i>Investigating in science</i>. Develop and carry out investigations that demonstrate an understanding of the nature of science, including the relationship between investigations and scientific theories and models, and the role of evidence in supporting or refuting ideas.",
                    "<b>Nature of Science</b>: <i>Communicating in science</i>. Use accepted science knowledge, vocabulary, symbols, and conventions to communicate scientific ideas, and evaluate the effectiveness of different forms of communication.",
                    "<b>Nature of Science</b>: <i>Participating and contributing</i>. Use relevant information to develop a coherent understanding of socio-scientific issues that concern them, to identify possible responses at both personal and societal levels, and to justify their decisions.",
                    "<b>Living World</b>: <i>Life processes, ecology, and evolution</i>. Understand the relationship between organisms and their environment. Explore the evolutionary processes that have resulted in the diversity of life on Earth and appreciate the place and impact of humans within these processes. Understand how humans manipulate the transfer of genetic information from one generation to the next and make informed judgments about the social, ethical, and biological implications relating to this manipulation.",
                    "<b>Planet Earth and Beyond</b>: <i>Earth systems and interacting systems</i>. Develop an in-depth understanding of the interrelationship between human activities and the geosphere, hydrosphere, atmosphere, and biosphere over time.",
                    "<b>Planet Earth and Beyond</b>: <i>Astronomical systems</i>. Explore recent astronomical events or discoveries, showing understanding of the concepts of distance and time.",
                    "<b>Physical World</b>: <i>Physical inquiry and physics concepts</i>. Investigate physical phenomena (in the areas of mechanics, electricity, electromagnetism, light and waves, and atomic and nuclear physics) and produce qualitative and quantitative explanations for a variety of complex situations. Analyze and evaluate data to deduce complex trends and relationships in physical phenomena.",
                    "<b>Physical World</b>: <i>Using physics</i>. Use physics ideas to explain a technological, biological, or astronomical application of physics and discuss related issues.",
                    "<b>Material World</b>: <i>Properties and changes of matter</i>. Investigate and measure the chemical and physical properties of a range of groups of substances, for example, acids and bases, oxidants and reductants, and selected organic and inorganic compounds.",
                    "<b>Material World</b>: <i>The structure of matter</i>. Relate properties of matter to structure and bonding. Develop an understanding of and use the fundamental concepts of chemistry (for example, equilibrium and thermochemical principles) to interpret observations.",
                    "<b>Material World</b>: <i>Chemistry and society</i>. Apply knowledge of chemistry to explain aspects of the natural world and how chemistry is used in society to meet needs, resolve issues, and develop new technologies."
                ],
                'Year 12': [
                    "<b>Nature of Science</b>: <i>Understanding about science</i>. Understand how science is a collaborative and creative activity that is subject to social, historical, and other influences, and that scientific knowledge is tentative and open to revision in light of new evidence.",
                    "<b>Nature of Science</b>: <i>Investigating in science</i>. Develop and carry out investigations that demonstrate an advanced understanding of the nature of science, including the relationship between investigations and scientific theories and models, and the role of evidence in supporting or refuting ideas.",
                    "<b>Nature of Science</b>: <i>Communicating in science</i>. Use advanced science knowledge, vocabulary, symbols, and conventions to communicate scientific ideas, and critically evaluate the effectiveness of different forms of communication.",
                    "<b>Nature of Science</b>: <i>Participating and contributing</i>. Use relevant information to develop a coherent understanding of complex socio-scientific issues that concern them, to identify possible responses at both personal and societal levels, and to justify their decisions.",
                    "<b>Living World</b>: <i>Life processes, ecology, and evolution</i>. Understand the complex relationships between organisms and their environment. Explore the evolutionary processes that have resulted in the diversity of life on Earth and critically evaluate the place and impact of humans within these processes. Understand how humans manipulate the transfer of genetic information from one generation to the next and make informed judgments about the social, ethical, and biological implications relating to this manipulation.",
                    "<b>Planet Earth and Beyond</b>: <i>Earth systems and interacting systems</i>. Develop an advanced understanding of the interrelationship between human activities and the geosphere, hydrosphere, atmosphere, and biosphere over time.",
                    "<b>Planet Earth and Beyond</b>: <i>Astronomical systems</i>. Explore recent astronomical events or discoveries, showing advanced understanding of the concepts of distance and time.",
                    "<b>Physical World</b>: <i>Physical inquiry and physics concepts</i>. Investigate physical phenomena (in the areas of mechanics, electricity, electromagnetism, light and waves, and atomic and nuclear physics) and produce qualitative and quantitative explanations for a variety of complex situations. Analyze and evaluate data to deduce complex trends and relationships in physical phenomena.",
                    "<b>Physical World</b>: <i>Using physics</i>. Use physics ideas to explain a technological, biological, or astronomical application of physics and discuss related issues.",
                    "<b>Material World</b>: <i>Properties and changes of matter</i>. Investigate and measure the chemical and physical properties of a range of groups of substances, for example, acids and bases, oxidants and reductants, and selected organic and inorganic compounds.",
                    "<b>Material World</b>: <i>The structure of matter</i>. Relate properties of matter to structure and bonding. Develop an understanding of and use the fundamental concepts of chemistry (for example, equilibrium and thermochemical principles) to interpret observations.",
                    "<b>Material World</b>: <i>Chemistry and society</i>. Apply knowledge of chemistry to explain aspects of the natural world and how chemistry is used in society to meet needs, resolve issues, and develop new technologies."
                ],
                'Year 13': [
                    "<b>Nature of Science</b>: <i>Understanding about science</i>. Understand how science is a collaborative and creative activity that is subject to social, historical, and other influences, and that scientific knowledge is tentative and open to revision in light of new evidence.",
                    "<b>Nature of Science</b>: <i>Investigating in science</i>. Develop and carry out investigations that demonstrate an advanced understanding of the nature of science, including the relationship between investigations and scientific theories and models, and the role of evidence in supporting or refuting ideas.",
                    "<b>Nature of Science</b>: <i>Communicating in science</i>. Use advanced science knowledge, vocabulary, symbols, and conventions to communicate scientific ideas, and critically evaluate the effectiveness of different forms of communication.",
                    "<b>Nature of Science</b>: <i>Participating and contributing</i>. Use relevant information to develop a coherent understanding of complex socio-scientific issues that concern them, to identify possible responses at both personal and societal levels, and to justify their decisions.",
                    "<b>Living World</b>: <i>Life processes, ecology, and evolution</i>. Understand the complex relationships between organisms and their environment. Explore the evolutionary processes that have resulted in the diversity of life on Earth and critically evaluate the place and impact of humans within these processes. Understand how humans manipulate the transfer of genetic information from one generation to the next and make informed judgments about the social, ethical, and biological implications relating to this manipulation.",
                    "<b>Planet Earth and Beyond</b>: <i>Earth systems and interacting systems</i>. Develop an advanced understanding of the interrelationship between human activities and the geosphere, hydrosphere, atmosphere, and biosphere over time.",
                    "<b>Planet Earth and Beyond</b>: <i>Astronomical systems</i>. Explore recent astronomical events or discoveries, showing advanced understanding of the concepts of distance and time.",
                    "<b>Physical World</b>: <i>Physical inquiry and physics concepts</i>. Investigate physical phenomena (in the areas of mechanics, electricity, electromagnetism, light and waves, and atomic and nuclear physics) and produce qualitative and quantitative explanations for a variety of complex situations. Analyze and evaluate data to deduce complex trends and relationships in physical phenomena.",
                    "<b>Physical World</b>: <i>Using physics</i>. Use physics ideas to explain a technological, biological, or astronomical application of physics and discuss related issues.",
                    "<b>Material World</b>: <i>Properties and changes of matter</i>. Investigate and measure the chemical and physical properties of a range of groups of substances, for example, acids and bases, oxidants and reductants, and selected organic and inorganic compounds.",
                    "<b>Material World</b>: <i>The structure of matter</i>. Relate properties of matter to structure and bonding. Develop an understanding of and use the fundamental concepts of chemistry (for example, equilibrium and thermochemical principles) to interpret observations.",
                    "<b>Material World</b>: <i>Chemistry and society</i>. Apply knowledge of chemistry to explain aspects of the natural world and how chemistry is used in society to meet needs, resolve issues, and develop new technologies."
                ]
            },
            'Social Sciences': {
                'Year 1': [
                    "<b>Social Sciences</b>: Understand how belonging to groups is important for people.",
                    "<b>Social Sciences</b>: Understand that people have different roles and responsibilities as part of their participation in groups.",
                    "<b>Social Sciences</b>: Understand how the past is important to people.",
                    "<b>Social Sciences</b>: Understand how places in New Zealand are significant for individuals and groups.",
                    "<b>Social Sciences</b>: Understand how the cultures of people in New Zealand are expressed in their daily lives."
                ],
                'Year 3': [
                    "<b>Social Sciences</b>: Understand that people have social, cultural, and economic roles, rights, and responsibilities.",
                    "<b>Social Sciences</b>: Understand how people make choices to meet their needs and wants.",
                    "<b>Social Sciences</b>: Understand how cultural practices reflect and express people's customs, traditions, and values.",
                    "<b>Social Sciences</b>: Understand how time and change affect people's lives.",
                    "<b>Social Sciences</b>: Understand how places influence people and people influence places.",
                    "<b>Social Sciences</b>: Understand how people make significant contributions to New Zealand's society.",
                    "<b>Social Sciences</b>: Understand how the status of Māori as tangata whenua is significant for communities in New Zealand."
                ],
                'Year 5': [
                    "<b>Social Sciences</b>: Understand how groups make and implement rules and laws.",
                    "<b>Social Sciences</b>: Understand how cultural practices vary but reflect similar purposes.",
                    "<b>Social Sciences</b>: Understand how people view and use places differently.",
                    "<b>Social Sciences</b>: Understand how people make decisions about access to and use of resources.",
                    "<b>Social Sciences</b>: Understand how people remember and record the past in different ways.",
                    "<b>Social Sciences</b>: Understand how early Polynesian and British migrations to New Zealand have continuing significance for tangata whenua and communities.",
                    "<b>Social Sciences</b>: Understand how the movement of people affects cultural diversity and interaction in New Zealand."
                ],
                'Year 7': [
                    "<b>Social Sciences</b>: Understand how the ways in which leadership of groups is acquired and exercised have consequences for communities and societies.",
                    "<b>Social Sciences</b>: Understand how people pass on and sustain culture and heritage for different reasons and that this has consequences for people.",
                    "<b>Social Sciences</b>: Understand how exploration and innovation create opportunities and challenges for people, places, and environments.",
                    "<b>Social Sciences</b>: Understand that events have causes and effects.",
                    "<b>Social Sciences</b>: Understand how producers and consumers exercise their rights and meet their responsibilities.",
                    "<b>Social Sciences</b>: Understand how formal and informal groups make decisions that impact on communities.",
                    "<b>Social Sciences</b>: Understand how people participate individually and collectively in response to community challenges."
                ],
                'Year 9': [
                    "<b>Social Sciences</b>: Understand how systems of government in New Zealand operate and affect people's lives, and how they compare with another system.",
                    "<b>Social Sciences</b>: Understand how the Treaty of Waitangi is responded to differently by people in different times and places.",
                    "<b>Social Sciences</b>: Understand how cultural interaction impacts on cultures and societies.",
                    "<b>Social Sciences</b>: Understand that people move between places and how this has consequences for the people and the places.",
                    "<b>Social Sciences</b>: Understand how economic decisions impact on people, communities, and nations.",
                    "<b>Social Sciences</b>: Understand how people's management of resources impacts on environmental and social sustainability.",
                    "<b>Social Sciences</b>: Understand how the ideas and actions of people in the past have had a significant impact on people's lives.",
                    "<b>Social Sciences</b>: Understand how people seek and have sought economic growth through business, enterprise, and innovation.",
                    "<b>Social Sciences</b>: Understand how people define and seek human rights."
                ],
                'Year 11': [
                    "<b>History</b>: Understand how the causes and consequences of past events that are of significance to New Zealanders shape the lives of people and society.",
                    "<b>History</b>: Understand how people's perspectives on past events that are of significance to New Zealanders differ.",
                    "<b>Geography</b>: Understand that natural and cultural environments have particular characteristics and how environments are shaped by processes that create spatial patterns.",
                    "<b>Geography</b>: Understand how people interact with natural and cultural environments and that this interaction has consequences.",
                    "<b>Economics</b>: Understand how, as a result of scarcity, consumers, producers, and government make choices that affect New Zealand society.",
                    "<b>Economics</b>: Understand how the different sectors of the New Zealand economy are interdependent."
                ],
                'Year 12': [
                    "<b>History</b>: Understand how historical forces and movements have influenced the causes and consequences of events of significance to New Zealanders.",
                    "<b>History</b>: Understand how people's interpretations of events that are of significance to New Zealanders differ.",
                    "<b>Geography</b>: Understand how the processes that shape natural and cultural environments change over time, vary in scale and from place to place, and create spatial patterns.",
                    "<b>Geography</b>: Understand how people's perceptions of and interactions with natural and cultural environments differ and have changed over time.",
                    "<b>Economics</b>: Understand how economic concepts and models provide a means of analysing contemporary New Zealand issues.",
                    "<b>Economics</b>: Understand how government policies and contemporary issues interact."
                ],
                'Year 13': [
                    "<b>History</b>: Understand that the causes, consequences, and explanations of historical events that are of significance to New Zealanders are complex and how and why they are contested.",
                    "<b>History</b>: Understand how trends over time reflect social, economic, and political forces.",
                    "<b>Geography</b>: Understand how interacting processes shape natural and cultural environments, occur at different rates and on different scales, and create spatial variations.",
                    "<b>Geography</b>: Understand how people's diverse values and perceptions influence the environmental, social, and economic decisions and responses that they make.",
                    "<b>Economics</b>: Understand that well-functioning markets are efficient but that governments may need to intervene where markets fail to deliver efficient or equitable outcomes.",
                    "<b>Economics</b>: Understand how the nature and size of the New Zealand economy is influenced by interacting internal and external factors."
                ]
            },
            'Health and PE': {
                'Year 1': [
                    "<b>Personal Health and Physical Development</b>: <i>Personal growth and development</i>. Describe feelings and ask questions about their health, growth, development, and personal needs and wants.",
                    "<b>Personal Health and Physical Development</b>: <i>Regular physical activity</i>. Participate in creative and regular physical activities and identify enjoyable experiences.",
                    "<b>Personal Health and Physical Development</b>: <i>Safety management</i>. Describe and use safe practices in a range of contexts and identify people who can help.",
                    "<b>Personal Health and Physical Development</b>: <i>Personal identity</i>. Describe themselves in relation to a range of contexts.",
                    "<b>Movement Concepts and Motor Skills</b>: <i>Movement skills</i>. Develop a wide range of movement skills, using a variety of equipment and play environments.",
                    "<b>Movement Concepts and Motor Skills</b>: <i>Positive attitudes</i>. Participate in a range of games and activities and identify the factors that make participation safe and enjoyable.",
                    "<b>Relationships with Other People</b>: <i>Relationships</i>. Explore and share ideas about relationships with other people.",
                    "<b>Relationships with Other People</b>: <i>Identity, sensitivity, and respect</i>. Demonstrate respect through sharing and co-operation in groups.",
                    "<b>Relationships with Other People</b>: <i>Interpersonal skills</i>. Express their own ideas, needs, wants, and feelings clearly and listen to those of other people.",
                    "<b>Healthy Communities and Environments</b>: <i>Community resources</i>. Identify and discuss obvious hazards in their home, school, and local environment and adopt simple safety practices.",
                    "<b>Healthy Communities and Environments</b>: <i>Rights, responsibilities, and laws</i>. Take individual and collective action to contribute to environments that can be enjoyed by all."
                ],
                'Year 3': [
                    "<b>Personal Health and Physical Development</b>: <i>Personal growth and development</i>. Describe their stages of growth and their development needs and demonstrate increasing responsibility for self-care.",
                    "<b>Personal Health and Physical Development</b>: <i>Regular physical activity</i>. Experience creative, regular, and enjoyable physical activities and describe the benefits to well-being.",
                    "<b>Personal Health and Physical Development</b>: <i>Safety management</i>. Identify risk and use safe practices in a range of contexts.",
                    "<b>Personal Health and Physical Development</b>: <i>Personal identity</i>. Identify personal qualities that contribute to a sense of self-worth.",
                    "<b>Movement Concepts and Motor Skills</b>: <i>Movement skills</i>. Practise movement skills and demonstrate the ability to link them in order to perform movement sequences.",
                    "<b>Movement Concepts and Motor Skills</b>: <i>Positive attitudes</i>. Participate in and create a variety of games and activities and discuss the enjoyment that these activities can bring to them and others.",
                    "<b>Movement Concepts and Motor Skills</b>: <i>Science and technology</i>. Use modified equipment in a range of contexts and identify how this enhances movement experiences.",
                    "<b>Movement Concepts and Motor Skills</b>: <i>Challenges and social and cultural factors</i>. Develop and apply rules and practices in games and activities to promote fair, safe, and culturally appropriate participation for all.",
                    "<b>Relationships with Other People</b>: <i>Relationships</i>. Identify and demonstrate ways of maintaining and enhancing relationships between individuals and within groups.",
                    "<b>Relationships with Other People</b>: <i>Identity, sensitivity, and respect</i>. Describe how individuals and groups share characteristics and are also unique.",
                    "<b>Relationships with Other People</b>: <i>Interpersonal skills</i>. Express their ideas, needs, wants, and feelings appropriately and listen sensitively to other people and affirm them.",
                    "<b>Healthy Communities and Environments</b>: <i>Societal attitudes and values</i>. Explore how people's attitudes, values, and actions contribute to healthy physical and social environments.",
                    "<b>Healthy Communities and Environments</b>: <i>Community resources</i>. Identify and use local community resources and explain how these contribute to a healthy community.",
                    "<b>Healthy Communities and Environments</b>: <i>Rights, responsibilities, and laws</i>. Contribute to and use simple guidelines and practices that promote physically and socially healthy classrooms, schools, and local environments."
                ],
                'Year 5': [
                    "<b>Personal Health and Physical Development</b>: <i>Personal growth and development</i>. Identify factors that affect personal, physical, social, and emotional growth and develop skills to manage changes.",
                    "<b>Personal Health and Physical Development</b>: <i>Regular physical activity</i>. Maintain regular participation in enjoyable physical activities in a range of environments and describe how these assist in the promotion of well-being.",
                    "<b>Personal Health and Physical Development</b>: <i>Safety management</i>. Identify risks and their causes and describe safe practices to manage these.",
                    "<b>Personal Health and Physical Development</b>: <i>Personal identity</i>. Describe how their own feelings, beliefs, and actions, and those of other people, contribute to their personal sense of self-worth.",
                    "<b>Movement Concepts and Motor Skills</b>: <i>Movement skills</i>. Develop more complex movement sequences and strategies in a range of situations.",
                    "<b>Movement Concepts and Motor Skills</b>: <i>Positive attitudes</i>. Develop movement skills in challenging situations and describe how these challenges impact on themselves and others.",
                    "<b>Movement Concepts and Motor Skills</b>: <i>Science and technology</i>. Participate in and describe how their body responds to regular and vigorous physical activity in a range of environments.",
                    "<b>Movement Concepts and Motor Skills</b>: <i>Challenges and social and cultural factors</i>. Participate in co-operative and competitive activities and describe how co-operation and competition can affect people's behaviour and the quality of the experience.",
                    "<b>Relationships with Other People</b>: <i>Relationships</i>. Identify and compare ways of establishing relationships and managing changing relationships.",
                    "<b>Relationships with Other People</b>: <i>Identity, sensitivity, and respect</i>. Identify ways in which people discriminate and ways to act responsibly to support themselves and other people.",
                    "<b>Relationships with Other People</b>: <i>Interpersonal skills</i>. Identify the pressures that can influence interactions with other people and demonstrate basic assertiveness strategies to manage these.",
                    "<b>Healthy Communities and Environments</b>: <i>Societal attitudes and values</i>. Identify how health care and physical activity practices are influenced by community and environmental factors.",
                    "<b>Healthy Communities and Environments</b>: <i>Community resources</i>. Participate in communal events and describe how such events enhance the well-being of the community.",
                    "<b>Healthy Communities and Environments</b>: <i>Rights, responsibilities, and laws</i>. Research and describe current health and safety guidelines and practices in their school and take action to enhance their effectiveness.",
                    "<b>Healthy Communities and Environments</b>: <i>People and the environment</i>. Plan and implement a programme to enhance an identified social or physical aspect of their classroom or school environment."
                ],
                'Year 7': [
                    "<b>Personal Health and Physical Development</b>: <i>Personal growth and development</i>. Describe the characteristics of pubertal change and discuss positive adjustment strategies.",
                    "<b>Personal Health and Physical Development</b>: <i>Regular physical activity</i>. Demonstrate an increasing sense of responsibility for incorporating regular and enjoyable physical activity into their personal lifestyle to enhance well-being.",
                    "<b>Personal Health and Physical Development</b>: <i>Safety management</i>. Access and use information to make and action safe choices in a range of contexts.",
                    "<b>Personal Health and Physical Development</b>: <i>Personal identity</i>. Describe how social messages and stereotypes, including those in the media, can affect feelings of self-worth.",
                    "<b>Movement Concepts and Motor Skills</b>: <i>Movement skills</i>. Acquire and apply complex motor skills by using basic principles of motor learning.",
                    "<b>Movement Concepts and Motor Skills</b>: <i>Positive attitudes</i>. Develop skills and responsible attitudes in challenging physical situations.",
                    "<b>Movement Concepts and Motor Skills</b>: <i>Science and technology</i>. Investigate and experience ways in which scientific, technological, and environmental knowledge and resources assist in and influence people's participation in regular physical activity.",
                    "<b>Movement Concepts and Motor Skills</b>: <i>Challenges and social and cultural factors</i>. Investigate and experience ways in which people's physical competence and participation are influenced by social and cultural factors.",
                    "<b>Relationships with Other People</b>: <i>Relationships</i>. Identify issues associated with relationships and describe options to achieve positive outcomes.",
                    "<b>Relationships with Other People</b>: <i>Identity, sensitivity, and respect</i>. Demonstrate an understanding of how attitudes and values relating to difference influence their own safety and that of other people.",
                    "<b>Relationships with Other People</b>: <i>Interpersonal skills</i>. Demonstrate a range of interpersonal skills and processes that help them to make safe choices for themselves and other people in a variety of settings.",
                    "<b>Healthy Communities and Environments</b>: <i>Societal attitudes and values</i>. Investigate societal influences on the well-being of student communities.",
                    "<b>Healthy Communities and Environments</b>: <i>Community resources</i>. Investigate community services that support and promote people's well-being and take action to promote personal and group involvement.",
                    "<b>Healthy Communities and Environments</b>: <i>Rights, responsibilities, and laws</i>. Identify the rights and responsibilities of consumers and use this information to evaluate health and recreational services and products in the community.",
                    "<b>Healthy Communities and Environments</b>: <i>People and the environment</i>. Investigate and evaluate aspects of the school environment that affect people's well-being and take action to enhance these aspects."
                ],
                'Year 9': [
                    "<b>Personal Health and Physical Development</b>: <i>Personal growth and development</i>. Describe physical, social, emotional, and intellectual processes of growth and relate these to features of adolescent development and effective self-management strategies.",
                    "<b>Personal Health and Physical Development</b>: <i>Regular physical activity</i>. Experience a range of personally enjoyable physical activities and describe how varying levels of involvement affect well-being and lifestyle balance.",
                    "<b>Personal Health and Physical Development</b>: <i>Safety management</i>. Investigate and practise safety procedures and strategies to manage risk situations.",
                    "<b>Personal Health and Physical Development</b>: <i>Personal identity</i>. Investigate and describe the ways in which individuals define their own identity and sense of self-worth and how this influences the ways in which they describe other people.",
                    "<b>Movement Concepts and Motor Skills</b>: <i>Movement skills</i>. Appraise specialised motor skills and adapt them to extend physical competence and recreational opportunities.",
                    "<b>Movement Concepts and Motor Skills</b>: <i>Positive attitudes</i>. Adapt skills and appraise responsible attitudes in challenging physical situations and unfamiliar environments.",
                    "<b>Movement Concepts and Motor Skills</b>: <i>Science and technology</i>. Apply relevant scientific, technological, and environmental knowledge and use appropriate resources to improve performance in a specialised physical activity.",
                    "<b>Movement Concepts and Motor Skills</b>: <i>Challenges and social and cultural factors</i>. Appraise, adapt, and use physical activities to ensure that specific social and cultural needs are met.",
                    "<b>Relationships with Other People</b>: <i>Relationships</i>. Analyse the nature and benefits of meaningful interpersonal relationships.",
                    "<b>Relationships with Other People</b>: <i>Identity, sensitivity, and respect</i>. Analyse the beliefs, attitudes, and practices that reinforce stereotypes and role expectations, identifying ways in which these shape people's choices at individual, group, and societal levels.",
                    "<b>Relationships with Other People</b>: <i>Interpersonal skills</i>. Evaluate information, make informed decisions, and use interpersonal skills effectively to manage conflict, competition, and change in relationships.",
                    "<b>Healthy Communities and Environments</b>: <i>Societal attitudes and values</i>. Analyse ways in which events and social organisations promote healthy communities and evaluate the effects they have.",
                    "<b>Healthy Communities and Environments</b>: <i>Community resources</i>. Evaluate school and community initiatives that promote young people's well-being and develop an action plan to instigate or support these.",
                    "<b>Healthy Communities and Environments</b>: <i>Rights, responsibilities, and laws</i>. Evaluate laws, policies, practices, and regulations in terms of their contribution to social justice at school and in the wider community.",
                    "<b>Healthy Communities and Environments</b>: <i>People and the environment</i>. Analyse ways in which the environment and the well-being of a community are affected by population pressure and technological processes."
                ],
                'Year 11': [
                    "<b>Personal Health and Physical Development</b>: <i>Personal growth and development</i>. Investigate and understand reasons for the choices people make that affect their well-being and explore and evaluate options and consequences.",
                    "<b>Personal Health and Physical Development</b>: <i>Regular physical activity</i>. Choose and maintain ongoing involvement in appropriate physical activities and examine factors influencing their participation.",
                    "<b>Personal Health and Physical Development</b>: <i>Safety management</i>. Demonstrate understanding of responsible behaviours required to ensure that challenges and risks are managed safely in physical and social environments.",
                    "<b>Personal Health and Physical Development</b>: <i>Personal identity</i>. Demonstrate an understanding of factors that contribute to personal identity and celebrate individuality and affirm diversity.",
                    "<b>Movement Concepts and Motor Skills</b>: <i>Movement skills</i>. Devise, apply, and evaluate strategies to improve physical activity performance for themselves and others.",
                    "<b>Movement Concepts and Motor Skills</b>: <i>Positive attitudes</i>. Devise, apply, and appraise strategies through which they and other people can participate responsibly in challenging physical situations.",
                    "<b>Movement Concepts and Motor Skills</b>: <i>Science and technology</i>. Critically analyse and experience the application of scientific and technological knowledge and resources to physical activity in a range of environments.",
                    "<b>Movement Concepts and Motor Skills</b>: <i>Challenges and social and cultural factors</i>. Devise and apply strategies to ensure that social and cultural needs are met in personal and group physical activities.",
                    "<b>Relationships with Other People</b>: <i>Relationships</i>. Demonstrate an understanding of how individuals and groups affect relationships by influencing people's behaviour, beliefs, decisions, and sense of self-worth.",
                    "<b>Relationships with Other People</b>: <i>Identity, sensitivity, and respect</i>. Plan and evaluate strategies recognising their own and other people's rights and responsibilities to avoid or minimise risks in social situations.",
                    "<b>Relationships with Other People</b>: <i>Interpersonal skills</i>. Plan strategies and demonstrate interpersonal skills to respond to challenging situations appropriately.",
                    "<b>Healthy Communities and Environments</b>: <i>Societal attitudes and values</i>. Critically analyse societal attitudes and practices and legislation influencing contemporary health and sporting issues, in relation to the need to promote mentally healthy and physically safe communities.",
                    "<b>Healthy Communities and Environments</b>: <i>Community resources</i>. Establish and justify priorities for equitable distribution of available health and recreational resources and advocate change where necessary.",
                    "<b>Healthy Communities and Environments</b>: <i>Rights, responsibilities, and laws</i>. Demonstrate the use of health promotion strategies by implementing a plan of action to enhance the well-being of the school, community, or environment.",
                    "<b>Healthy Communities and Environments</b>: <i>People and the environment</i>. Critically analyse the interrelationships between people, industry, technology, and legislation on aspects of environmental health."
                ],
                'Year 12': [
                    "<b>Personal Health and Physical Development</b>: <i>Personal growth and development</i>. Assess their health needs and identify strategies to ensure personal wellbeing across their lifespan.",
                    "<b>Personal Health and Physical Development</b>: <i>Regular physical activity</i>. Plan, implement, and evaluate a physical activity programme and examine factors used to justify physical activity as a means of enhancing well-being.",
                    "<b>Personal Health and Physical Development</b>: <i>Safety management</i>. Analyse the difference between perceived and residual risks in physical and social environments and develop skills and behaviour for managing responsible action.",
                    "<b>Personal Health and Physical Development</b>: <i>Personal identity</i>. Critically evaluate societal attitudes, values, and expectations that affect people's awareness of their personal identity and sense of self-worth in a range of life situations.",
                    "<b>Movement Concepts and Motor Skills</b>: <i>Movement skills</i>. Appraise specialised motor skills and adapt them to extend physical competence and recreational opportunities.",
                    "<b>Movement Concepts and Motor Skills</b>: <i>Positive attitudes</i>. Adapt skills and appraise responsible attitudes in challenging physical situations and unfamiliar environments.",
                    "<b>Movement Concepts and Motor Skills</b>: <i>Science and technology</i>. Apply relevant scientific, technological, and environmental knowledge and use appropriate resources to improve performance in a specialised physical activity.",
                    "<b>Movement Concepts and Motor Skills</b>: <i>Challenges and social and cultural factors</i>. Appraise, adapt, and use physical activities to ensure that specific social and cultural needs are met.",
                    "<b>Relationships with Other People</b>: <i>Relationships</i>. Analyse the nature and benefits of meaningful interpersonal relationships.",
                    "<b>Relationships with Other People</b>: <i>Identity, sensitivity, and respect</i>. Analyse the beliefs, attitudes, and practices that reinforce stereotypes and role expectations, identifying ways in which these shape people's choices at individual, group, and societal levels.",
                    "<b>Relationships with Other People</b>: <i>Interpersonal skills</i>. Evaluate information, make informed decisions, and use interpersonal skills effectively to manage conflict, competition, and change in relationships.",
                    "<b>Healthy Communities and Environments</b>: <i>Societal attitudes and values</i>. Analyse ways in which events and social organisations promote healthy communities and evaluate the effects they have.",
                    "<b>Healthy Communities and Environments</b>: <i>Community resources</i>. Evaluate school and community initiatives that promote young people's well-being and develop an action plan to instigate or support these.",
                    "<b>Healthy Communities and Environments</b>: <i>Rights, responsibilities, and laws</i>. Evaluate laws, policies, practices, and regulations in terms of their contribution to social justice at school and in the wider community.",
                    "<b>Healthy Communities and Environments</b>: <i>People and the environment</i>. Analyse ways in which the environment and the well-being of a community are affected by population pressure and technological processes."
                ],
                'Year 13': [
                    "<b>Personal Health and Physical Development</b>: <i>Personal growth and development</i>. Critically evaluate a range of qualitative and quantitative data to devise strategies to meet their current and future needs for well-being.",
                    "<b>Personal Health and Physical Development</b>: <i>Regular physical activity</i>. Critically examine commercial products and programmes that promote physical activity and relate this to personal participation in programmes intended to meet their current well-being needs.",
                    "<b>Personal Health and Physical Development</b>: <i>Safety management</i>. Critically analyse dilemmas and contemporary ethical issues that influence their own health and safety and that of other people.",
                    "<b>Personal Health and Physical Development</b>: <i>Personal identity</i>. Critically analyse the impacts that conceptions of personal, cultural, and national identity have on people's well-being.",
                    "<b>Movement Concepts and Motor Skills</b>: <i>Movement skills</i>. Devise, apply, and evaluate strategies to improve physical activity performance for themselves and others.",
                    "<b>Movement Concepts and Motor Skills</b>: <i>Positive attitudes</i>. Devise, apply, and appraise strategies through which they and other people can participate responsibly in challenging physical situations.",
                    "<b>Movement Concepts and Motor Skills</b>: <i>Science and technology</i>. Critically analyse and experience the application of scientific and technological knowledge and resources to physical activity in a range of environments.",
                    "<b>Movement Concepts and Motor Skills</b>: <i>Challenges and social and cultural factors</i>. Devise and apply strategies to ensure that social and cultural needs are met in personal and group physical activities.",
                    "<b>Relationships with Other People</b>: <i>Relationships</i>. Critically analyse the dynamics of effective relationships in a range of social contexts.",
                    "<b>Relationships with Other People</b>: <i>Identity, sensitivity, and respect</i>. Critically analyse attitudes, values, and behaviours that contribute to conflict and identify and describe ways of creating more harmonious relationships.",
                    "<b>Relationships with Other People</b>: <i>Interpersonal skills</i>. Analyse and evaluate attitudes and interpersonal skills that enable people to participate fully and effectively as community members in various situations.",
                    "<b>Healthy Communities and Environments</b>: <i>Societal attitudes and values</i>. Critically analyse societal attitudes and practices and legislation influencing contemporary health and sporting issues, in relation to the need to promote mentally healthy and physically safe communities.",
                    "<b>Healthy Communities and Environments</b>: <i>Community resources</i>. Establish and justify priorities for equitable distribution of available health and recreational resources and advocate change where necessary.",
                    "<b>Healthy Communities and Environments</b>: <i>Rights, responsibilities, and laws</i>. Demonstrate the use of health promotion strategies by implementing a plan of action to enhance the well-being of the school, community, or environment.",
                    "<b>Healthy Communities and Environments</b>: <i>People and the environment</i>. Critically analyse the interrelationships between people, industry, technology, and legislation on aspects of environmental health."
                ]
            },
            'Languages': {
                'Year 1': [
                    "<b>Communication</b>: <i>Proficiency Descriptor</i>. Students can understand and use familiar expressions and everyday vocabulary. Students can interact in a simple way in supported situations.",
                    "<b>Communication</b>: <i>Language Knowledge</i>. Recognise that the target language is organised in particular ways. Make connections with their own language(s).",
                    "<b>Communication</b>: <i>Cultural Knowledge</i>. Recognise that the target culture(s) is part of its own language. Make connections with known culture(s)."
                ],
                'Year 3': [
                    "<b>Communication</b>: <i>Proficiency Descriptor</i>. Students can understand and construct simple texts using their knowledge of the target language. Students can describe aspects of their own background and immediate environment.",
                    "<b>Communication</b>: <i>Language Knowledge</i>. Recognise and describe ways in which the target language is organised. Compare and contrast languages.",
                    "<b>Communication</b>: <i>Cultural Knowledge</i>. Recognise and describe ways in which the target culture(s) is part of its own language. Compare and contrast culture(s)."
                ],
                'Year 5': [
                    "<b>Communication</b>: <i>Proficiency Descriptor</i>. Students can understand and produce more complex language. They can communicate beyond the immediate context, for example, about past and future events. Students can understand and produce a variety of text types.",
                    "<b>Communication</b>: <i>Language Knowledge</i>. Understand ways in which the target language is organised for different purposes. Compare and contrast languages.",
                    "<b>Communication</b>: <i>Cultural Knowledge</i>. Understand ways in which the target culture(s) is part of its own language. Compare and contrast culture(s)."
                ],
                'Year 7': [
                    "<b>Communication</b>: <i>Proficiency Descriptor</i>. Students can use language variably and effectively to express and justify their own ideas and opinions and support or challenge those of others. They are able to use and identify the linguistic and cultural forms that guide interpretation and enable them to respond critically to texts.",
                    "<b>Communication</b>: <i>Language Knowledge</i>. Analyse ways in which the target language is organised in different texts and for different purposes. Explore how linguistic meaning is conveyed across languages.",
                    "<b>Communication</b>: <i>Cultural Knowledge</i>. Analyse ways in which the target culture(s) is part of its own language. Compare and contrast culture(s)."
                ],
                'Year 9': [
                    "<b>Communication</b>: <i>Proficiency Descriptor</i>. Students can communicate effectively in most social and some academic situations, using increasingly complex language structures and vocabulary.",
                    "<b>Communication</b>: <i>Language Knowledge</i>. Understand and use a range of language features to express precise meaning in different contexts.",
                    "<b>Communication</b>: <i>Cultural Knowledge</i>. Demonstrate understanding of how culture is embedded in language use in different contexts."
                ],
                'Year 11': [
                    "<b>Communication</b>: <i>Proficiency Descriptor</i>. Students can communicate effectively in a wide range of situations, using accurate and appropriate language in both social and academic contexts.",
                    "<b>Communication</b>: <i>Language Knowledge</i>. Use complex language structures and a wide range of vocabulary to express abstract ideas and opinions.",
                    "<b>Communication</b>: <i>Cultural Knowledge</i>. Analyse how cultural perspectives are expressed through language in different contexts."
                ],
                'Year 12': [
                    "<b>Communication</b>: <i>Proficiency Descriptor</i>. Students can communicate fluently and spontaneously in most situations, adapting their language use to different contexts, purposes and audiences.",
                    "<b>Communication</b>: <i>Language Knowledge</i>. Use language flexibly and effectively for social, academic and professional purposes.",
                    "<b>Communication</b>: <i>Cultural Knowledge</i>. Critically analyse how language reflects and shapes cultural perspectives and practices."
                ],
                'Year 13': [
                    "<b>Communication</b>: <i>Proficiency Descriptor</i>. Students can communicate with fluency, accuracy and sophistication in a wide range of complex situations, demonstrating nuanced understanding of cultural contexts.",
                    "<b>Communication</b>: <i>Language Knowledge</i>. Use language with a high degree of accuracy and appropriacy in demanding academic and professional contexts.",
                    "<b>Communication</b>: <i>Cultural Knowledge</i>. Demonstrate sophisticated understanding of the relationship between language, culture and identity in diverse contexts."
                ]
            },
            'The Arts': {
                'Year 1': [
                    "<b>Dance</b>: <i>Understanding Dance in Context</i>. Demonstrate an awareness of dance in their lives and in their communities.",
                    "<b>Dance</b>: <i>Developing Practical Knowledge</i>. Explore movement with a developing awareness of the dance elements of body, space, time, energy, and relationships.",
                    "<b>Dance</b>: <i>Developing Ideas</i>. Improvise and explore movement ideas in response to a variety of stimuli.",
                    "<b>Dance</b>: <i>Communicating and Interpreting</i>. Share dance movement through informal presentation and share their thoughts and feelings in response to their own and others' dances.",
                    "<b>Drama</b>: <i>Understanding Drama in Context</i>. Demonstrate an awareness that drama serves a variety of purposes in their lives and in their communities.",
                    "<b>Drama</b>: <i>Developing Practical Knowledge</i>. Explore the elements of role, focus, action, tension, time, and space through dramatic play.",
                    "<b>Drama</b>: <i>Developing Ideas</i>. Contribute and develop ideas in drama, using personal experience and imagination.",
                    "<b>Drama</b>: <i>Communicating and Interpreting</i>. Share drama through informal presentation and respond to ways in which drama tells stories and conveys ideas in their own and others' work.",
                    "<b>Music - Sound Arts</b>: <i>Understanding Music in Context</i>. Explore and share ideas about music from a range of sound environments and recognise that music serves a variety of purposes and functions in their lives and in their communities.",
                    "<b>Music - Sound Arts</b>: <i>Developing Practical Knowledge</i>. Explore how sound is made, as they listen and respond to the elements of music: beat, rhythm, pitch, tempo, dynamics, and tone colour.",
                    "<b>Music - Sound Arts</b>: <i>Developing Ideas</i>. Explore and express sounds and musical ideas, drawing on personal experience, listening, and imagination.",
                    "<b>Music - Sound Arts</b>: <i>Communicating and Interpreting</i>. Share music making with others and respond to live and recorded music.",
                    "<b>Visual Arts</b>: <i>Understanding Visual Arts in Context</i>. Share ideas about how and why their own and others' works are made and their purpose, value, and context.",
                    "<b>Visual Arts</b>: <i>Developing Practical Knowledge</i>. Explore a variety of materials and tools and discover elements and selected principles.",
                    "<b>Visual Arts</b>: <i>Developing Ideas</i>. Investigate visual ideas in response to a variety of motivations, observation, and imagination.",
                    "<b>Visual Arts</b>: <i>Communicating and Interpreting</i>. Share the ideas, feelings, and stories communicated by their own and others' objects and images."
                ],
                'Year 3': [
                    "<b>Dance</b>: <i>Understanding Dance in Context</i>. Identify and describe dance in their lives and in their communities.",
                    "<b>Dance</b>: <i>Developing Practical Knowledge</i>. Explore and identify, through movement, the dance elements of body, space, time, energy, and relationships.",
                    "<b>Dance</b>: <i>Developing Ideas</i>. Use the elements of dance in purposeful ways to respond to a variety of stimuli.",
                    "<b>Dance</b>: <i>Communicating and Interpreting</i>. Share dance movement through informal presentation and identify the use of the elements of dance.",
                    "<b>Drama</b>: <i>Understanding Drama in Context</i>. Identify and describe how drama serves a variety of purposes in their lives and in their communities.",
                    "<b>Drama</b>: <i>Developing Practical Knowledge</i>. Explore and use elements of drama for different purposes.",
                    "<b>Drama</b>: <i>Developing Ideas</i>. Develop and sustain ideas in drama, based on personal experience and imagination.",
                    "<b>Drama</b>: <i>Communicating and Interpreting</i>. Share drama through informal presentation and respond to elements of drama in their own and others' work.",
                    "<b>Music - Sound Arts</b>: <i>Understanding Music in Context</i>. Explore and share ideas about music from a range of sound environments and recognise that music serves a variety of purposes and functions in their lives and in their communities.",
                    "<b>Music - Sound Arts</b>: <i>Developing Practical Knowledge</i>. Explore and identify how sound is made and changed, as they listen and respond to the elements of music and structural devices.",
                    "<b>Music - Sound Arts</b>: <i>Developing Ideas</i>. Improvise, explore, and express musical ideas, drawing on personal experience, listening, and imagination.",
                    "<b>Music - Sound Arts</b>: <i>Communicating and Interpreting</i>. Share music making with others, using basic performance skills and techniques. Respond to live and recorded music.",
                    "<b>Visual Arts</b>: <i>Understanding Visual Arts in Context</i>. Share ideas about how and why their own and others' works are made and their purpose, value, and context.",
                    "<b>Visual Arts</b>: <i>Developing Practical Knowledge</i>. Explore a variety of materials and tools and discover elements and selected principles.",
                    "<b>Visual Arts</b>: <i>Developing Ideas</i>. Investigate and develop visual ideas in response to a variety of motivations, observation, and imagination.",
                    "<b>Visual Arts</b>: <i>Communicating and Interpreting</i>. Share the ideas, feelings, and stories communicated by their own and others' objects and images."
                ],
                'Year 5': [
                    "<b>Dance</b>: <i>Understanding Dance in Context</i>. Explore and describe dances from a variety of cultures.",
                    "<b>Dance</b>: <i>Developing Practical Knowledge</i>. Use the dance elements to develop and share their personal movement vocabulary.",
                    "<b>Dance</b>: <i>Developing Ideas</i>. Select and combine dance elements in response to a variety of stimuli.",
                    "<b>Dance</b>: <i>Communicating and Interpreting</i>. Prepare and share dance movement individually and in pairs or groups. Use the elements of dance to describe dance movements and respond to dances from a variety of cultures.",
                    "<b>Drama</b>: <i>Understanding Drama in Context</i>. Investigate the functions and purposes of drama in cultural and historical contexts.",
                    "<b>Drama</b>: <i>Developing Practical Knowledge</i>. Use techniques and relevant technologies to explore drama elements and conventions.",
                    "<b>Drama</b>: <i>Developing Ideas</i>. Initiate and develop ideas with others to create drama.",
                    "<b>Drama</b>: <i>Communicating and Interpreting</i>. Present and respond to drama, identifying ways in which elements, techniques, conventions, and technologies combine to create meaning in their own and others' work.",
                    "<b>Music - Sound Arts</b>: <i>Understanding Music in Context</i>. Identify and describe the characteristics of music associated with a range of sound environments, in relation to historical, social, and cultural contexts.",
                    "<b>Music - Sound Arts</b>: <i>Developing Practical Knowledge</i>. Explore and identify how sound is made and changed, as they listen and respond to music and apply knowledge of the elements of music, structural devices, and technologies.",
                    "<b>Music - Sound Arts</b>: <i>Developing Ideas</i>. Express and shape musical ideas, using musical elements, instruments, and technologies in response to sources of motivation.",
                    "<b>Music - Sound Arts</b>: <i>Communicating and Interpreting</i>. Prepare and present brief performances of music, using performance skills and techniques. Respond to and reflect on live and recorded music.",
                    "<b>Visual Arts</b>: <i>Understanding Visual Arts in Context</i>. Investigate the purpose of objects and images from past and present cultures and identify the contexts in which they were or are made, viewed, and valued.",
                    "<b>Visual Arts</b>: <i>Developing Practical Knowledge</i>. Explore some art-making conventions, applying knowledge of elements and selected principles through the use of materials and processes.",
                    "<b>Visual Arts</b>: <i>Developing Ideas</i>. Develop and revisit visual ideas, in response to a variety of motivations, observation, and imagination, supported by the study of artists' works.",
                    "<b>Visual Arts</b>: <i>Communicating and Interpreting</i>. Describe the ideas their own and others' objects and images communicate."
                ],
                'Year 7': [
                    "<b>Dance</b>: <i>Understanding Dance in Context</i>. Explore and describe how dance is used for different purposes in a variety of cultures and contexts.",
                    "<b>Dance</b>: <i>Developing Practical Knowledge</i>. Apply the dance elements to extend personal movement skills and vocabularies and to explore the vocabularies of others.",
                    "<b>Dance</b>: <i>Developing Ideas</i>. Combine and contrast the dance elements to express images, ideas, and feelings in dance, using a variety of choreographic processes.",
                    "<b>Dance</b>: <i>Communicating and Interpreting</i>. Prepare and present dance, with an awareness of the performance context. Describe and record how the purpose of selected dances is expressed through the movement.",
                    "<b>Drama</b>: <i>Understanding Drama in Context</i>. Investigate the functions, purposes, and technologies of drama in cultural and historical contexts.",
                    "<b>Drama</b>: <i>Developing Practical Knowledge</i>. Select and use techniques and relevant technologies to develop drama practice. Use conventions to structure drama.",
                    "<b>Drama</b>: <i>Developing Ideas</i>. Initiate and refine ideas with others to plan and develop drama.",
                    "<b>Drama</b>: <i>Communicating and Interpreting</i>. Present and respond to drama, identifying ways in which elements, techniques, conventions, and technologies create meaning in their own and others' work.",
                    "<b>Music - Sound Arts</b>: <i>Understanding Music in Context</i>. Apply knowledge of the elements of music, structural devices, and technologies through integrating aural, practical, and theoretical skills.",
                    "<b>Music - Sound Arts</b>: <i>Developing Ideas</i>. Express, develop, and refine musical ideas, using the elements of music, instruments, and technologies in response to sources of motivation.",
                    "<b>Music - Sound Arts</b>: <i>Communicating and Interpreting</i>. Prepare, rehearse, and present performance of music, using performance skills and techniques. Reflect on the expressive qualities of their own and others' music, both live and recorded.",
                    "<b>Visual Arts</b>: <i>Understanding Visual Arts in Context</i>. Investigate the purpose of objects and images from past and present cultures and identify the contexts in which they were or are made, viewed, and valued.",
                    "<b>Visual Arts</b>: <i>Developing Practical Knowledge</i>. Explore and use art-making conventions, applying knowledge of elements and selected principles through the use of materials and processes.",
                    "<b>Visual Arts</b>: <i>Developing Ideas</i>. Develop and revisit visual ideas, in response to a variety of motivations, observation, and imagination, supported by the study of artists' works.",
                    "<b>Visual Arts</b>: <i>Communicating and Interpreting</i>. Explore and describe ways in which meanings can be communicated and interpreted in their own and others' work."
                ],
                'Year 9': [
                    "<b>Dance</b>: <i>Understanding Dance in Context</i>. Compare and contrast dances from a variety of past and present cultures and contexts.",
                    "<b>Dance</b>: <i>Developing Practical Knowledge</i>. Develop a variety of skills, dance techniques, vocabularies, and movement practices.",
                    "<b>Dance</b>: <i>Developing Ideas</i>. Manipulate the elements and explore the use of choreographic devices and structures to organise dance movement.",
                    "<b>Dance</b>: <i>Communicating and Interpreting</i>. Prepare, rehearse, and perform dance with an awareness of production technologies. Reflect on and describe how choreography communicates ideas, feelings, moods, and experiences.",
                    "<b>Drama</b>: <i>Understanding Drama in Context</i>. Investigate the characteristics, purposes, and function of drama in a range of contexts.",
                    "<b>Drama</b>: <i>Developing Practical Knowledge</i>. Select and use techniques, conventions, and relevant technologies for specific drama purposes.",
                    "<b>Drama</b>: <i>Developing Ideas</i>. Select and refine ideas to develop drama for specific purposes.",
                    "<b>Drama</b>: <i>Communicating and Interpreting</i>. Present and respond to drama and describe how drama combines elements, techniques, conventions, and technologies to create structure and meaning in their own and others' work.",
                    "<b>Music - Sound Arts</b>: <i>Understanding Music in Context</i>. Compare and contrast the characteristics of music associated with a range of sound environments, in relation to historical, social, and cultural contexts.",
                    "<b>Music - Sound Arts</b>: <i>Developing Practical Knowledge</i>. Apply knowledge of the elements of music, structural devices, stylistic conventions, and technologies through integrating aural, practical, and theoretical skills.",
                    "<b>Music - Sound Arts</b>: <i>Developing Ideas</i>. Use musical elements, instruments, technologies, and conventions to express, develop, and refine structured compositions and improvisations.",
                    "<b>Music - Sound Arts</b>: <i>Communicating and Interpreting</i>. Prepare, rehearse, and present performances of music, using a range of performance skills and techniques. Reflect on the expressive qualities of their own and others' music, both live and recorded.",
                    "<b>Visual Arts</b>: <i>Understanding Visual Arts in Context</i>. Investigate and consider the relationship between the production of art works and their contexts and influences.",
                    "<b>Visual Arts</b>: <i>Developing Practical Knowledge</i>. Apply knowledge of selected conventions from established practice, using appropriate processes and procedures.",
                    "<b>Visual Arts</b>: <i>Developing Ideas</i>. Generate, develop, and refine ideas in response to a variety of motivations, including the study of established practice.",
                    "<b>Visual Arts</b>: <i>Communicating and Interpreting</i>. Compare and contrast the ways in which ideas and art-making processes are used to communicate meaning in selected objects and images."
                ],
                'Year 11': [
                    "<b>Dance</b>: <i>Understanding Dance in Context</i>. Explore, investigate, and describe the features and backgrounds of a variety of dance genres and styles.",
                    "<b>Dance</b>: <i>Developing Practical Knowledge</i>. Develop and demonstrate skills in selected dance genres and styles and explore the use of a variety of technologies.",
                    "<b>Dance</b>: <i>Developing Ideas</i>. Select and use choreographic devices, structures, processes, and technologies to develop and give form to dance ideas.",
                    "<b>Dance</b>: <i>Communicating and Interpreting</i>. Prepare, rehearse, and perform a range of dances and demonstrate an understanding of the performance requirements of the genres and contexts.",
                    "<b>Drama</b>: <i>Understanding Drama in Context</i>. Investigate the forms and purposes of drama in different historical or contemporary contexts, including New Zealand drama.",
                    "<b>Drama</b>: <i>Developing Practical Knowledge</i>. Select and use techniques, conventions, and technologies in a range of dramatic forms.",
                    "<b>Drama</b>: <i>Developing Ideas</i>. Research, evaluate, and refine ideas in a range of dramatic forms to develop drama.",
                    "<b>Drama</b>: <i>Communicating and Interpreting</i>. Perform and respond to drama and make critical judgments about how elements, techniques, conventions, and technologies are used to create form and meaning in their own and others' work.",
                    "<b>Music - Sound Arts</b>: <i>Understanding Music in Context</i>. Analyse music from a range of sound environments, styles, and genres, in relation to historical, social, and cultural contexts.",
                    "<b>Music - Sound Arts</b>: <i>Developing Practical Knowledge</i>. Apply knowledge of expressive features, stylistic conventions, and technologies through an integration of aural perception and practical and theoretical skills.",
                    "<b>Music - Sound Arts</b>: <i>Developing Ideas</i>. Create, structure, refine, and represent compositions using the elements of music, instruments, technologies, and conventions to express imaginative thinking and personal understandings.",
                    "<b>Music - Sound Arts</b>: <i>Communicating and Interpreting</i>. Prepare, rehearse, interpret, and present performances of music individually and collaboratively, using a range of performance skills and techniques.",
                    "<b>Visual Arts</b>: <i>Understanding Visual Arts in Context</i>. Investigate and analyse the relationship between the production of art works and the contexts in which they are made, viewed, and valued.",
                    "<b>Visual Arts</b>: <i>Developing Practical Knowledge</i>. Apply knowledge of a range of conventions from established practice, using appropriate processes and procedures.",
                    "<b>Visual Arts</b>: <i>Developing Ideas</i>. Generate, develop, and clarify ideas, showing some understanding of established practice.",
                    "<b>Visual Arts</b>: <i>Communicating and Interpreting</i>. Identify and analyse processes and procedures from established practice that influence ways of communicating meaning."
                ],
                'Year 12': [
                    "<b>Dance</b>: <i>Understanding Dance in Context</i>. Investigate and evaluate the effects of individual, social, cultural, and technological influences on the development of a variety of dance genres and styles.",
                    "<b>Dance</b>: <i>Developing Practical Knowledge</i>. Extend skills in the vocabulary, practices, and technologies of selected dance genres and styles.",
                    "<b>Dance</b>: <i>Developing Ideas</i>. Choreograph solo and group dance works, using choreographic processes, devices, structures, and technologies to communicate choreographic intentions.",
                    "<b>Dance</b>: <i>Communicating and Interpreting</i>. Apply rehearsal and performance skills to a range of dances, using appropriate techniques and expression to communicate specific intentions.",
                    "<b>Drama</b>: <i>Understanding Drama in Context</i>. Research the purposes of production, performance, and technologies of drama in a range of contexts, including New Zealand drama.",
                    "<b>Drama</b>: <i>Developing Practical Knowledge</i>. Select and refine the use of techniques, conventions, and technologies in specific dramatic forms.",
                    "<b>Drama</b>: <i>Developing Ideas</i>. Research, critically evaluate, and refine ideas to develop drama in specific dramatic forms.",
                    "<b>Drama</b>: <i>Communicating and Interpreting</i>. Rehearse and perform works in a range of dramatic forms. Respond to and make critical judgments about rehearsal processes and performances.",
                    "<b>Music - Sound Arts</b>: <i>Understanding Music in Context</i>. Research and analyse music from a range of sound environments, styles, and genres, in relation to historical, social, and cultural contexts.",
                    "<b>Music - Sound Arts</b>: <i>Developing Practical Knowledge</i>. Apply knowledge of expressive features, stylistic conventions, and technologies through an integration of aural perception and practical and theoretical skills.",
                    "<b>Music - Sound Arts</b>: <i>Developing Ideas</i>. Create, structure, refine, and represent compositions and musical arrangements, using technical and musical skills and technologies.",
                    "<b>Music - Sound Arts</b>: <i>Communicating and Interpreting</i>. Prepare, rehearse, present, record, and evaluate sustained performances of music, individually and collaboratively.",
                    "<b>Visual Arts</b>: <i>Understanding Visual Arts in Context</i>. Research and analyse the influences of contexts on the characteristics and production of art works.",
                    "<b>Visual Arts</b>: <i>Developing Practical Knowledge</i>. Apply understanding from research into a range of established practice to extend skills for particular art-making purposes.",
                    "<b>Visual Arts</b>: <i>Developing Ideas</i>. Generate, analyse, clarify, and extend ideas in a selected field related to established practice.",
                    "<b>Visual Arts</b>: <i>Communicating and Interpreting</i>. Research and analyse how art works are constructed and presented to communicate meanings."
                ],
                'Year 13': [
                    "<b>Dance</b>: <i>Understanding Dance in Context</i>. Investigate, analyse, and discuss the features, history, issues, and development of dance in New Zealand.",
                    "<b>Dance</b>: <i>Developing Practical Knowledge</i>. Extend and refine skills, practices, and use of technologies in a range of dance genres and styles.",
                    "<b>Dance</b>: <i>Developing Ideas</i>. Develop a concept and produce original dance works, using appropriate production technologies to communicate choreographic intentions.",
                    "<b>Dance</b>: <i>Communicating and Interpreting</i>. Select and apply rehearsal processes, performance skills, and production technologies to enhance the communication and expression of dance works.",
                    "<b>Drama</b>: <i>Understanding Drama in Context</i>. Research, analyse, and critically evaluate how drama, including New Zealand drama, interprets, records, or challenges social and cultural discourse.",
                    "<b>Drama</b>: <i>Developing Practical Knowledge</i>. Research, analyse, and integrate elements, techniques, conventions, and technologies in dramatic forms for specific purposes.",
                    "<b>Drama</b>: <i>Developing Ideas</i>. Research, critically evaluate, and refine ideas to create original drama work.",
                    "<b>Drama</b>: <i>Communicating and Interpreting</i>. Analyse, rehearse, and perform works in a range of dramatic forms, assuming a variety of artistic or technical responsibilities.",
                    "<b>Music - Sound Arts</b>: <i>Understanding Music in Context</i>. Research, analyse, and evaluate the production and presentation of music works from historical, social, and cultural contexts.",
                    "<b>Music - Sound Arts</b>: <i>Developing Practical Knowledge</i>. Analyse, apply, and evaluate significant expressive features and stylistic conventions and technologies in a range of music.",
                    "<b>Music - Sound Arts</b>: <i>Developing Ideas</i>. Create, structure, refine, and represent compositions and musical arrangements, using secure technical and musical skills and technologies.",
                    "<b>Music - Sound Arts</b>: <i>Communicating and Interpreting</i>. Plan, rehearse, present, record, evaluate, and refine performances of music, individually and collaboratively.",
                    "<b>Visual Arts</b>: <i>Understanding Visual Arts in Context</i>. Use research and analysis to investigate contexts, meanings, intentions, and technological influences related to the making and valuing of art works.",
                    "<b>Visual Arts</b>: <i>Developing Practical Knowledge</i>. Apply understanding from broad and deep research into the characteristics and constraints of materials, techniques, technologies, and established conventions.",
                    "<b>Visual Arts</b>: <i>Developing Ideas</i>. Generate, analyse, clarify, and regenerate options in response to selected questions or a proposal in a chosen field.",
                    "<b>Visual Arts</b>: <i>Communicating and Interpreting</i>. Research and analyse selected approaches and theories related to visual arts practice."
                ]
            }
        };

        // Most achievement levels correspond to two year levels
        subjects.forEach((subject) => {
            const evenYears = [2, 4, 6, 8, 10];
            const oddYears = [1, 3, 5, 7, 9];
            evenYears.forEach((evenYear, i) => {
                objectivesData[subject][`Year ${evenYear}`] = objectivesData[subject][`Year ${oddYears[i]}`];
            });
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