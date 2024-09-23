export const choiceQuestions = [
  { value: "gender", label: "How do you identify your gender?" },
  { value: "ethnicity", label: "What is your ethnicity?" },
  { value: "age", label: "what is your age?" },
  { value: "sexual_orientation", label: "What is your sexual orientation?" },
  { value: "drugs_used", label: "Drugs previously used on a regular basis" },
  {
    value: "attending_other_fellowships",
    label: "Attending other Twelve Step fellowships",
  },
  {
    value: "negatively_affected",
    label: "Areas of life negatively affected by drug use",
  },
  {
    value: "positively_affected",
    label: "Areas of life positively affected by recovery from drug use",
  },
  { value: "current_meeting_attendance", label: "Current meeting attendance" },
  {
    value: "felt_welcomed",
    label: "Did you feel welcomed at your first CMA meeting?",
  },
  { value: "introduction_to_cma", label: "Introduction to CMA" },
  { value: "education", label: "Level of Education" },
  { value: "employment_status", label: "Employment Status" },
  {
    value: "months_years_clean",
    label: "Months / Years drug and alcohol free",
  },
  { value: "relapse_part_of_story", label: "Is relapse part of your story?" },
  { value: "twelve_step_sponsor", label: "Twelve Step Sponsor" },
  {
    value: "currently_working_steps",
    label: "Currently working the Twelve Steps",
  },
  { value: "have_homegroup", label: "Have a CMA homegroup" },
  {
    value: "ever_been_incarcerated",
    label: "Have you ever been incarcerated?",
  },
  {
    value: "access_to_meetings_incarcerated",
    label: "Did you have access to 12 step meetings while incarcerated?",
  },
  {
    value: "residential_treatment_experience",
    label: "Have you been to a residential treatment program or rehab?",
  },
  {
    value: "cma_meetings_in_residential",
    label:
      "Were CMA meetings available to you to attend in residential treatment?",
  },
  {
    value: "dei_feelings",
    label:
      "Do you feel that CMA is a diverse, equitable, and inclusive fellowship?",
  },
];

export const dimensions = [
  { value: "ethnicity", label: "Ethnicity" },
  { value: "age", label: "Age" },
  { value: "gender", label: "Gender" },
  { value: "sexual_orientation", label: "Sexual Orientation" },
  { value: "months_years_clean", label: "Clean Time" },
  { value: "cma_region", label: "Region" },
  { value: "region", label: "State" },
];

export const freeformQuestions = [
  {
    value: "dei_freeform",
    label: "Feelings about CMA being diverse, equitable, and inclusive",
  },
  {
    value: "what_see_more",
    label: "What would you like to see more of in CMA?",
  },
];

export const allQuestions = [...choiceQuestions, ...freeformQuestions];
