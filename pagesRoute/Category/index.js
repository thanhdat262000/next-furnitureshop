import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import CategoryContent from "../../containers/CategoryContent/CategoryContent";
import OpeningModal from "../../containers/OpeningModal/OpeningModal";
import { GET_ALL_PROJECT_BY_CATEGORY } from "../../redux/action";
import { loadingSelector, projectsSelector } from "../../redux/selector";
import * as api from "../../api/index";

function CategoryPage({ projects, params }) {
  const arrCategoryType = params.category.split("-");
  return (
    <div>
      <OpeningModal
        topTitle={arrCategoryType[0]}
        mainTitle={`${arrCategoryType[0]} ${arrCategoryType[1]}`}
        content="We are proud to present our work. These projects are built using latest technologies and best talents. The benefits of our methods guarantee quality for many years to come."
      />
      <CategoryContent
        serviceType={arrCategoryType[1]}
        categoryType={arrCategoryType[0]}
        projectList={projects}
      />
    </div>
  );
}

export const getStaticProps = async (context) => {
  const category = await api.getALLProjectsByCategory(context.params.category);
  return {
    props: { category },
  };
};

export default CategoryPage;
