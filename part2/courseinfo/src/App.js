import React from 'react'

const Header = (props) => {
  return(
    <>
      <h2>{props.course}</h2>
    </>
  );
}

const Part = (props) => {
  return(
    <>
      <p>{props.part} {props.exercise}</p>
    </>
  )
}

const Content = (props) => {
  return(
    <>
      {props.course.parts.map(part =>
        <Part
          key={part.id}
          part={part.name}
          exercise={part.exercises}
        />
      )}
    </>
  )
}

const Total = (props) => {
  const total = props.course.parts.reduce((sum, curr) => sum + curr.exercises, 0)

  return (
    <strong>
      <p>
        total of {total} exercises
      </p>
    </strong>
  )
}

const Course = ({ course }) => {
  if (course.parts.length === 0) {
    return (
      <div>
        <Header course={course.name} />
        <p>No parts in this course</p>
      </div>
    )
  }
  return(
    <div>
      <Header course={course.name} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const Courses = ({ courses }) => {
  return(
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course =>
        <Course
          key={course.id}
          course={course}
        />
      )}
    </div>
  )
}

function App() {
  const courses = [
    {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Courses courses={courses} />
}

export default App;
