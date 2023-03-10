import React from 'react'
import { useParams } from 'react-router-dom';
import useAxios from '../../app/hooks/useAxios';
import { useQueryParams } from '../../app/hooks/useQueryParam';
import CategoryProductList from './CategoryProductList'
import PaginationComponent from './Pagination';
import Sort from './Sort';

const CategoryProduct = () => {
  const { categoryName } = useParams();
  const {value: page, updateParam: updatePage} = useQueryParams("page");
  const {value: sort, updateParam: updateSort} = useQueryParams("sort");
    const { data } = useAxios(`/products/categories/${categoryName}?page=${page}&size=3&sort=${sort}`);
  return (
    <div>
      <PaginationComponent  totalPages={data.totalPages} page={+page} changePage={updatePage}/>
      
      <Sort  sort={sort} changePage={updatePage} changeSort={updateSort}/>
      <CategoryProductList data ={data} />
    </div>
  )
}

export default CategoryProduct