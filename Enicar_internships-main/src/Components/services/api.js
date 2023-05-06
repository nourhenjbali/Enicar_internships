import axios from "axios";

const URL = "http://localhost:8080";

export const editCourses = async (id, courses) => {
    return await axios.put(`${URL}/api/Admin/Edit_course/${id}`, courses);
  };
  
  export const getCourseid = async (id) => {
    return await axios.get(`${URL}/api/Admin/Courses/${id}`);
  };
  
  export const deleteCourses = async (id) => {
    return await axios.delete(`${URL}/api/Admin/delete_course/${id}`);
  };

  export const createCourses = async (data) => {
    try {
      return await axios.post(`${URL}/api/Admin/add_courses`, data);
    } catch (error) {
      console.log("error while calling add doctor Api", error);
    }
  };
  