export type Mentor = {
  name: string;
  role: string;
  position: string;
  expertise: string[];
  mentoring: string;
  projects: number[];
  lead?: string;
  website?: string;
};

export const mentors: Mentor[] = [
  {
    name: 'Dr. Yong Chen',
    role: 'PI & Research Mentor',
    position: 'Professor and Chair; Director, Data-Intensive Scalable Computing Laboratory (DISCL)',
    website: 'https://www.myweb.ttu.edu/yonchen/',
    expertise: [
      'Data-intensive computing',
      'Parallel and distributed computing',
      'High-performance computing',
      'Cloud computing',
      'Computer architectures',
    ],
    mentoring:
      'Mentored 50+ undergraduates through REUs, independent studies, summer research, and HPC projects. Students have advanced to graduate study and research careers and coauthored peer-reviewed publications.',
    projects: [1, 2, 3, 4],
    lead: 'Overall leadership and oversight of all aspects of the REU Site.',
  },
  {
    name: 'Dr. Maaz Amjad',
    role: 'Co-PI & Research Mentor',
    position: 'Assistant Professor of Practice',
    website: 'https://maazamjad.com/',
    expertise: ['Artificial intelligence', 'Natural language processing', 'Responsible AI'],
    mentoring:
      'Mentored 12+ undergraduates in ML, NLP, responsible AI, and software development. Students have coauthored publications at ACL, ACM, and in journals.',
    projects: [7, 8],
    lead: 'Coordinates program logistics and student recruitment.',
  },
  {
    name: 'Dr. Susan Mengel',
    role: 'Research Mentor (Senior Personnel)',
    position: 'Associate Professor; Undergraduate Program Coordinator',
    website: 'https://www.depts.ttu.edu/cs/faculty/susan_a._mengel/index.php',
    expertise: ['Information retrieval', 'Security and assurance', 'CS education'],
    mentoring:
      'Mentored undergraduate and graduate researchers. Two recent honors students presented their research at the TTU Undergraduate Research Conference.',
    projects: [5, 6],
    lead: 'Co-leads HPC training activities; serves as a role model for women in computing.',
  },
  {
    name: 'Dr. Tara Salman',
    role: 'Research Mentor (Senior Personnel)',
    position: 'Assistant Professor; Director, DisAPP Lab',
    website: 'https://sites.google.com/view/tsalman/home',
    expertise: ['Security and privacy in distributed AI systems', 'Secure distributed AI'],
    mentoring:
      'Mentored 5+ undergraduates through McNair, Honors, international REU, and independent studies. Students have pursued graduate study, presented research, and coauthored publications.',
    projects: [9],
    lead: 'Serves as a role model for women in computing.',
  },
  {
    name: 'Dr. Jie Li',
    role: 'Research Mentor (Senior Personnel)',
    position: 'Research Assistant Professor',
    website: 'https://lijie.me/',
    expertise: [
      'High-performance computing',
      'Systems security',
      'AI infrastructure',
      'System monitoring',
      'Cyber-defense',
      'Hardware–software co-design',
    ],
    mentoring:
      'Mentored three undergraduate and five graduate researchers in HPC. Student work includes a master’s student-led first-author publication at IEEE CLOUD.',
    projects: [1, 2, 3, 4],
    lead: 'Co-leads HPC training activities.',
  },
];

export type Week = {
  week: number;
  activities: { code: string; name: string; description: string; kind: ActivityKind }[];
};

export type ActivityKind = 'training' | 'research' | 'mentoring' | 'community' | 'cultural' | 'assessment' | 'dissemination';

export const activityKindLabels: Record<ActivityKind, string> = {
  training: 'Training & seminars',
  research: 'Research & development',
  mentoring: 'Mentoring & feedback',
  community: 'Community building',
  cultural: 'Cultural activities',
  assessment: 'Assessment & evaluation',
  dissemination: 'Dissemination',
};

