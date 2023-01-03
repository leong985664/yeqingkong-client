import { useQuery } from '@apollo/client';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import * as React from "react"
import { contentfulCoursesQuery } from './utils/contentfulQueries';

const Courses = () => {
  const { loading, error, data } = useQuery(contentfulCoursesQuery);
  if (loading) return <></>;
  if (error) return <></>;
  const courses = data.coursesCollection.items;

  const renderCourseCard = (course, index) => {
    const syllabusUrl = course.syllabusUrl ?? course.syllabus?.url ?? null;
    const assignmentUrl = course.assignmentUrl ?? course.assignment?.url ?? null;

    return (
      <Grid item key={index} xs={12} sm={6} md={4}>
        <Card sx={{ height: 500 }}>
          <CardMedia
            component="img"
            height="150"
            alt={course.picture.fileName}
            image={course.picture.url}
          />
          <CardHeader
            avatar={
              <Avatar
                alt={course.logo.fileName}
                src={course.logo.url}
                sx={{ width: 40, height: 40 }}
              />
            }
            title={
              <div style={{ display: "flex" }}>
                <Typography variant="subtitle2">
                  {course.number}
                </Typography>
                <Chip
                  label={course.type}
                  color={course.type.toLowerCase()}
                  size="small"
                  sx={{ m: "auto 0 auto auto", borderRadius: "5px", fontWeight: "600px", textTransform: "capitalize" }}
                  />
              </div>
            }
            subheader={course.name}
            subheaderTypographyProps={{ variant: "h6", color: "text.primary" , sx: { fontWeight: "600" } }}
          />
          <CardContent sx={{ pt: 0 }}>
            <Stack direction="row" spacing={0.5} sx={{ mb: 2 }}>
              {course.time.split(" & ").map((time, index) => {
                return (
                  <Chip label={time} key={time} variant="outlined" size="small" />
                )
              })}
            </Stack>
            <Typography variant="body2" color="text.secondary">
              {course.description}
            </Typography>
          </CardContent>
          <CardActions>
            {syllabusUrl && <Button target="_blank" href={syllabusUrl} color="secondary" size="small">Syllabus</Button>}
            {assignmentUrl && <Button target="_blank" href={assignmentUrl} color="secondary" size="small">Assignment</Button>}
          </CardActions>
        </Card>
      </Grid>
    )
  }

  return (
    <Container sx={{ pt: 5, px: 5 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>Courses</Typography>
      <Grid container spacing={2}>
        {courses.map((course, index) => {
          return renderCourseCard(course, index)
        })}
      </Grid>
    </Container>
  )
}

export default Courses;
