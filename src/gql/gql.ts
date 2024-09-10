/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CartAddItem($orderId: ID!, $total: Int!, $productId: ID!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, product: {connect: {id: $productId}}, order: {connect: {id: $orderId}}}\n  ) {\n    id\n  }\n}": types.CartAddItemDocument,
    "mutation CartChangeItemQuantity($quantity: Int!, $itemId: ID!) {\n  updateOrderItem(data: {quantity: $quantity}, where: {id: $itemId}) {\n    quantity\n  }\n}": types.CartChangeItemQuantityDocument,
    "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    ...Cart\n  }\n}": types.CartCreateDocument,
    "fragment Cart on Order {\n  id\n  orderItems {\n    id\n    quantity\n    total\n    ...CartOrderItemFragment\n  }\n}": types.CartFragmentDoc,
    "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    ...Cart\n  }\n}": types.CartGetByIdDocument,
    "fragment CartOrderItemFragment on OrderItem {\n  id\n  quantity\n  total\n  product {\n    id\n    name\n    description\n    price\n    slug\n    images(first: 1) {\n      height\n      width\n      url\n    }\n  }\n}": types.CartOrderItemFragmentFragmentDoc,
    "mutation CartRemoveItem($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}": types.CartRemoveItemDocument,
    "mutation CartRemoveProduct($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}": types.CartRemoveProductDocument,
    "query CategoriesGetList($query: String!) {\n  categories(where: {_search: $query}) {\n    ...Category\n  }\n}": types.CategoriesGetListDocument,
    "fragment Category on Category {\n  id\n  name\n  slug\n  image {\n    id\n    url\n  }\n}": types.CategoryFragmentDoc,
    "fragment Collection on Collection {\n  id\n  name\n  slug\n  image {\n    id\n    url\n  }\n}": types.CollectionFragmentDoc,
    "query CollectionsGetList($query: String!) {\n  collections(where: {_search: $query}) {\n    ...Collection\n  }\n}": types.CollectionsGetListDocument,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductItem\n  }\n}": types.ProductGetByIdDocument,
    "query ProductGetReviewsRating($id: ID!) {\n  reviewsConnection(where: {product: {id: $id}}) {\n    edges {\n      node {\n        rating\n      }\n    }\n    aggregate {\n      count\n    }\n  }\n}": types.ProductGetReviewsRatingDocument,
    "fragment ProductItem on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n  averageRating\n}": types.ProductItemFragmentDoc,
    "fragment ProductListItem on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n  averageRating\n}": types.ProductListItemFragmentDoc,
    "mutation ProductUpdateAverageRating($averageRating: Int!, $id: ID!) {\n  updateProduct(data: {averageRating: $averageRating}, where: {id: $id}) {\n    id\n    averageRating\n  }\n  publishProduct(to: PUBLISHED, where: {id: $id}) {\n    id\n  }\n}": types.ProductUpdateAverageRatingDocument,
    "query ProductsGetByCategorySlug($slug: String!, $productsPerPage: Int!, $offset: Int!, $query: String!) {\n  categories(where: {slug: $slug}) {\n    products(first: $productsPerPage, skip: $offset, where: {_search: $query}) {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByCollectionSlug($slug: String!, $productsPerPage: Int!, $offset: Int!, $query: String!) {\n  collections(where: {slug: $slug}) {\n    products(first: $productsPerPage, skip: $offset, where: {_search: $query}) {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCollectionSlugDocument,
    "query ProductsGetList($query: String!, $productsPerPage: Int!, $offset: Int!) {\n  products(first: $productsPerPage, skip: $offset, where: {_search: $query}) {\n    ...ProductListItem\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetTotalCount {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetTotalCountDocument,
    "query ProductsGetTotalCountByCategorySlug($slug: String!) {\n  productsConnection(where: {categories_some: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetTotalCountByCategorySlugDocument,
    "query ProductsGetTotalCountByCollectionSlug($slug: String!) {\n  productsConnection(where: {collections_some: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetTotalCountByCollectionSlugDocument,
    "mutation ReviewCreate($id: ID!, $headline: String!, $content: String!, $rating: Int!, $name: String!, $email: String!) {\n  createReview(\n    data: {headline: $headline, content: $content, rating: $rating, name: $name, email: $email, product: {connect: {id: $id}}}\n  ) {\n    id\n  }\n}": types.ReviewCreateDocument,
    "query ReviewGetByProductId($id: ID!) {\n  reviewsConnection(where: {product: {id: $id}}) {\n    edges {\n      node {\n        ...ReviewItem\n      }\n    }\n  }\n}": types.ReviewGetByProductIdDocument,
    "fragment ReviewItem on Review {\n  id\n  headline\n  content\n  rating\n  name\n  email\n}": types.ReviewItemFragmentDoc,
    "mutation ReviewPublish($id: ID!) {\n  publishReview(where: {id: $id}, to: PUBLISHED) {\n    id\n  }\n}": types.ReviewPublishDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddItem($orderId: ID!, $total: Int!, $productId: ID!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, product: {connect: {id: $productId}}, order: {connect: {id: $orderId}}}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartAddItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartChangeItemQuantity($quantity: Int!, $itemId: ID!) {\n  updateOrderItem(data: {quantity: $quantity}, where: {id: $itemId}) {\n    quantity\n  }\n}"): typeof import('./graphql').CartChangeItemQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Cart on Order {\n  id\n  orderItems {\n    id\n    quantity\n    total\n    ...CartOrderItemFragment\n  }\n}"): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CartOrderItemFragment on OrderItem {\n  id\n  quantity\n  total\n  product {\n    id\n    name\n    description\n    price\n    slug\n    images(first: 1) {\n      height\n      width\n      url\n    }\n  }\n}"): typeof import('./graphql').CartOrderItemFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveItem($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveProduct($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList($query: String!) {\n  categories(where: {_search: $query}) {\n    ...Category\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Category on Category {\n  id\n  name\n  slug\n  image {\n    id\n    url\n  }\n}"): typeof import('./graphql').CategoryFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Collection on Collection {\n  id\n  name\n  slug\n  image {\n    id\n    url\n  }\n}"): typeof import('./graphql').CollectionFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList($query: String!) {\n  collections(where: {_search: $query}) {\n    ...Collection\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductItem\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetReviewsRating($id: ID!) {\n  reviewsConnection(where: {product: {id: $id}}) {\n    edges {\n      node {\n        rating\n      }\n    }\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductGetReviewsRatingDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductItem on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n  averageRating\n}"): typeof import('./graphql').ProductItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n  averageRating\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ProductUpdateAverageRating($averageRating: Int!, $id: ID!) {\n  updateProduct(data: {averageRating: $averageRating}, where: {id: $id}) {\n    id\n    averageRating\n  }\n  publishProduct(to: PUBLISHED, where: {id: $id}) {\n    id\n  }\n}"): typeof import('./graphql').ProductUpdateAverageRatingDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!, $productsPerPage: Int!, $offset: Int!, $query: String!) {\n  categories(where: {slug: $slug}) {\n    products(first: $productsPerPage, skip: $offset, where: {_search: $query}) {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCollectionSlug($slug: String!, $productsPerPage: Int!, $offset: Int!, $query: String!) {\n  collections(where: {slug: $slug}) {\n    products(first: $productsPerPage, skip: $offset, where: {_search: $query}) {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($query: String!, $productsPerPage: Int!, $offset: Int!) {\n  products(first: $productsPerPage, skip: $offset, where: {_search: $query}) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetTotalCount {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetTotalCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetTotalCountByCategorySlug($slug: String!) {\n  productsConnection(where: {categories_some: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetTotalCountByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetTotalCountByCollectionSlug($slug: String!) {\n  productsConnection(where: {collections_some: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetTotalCountByCollectionSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewCreate($id: ID!, $headline: String!, $content: String!, $rating: Int!, $name: String!, $email: String!) {\n  createReview(\n    data: {headline: $headline, content: $content, rating: $rating, name: $name, email: $email, product: {connect: {id: $id}}}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').ReviewCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ReviewGetByProductId($id: ID!) {\n  reviewsConnection(where: {product: {id: $id}}) {\n    edges {\n      node {\n        ...ReviewItem\n      }\n    }\n  }\n}"): typeof import('./graphql').ReviewGetByProductIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ReviewItem on Review {\n  id\n  headline\n  content\n  rating\n  name\n  email\n}"): typeof import('./graphql').ReviewItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewPublish($id: ID!) {\n  publishReview(where: {id: $id}, to: PUBLISHED) {\n    id\n  }\n}"): typeof import('./graphql').ReviewPublishDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
