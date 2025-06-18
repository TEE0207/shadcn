import { Calendar, ChevronsUp, ChevronUp, Home, Inbox, Search, Settings, User2 } from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator } from "./ui/sidebar"
import Link from "next/link"
import Image from "next/image"
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu"

const items = [

    {
        title : "Home",
        url : "/",
        icon : Home,
    },

    {
        title : "Inbox",
        url : "#",
        icon : Inbox,
    } ,

    {
        title : "Calendar",
        url : "#",
        icon : Calendar,
    },

    {
        title : "Search",
        url : "#",
        icon : Search,
    },

     {
        title : "Settings",
        url : "/",
        icon : Settings,
    }
]


const AppSidebar = () => {

    return(

        // collapsible is a props in sidebar that has the type of icon, offcanvas and none.
        <Sidebar collapsible="icon">

            <SidebarHeader>
                  <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href= "/">
                            <Image src = "/logo.svg" alt = "logo" width = {20} height = {20}/>
                             <span> Taofeek Dev</span>
                            </Link>

                        </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
            </SidebarHeader>

            <SidebarSeparator />

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {
                                items.map(item =>(
                                    <SidebarMenuItem key = {item.title}>
                                        <SidebarMenuButton asChild>
                                            <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>

                                    </SidebarMenuItem>
                                ))
                            }
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2 /> Lawal Taofeek <ChevronsUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>Account</DropdownMenuItem>
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuItem>SignOut</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>

            </SidebarFooter>
 
        </Sidebar>
    )
}

export default AppSidebar