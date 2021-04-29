import { gql } from '@apollo/client';

export const LOAD_HUB = gql`
    query {
        getHub {
            description
        }
    }
`;