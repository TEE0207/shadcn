import CardList from '@/components/CardList'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Progress } from '@/components/ui/progress'
import { BadgeCheck, Candy, Citrus, Shield } from 'lucide-react'
import React from 'react'
import { Sheet, SheetTrigger} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import EditUser from '@/components/EditUser'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import AppLineChart from '@/components/AppLineChart'

const SingleUserPage = () => {
  return (

    <div>
     <Breadcrumb>
         <BreadcrumbList>

                <BreadcrumbItem>
                <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>

      <BreadcrumbSeparator />

                <BreadcrumbItem>
                <BreadcrumbLink href="/users">Users</BreadcrumbLink>
                </BreadcrumbItem>

      <BreadcrumbSeparator />

            <BreadcrumbItem>
            <BreadcrumbPage>Lawal Taofeek</BreadcrumbPage>
            </BreadcrumbItem>

    </BreadcrumbList>

</Breadcrumb>

{/* CONTAINER */}
<div className='mt-4 flex flex-col xl:flex-row gap-8'>
        {/* LEFT */}
        <div className='w-full xl:w-1/3 space-y-6'>  

                {/* USER BADGES CONTAINER */}
                <div className='bg-primary-foreground p-4 rounded-lg'> 
                    <h1 className='text-xl font-semibold'>User Badges</h1>
                   <div className='flex gap-4 mt-4'>

                       <HoverCard>
                            <HoverCardTrigger>
                                <BadgeCheck size={36} className='rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2'/>
                            </HoverCardTrigger>

                             <HoverCardContent>
                                <h1 className='font-bold mb-2'>Verified User</h1>
                                <p className='text-sm text-muted-foreground'>This user has been verified by the admin.</p>
                             </HoverCardContent>
                       </HoverCard>

                       <HoverCard>
                            <HoverCardTrigger>
                                <Citrus size={36} className='rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2'/>
                            </HoverCardTrigger>

                             <HoverCardContent>
                                <h1 className='font-bold mb-2'>Popular</h1>
                                <p className='text-sm text-muted-foreground'>This user has been popular in the community.</p>
                             </HoverCardContent>
                       </HoverCard>

                       <HoverCard>
                            <HoverCardTrigger>
                                <Shield size={36} className='rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2'/>
                            </HoverCardTrigger>

                             <HoverCardContent>
                                <h1 className='font-bold mb-2'>Admin</h1>
                                <p className='text-sm text-muted-foreground'>This user have access to all features and can manage.</p>
                             </HoverCardContent>
                       </HoverCard>

                       <HoverCard>
                            <HoverCardTrigger>
                                <Candy size={36} className='rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2'/>
                            </HoverCardTrigger>

                             <HoverCardContent>
                                <h1 className='font-bold mb-2'>Awarded</h1>
                                <p className='text-sm text-muted-foreground'>This user has been awarded for their contributions.</p>
                             </HoverCardContent>
                       </HoverCard>
                   </div>

                </div>


                                  {/* INFOMATION CONTAINER */}
                <div className='bg-primary-foreground p-4 rounded-lg'>

                <div className='flex items-center justify-between'>
                    <h1 className='text-xl font-semibold'>User Information</h1>
                   <Sheet>
                        <SheetTrigger asChild>
                            <Button>Edit User</Button>
                        </SheetTrigger>
                        {/* imported  EditUser component */}
                        <EditUser />
                       
                   </Sheet>
                    


                </div>

                     <div className='space-y-4 mt-4'>
                        <div className='flex flex-col gap-2 mb-8'>
                            <p className='text-sm text-muted-foreground'>Profile completion</p>
                            <Progress value={60} />
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='text-bold'>Username :</span>
                            <span> Lawal Taofeek</span>
                        </div>

                         <div className='flex items-center gap-2'>
                            <span className='text-bold'>Email :</span>
                            <span> Taofeeklwl@gmail.com</span>
                        </div>
                         <div className='flex items-center gap-2'>
                            <span className='text-bold'>Phone Number :</span>
                            <span> +44 77 0677 5601</span>
                        </div>
                         <div className='flex items-center gap-2'>
                            <span className='text-bold'>Location :</span>
                            <span> Edinburgh UK</span>
                        </div>

                         <div className='flex items-center gap-2'>
                            <span className='text-bold'>Role :</span>
                            <Badge>Adim</Badge>
                        </div>
                        <p className='text-sm  text-muted-foreground mt-4'>Joined on 2025.01.01</p>

                     </div>

                </div>

                                 {/* CARDLIST CONTAINER WITH CARDLIST COMPONENT */}
                <div className='bg-primary-foreground p-4 rounded-lg'>
                    <CardList title='Recent Transactions' />
                </div>

        
         </div>


          {/* RIGHT */}
        <div className='w-full xl:w-2/3 space-y-6'> 

              {/* USER CARD CONTAINER */}
           <div className='bg-primary-foreground p-4 rounded-lg space-y-2'>
            
                <div className='flex items-center gap-2'>
                <Avatar className='size-12'>
                    <AvatarImage src= "#" />
                    <AvatarFallback>Lawal Taofeek</AvatarFallback>
                </Avatar>

                <h1 className='text-xl font-semibold'>Lawal Taofeek</h1>

                </div>

                <p className='text-sm text-muted-foreground'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit animi perferendis repellendus voluptatibus modi odio!</p>
           </div>
           
             {/* CHART CONTAINER */}
           <div className='bg-primary-foreground p-4 rounded-lg'>
            <h1 className='text-xl font-semibold'>User Activity</h1>
            <AppLineChart />
            </div>

        
         </div>

</div>

</div>
  )
}

export default SingleUserPage