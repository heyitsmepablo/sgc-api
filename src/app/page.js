import Header from "../components/Header";
import Footer from "../components/footer";
import DataTable from "../components/DataTable";
import columns from "../data-table/clients.columns";
import { MdOutlinePersonAdd } from "react-icons/md";
import { Button } from "../@/components/ui/button";

export default function Home() {
  const data = [
    {
      id: 1,
      nome: "Pablo Eduardo Silva Santos",
      email: "p@p",
      x: "1",
      y: "2",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center w-full h-full  ">
      <div className="flex justify-end w-full h-16 p-8 pb-28"> <Button variant="outline" className="gap-2 mr-80"> <MdOutlinePersonAdd fontSize={20} />Cadastrar Cliente </Button> </div>
      <DataTable columns={columns} data={data}></DataTable>
    </main>
  );
}
