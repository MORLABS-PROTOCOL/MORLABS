// import React from "react";
// import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

// interface TestimonialCardProps {
//   img: string;
//   feedback: string;
//   client: string;
//   title: string;
// }

// export const TestimonialCard = ({
//   img,
//   feedback,
//   client,
//   title,
// }: TestimonialCardProps) => {
//   return (
//     <Card shadow={false} className="items-center text-center" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
//       <CardBody placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
//         <Avatar src={img} className="mb-3" alt={client} size="lg" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }} />
//         <Typography variant="h6" color="blue-gray" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
//           {client}
//         </Typography>
//         <Typography variant="small" className="mb-3 font-medium !text-gray-700" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
//           {title}
//         </Typography>
//         <Typography
//           variant="paragraph"
//           className="mb-5 font-normal !text-gray-500"
//           placeholder=""
//           onPointerEnterCapture={() => { }}
//           onPointerLeaveCapture={() => { }}
//         >
//           &quot;{feedback}&quot;
//         </Typography>
//       </CardBody>
//     </Card>
//   );
// }

import {
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

// Ensure to add necessary props for the Card component as per its definition
export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
  return (
    <div className="card bg-transparent w-96">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>{title}</p>
        <div className="card-actions justify-end">
          Dandy Joshua, CEO, SophNex Solutions
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>

  );
}

export default FeatureCard;