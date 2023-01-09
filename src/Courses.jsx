import { useQuery } from '@apollo/client';
import { Container, Grid, Typography } from "@mui/material";
import * as React from "react"
import CourseCard from "./CourseCard";
import CustomizedSelect from "./CustomizedSelect"
import { contentfulCoursesQuery } from './utils/contentfulQueries';

const levelOrder = {
  "Undergraduate": 1,
  "Graduate": 5,
}

const semesterOrder = {
  "Spring": 1,
  "Summer": 3,
  "Fall": 5,
}

const Courses = () => {
  const [levels, selectLevels] = React.useState([]);
  const [institutions, selectInstitutions] = React.useState([]);
  const [years, selectYears] = React.useState([]);

  const { loading, error, data } = useQuery(contentfulCoursesQuery);
  if (loading) return <></>;
  if (error) return <></>;

  const courses = data.coursesCollection.items.map(course => {
    const yearSet = new Set();
    let latestYear = undefined;
    let latestSemester = undefined;
    course.times.forEach(time => {
      const [semester, yearString] = time.split(" ");
      const year = parseInt(yearString);
      yearSet.add(year);
      if (!latestYear || year > latestYear ||
        (year === latestYear && semesterOrder[semester] > semesterOrder[latestSemester])) {
        latestYear = year;
        latestSemester = semester;
      }
    })

    return {
      ...course,
      years: [...yearSet],
      latestYear: latestYear,
      latestSemester: latestSemester,
    }
  });

  courses.sort((a, b) => b.latestYear - a.latestYear || semesterOrder[b.latestSemester] - semesterOrder[a.latestSemester]);

  const filteredCourses = courses.filter(course => (
    !levels.length || levels.includes(course.level)) &&
    (!institutions.length || institutions.includes(course.institution.name)) &&
    (!years.length || course.years.some(year => years.includes(year))));

  const allLevels = [...new Set(filteredCourses.map(course => course.level))].sort((a, b) => levelOrder[a] - levelOrder[b]);
  const allInstitutions = [...new Set(filteredCourses.map(course => course.institution.name))];

  let allYears = new Set();
  filteredCourses.forEach(course => course.years.forEach(year => allYears.add(year)));
  allYears = [...allYears].sort();

  const getOnChangeCallback = (callback) => {
    const onChangeCallback = (event) => {
      const {
        target: { value },
      } = event;
      callback(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    }
    return onChangeCallback;
  };

  return (
    <Container sx={{ pt: 5, px: 5 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>Courses</Typography>
      <div>
        <CustomizedSelect id="level" label="Level" multiple={true} allValues={allLevels} value={levels} onChange={getOnChangeCallback(selectLevels)} />
        <CustomizedSelect id="institution" label="Institution" multiple={true} allValues={allInstitutions} value={institutions} onChange={getOnChangeCallback(selectInstitutions)} />
        <CustomizedSelect id="year" label="Year" multiple={true} allValues={allYears} value={years} onChange={getOnChangeCallback(selectYears)} />
      </div>
      <Grid container spacing={2}>
        {filteredCourses.map((course, index) => <CourseCard key={index} course={course} />)}
      </Grid>
    </Container>
  )
}

export default Courses;
