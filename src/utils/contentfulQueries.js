import { gql } from '@apollo/client';

const contentfulAwardsQuery = gql`{
    honorsAwardsCollection(order: startTime_DESC) {
        items {
            name
            amount
            startTime
            endTime
            logo {
                url
            }
        }
    }
}`;

const contentfulBasicInfoQuery = gql`{
    basicInfoCollection(limit: 1) {
        items {
            name
            jobTitle
            avatar {
                url
            }
        }
    }
}`;

const contentfulBiographyQuery = gql`{
    biographyCollection(limit: 1) {
        items {
            content {
                json
            }
            cv {
                url
            }
        }
    }
}`;

const contentfulContactsQuery = gql`{
    contactCollection(order: sys_publishedAt_ASC) {
        items {
            name
            url
            logo {
                url
            }
        }
    }
}`;

const contentfulCoursesQuery = gql`{
    coursesCollection(order: sys_firstPublishedAt_ASC) {
        items {
            name
            number
            level
            type
            institution {
                 name
                logo {
                    fileName
                    url
                }
            }
            times
            description
            picture {
                fileName
                url
            }
            syllabus {
                url
            }
            assignment {
                url
            }
            syllabusUrl
            assignmentUrl
        }
    }
}`;

const contentfulCVQuery = gql`{
    biographyCollection(limit: 1) {
        items {
            cv {
                url
            }
        }
    }
}`;

const contentfulEducationQuery = gql`{
    educationCollection(order: startTime_DESC) {
        items {
            degree
            institution {
                name
                locationString
                logo {
                    url
                }
            }
            startTime
            endTime
        }
    }
}`;

const contentfulPublicationsQuery = gql`{
    publicationsCollection(order: time_DESC) {
        items {
            title
            status
            type
            time
            authorsCollection {
                items {
                    firstName
                    lastName
                }
            }
            journal
            url
            slides {
                url
            }
            videoUrl
        }
    }
}`;

const contentfulResearchInterestsQuery = gql`{
    researchInterestCollection(order: sys_publishedVersion_ASC) {
        items {
            name
            description
            picture {
                url
            }
        }
    }
}`;

const contentfulSpecialtiesQuery = gql`{
    specialtiesCollection(limit: 1) {
        items {
            specialties
        }
    }
}`;

const contentfulTeachingInterestsQuery = gql`{
    teachingInterestsCollection(limit: 1) {
        items {
            interests
        }
    }
}`;

const contentfulTestimonialQuery = gql`{
    testimonialCollection {
        items {
            comment
            course {
                name
                number
            }
            semester
        }
    }
}`;

export {
  contentfulAwardsQuery,
  contentfulBasicInfoQuery,
  contentfulBiographyQuery,
  contentfulContactsQuery,
  contentfulCoursesQuery,
  contentfulCVQuery,
  contentfulEducationQuery,
  contentfulPublicationsQuery,
  contentfulResearchInterestsQuery,
  contentfulSpecialtiesQuery,
  contentfulTeachingInterestsQuery,
  contentfulTestimonialQuery,
};
