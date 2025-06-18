import { LogOut, Moon, Settings, User } from "lucide-react"
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

const Navbar = () => {

    return(
        <nav className="p-4 flex items-center justify-between"> 

        {/* LEFT */}
        collapsButton

        {/* RIGHT */}

            <div className="flex items-center gap-4">

                <Link href ="/"> Dashboard</Link>
                <Moon />

               
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
                        <DropdownMenuItem>
                            <User className="h-[1.2rem] w-[1.2rem] mr-2" />
                            profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
                            settings
                        </DropdownMenuItem>
                        <DropdownMenuItem>
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