import React from 'react'

const Header = (props) => {
  return(
    <>
      <h1>{props.course}</h1>
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
      <Part part={props.course.parts[0].name} exercise={props.course.parts[0].exercises} />
      <Part part={props.course.parts[1].name} exercise={props.course.parts[1].exercises} />
      <Part part={props.course.parts[2].name} exercise={props.course.parts[2].exercises} />
    </>
  )
}

const Total = (props) => (
  <>
    <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
  </>
)

const Course = ({ course }) => {
  return(
    <div>
      <Header course={course.name} />
      <Content course={course} />
    </div>
  )
}

function App() {
  const course = {
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
      }
    ]
  }

  return <Course course={course} />
  
  // return (
  //   <div>
  //     <Header course={course.name}/>

  //     <Content course={course} />

  //     <Total course={course} />

  //   </div>
  // );
}

export default App;
