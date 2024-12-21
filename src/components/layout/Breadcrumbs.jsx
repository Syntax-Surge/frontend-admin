import { Breadcrumbs } from "@material-tailwind/react";
 
const BreadcrumbsWithIcon = () => {
  return (
    <div>
        <Breadcrumbs className="bg-transparent ">
            <a href="#" className="opacity-60 text-gray-600 hover:text-[#1B786F]">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
            </a>
            <a href="#" className="opacity-60 text-gray-600 hover:text-[#1B786F]">
                <span>Components</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-[#1B786F]">Breadcrumbs</a>
        </Breadcrumbs>
        <span className="pl-4 text-base font-bold ">Components</span>
    </div>
  );
}

export default BreadcrumbsWithIcon;