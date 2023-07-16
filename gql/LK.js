import gql from 'graphql-tag'

export const GET_TEST = gql`
  query GET_TEST {
    objects {
      data {
        id
        attributes {
          UID
          Name
          Icon
        }
      }
    }
  }
`

export const ME = gql`
  query ME {
  me {
    id
    username
    FIO
  }
}

`

export const PRODUCTS_USER = gql`
  query PRODUCTS_USER($PAGE: Int, $PAGE_SIZE: Int) {
    products(pagination: { pageSize: $PAGE_SIZE, page: $PAGE }) {
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
          Img {
            data {
              attributes {
                url
                previewUrl
              }
            }
          }
          Ostatki
          Rating
        }
      }
    }
  }
`

export const CART_USER = gql`
  query CART_USER($ID: ID) {
    usersPermissionsUser(id: $ID) {
      data {
        id
        attributes {
          ... on UsersPermissionsUser {
            orders {
              data {
                id
                attributes {
                  ... on Order {
                    UID
                    Summ
                    createdAt
                    Status
                    Product {
                      ... on ComponentEdEd {
                        id
                        Val
                        product {
                          data {
                            id
                            attributes {
                              Name
                              Price
                              Img {
                                data {
                                  attributes {
                                    url
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
              }
            }
          }
        }
      }
    }
  }
`

export const ADD_CART_USER = gql`
  mutation ADD_CART_USER {
    updateUsersPermissionsUser(
      id: 1
      data: { CART: [{ __typename: "ComponentEdEd", Val: 10, product: 1 }] }
    ) {
      data {
        attributes {
          FIO
          ... on UsersPermissionsUser {
            CART {
              ... on ComponentEdEd {
                id
                Val
                product {
                  data {
                    id
                    attributes {
                      Name
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
