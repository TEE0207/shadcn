import { Calendar, ChevronDown, ChevronsUp, Home, Inbox, Plus, Projector, Search, Settings, User2 } from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarSeparator } from "./ui/sidebar"
import Link from "next/link"
import Image from "next/image"
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import { Collapsible, CollapsibleTrigger } from "./ui/collapsible"
import { CollapsibleContent } from "@radix-ui/react-collapsible"

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

            <SidebarHeader className="py-4">
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

                                        {
                                            item.title === "Inbox" ? ( <SidebarMenuBadge>24</SidebarMenuBadge> ) : null
                                        }

                                    </SidebarMenuItem>
                                ))
                            }
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                  <SidebarGroup>

                      <SidebarGroupLabel>Projects</SidebarGroupLabel>
                        <SidebarGroupAction>
                        <Plus /> <span className="sr-only">Add Project</span>
                        </SidebarGroupAction>

                        <SidebarGroupContent>
                         <SidebarMenu>

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/#">
                                    <Projector />
                                    See All Projects
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                             <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/#">
                                    <Plus />
                                    Add Projects
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            
                         </SidebarMenu>

                        </SidebarGroupContent>


                 </SidebarGroup>

                   {/* collapsable */}
                 <Collapsible defaultOpen className="group/collapsible"> 
                        <SidebarGroup>

                            <SidebarGroupLabel asChild>
                                
                                <CollapsibleTrigger>
                                  Collapsable Group
                                  <ChevronDown className="ml-auto transition-tranform group-data-[state=open]/collapsible:rotate-180" />
                                
                                </CollapsibleTrigger>
                            </SidebarGroupLabel>

                            <CollapsibleContent>
                            
                             <SidebarGroupContent>
                                <SidebarMenu>

                                    <SidebarMenuItem>
                                        <SidebarMenuButton asChild>
                                            <Link href="/#">
                                            <Projector />
                                            See All Projects
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>

                                    <SidebarMenuItem>
                                        <SidebarMenuButton asChild>
                                            <Link href="/#">
                                            <Plus />
                                            Add Projects
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>

                                    
                                </SidebarMenu>

                                </SidebarGroupContent>
                            
                            </CollapsibleContent>

                        </SidebarGroup>
                  </Collapsible>

                  {/* NESTED */}
                    <SidebarGroup>

                      <SidebarGroupLabel>Nested Items</SidebarGroupLabel>
                        

                        <SidebarGroupContent>
                         <SidebarMenu>

                         {/* parent */}
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/#">
                                    <Projector />
                                    See All Projects
                                    </Link>
                                </SidebarMenuButton>
                                 
                                 {/* children */}
                                <SidebarMenuSub>
                                    {/* first child */}
                                    <SidebarMenuSubItem>
                                        <SidebarMenuSubButton asChild>
                                           <Link href= "/#">
                                              <Plus />
                                              Add Project
                                           </Link>
                                        </SidebarMenuSubButton>

                                    </SidebarMenuSubItem>

                                     {/* second child */}
                                    <SidebarMenuSubItem>
                                        <SidebarMenuSubButton asChild>
                                           <Link href= "/#">
                                              <Plus />
                                              Add Category
                                           </Link>
                                        </SidebarMenuSubButton>

                                    </SidebarMenuSubItem>

                                </SidebarMenuSub>


                            </SidebarMenuItem>
                            
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