export const timetable: Week[] = [
  {
    week: 1,
    activities: [
      { code: 'A1.1', name: 'Program Orientation', description: 'Introduction to the program, mentors, resources, expectations, and schedule.', kind: 'training' },
      { code: 'A1.2', name: 'Pre-Program Survey', description: 'Students participate in pre-program survey evaluations with the CRA CERP team.', kind: 'assessment' },
      { code: 'A1.3', name: 'Research Methods I', description: 'Seminar on research methodologies, impacts, and literature review.', kind: 'training' },
      { code: 'A1.4', name: 'Research Problems', description: 'Mentors introduce available projects and meet with students.', kind: 'mentoring' },
      { code: 'A1.5', name: 'Project Selection', description: 'Students pair with mentors, finalize research problems, set goals.', kind: 'mentoring' },
      { code: 'A1.6', name: 'Team-Building', description: 'A one-day activity at the Texas Tech Recreational Sports Center. Students also connect with other students and all mentors on LinkedIn and Discord.', kind: 'community' },
    ],
  },
  {
    week: 2,
    activities: [
      { code: 'A2.1', name: 'Ethical Conduct', description: 'Seminar on research integrity, authorship, and data management.', kind: 'training' },
      { code: 'A2.2', name: 'Initial Research', description: 'Participants begin data preparation, and implementation/theoretical analysis.', kind: 'research' },
      { code: 'A2.3', name: 'Team-Building Picnic', description: 'A local picnic for participants, mentors, and graduate students to strengthen trust, teamwork, and sense of belonging and community.', kind: 'community' },
    ],
  },
  {
    week: 3,
    activities: [
      { code: 'A3.1', name: 'Mentor Seminar I', description: 'A mentor presents their research area, methods, challenges, and applications.', kind: 'training' },
      { code: 'A3.2', name: 'R&D', description: 'Participants continue research and development, meet their mentors, present their progress, preliminary findings, and challenges.', kind: 'research' },
      { code: 'A3.3', name: 'Mentoring Meeting', description: 'Mentors meet students, review progress, and provide feedback.', kind: 'mentoring' },
      { code: 'A3.4', name: 'Cultural Activity I', description: 'Mentors and students visit the Museum of Texas Tech University (free of charge).', kind: 'cultural' },
    ],
  },
  {
    week: 4,
    activities: [
      { code: 'A4.1', name: 'Research Methods II', description: 'Seminar on data analysis, interpretation, evaluation, and presentation of results.', kind: 'training' },
      { code: 'A4.2', name: 'R&D', description: 'Participants continue research and development, meet their mentors, present their progress, preliminary findings, and challenges.', kind: 'research' },
      { code: 'A4.3', name: 'Mentoring Meeting', description: 'Mentors meet students, review progress, and provide feedback.', kind: 'mentoring' },
      { code: 'A4.4', name: 'Cultural Activity II', description: 'Mentors and students visit the American Windmill Museum ($10 per person).', kind: 'cultural' },
    ],
  },
  {
    week: 5,
    activities: [
      { code: 'A5.1', name: 'Mentor Seminar II', description: 'A mentor presents their research area, methods, challenges, and applications.', kind: 'training' },
      { code: 'A5.2', name: 'R&D', description: 'Participants continue research and development, meet their mentors, present their progress, preliminary findings, and challenges.', kind: 'research' },
      { code: 'A5.3', name: 'Mid-Program Review and Feedback', description: 'Students present their work and receive mentor feedback for project refinement. Mid-program survey evaluations are conducted with the CRA CERP team.', kind: 'assessment' },
    ],
  },
  {
    week: 6,
    activities: [
      { code: 'A6.1', name: 'Student Professional Development Seminar', description: 'Seminar on communication, teamwork, networking, and professional skills and how to explain research to diverse audiences.', kind: 'training' },
      { code: 'A6.2', name: 'R&D', description: 'Participants continue research and development, meet their mentors, present their progress, preliminary findings, and challenges.', kind: 'research' },
      { code: 'A6.3', name: 'Cultural Activity III', description: 'Mentors and students visit the National Ranching Heritage Center (free of charge).', kind: 'cultural' },
    ],
  },
  {
    week: 7,
    activities: [
      { code: 'A7.1', name: 'Mentor Seminar III', description: 'A mentor presents their research area, methods, challenges, and applications.', kind: 'training' },
      { code: 'A7.2', name: 'Research Evaluation', description: 'Students present their progress, experimental results, or theoretical findings.', kind: 'assessment' },
      { code: 'A7.3', name: 'Peer Discussion', description: 'Students share progress and exchange feedback across different research teams.', kind: 'community' },
      { code: 'A7.4', name: 'Cultural Activity IV', description: 'Mentors and students visit the Buddy Holly Center ($10 per person).', kind: 'cultural' },
    ],
  },
  {
    week: 8,
    activities: [
      { code: 'A8.1', name: 'Mentor Seminar IV', description: 'A mentor presents advanced topics and future research opportunities.', kind: 'training' },
      { code: 'A8.2', name: 'Graduate School Seminar', description: 'A seminar on the graduate school application process, how to find research advisers, funding, and how to be successful in graduate school.', kind: 'training' },
      { code: 'A8.3', name: 'Research Report Preparation', description: 'Students present initial research reports and receive mentor feedback on how to write academic research papers.', kind: 'dissemination' },
    ],
  },
  {
    week: 9,
    activities: [
      { code: 'A9.1', name: 'Mentor Seminar V', description: 'A mentor connects the REU experience to future research and career pathways.', kind: 'training' },
      { code: 'A9.2', name: 'Research Progress', description: 'Students meet mentors and present complete experiments, analyses, and major project components.', kind: 'research' },
      { code: 'A9.3', name: 'Report Review', description: 'Mentors review draft reports, posters, and presentations and provide feedback.', kind: 'mentoring' },
    ],
  },
  {
    week: 10,
    activities: [
      { code: 'A10.1', name: 'Public Oral and Poster Presentations', description: 'Students present their research findings during a full-day conference with both oral and poster presentations. College faculty and staff are invited to attend.', kind: 'dissemination' },
      { code: 'A10.2', name: 'Final Deliverables', description: 'Students submit reports, posters, code, data, and project materials.', kind: 'dissemination' },
      { code: 'A10.3', name: 'Assessment and Future Engagement', description: 'Students complete program exit survey evaluations and develop plans for continued engagement, e.g., paper submissions, conference attendance.', kind: 'assessment' },
    ],
  },
];

