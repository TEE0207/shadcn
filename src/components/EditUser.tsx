"use client"

import { useForm } from "react-hook-form"
import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from "./ui/sheet"
import { zodResolver } from "@hookform/resolvers/zod"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
 
const formSchema = z.object({
    // The form field with it's error message handled
  username: z.string().min(2 , {message : 'Username must be at least 2 characters!'}).max(50),
  email : z.string().email({message : "Invalid email address!"}),
    phone : z.string().min(10, {message : "Invalid email address!"}).max(15),
    location : z.string().min(2),
    role : z.enum(["admin" , "user"])


})

const EditUser = () => {



    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "Lawal Taofeek",
      email : "taofeeklwl@gmail.com",
      phone : "+44 7706775601",
      location : "Edinburgh UK",
      role : "admin"
    },
  })

  return (
        
        <SheetContent>
                            <SheetHeader>
                            <SheetTitle className="mb-4">Edit User</SheetTitle>

                            <SheetDescription asChild>
                                <Form {...form}>
                                    <form className="space-y-8">
                                        <FormField control = {form.control} name = "username"  render = {({field}) => (                            
                                     <FormItem>
                                            <FormLabel>Username</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                This is your public username.
                                            </FormDescription>
                                            <FormMessage />
                                    </FormItem>
                                        
                                        
                                         )}/>

                                          <FormField control = {form.control} name = "email"  render = {({field}) => (                            
                                     <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                Only admin can see your email..
                                            </FormDescription>
                                            <FormMessage />
                                    </FormItem>
                                        
                                        
                                         )}/>

                                          <FormField control = {form.control} name = "phone"  render = {({field}) => (                            
                                     <FormItem>
                                            <FormLabel>Phone Number</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                Only admin can see your phone number.
                                            </FormDescription>
                                            <FormMessage />
                                    </FormItem>
                                        
                                        
                                         )}/>

                                           <FormField control = {form.control} name = "location"  render = {({field}) => (                            
                                     <FormItem>
                                            <FormLabel>Location</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                This is the public location
                                            </FormDescription>
                                            <FormMessage />
                                    </FormItem>
                                        
                                        
                                         )}/>

                                           <FormField control = {form.control} name = "role"  render = {({field}) => (                            
                                     <FormItem>
                                            <FormLabel>Role</FormLabel>
                                            <FormControl>
                                                {/* we import select options from shadcn */}
                                            <Select
                                             value={field.value}
                                              onValueChange={field.onChange}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Role" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="admin">Admin</SelectItem>
                                                    <SelectItem value="user">User</SelectItem>
                                                </SelectContent>
                                          </Select>

                                            </FormControl>
                                            <FormDescription>
                                                Only verified users can be admin
                                            </FormDescription>
                                            <FormMessage />
                                    </FormItem>
                                        
                                        
                                         )}/>

                                         <Button type ="submit">Submit</Button>

                                    </form>

                                </Form>
                            </SheetDescription>
                            
                            </SheetHeader>
      </SheetContent>
  )
}

export default EditUser