import React from "react";

export function Icon({ d, className = "w-5 h-5", size = 20, fill = "none", stroke = "currentColor", strokeWidth = 2, viewBox = "0 0 24 24" }: {
  d: string | string[];
  className?: string;
  size?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  viewBox?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {Array.isArray(d) ? d.map((pathD, idx) => <path key={idx} d={pathD} />) : <path d={d} />}
    </svg>
  );
}

export function GlobeIcon(props: any) {
  return <Icon d={["M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z", "M2 12h20", "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"]} {...props} />;
}

export function ShoppingBagIcon(props: any) {
  return <Icon d={["M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z", "M3 6h18", "M16 10a4 4 0 0 1-8 0"]} {...props} />;
}

export function UtensilsIcon(props: any) {
  return <Icon d={["M18 2v20", "M21 2v6a3 3 0 0 1-3 3h0a3 3 0 0 1-3-3V2", "M12 2v20", "M15 2v4a3 3 0 0 1-3 3h0a3 3 0 0 1-3-3V2", "M3 2v7a4 4 0 0 0 4 4v9"]} {...props} />;
}

export function ShieldCheckIcon(props: any) {
  return <Icon d={["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", "m9 12 2 2 4-4"]} {...props} />;
}

export function TruckIcon(props: any) {
  return <Icon d={["M10 17h4V5H2v12h3", "M20 17h2v-5l-3-4h-5v9h2", "M7.5 17a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z", "M17.5 17a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"]} {...props} />;
}

export function FactoryIcon(props: any) {
  return <Icon d={["M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4H2z", "M17 18h1", "M12 18h1", "M7 18h1"]} {...props} />;
}

export function FlameIcon(props: any) {
  return <Icon d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3.5z" {...props} />;
}

export function AwardIcon(props: any) {
  return <Icon d={["M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14z", "M8.21 13.89 7 23l5-3 5 3-1.21-9.12"]} {...props} />;
}

export function ChevronRightIcon(props: any) {
  return <Icon d="m9 18 6-6-6-6" {...props} />;
}

export function SearchIcon(props: any) {
  return <Icon d={["M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z", "m21 21-4.35-4.35"]} {...props} />;
}

export function StarIcon(props: any) {
  return <Icon d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill={props.fill || "none"} {...props} />;
}

export function HeartIcon(props: any) {
  return <Icon d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" fill={props.fill || "none"} {...props} />;
}

export function PlusIcon(props: any) {
  return <Icon d={["M12 5v14", "M5 12h14"]} {...props} />;
}

export function MinusIcon(props: any) {
  return <Icon d="M5 12h14" {...props} />;
}

export function TrashIcon(props: any) {
  return <Icon d={["M3 6h18", "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"]} {...props} />;
}

export function MapPinIcon(props: any) {
  return <Icon d={["M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z", "M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"]} {...props} />;
}

export function PhoneIcon(props: any) {
  return <Icon d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" {...props} />;
}

export function MailIcon(props: any) {
  return <Icon d={["M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z", "m22 6-10 7L2 6"]} {...props} />;
}

export function ClockIcon(props: any) {
  return <Icon d={["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z", "M12 6v6l4 2"]} {...props} />;
}

export function CalendarIcon(props: any) {
  return <Icon d={["M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z", "M16 2v4", "M8 2v4", "M3 10h18"]} {...props} />;
}

export function UserIcon(props: any) {
  return <Icon d={["M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", "M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"]} {...props} />;
}

export function CheckCircleIcon(props: any) {
  return <Icon d={["M22 11.08V12a10 10 0 1 1-5.93-9.14", "m22 4-10 10.01-3-3"]} {...props} />;
}

export function XIcon(props: any) {
  return <Icon d={["M18 6 6 18", "m6 6 12 12"]} {...props} />;
}

export function MenuIcon(props: any) {
  return <Icon d={["M4 12h16", "M4 6h16", "M4 18h16"]} {...props} />;
}

export function SparklesIcon(props: any) {
  return <Icon d={["M12 3v3", "M12 18v3", "M3 12h3", "M18 12h3", "m5.6 5.6-2.1-2.1", "m5.6-5.6-2.1 2.1", "m18.4 5.6-2.1 2.1", "m18.4 18.4-2.1-2.1"]} {...props} />;
}

export function SendIcon(props: any) {
  return <Icon d={["m22 2-7 20-4-9-9-4Z", "M22 2 11 13"]} {...props} />;
}

export function LayoutDashboardIcon(props: any) {
  return <Icon d={["M3 3h7v9H3z", "M14 3h7v5h-7z", "M14 12h7v9h-7z", "M3 15h7v6H3z"]} {...props} />;
}

export function ArrowRightIcon(props: any) {
  return <Icon d={["M5 12h14", "m12 5 7 7-7 7"]} {...props} />;
}

export function FilterIcon(props: any) {
  return <Icon d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" {...props} />;
}

export function FileTextIcon(props: any) {
  return <Icon d={["M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", "M14 2v6h6", "M16 13H8", "M16 17H8", "M10 9H8"]} {...props} />;
}

export function CreditCardIcon(props: any) {
  return <Icon d={["M2 10h20", "M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6z", "M6 14h4"]} {...props} />;
}

export function SmartphoneIcon(props: any) {
  return <Icon d={["M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z", "M12 18h.01"]} {...props} />;
}

export function RefreshCwIcon(props: any) {
  return <Icon d={["M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", "M21 3v5h-5", "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", "M8 16H3v5"]} {...props} />;
}

export function MessageSquareIcon(props: any) {
  return <Icon d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" {...props} />;
}

export function PercentIcon(props: any) {
  return <Icon d={["M19 5L5 19", "M6.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z", "M17.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"]} {...props} />;
}
