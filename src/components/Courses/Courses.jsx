import { useEffect, useState } from "react";
import Course from "../Course/Course";


const Courses = ({selectedCourse}) => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    return (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-[75%]">
                {courses.map((course, idx) => <Course key={idx} 
                course={course} 
                selectedCourse={selectedCourse}
                ></Course>)}
            </div>
        );
};

export default Courses;