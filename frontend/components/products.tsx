import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import styled from 'styled-components'
import Product from './product'

const Products = () => {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY)

  if (loading) return <p>loading..</p>
  if (loading) return <p>error: {error.message}</p>

  return (
    <ProductsList>
      {data.allProducts.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </ProductsList>
  )
}

const ProductsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
`

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {
    allProducts(first: $first, skip: $skip) {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`

export default Products
