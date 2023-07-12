import gql from 'graphql-tag'

export const ALL_SERVICES = gql`
  query ALL_SERVICES {
    products(
      filters: { Type: { eq: true } }
      pagination: { limit: 1000 }
      sort: "Position:asc"
    ) {
      meta {
        pagination {
          total
        }
      }
      data {
        id
        attributes {
          Name
          Price
          Active
          Unit
          UnitValue
          crm_cabinets{
            data{
              id
              attributes{
                Name
              }
            }
          }
          group {
            data {
              attributes {
                Name
              }
            }
          }
          Programm {
            id
            Name
          }
          ComponentsProgramm {
            id
            Name
          }
          Img {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`
export const ID_SERVICE = gql`
  query ID_SERVICE($ID: ID) {
    product(id: $ID) {
      data {
        id
        attributes {
          Name
          Price
          Active
          Unit
          UnitValue
          Programm {
            id
            Name
          }
          ComponentsProgramm {
            id
            Name
          }
          Img {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`

export const ALL_MASTERS = gql`
  query ALL_MASTERS {
    usersPermissionsUsers(
      filters: { role: { description: { eq: "Master" } } }
    ) {
      data {
        id
        attributes {
          FIO
          Speciality
          role {
            data {
              attributes {
                description
              }
            }
          }
        }
      }
    }
  }
`
