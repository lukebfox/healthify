import gql from "graphql-tag";

export const GOALS_QUERY = gql`
  query($username: String) {
    goals(where: { user: { username: { _eq: $username } } }) {
      allowed_fails
      amount
      decay
      fail
      id
      provider
      quantity
      type
      recurrence
      start_date
      stats {
        amount
        end_date
      }
      succ
      successful_recurrences
    }
  }
`;