export type RubricRow = {
  criterion: string;
  evidence: string;
  meets: string;
  exceeds: string;
  weight: number;
};

export const rubric: RubricRow[] = [
  {
    criterion: 'Academic Preparation',
    evidence: 'Transcript; relevant coursework',
    meets: 'Demonstrates preparation appropriate for the proposed research.',
    exceeds: 'Demonstrates advanced preparation closely aligned with the proposed research.',
    weight: 20,
  },
  {
    criterion: 'Research Motivation',
    evidence: 'Research statement',
    meets: 'Clearly explains research interests and goals for participating in the REU.',
    exceeds: 'Connects research interests and experiences with future academic or career goals.',
    weight: 20,
  },
  {
    criterion: 'Research Potential',
    evidence: 'Resume; two recommendation letters',
    meets: 'Demonstrates curiosity, persistence, problem solving, and readiness to learn.',
    exceeds: 'Provides strong evidence of initiative, independent learning, creativity, or sustained problem solving.',
    weight: 25,
  },
  {
    criterion: 'Project Fit',
    evidence: 'Project preferences; coursework',
    meets: 'Interests and preparation align with at least one REU project.',
    exceeds: 'Interests, preparation, and goals align closely with one or more REU projects.',
    weight: 20,
  },
  {
    criterion: 'Growth & Contribution',
    evidence: 'Application responses',
    meets: 'Explains how the REU can support growth and how the student can contribute to the cohort.',
    exceeds: 'Articulates clear potential for growth while bringing valuable perspectives, skills, or experiences.',
    weight: 15,
  },
];
