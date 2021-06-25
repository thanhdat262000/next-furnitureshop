import React from "react";
import * as api from "../../api/index";
import CategoryContent from "../../containers/CategoryContent/CategoryContent";
import OpeningModal from "../../containers/OpeningModal/OpeningModal";

function CategoryPage({ projects, categoryType, serviceType }) {
  return (
    <div>
      <OpeningModal
        topTitle={categoryType}
        mainTitle={`${serviceType} ${categoryType}`}
        content="We are proud to present our work. These projects are built using latest technologies and best talents. The benefits of our methods guarantee quality for many years to come."
      />
      <CategoryContent
        serviceType={serviceType}
        categoryType={categoryType}
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
