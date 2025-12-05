import type React from "react";
import { Card } from "../atoms/Card";
import { Table } from "../atoms/Table";

export const TableHeader: React.FC = () => {
  return (
    <Card typeCard="content" className="pr-4 sm:pr-6 md:pr-10 min-w-full">
      <div className="overflow-x-auto">
        <Table typeTable="default">
          <Table typeTable="header" >
            <Table typeTable="row" className=" border-white/20">
              <Table typeTable="head" className="min-w-[120px] sm:min-w-[140px]">Controlador</Table>
              <Table typeTable="head" className="min-w-[100px] sm:min-w-[120px]">IP</Table>
              <Table typeTable="head" className="min-w-[120px] sm:min-w-[140px]">ChirpStack ID</Table>
              <Table typeTable="head" className="min-w-[90px] sm:min-w-[110px]">Gateways</Table>
              <Table typeTable="head" className="min-w-[80px] sm:min-w-[100px]">Apps</Table>
              <Table typeTable="head" className="min-w-[90px] sm:min-w-[110px]">Estado</Table>
              <Table typeTable="head" className="min-w-[100px] sm:min-w-[120px]">Control</Table>
            </Table>
          </Table>
        </Table>
      </div>
    </Card>
  );
};
