import { Label } from "recharts"
import { Card } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import { ScrollArea } from "./ui/scroll-area"

const TodoList = () => {
  return (
    <div>
        Calender 

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