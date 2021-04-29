import { gql } from '@apollo/client';

export const UPDATE_HUB = gql`
    mutation($description: String!) {
        updateHub(description: $description) {
            description
        }
    }
`;