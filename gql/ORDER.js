import gql from 'graphql-tag'

export const GET_SETTING_ORDER = gql`
  query GET_SETTING_ORDER($CABINET: [ID], $START: DateTime, $END: DateTime) {
    crmCabinets(filters: { id: { in: $CABINET } }) {
      data {
        id
        attributes {
          Name
          user_records(filters: { Time: { gte: $START, lte: $END } }) {
            data {
              attributes {
                Name
                Time
                TimeEnd
                FIO
                users_permissions_user {
                  data {
                    id
                    attributes {
                      FIO
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
export const CREATE_CLIENT_NOTE = gql`
  mutation CREATE_CLIENT_NOTE(
    $DATE: DateTime
    $DATEEND: DateTime
    $NAME: String
    $MASTER: ID
    $CABINET: ID
    $PHONE: String
    $FIO: String
    $SERVICES: [ID]
    $NOTE: String
  ) {
    createUserRecord(
      data: {
        Time: $DATE
        Name: $NAME
        TimeEnd: $DATEEND
        tovary_i_uslugis: $SERVICES
        FIO: $FIO
        Note: $NOTE
        Phone: $PHONE
        crm_cabinet: $CABINET
        users_permissions_user: $MASTER
      }
    ) {
      data {
        id
      }
    }
  }
`
