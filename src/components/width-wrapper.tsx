import { cn } from "@/lib/utils";
import React from "react";

const WidthWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <div className={cn("px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48", className)}>
      {children}
    </div>
  );
};

export default WidthWrapper;
