import React from "react";


const PageBreadcrumb = ({ page }) => {
  return (
    <nav className="text-sm font-medium text-gray-500 mb-4">
        Home
      <span className="mx-2">/</span>
      <span>{page}</span>
    </nav>
  );
};

export default PageBreadcrumb;
