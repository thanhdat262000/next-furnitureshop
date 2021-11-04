import { useRouter } from "next/router";
import React from "react";
import CategoryPage from "../../pagesRoute/Category";
import * as api from "../../api";
import Meta from "../../components/Meta";
function Category({ projects, params }) {
  const { category } = params;
  const arrCategoryType = category.split("-");
  const serviceType = arrCategoryType[1] === "design" ? "Thiết kế" : "Thi công";
  const categoryType =
    arrCategoryType[0] === "apartment"
      ? "chung cư"
      : arrCategoryType[0] === "hotel"
      ? "khách sạn"
      : "nhà phố";
  return (
    <>
      <Meta
        title={`${serviceType} ${categoryType}`}
        description={`${serviceType} ${categoryType} hàng đầu Việt Nam`}
      />
      <CategoryPage
        projects={projects}
        serviceType={serviceType}
        categoryType={categoryType}
      />
    </>
  );
}
export const getStaticPaths = async () => {
  const res = await api.getAllCategories();
  const categories = res.data;
  const paths = categories.map((category) => ({
    params: {
      category: category.name,
    },
  }));
  return {
    paths: paths,
    fallback: "blocking",
  };
};
export const getStaticProps = async ({ params }) => {
  const res = await api.getALLProjectsByCategory(params.category);
  const projects = res.data;
  return {
    props: {
      projects,
      params,
    },
    revalidate: 60,
  };
};

export default Category;
