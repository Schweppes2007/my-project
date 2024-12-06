import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState([
    { name: "Work", isDone: false },
    { name: "Work", isDone: false },
    { name: "Work", isDone: false },
    { name: "Work", isDone: false },
    { name: "Work", isDone: false },
    { name: "Work", isDone: false },
    { name: "Work", isDone: false },
    { name: "bts", isDone: true},
    { name: "test11", isDone: false},
  ]);
  return (
    <div>
      <div className="bg-green-500 text-white p-5 text-3xl font-bold">
        Todo list
      </div>
      <div className="box-border h-20 w-screen px-16 py-10">
        <h1 className="">Search</h1>
        <div className="flex flex-row justify-between">
          <Input
            placeholder="Searching..."
            className="border-solid border-2 rounded-md border-green-300 text-gray-400 w-60"
          ></Input>
          <Dialog>
            <DialogTrigger>
              <button className="box-border rounded-md px-6 py-2 bg-green-500 text-white hover:bg-green-600 transition">
                Add new
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add new</DialogTitle>Name
                <Input />
                <DialogDescription className="text-black">
                  Description
                  <Textarea />{" "}
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="">Date</Label>
                    <Input type="date" id="date" placeholder="date" />
                  </div>
                  <div className="flex gap-1 py-2">
                    {" "}
                    <Label htmlFor="Done">Done</Label>
                    <Checkbox id="Done" />
                  </div>
                  <Button className="bg-green-500 flex px-56">Save</Button>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="h-screen w-screen px-16 py-16">
        <div className="grid grid-cols-5 gap-8">
          {/* {Array.from({ length: 9 }).map((_, i) => { */}
          {list.map((li, i) => {
            return (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-500">{li.name}</CardTitle>
                    <CardDescription>TTM Issue #114</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Done
                      <Checkbox checked={li.isDone} />
                    </p>
                  </CardContent>
                  <CardFooter>
                    <p>March 12,2024</p>
                  </CardFooter>
                </Card>
              </>
            );
          })}
        </div>
        <div className="p-5"></div>
        <button className="box-border rounded-md px-6 py-2 bg-green-500 text-white hover:bg-green-600 transition">
          Submit
        </button>
      </div>
    </div>
  );
}
