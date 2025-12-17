// import React from "react";
// import { Card, Tag, Button, Tooltip, Popconfirm } from "antd";
// import {
//   BookOutlined,
//   DollarOutlined,
//   RiseOutlined,
//   EditOutlined,
//   DeleteOutlined,
// } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";

// const CourseCard = ({ course, onDelete }) => {
//   const navigate = useNavigate();

//   if (!course) return null;

//   const {
//     _id,
//     title,
//     description,
//     courseImageUrl,
//     category,
//     level,
//     price,
//   } = course;

//   const handleView = () => {
//     navigate(`/admin_dashboard/courses/${_id}`);
//   };

//   const handleEdit = () => {
//     navigate(`/admin_dashboard/courses/${_id}/edit`);
//   };

//   return (
//     <div className="transition-transform duration-300 hover:-translate-y-1">
//       <Card
//         hoverable
//         className="rounded-2xl overflow-hidden shadow-md border-0 h-full"
//         cover={
//           <div className="h-48 w-full overflow-hidden">
//             <img
//               src={courseImageUrl}
//               alt={title}
//               className="h-full w-full object-cover"
//             />
//           </div>
//         }
//         actions={[
//           <Tooltip title="Edit Course" key="edit">
//             <EditOutlined
//               className="text-blue-600"
//               onClick={handleEdit}
//             />
//           </Tooltip>,

//           <Popconfirm
//             key="delete"
//             title="Delete this course?"
//             description="This action cannot be undone"
//             okText="Yes"
//             cancelText="No"
//             onConfirm={() => onDelete(_id)}
//           >
//             <Tooltip title="Delete Course">
//               <DeleteOutlined className="text-red-600" />
//             </Tooltip>
//           </Popconfirm>,
//         ]}
//       >
//         {/* Category + Level */}
//         <div className="flex justify-between mb-3">
//           <Tag color="purple" className="rounded-full px-3 py-1 text-xs">
//             {category}
//           </Tag>

//           <Tag
//             color={
//               level === "Beginner"
//                 ? "green"
//                 : level === "Intermediate"
//                 ? "blue"
//                 : "red"
//             }
//             icon={<RiseOutlined />}
//             className="rounded-full px-3 py-1 text-xs"
//           >
//             {level}
//           </Tag>
//         </div>

//         {/* Title */}
//         <h2 className="text-base font-semibold text-gray-800 truncate">
//           {title}
//         </h2>

//         {/* Description */}
//         <p className="text-sm text-gray-500 mt-1 line-clamp-2">
//           {description}
//         </p>

//         {/* Footer */}
//         <div className="flex items-center justify-between mt-4">
//           <div className="flex items-center gap-1 font-medium text-gray-700">
//             <DollarOutlined />
//             {price === 0 ? (
//               <span className="text-green-600">Free</span>
//             ) : (
//               <span>₹{price}</span>
//             )}
//           </div>

//           <Button
//             type="primary"
//             icon={<BookOutlined />}
//             className="rounded-lg bg-indigo-600 hover:bg-indigo-700"
//             onClick={handleView}
//           >
//             View
//           </Button>
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default CourseCard;



// import React from "react";
// import { Card, Tag, Button, Tooltip, Popconfirm } from "antd";
// import {
//   BookOutlined,
//   DollarOutlined,
//   RiseOutlined,
//   EditOutlined,
//   DeleteOutlined,
// } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";

// const CourseCard = ({ course, onDelete }) => {
//   const navigate = useNavigate();

//   if (!course) return null;

//   const {
//     _id,
//     title,
//     description,
//     courseImageUrl,
//     category,
//     level,
//     price,
//   } = course;

//   // const handleView = () => {
//   //   navigate(`/admin_dashboard/courses/${_id}`);
//   // };

//   const handleView = () => {
//   navigate(`/courses/${_id}`);
// };

//   const handleEdit = () => {
//     navigate(`/admin_dashboard/courses/${_id}/edit`);
//   };

//   return (
//     <div className="transition-transform duration-300 hover:-translate-y-1">
//       <Card
//         hoverable
//         className="rounded-2xl overflow-hidden shadow-md border-0 h-full"
//         cover={
//           <div className="h-48 w-full overflow-hidden">
//             <img
//               src={courseImageUrl}
//               alt={title}
//               className="h-full w-full object-cover"
//             />
//           </div>
//         }
//         actions={
//           onDelete
//             ? [
//                 <Tooltip title="Edit Course" key="edit">
//                   <EditOutlined
//                     className="text-blue-600"
//                     onClick={handleEdit}
//                   />
//                 </Tooltip>,

//                 <Popconfirm
//                   key="delete"
//                   title="Delete this course?"
//                   description="This action cannot be undone"
//                   okText="Yes"
//                   cancelText="No"
//                   onConfirm={() => onDelete(_id)}
//                 >
//                   <Tooltip title="Delete Course">
//                     <DeleteOutlined className="text-red-600" />
//                   </Tooltip>
//                 </Popconfirm>,
//               ]
//             : []
//         }
//       >
//         {/* Category + Level */}
//         <div className="flex justify-between mb-3">
//           <Tag color="purple" className="rounded-full px-3 py-1 text-xs">
//             {category}
//           </Tag>

