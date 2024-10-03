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
    <Card color="transparent" shadow={false} placeholder={""} onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
      <CardBody
        className="grid justify-start"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <div className="mb-4 grid h-12 w-12 place-content-center rounded-lg bg-green-900 p-2.5 text-left text-white">
          <Icon className="h-6 w-6" />
        </div>
        <Typography
          variant="h5"
          color="white"
          className="mb-2"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {title}
        </Typography>
        <Typography
          className="font-normal !text-white"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default FeatureCard;
