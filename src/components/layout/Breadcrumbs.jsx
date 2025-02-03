import { Breadcrumbs } from "@material-tailwind/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
 
const BreadcrumbsWithIcon = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment !== ''); // Split path and remove empty segments

  const breadcrumbItems = [{ label: 'Home', path: '/' }, ...pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join('/')}`; // Construct path for each segment
    return { label: segment, path };
  })];

  return (
    <Breadcrumbs className="bg-transparent">
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={index}>
          {index === 0 ? ( // Home link with icon
            <Link to={"/dashboard"} className="opacity-60 text-gray-600 hover:text-[#1B786F]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </Link>
          ) : (
            item.label !== "dashboard" &&
              <Link to={item.path} className={index === breadcrumbItems.length - 1 ? "text-md text-gray-600 hover:text-[#1B786F]" : "opacity-60 text-gray-600 hover:text-[#1B786F]"}>
                <span>{item.label.charAt(0).toUpperCase() + item.label.slice(1)}</span>
              </Link>
            
          )}
          {/* {index < breadcrumbItems.length - 1 && <span className="mx-1">/</span>} Add separator except for the last item */}
          
          {/* <span className="pl-4 text-base font-bold ">{item.label.charAt(0).toUpperCase() + item.label.slice(1)}</span> */}
        </React.Fragment>
        
      ))}
    </Breadcrumbs>
  );
}

export default BreadcrumbsWithIcon;