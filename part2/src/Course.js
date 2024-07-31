const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => {
        const totalExercises = course.parts.reduce(
          (acc, part) => acc + part.exercises,
          0
        );
        return (
          <div key={course.id}>
            <h1>{course.name}</h1>

            {course.parts.map((part) => (
              <p key={part.id}>
                {part.name} {part.exercises}
              </p>
            ))}
            <p>total exercises: {totalExercises}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Course;