//           <Tag
//             color={
//               level === "Beginner"
//                 ? "green"
//                 : level === "Intermediate"
//                 ? "blue"
//                 : "red"
//             }
//             icon={<RiseOutlined />}
//             className="rounded-full px-3 py-1 text-xs"
//           >
//             {level}
//           </Tag>
//         </div>

//         {/* Title */}
//         <h2 className="text-base font-semibold text-gray-800 truncate">
//           {title}
//         </h2>

//         {/* Description */}
//         <p className="text-sm text-gray-500 mt-1 line-clamp-2">
//           {description}
//         </p>

//         {/* Footer */}
//         <div className="flex items-center justify-between mt-4">
//           <div className="flex items-center gap-1 font-medium text-gray-700">
//             <DollarOutlined />
//             {price === 0 ? (
//               <span className="text-green-600">Free</span>
//             ) : (
//               <span>₹{price}</span>
//             )}
//           </div>

//           <Button
//             type="primary"
//             icon={<BookOutlined />}
//             className="rounded-lg bg-indigo-600 hover:bg-indigo-700"
//             onClick={handleView}
//           >
//             View
//           </Button>
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default CourseCard;



// import React from "react";
// import { Card, Tag, Button } from "antd";
// import {
//   BookOutlined,
//   DollarOutlined,
//   RiseOutlined,
// } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";

// const CourseCard = ({ course }) => {
//   const navigate = useNavigate();

//   if (!course) return null;

//   const {
//     _id,
//     title,
//     description,
//     courseImageUrl,
//     category,
//     level,
//     price,
//   } = course;

//   const handleView = () => {
//     navigate(`/courses/${_id}`);
//   };

//   return (
//     <div className="">
//       <Card
//         hoverable
//         className="rounded-2xl overflow-hidden border-0 h-full"
//         cover={
//           <div className="h-48 w-full overflow-hidden">
//             <img
//               src={courseImageUrl}
//               alt={title}
//               className="h-full w-full object-cover"
//             />
//           </div>
//         }
//       >
//         {/* Category + Level */}
//         <div className="flex justify-between mb-3">
//           <Tag color="purple" className="rounded-full px-3 py-1 text-xs">
//             {category}
//           </Tag>

//           <Tag
//             color={
//               level === "Beginner"
//                 ? "green"
//                 : level === "Intermediate"
//                 ? "blue"
//                 : "red"
//             }
//             icon={<RiseOutlined />}
//             className="rounded-full px-3 py-1 text-xs"
//           >
//             {level}
//           </Tag>
//         </div>

//         {/* Title */}
//         <h2 className="text-base font-semibold text-gray-800 truncate">
//           {title}
//         </h2>

//         {/* Description */}
//         <p className="text-sm text-gray-500 mt-1 line-clamp-2">
//           {description}
//         </p>

//         {/* Footer */}
//         <div className="flex items-center justify-between mt-4">
//           <div className="flex items-center gap-1 font-medium text-gray-700">
//             <DollarOutlined />
//             {price === 0 ? (
//               <span className="text-green-600">Free</span>
//             ) : (
//               <span>₹{price}</span>
//             )}
//           </div>

//           <Button
//             type="primary"
//             icon={<BookOutlined />}
//             className="rounded-lg bg-indigo-600 hover:bg-indigo-700"
//             onClick={handleView}
//           >
//             View
//           </Button>
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default CourseCard;



import React from "react";
import { Card, Tag, Button } from "antd";
import {
  BookOutlined,
  DollarOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  if (!course) return null;

  const {
    _id,
    title,
    description,
    courseImageUrl,
    category,
    level,
    price,
  } = course;

  const handleView = () => {
    navigate(`/courses/${_id}`);
  };

  return (
    <div>
      <Card
        hoverable={false}
        className="rounded-xl overflow-hidden border border-gray-200 bg-white"
        cover={
          <div className="h-48 w-full overflow-hidden">
            <img
              src={courseImageUrl}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>
        }
      >
        {/* Category + Level */}
        <div className="flex justify-between mb-3">
          <Tag color="purple" className="rounded-full px-3 py-1 text-xs">
            {category}
          </Tag>

          <Tag
            color={
              level === "Beginner"
                ? "green"
                : level === "Intermediate"
                ? "blue"
                : "red"
            }
            icon={<RiseOutlined />}
            className="rounded-full px-3 py-1 text-xs"
          >
            {level}
          </Tag>
        </div>

        {/* Title */}
        <h2 className="text-base font-semibold text-gray-800 truncate">
          {title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-1 font-medium text-gray-700">
            <DollarOutlined />
            {price === 0 ? (
              <span className="text-green-600">Free</span>
            ) : (
              <span>₹{price}</span>
            )}
          </div>

          <Button
            type="primary"
            icon={<BookOutlined />}
            className="rounded-lg bg-indigo-600 hover:bg-indigo-700"
            onClick={handleView}
          >
            View
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CourseCard;
