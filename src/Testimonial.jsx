import * as React from 'react';

import Carousel from 'react-grid-carousel';

import { useQuery } from '@apollo/client';
import {
  Card,
  CardContent,
  Chip,
  Container,
  Typography,
} from '@mui/material';

import SectionHeader from './SectionHeader';
import { contentfulTestimonialQuery } from './utils/contentfulQueries';

const Testimonial = () => {
  const { loading, error, data } = useQuery(contentfulTestimonialQuery);
  if (loading) return <></>;
  if (error) return <></>;
  const testimonial = data.testimonialCollection.items;

  return (
    <Container sx={{ pt: 5, px: 5 }}>
      <SectionHeader title="What My Students Have To Say" divider />
      <Carousel
        autoplay={5000}
        loop
        showDots
        responsiveLayout={[{ breakpoint: 800, cols: 1 }, { breakpoint: 2200, cols: 2 }]}
        containerStyle={{ margin: '0 auto' }}
      >
        {testimonial.map((review, index) => (
          <Carousel.Item key={index}>
            <Card sx={{ height: "100%", p:2, backgroundColor: "#f0f8fd" }}>
              <CardContent>
                <div style={{ display: "flex" }}>
                  <Chip label={review.semester} variant="outlined" size="small" sx={{ borderRadius: "5px", mb: 1 }}/>
                </div>
                <Typography gutterbottom variant="body2">
                  {review.comment}
                </Typography>
                <Typography variant="subtitle3" component="div" sx={{ pt: 2, pd: 0.5, textAlign: "right" }}>
                  {review.course.number + " " + review.course.name}
                </Typography>
              </CardContent>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  )
}

export default Testimonial;
