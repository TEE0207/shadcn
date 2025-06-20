"use client"
import { useState } from "react"
import { Card } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { ScrollArea } from "./ui/scroll-area"
import { Button } from "./ui/button"
import {  Calendar1 } from "lucide-react"
import { Calendar } from "./ui/calendar" // This should be a real date picker
import { format } from "date-fns"

const TodoList = () => {

    const [date , setDate] = useState<Date | undefined>(new Date())
    const [open , setOpen] = useState(false)


  return (
    <div>
        <h1 className="text-lg font-medium mb-6">Todo List</h1>

       <Popover open ={open} onOpenChange = {setOpen} >
            <PopoverTrigger asChild>
                
                <Button className="w-full">
                    <Calendar1 />
                    {date ? format(date, "ppp") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>


            <PopoverContent>
                
            <Calendar
                mode="single"
                selected={date}
                onSelect ={(date) =>{
                    setDate(date)
                    setOpen(false)
                }}
                className="rounded-lg border"
            />

            </PopoverContent>

        </Popover>

        {/* LIST */}

        <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
           {/* LIST ITEM */}

           <div className="flex flex-col gap-4">


           

           <Card className="p-4">
                <div className="flex items-center gap-4">
                    {/* checked means it should be checked by default */}
                    <Checkbox id= "item1" checked/>
                    <label htmlFor="item1" className="text-sm text-muted-foreground"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </label>
                </div>
           </Card>
           <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id= "item1" />
                    <label htmlFor="item1" className="text-sm text-muted-foreground"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </label>
                </div>
           </Card>
           <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id= "item1" />
                    <label htmlFor="item1" className="text-sm text-muted-foreground"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </label>
                </div>
           </Card>
           <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id= "item1" checked/>
                    <label htmlFor="item1" className="text-sm text-muted-foreground"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </label>
                </div>
           </Card>
           <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id= "item1" checked/>
                    <label htmlFor="item1" className="text-sm text-muted-foreground"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </label>
                </div>
           </Card>
           <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id= "item1" checked/>
                    <label htmlFor="item1" className="text-sm text-muted-foreground"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </label>
                </div>
           </Card>
           <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id= "item1" checked/>
                    <label htmlFor="item1" className="text-sm text-muted-foreground"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </label>
                </div>
           </Card>
           <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id= "item1" checked/>
                    <label htmlFor="item1" className="text-sm text-muted-foreground"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </label>
                </div>
           </Card>
           <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id= "item1" checked/>
                    <label htmlFor="item1" className="text-sm text-muted-foreground"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </label>
                </div>
           </Card>
           <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id= "item1" />
                    <label htmlFor="item1" className="text-sm text-muted-foreground"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </label>
                </div>
           </Card>
           <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id= "item1" checked/>
                    <label htmlFor="item1" className="text-sm text-muted-foreground"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </label>
                </div>
           </Card>
           <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id= "item1" checked/>
                    <label htmlFor="item1" className="text-sm text-muted-foreground"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </label>
                </div>
           </Card>
           <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id= "item1" />
                    <label htmlFor="item1" className="text-sm text-muted-foreground"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </label>
                </div>
           </Card>
          
        </div>
        </ScrollArea>
    
    </div>
  )
}

export default TodoList