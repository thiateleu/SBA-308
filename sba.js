///////////////// Declare course information.////////////////////
const CourseInfo = {
    id: 1,
    name: "JavaScript"
  };
  console.log(CourseInfo);

  //////////Declare assignment group..///////////////
  const AssignmentGroup = {
    id: 1,
    name: "Homework",
    course_id: 1,
    group_weight: 30,
    assignments: [
      {
        id: 1,
        name: "Assignment 1",
        due_at: "2024-07-09",
        points_possible: 100
      },
      {
        id: 2,
        name: "Assignment 2",
        due_at: "2024-07-10",
        points_possible: 150
      },
      {
        id: 3,
        name: "Assignment 3",
        due_at: "2024-07-11",
        points_possible: 200
      }
    ]
  };
  console.log(AssignmentGroup);

  //////////Declare learner submission data///////////////
  const LearnerSubmissions = [
    {
      learner_id: 1,
      assignment_id: 1,
      submission: {
        submitted_at: "2024-07-07",
        score: 50
      }
    },
    {
      learner_id: 1,
      assignment_id: 2,
      submission: {
        submitted_at: "2024-07-07",
        score: 140
      }
    },
    {
      learner_id: 2,
      assignment_id: 1,
      submission: {
        submitted_at: "2024-07-07",
        score: 60
      }
    },
    {
      learner_id: 2,
      assignment_id: 2,
      submission: {
        submitted_at: "2024-07-07",
        score: 100
      }
    },
  ];
  console.log(LearnerSubmissions);

//////////define the function for repeated tasks////////
  function getLearnerData(course, ag, submissions) {
    
    let result = [];

    for ( let  submission of submissions) {
      const learnerId = submission.learner_id;
      const score = submission.submission.score;

      ////calculate weight score///////////////
      const weightScore = score * (ag.group_weight/ 100);

      ///////the condition if is true//////////
      let conditionN1 = score >= 50;
      let conditionN2 = score >= 70;

      let valueN1 = 0;
      if (conditionN1){
        valueN1 = 0.5;
      }
      let valueN2 = 0;
      if (conditionN1){
        valueN2 = 0.7;
        for (let i= 0; i < 70; i++ ) {
          if ( i === 50) {
            break;
          }
        }
      }
      ///////////add learner data for result//////////////
      result.push({

      id: learnerId,
      avg: weightScore,
      1:  valueN1,
      2: valueN2,
    });
  }
  return result;
}
try {
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

  console.log(result);

} catch (error) {
  console.error("an error happened", error);
}


//////////////////  Reflection /////////////////
///// 1- What could you have done differently during the planning stages of your project to make the execution easier?
// I went to  all lessions for this module, work with my classmates, review all the my code for this module, and be to the office hours.


////////// 2 -  Were there any requirements that were difficult to implement? What do you think would make them easier to implement in future projects?
// break 
//////// 3 - What would you add to, or change about your application if given more time?
//the function
//////// 4 - Use this space to make notes for your future self about anything that you think is important to remember about this process, or that may aid you when attempting something similar again:
//work with my classmates and ask questions.