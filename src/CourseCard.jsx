import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Chip, Grid, Stack, Typography } from "@mui/material";
import * as React from "react"

const CourseCard = (props) => {
  const { course } = props;

  const syllabusUrl = course.syllabusUrl ?? course.syllabus?.url ?? null;
  const assignmentUrl = course.assignmentUrl ?? course.assignment?.url ?? null;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ p: 1 }}>
        <CardMedia
          component="img"
          height="150"
          alt={course.picture.fileName}
          image={course.picture.url}
        />
        <CardHeader
          avatar={
            <Avatar
              sx={{ width: 40, height: 40, backgroundColor: "transparent" }}>
              <img alt={course.institution.name} src={course.institution.logo.url} style={{ width: "100%", heigth: "auto" }} />
            </Avatar>
          }
          title={
            <div style={{ display: "flex" }}>
              <Typography variant="subtitle2">
                {course.number}
              </Typography>
              <Chip
                label={course.level}
                color={course.level.toLowerCase()}
                size="small"
                sx={{ m: "auto 0 auto auto", borderRadius: "5px", textTransform: "capitalize" }}
                />
            </div>
          }
          subheader={course.name}
          subheaderTypographyProps={{ variant: "h6", color: "text.primary" }}
          sx={{ pb: 1 }}
        />
        <CardContent sx={{ pt: 0 }}>
          <Stack direction="row" spacing={0.5} sx={{ mb: 2 }}>
            {course.times.map((time) => {
              return (
                <Chip key={time} label={time} variant="outlined" size="small" />
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

export default CourseCard;
