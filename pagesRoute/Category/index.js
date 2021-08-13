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
        content="Những dự án của chúng tôi được xây dựng dựa trên các công nghệ mới nhất, hiện đạt nhất"
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
