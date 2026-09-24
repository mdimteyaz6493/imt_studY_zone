const hrInterviewQuestions = [
  {
    question: "Tell me about yourself. What is the best approach to answer this question?",
    options: [
      "Share your complete personal history",
      "Give a concise summary of your education, relevant skills, projects, and career goals",
      "Talk only about your hobbies",
      "Say that everything is already mentioned in the resume"
    ],
    correctAnswer: 1,
    explanation:
      "A good introduction should briefly cover your education, relevant skills, experience or projects, and what kind of role you are looking for.",
    difficulty: "Easy",
    topic: "Introduction"
  },

  {
    question: "Why do you want to work for our company?",
    options: [
      "Because I need any job",
      "Because the company is close to my home",
      "Connect your interests and skills with the company's role, work, or products",
      "Because your competitors are hiring"
    ],
    correctAnswer: 2,
    explanation:
      "A strong answer connects your career goals and skills with the company's work and the position you are applying for.",
    difficulty: "Easy",
    topic: "Company Fit"
  },

  {
    question: "Why should we hire you?",
    options: [
      "Because I am better than everyone else",
      "Because I have relevant skills, willingness to learn, and can contribute to the role",
      "Because I urgently need money",
      "Because I have no other option"
    ],
    correctAnswer: 1,
    explanation:
      "Focus on relevant skills, projects, strengths, learning ability, and how you can contribute to the position.",
    difficulty: "Easy",
    topic: "Self Introduction"
  },

  {
    question: "What are your greatest strengths?",
    options: [
      "Mention relevant strengths and support them with examples",
      "Say that you have no weaknesses",
      "List every positive adjective you know",
      "Mention strengths unrelated to the job only"
    ],
    correctAnswer: 0,
    explanation:
      "A strong answer identifies job-relevant strengths and provides examples showing how you have demonstrated them.",
    difficulty: "Easy",
    topic: "Strengths"
  },

  {
    question: "How should you answer a question about your weakness?",
    options: [
      "Say you have no weaknesses",
      "Mention a genuine professional weakness and explain how you are working to improve it",
      "Blame your previous teachers",
      "Give a weakness that makes you unable to perform the job"
    ],
    correctAnswer: 1,
    explanation:
      "A good answer demonstrates self-awareness and shows that you are taking practical steps to improve.",
    difficulty: "Easy",
    topic: "Weaknesses"
  },

  {
    question: "Where do you see yourself in five years?",
    options: [
      "I have no idea",
      "Describe realistic professional growth related to your career direction",
      "I will definitely be the CEO",
      "I will leave the company immediately"
    ],
    correctAnswer: 1,
    explanation:
      "Discuss realistic career development, increasing responsibilities, and skills you want to build.",
    difficulty: "Easy",
    topic: "Career Goals"
  },

  {
    question: "Why did you choose your field of study?",
    options: [
      "Because someone forced me",
      "Explain your genuine interest and how the field connects to your career goals",
      "Because it was the easiest option",
      "I don't remember"
    ],
    correctAnswer: 1,
    explanation:
      "Explain your interest in the field and how your education prepared you for your desired career.",
    difficulty: "Easy",
    topic: "Education"
  },

  {
    question: "How do you handle pressure at work?",
    options: [
      "Ignore the work until the pressure disappears",
      "Prioritize tasks, stay organized, and focus on one important task at a time",
      "Blame teammates",
      "Stop communicating with everyone"
    ],
    correctAnswer: 1,
    explanation:
      "Managing priorities, breaking work into tasks, communicating clearly, and staying organized are useful ways to handle pressure.",
    difficulty: "Easy",
    topic: "Work Under Pressure"
  },

  {
    question: "How do you prioritize multiple tasks?",
    options: [
      "Work randomly",
      "Prioritize based on urgency, importance, deadlines, and business impact",
      "Always do the easiest task first",
      "Wait for someone else to decide"
    ],
    correctAnswer: 1,
    explanation:
      "Task priority should consider deadlines, urgency, importance, dependencies, and impact.",
    difficulty: "Easy",
    topic: "Time Management"
  },

  {
    question: "What would you do if you made a mistake at work?",
    options: [
      "Hide it",
      "Blame someone else",
      "Acknowledge it, understand the cause, fix it, and learn from it",
      "Ignore it"
    ],
    correctAnswer: 2,
    explanation:
      "Taking responsibility, correcting the mistake, and learning from it demonstrates professionalism.",
    difficulty: "Easy",
    topic: "Accountability"
  },

  {
    question: "How do you handle constructive criticism?",
    options: [
      "Take it personally and argue",
      "Listen carefully, understand the feedback, and use it to improve",
      "Ignore all feedback",
      "Immediately quit the job"
    ],
    correctAnswer: 1,
    explanation:
      "Constructive feedback can help identify areas for improvement. Listen objectively and take practical action.",
    difficulty: "Easy",
    topic: "Feedback"
  },

  {
    question: "How do you handle conflict with a teammate?",
    options: [
      "Avoid the teammate permanently",
      "Discuss the issue professionally and focus on finding a solution",
      "Complain about them to everyone",
      "Stop working on the project"
    ],
    correctAnswer: 1,
    explanation:
      "Professional communication and focusing on facts and solutions can help resolve workplace conflicts.",
    difficulty: "Easy",
    topic: "Teamwork"
  },

  {
    question: "What would you do if you disagreed with your manager?",
    options: [
      "Argue publicly",
      "Respectfully explain your perspective and listen to the manager's reasoning",
      "Ignore the manager",
      "Complain to colleagues"
    ],
    correctAnswer: 1,
    explanation:
      "Professional disagreement should involve respectful communication, evidence where appropriate, and willingness to understand the other perspective.",
    difficulty: "Medium",
    topic: "Workplace Communication"
  },

  {
    question: "What does teamwork mean to you?",
    options: [
      "Doing everything yourself",
      "Working collaboratively toward a common goal while communicating and supporting team members",
      "Avoiding responsibility",
      "Only following instructions"
    ],
    correctAnswer: 1,
    explanation:
      "Teamwork involves collaboration, communication, shared responsibility, and working toward a common objective.",
    difficulty: "Easy",
    topic: "Teamwork"
  },

  {
    question: "What would you do if a teammate was not completing their work?",
    options: [
      "Immediately insult them",
      "Understand the situation, communicate with them, and escalate appropriately if necessary",
      "Do nothing forever",
      "Publicly criticize them"
    ],
    correctAnswer: 1,
    explanation:
      "First understand the situation and communicate professionally. If the problem continues and affects the project, follow the appropriate escalation process.",
    difficulty: "Medium",
    topic: "Teamwork"
  },

  {
    question: "How do you handle tight deadlines?",
    options: [
      "Panic and stop working",
      "Break the work into priorities, focus on critical tasks, and communicate risks early",
      "Ignore the deadline",
      "Wait until the last minute"
    ],
    correctAnswer: 1,
    explanation:
      "Effective deadline management involves prioritization, planning, focused execution, and early communication of risks.",
    difficulty: "Easy",
    topic: "Time Management"
  },

  {
    question: "What motivates you at work?",
    options: [
      "Learning, solving problems, achieving meaningful goals, and improving skills",
      "Avoiding all responsibility",
      "Doing the minimum possible",
      "Only receiving compliments"
    ],
    correctAnswer: 0,
    explanation:
      "A professional answer can highlight learning, meaningful challenges, achievement, growth, and contribution.",
    difficulty: "Easy",
    topic: "Motivation"
  },

  {
    question: "What type of work environment do you prefer?",
    options: [
      "An environment with no communication",
      "A professional environment with collaboration, learning, and clear expectations",
      "An environment where deadlines do not exist",
      "An environment where nobody gives feedback"
    ],
    correctAnswer: 1,
    explanation:
      "A balanced answer can mention collaboration, learning opportunities, professionalism, communication, and clear goals.",
    difficulty: "Easy",
    topic: "Work Environment"
  },

  {
    question: "Are you comfortable working in a team?",
    options: [
      "No, I never communicate",
      "Yes, I can collaborate while also taking responsibility for my own work",
      "Only when I get all the credit",
      "Only if nobody reviews my work"
    ],
    correctAnswer: 1,
    explanation:
      "Effective teamwork requires collaboration while maintaining individual accountability.",
    difficulty: "Easy",
    topic: "Teamwork"
  },

  {
    question: "Are you comfortable working independently?",
    options: [
      "No, I need someone to tell me every step",
      "Yes, I can manage tasks independently while asking for clarification when needed",
      "I never ask questions",
      "I prefer not to take responsibility"
    ],
    correctAnswer: 1,
    explanation:
      "Good employees can work independently while communicating when clarification, support, or decisions are needed.",
    difficulty: "Easy",
    topic: "Independence"
  },

  {
    question: "What would you do if you did not know how to complete a task?",
    options: [
      "Pretend that you know",
      "Research, try to understand the problem, and ask for help when necessary",
      "Ignore the task",
      "Blame the manager"
    ],
    correctAnswer: 1,
    explanation:
      "A professional approach is to research first, make a reasonable attempt, and seek guidance when necessary.",
    difficulty: "Easy",
    topic: "Problem Solving"
  },

  {
    question: "How do you learn a new technology?",
    options: [
      "Wait for someone else to teach everything",
      "Study documentation, follow tutorials, practice, and build small projects",
      "Avoid new technology",
      "Only memorize definitions"
    ],
    correctAnswer: 1,
    explanation:
      "Combining documentation, structured learning, hands-on practice, and projects is an effective way to learn technology.",
    difficulty: "Easy",
    topic: "Learning"
  },

  {
    question: "How do you stay updated with developments in your field?",
    options: [
      "Never learn after graduation",
      "Follow documentation, courses, communities, articles, and practical projects",
      "Only ask friends",
      "Avoid industry updates"
    ],
    correctAnswer: 1,
    explanation:
      "Continuous learning through reliable resources, communities, courses, documentation, and hands-on practice helps maintain relevant skills.",
    difficulty: "Easy",
    topic: "Learning"
  },

  {
    question: "Why should an employer care about your projects?",
    options: [
      "Projects can demonstrate practical application of your skills",
      "Projects automatically guarantee a job",
      "Projects are more important than everything else",
      "Projects eliminate the need for communication"
    ],
    correctAnswer: 0,
    explanation:
      "Projects can provide evidence of practical skills, problem-solving ability, initiative, and familiarity with relevant tools.",
    difficulty: "Easy",
    topic: "Projects"
  },

  {
    question: "How should you explain a project during an interview?",
    options: [
      "Only mention the project name",
      "Explain the problem, your role, technologies used, important challenges, and outcome",
      "Read the entire source code",
      "Avoid discussing challenges"
    ],
    correctAnswer: 1,
    explanation:
      "A structured project explanation should cover the problem, solution, role, technologies, challenges, and results.",
    difficulty: "Easy",
    topic: "Projects"
  },

  {
    question: "What is the STAR method commonly used for?",
    options: [
      "Answering behavioral interview questions in a structured way",
      "Writing SQL queries",
      "Creating resumes automatically",
      "Testing software"
    ],
    correctAnswer: 0,
    explanation:
      "STAR stands for Situation, Task, Action, and Result and provides a structure for answering behavioral questions.",
    difficulty: "Easy",
    topic: "STAR Method"
  },

  {
    question: "In the STAR method, what does S stand for?",
    options: [
      "Solution",
      "Situation",
      "Skill",
      "Summary"
    ],
    correctAnswer: 1,
    explanation:
      "S stands for Situation, which describes the context of the example.",
    difficulty: "Easy",
    topic: "STAR Method"
  },

  {
    question: "In the STAR method, what does T stand for?",
    options: [
      "Technology",
      "Task",
      "Team",
      "Target"
    ],
    correctAnswer: 1,
    explanation:
      "T stands for Task, describing the responsibility or objective you had in the situation.",
    difficulty: "Easy",
    topic: "STAR Method"
  },

  {
    question: "In the STAR method, what does A stand for?",
    options: [
      "Action",
      "Achievement",
      "Analysis",
      "Approach"
    ],
    correctAnswer: 0,
    explanation:
      "A stands for Action and describes the specific steps you personally took.",
    difficulty: "Easy",
    topic: "STAR Method"
  },

  {
    question: "In the STAR method, what does R stand for?",
    options: [
      "Review",
      "Result",
      "Responsibility",
      "Reason"
    ],
    correctAnswer: 1,
    explanation:
      "R stands for Result and describes the outcome of your actions.",
    difficulty: "Easy",
    topic: "STAR Method"
  },

  {
    question: "How should you answer 'Why are you leaving your current job?'",
    options: [
      "Criticize your manager",
      "Focus on professional growth and the opportunities you are seeking",
      "Complain about every coworker",
      "Say negative things about the company"
    ],
    correctAnswer: 1,
    explanation:
      "Keep the answer professional and focus on career growth, new challenges, learning, or alignment with your goals.",
    difficulty: "Easy",
    topic: "Career Change"
  },

  {
    question: "How should a fresher answer questions about lack of work experience?",
    options: [
      "Say there is nothing to discuss",
      "Highlight education, projects, skills, practical learning, and willingness to learn",
      "Invent previous jobs",
      "Avoid answering"
    ],
    correctAnswer: 1,
    explanation:
      "Freshers can demonstrate readiness through academic work, personal projects, certifications, practical skills, and learning ability.",
    difficulty: "Easy",
    topic: "Freshers"
  },

  {
    question: "What should you do if you do not know the answer to an interview question?",
    options: [
      "Invent an answer confidently",
      "Be honest, explain what you know, and show willingness to learn",
      "Leave the interview",
      "Blame the interviewer"
    ],
    correctAnswer: 1,
    explanation:
      "Honesty combined with a willingness to learn is better than providing misleading or fabricated information.",
    difficulty: "Easy",
    topic: "Interview Behavior"
  },

  {
    question: "Should you ask questions at the end of an interview?",
    options: [
      "No, never",
      "Yes, asking relevant questions can demonstrate preparation and interest",
      "Only ask about salary",
      "Only ask when the interviewer insists"
    ],
    correctAnswer: 1,
    explanation:
      "Relevant questions about the role, team, expectations, or learning opportunities can make the conversation more informative for both sides.",
    difficulty: "Easy",
    topic: "Interview Behavior"
  },

  {
    question: "Which is an appropriate question to ask an interviewer?",
    options: [
      "What are the key responsibilities of this role?",
      "Can I avoid all responsibilities?",
      "How can I get promoted tomorrow?",
      "Can I leave whenever I want?"
    ],
    correctAnswer: 0,
    explanation:
      "Questions about role responsibilities, team structure, expectations, and success criteria are generally useful interview questions.",
    difficulty: "Easy",
    topic: "Questions for Interviewer"
  },

  {
    question: "What should you research before a job interview?",
    options: [
      "Only the interviewer's personal life",
      "The company, role, products or services, and relevant industry information",
      "Nothing",
      "Only the office location"
    ],
    correctAnswer: 1,
    explanation:
      "Researching the company, position, products or services, and relevant industry context helps you prepare meaningful answers.",
    difficulty: "Easy",
    topic: "Interview Preparation"
  },

  {
    question: "Why is punctuality important in an interview?",
    options: [
      "It can demonstrate respect for the interviewer's time and professional responsibility",
      "It guarantees selection",
      "It replaces technical skills",
      "It eliminates all interview questions"
    ],
    correctAnswer: 0,
    explanation:
      "Being punctual demonstrates consideration for others' time and professional preparation, although it does not guarantee a job offer.",
    difficulty: "Easy",
    topic: "Professionalism"
  },

  {
    question: "What is professional communication?",
    options: [
      "Communicating clearly, respectfully, and appropriately for the situation",
      "Using complicated words all the time",
      "Speaking as quickly as possible",
      "Avoiding all questions"
    ],
    correctAnswer: 0,
    explanation:
      "Professional communication is clear, respectful, concise, and appropriate for the audience and situation.",
    difficulty: "Easy",
    topic: "Communication"
  },

  {
    question: "How can you demonstrate confidence during an interview?",
    options: [
      "Speak clearly, maintain appropriate eye contact, and support answers with examples",
      "Interrupt the interviewer",
      "Pretend to know everything",
      "Speak continuously without listening"
    ],
    correctAnswer: 0,
    explanation:
      "Confidence can be demonstrated through clear communication, attentive listening, appropriate body language, and honest examples.",
    difficulty: "Easy",
    topic: "Confidence"
  },

  {
    question: "What is active listening?",
    options: [
      "Waiting silently for your turn to speak",
      "Paying attention, understanding the question, and responding appropriately",
      "Interrupting frequently",
      "Preparing an answer without listening"
    ],
    correctAnswer: 1,
    explanation:
      "Active listening involves paying attention to the speaker, understanding the message, and responding thoughtfully.",
    difficulty: "Easy",
    topic: "Communication"
  },

  {
    question: "What should you do if you need clarification about an interview question?",
    options: [
      "Guess immediately",
      "Politely ask the interviewer to clarify the question",
      "Ignore the question",
      "Change the subject"
    ],
    correctAnswer: 1,
    explanation:
      "Politely asking for clarification is appropriate when a question is unclear.",
    difficulty: "Easy",
    topic: "Communication"
  },

  {
    question: "How should you discuss salary expectations?",
    options: [
      "Give an unrealistic number without research",
      "Provide a reasonable range based on the role, skills, market context, and your expectations",
      "Refuse to discuss it under any circumstances",
      "Insult the employer's budget"
    ],
    correctAnswer: 1,
    explanation:
      "Salary expectations should be reasonable and informed by the role, skills, experience, location, and relevant market information.",
    difficulty: "Medium",
    topic: "Salary"
  },

  {
    question: "What should you avoid doing during an interview?",
    options: [
      "Listening carefully",
      "Giving relevant examples",
      "Speaking negatively about previous employers or colleagues",
      "Asking relevant questions"
    ],
    correctAnswer: 2,
    explanation:
      "Professional interviews generally call for respectful communication. Avoid unnecessary negative comments about previous employers or colleagues.",
    difficulty: "Easy",
    topic: "Interview Behavior"
  },

  {
    question: "How should you respond when asked about a difficult project?",
    options: [
      "Say that you never face challenges",
      "Explain the challenge, your approach, actions taken, and outcome",
      "Only describe what went wrong",
      "Blame other team members"
    ],
    correctAnswer: 1,
    explanation:
      "Use a structured example that explains the challenge, your actions, problem-solving approach, and result.",
    difficulty: "Medium",
    topic: "Behavioral Questions"
  },

  {
    question: "What does adaptability mean in the workplace?",
    options: [
      "Refusing to change",
      "Being able to adjust to new situations, tools, priorities, or requirements",
      "Changing jobs frequently",
      "Avoiding new responsibilities"
    ],
    correctAnswer: 1,
    explanation:
      "Adaptability means responding effectively when circumstances, requirements, technologies, or priorities change.",
    difficulty: "Easy",
    topic: "Adaptability"
  },

  {
    question: "What does ownership mean at work?",
    options: [
      "Taking responsibility for assigned work and its outcomes",
      "Doing everyone else's work",
      "Avoiding accountability",
      "Taking credit for others' work"
    ],
    correctAnswer: 0,
    explanation:
      "Ownership means taking responsibility for your work, following through on commitments, and addressing problems proactively.",
    difficulty: "Easy",
    topic: "Ownership"
  },

  {
    question: "What is a professional way to respond to a missed deadline?",
    options: [
      "Hide the issue",
      "Explain the reason, communicate the impact, and provide a realistic recovery plan",
      "Blame everyone else",
      "Ignore the deadline"
    ],
    correctAnswer: 1,
    explanation:
      "Professional accountability involves communicating the issue, explaining relevant causes, and proposing a practical plan to complete the work.",
    difficulty: "Medium",
    topic: "Accountability"
  },

  {
    question: "What is work-life balance?",
    options: [
      "Never working overtime",
      "Managing professional responsibilities while maintaining reasonable personal well-being and commitments",
      "Working all the time",
      "Avoiding responsibility"
    ],
    correctAnswer: 1,
    explanation:
      "Work-life balance involves managing professional responsibilities while maintaining sustainable personal commitments and well-being.",
    difficulty: "Easy",
    topic: "Work Culture"
  },

  {
    question: "What is the best way to discuss a gap in your resume?",
    options: [
      "Invent a job",
      "Be honest about the period and explain productive activities such as learning, projects, education, or personal responsibilities when relevant",
      "Avoid the question completely",
      "Blame the company"
    ],
    correctAnswer: 1,
    explanation:
      "Be truthful and concise. If applicable, explain how you used the period for education, projects, skill development, or other relevant activities.",
    difficulty: "Medium",
    topic: "Resume Gap"
  },

  {
    question: "What is the purpose of behavioral interview questions?",
    options: [
      "To understand how a candidate has handled real situations in the past",
      "To test only programming syntax",
      "To calculate salary",
      "To check typing speed"
    ],
    correctAnswer: 0,
    explanation:
      "Behavioral questions explore past experiences to understand how candidates approach situations such as conflict, teamwork, challenges, and problem-solving.",
    difficulty: "Easy",
    topic: "Behavioral Interviews"
  },

  {
    question: "Which approach is generally useful for answering behavioral interview questions?",
    options: [
      "STAR method",
      "Random storytelling",
      "One-word answers",
      "Reading the resume word for word"
    ],
    correctAnswer: 0,
    explanation:
      "The STAR method provides a structured way to explain the situation, task, action, and result.",
    difficulty: "Easy",
    topic: "Behavioral Interviews"
  },

  {
    question: "What should you do after an interview?",
    options: [
      "Immediately forget everything",
      "Reflect on the interview and, when appropriate, send a professional follow-up message",
      "Contact the interviewer repeatedly",
      "Post confidential interview details publicly"
    ],
    correctAnswer: 1,
    explanation:
      "Reflecting on the interview can help improve future performance. A concise professional follow-up can also be appropriate.",
    difficulty: "Easy",
    topic: "Post Interview"
  },

  {
    question: "What is the most important principle when answering HR interview questions?",
    options: [
      "Give answers you think the interviewer wants, even if they are false",
      "Be honest, relevant, professional, and support important claims with examples",
      "Speak as much as possible",
      "Avoid discussing weaknesses or challenges"
    ],
    correctAnswer: 1,
    explanation:
      "Strong HR interview answers should be honest, relevant to the role, professionally communicated, and supported by genuine examples where appropriate.",
    difficulty: "Easy",
    topic: "Interview Strategy"
  }
];

module.exports = hrInterviewQuestions;