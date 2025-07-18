import { createContext, useState } from "react";

export const CourseCountContext = createContext({
    totalCourse: 0,
    setTotalCourse: () => { },
});

export const CourseCountProvider = ({ children }) => {
    const [totalCourse, setTotalCourse] = useState(0);

    return (
        <CourseCountContext.Provider value={{ totalCourse, setTotalCourse }}>
            {children}
        </CourseCountContext.Provider>
    );
};
