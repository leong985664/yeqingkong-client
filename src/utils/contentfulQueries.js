import { gql } from "@apollo/client"

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
            contentRaw
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

const contentfulEducationQuery = gql`{
    educationCollection(order: startTime_DESC) {
        items {
            degree
            organization
            locationString
            startTime
            endTime
            logo {
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

export {
    contentfulAwardsQuery,
    contentfulBasicInfoQuery,
    contentfulBiographyQuery,
    contentfulContactsQuery,
    contentfulEducationQuery,
    contentfulSpecialtiesQuery
};
