"use client"

import { DollarSign, LogOut, Moon, Settings, Sun, User } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"
import { useTheme } from "next-themes"
import { SidebarTrigger} from "./ui/sidebar"

const Navbar = () => {

    const {setTheme} = useTheme()
    // const {toggleSidebar} = useSidebar()

    return(
        <nav className="p-4 flex items-center justify-between sticky top-0 bg-background z-10"> 

        {/* LEFT */}
        {/* This trigger is imported from sidebar ui which is inside the sidebar component and it is used to collaps the side bar, it is connected to this = <Sidebar collapsible="icon"> in the appSidebar  and when it's clicked on the appSideBar will collaps*/}
         <SidebarTrigger />

         {/* <Button variant="outline" onClick={toggleSidebar}>Custom Button</Button> */}

        {/* RIGHT */}

            <div className="flex items-center gap-4">

                <Link href ="/"> Dashboard</Link>
                {/* THEME MENU */}

                 <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                        <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                        System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                    </DropdownMenu>

                {/* USER MENU */}
                <DropdownMenu>
                    <DropdownMenuTrigger>

                         <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                         </Avatar>
                    </DropdownMenuTrigger>
                    {/* sideOffset create a space between the dropdown menu ans it's content dropdown */}
                    <DropdownMenuContent sideOffset={10}>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />

                        <Link href="/users/id">
                        <DropdownMenuItem >
                            <User className="h-[1.2rem] w-[1.2rem] mr-2" />
                            profile
                        </DropdownMenuItem>
                        </Link>
  
                         <Link href= "/payments"> 
                        <DropdownMenuItem>
                            <DollarSign className="h-[1.2rem] w-[1.2rem] mr-2" />
                            payment
                        </DropdownMenuItem>
                        </Link>

                        <DropdownMenuItem>
                            <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
                            settings
                        </DropdownMenuItem>
                        <DropdownMenuItem variant="destructive">
                            <LogOut  className="h-[1.2rem] w-[1.2rem] mr-2"/>
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

          
            </div>
        </nav>
    )
}

export default Navbar