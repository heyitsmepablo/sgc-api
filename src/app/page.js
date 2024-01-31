"use server"
import Header from "../components/Header";
import Footer from "../components/footer";
import DataTable from "../components/DataTable";
import columns from "../data-table/clients.columns";
import { MdOutlinePersonAdd } from "react-icons/md";
import { Button } from "../@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../@/components/ui/dialog"
import { Input } from "../@/components/ui/input"
import { Label } from "../@/components/ui/label"

export default async function Home() {

  let data;
  const formData = new FormData()
  async function submit(event){
    event.preventDefault();
    const name = formData.get('name')
    console.log(name)
  }

  // requisição get (já que ele esta SSR, não precisamos do user effect, já que a request é feita antes de chegar no cliente)
  try{
    data = await (await fetch('http://localhost:3000/api/user')).json()
  } catch(e){
    console.error(e)
    data = ''
  } finally{
    return (
      <main className="flex flex-col items-center justify-center w-full  h-full  ">
      <div className="flex justify-end w-full h-16 p-8 pb-28 pr-[22rem]  "> 
          <Dialog >
          <DialogTrigger asChild>
          <Button variant="outline" className="gap-2 mt-16  "> <MdOutlinePersonAdd fontSize={20} />Cadastrar Cliente </Button> 
          </DialogTrigger>
          <DialogContent  className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Novo Cadastro</DialogTitle>
              <DialogDescription>
                Preencha os dados para cadastrar um novo cliente.
              </DialogDescription>
            </DialogHeader>
            <form className="grid gap-4 py-4" method="POST" action={submit()} >
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Nome
                </Label>
                <Input
                  id="name"
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  className="col-span-3"
                  required
                  type="email"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="x" className="text-right">
                  Endereço X
                </Label>
                <Input
                  id="x"
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="y" className="text-right">
                  Endereço Y
                </Label>
                <Input
                  id="y"
                  className="col-span-3"
                  required
                />
              </div>
            </form>
            <DialogFooter>
              <Button type="submit">Cadastrar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
        <DataTable columns={columns} data={data}></DataTable>
      </main>
    );
  }

}
