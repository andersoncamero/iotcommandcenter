import type React from "react";

interface TableProps {
  children: React.ReactNode;
  className?: string;
  typeTable: "default" | "row" | "header" | "body" | "footer" | "head" | "cell";
}

export const Table: React.FC<TableProps> = ({
  children,
  className = "",
  typeTable,
}) => {
  const ComponentMap = {
    default: "table",
    header: "thead",
    body: "tbody",
    footer: "tfoot",
    row: "tr",
    head: "th",
    cell: "td",
  } as const;

  const Tag = ComponentMap[typeTable];

  const styles = {
    default: "w-full caption-bottom text-sm",
    row: "border-b transition-colors",
    header: "[&_tr]:border-b bg-slate-50/50",
    body: "[&_tr:last-child]:border-0",
    footer: "border-t font-medium last:border-b-0",
    head: "h-12 px-4 text-center align-middle font-medium",
    cell: "p-4 align-middle",
  };

  return <Tag className={`${styles[typeTable]} ${className}`}>{children}</Tag>;
};
