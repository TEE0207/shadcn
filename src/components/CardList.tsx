import Image from "next/image"
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card"


const popularContent =[
    {
        id : 1,
        title : "JavaScript Tutorial",
        badge : "Coding",
        image : "https://www.pexels.com/photo/scenic-autumn-road-in-upton-massachusetts-29095738/",
        count : 4300,
    },
     {
        id : 2,
        title : "Tech Trands 2025",
        badge : "Tech",
        image : "https://www.pexels.com/photo/scenic-autumn-road-in-upton-massachusetts-29095738/",
        count : 3200,
    },
     {
        id : 3,
        title : "Image Generation with AI",
        badge : "AI",
        image : "https://www.pexels.com/photo/scenic-autumn-road-in-upton-massachusetts-29095738/",
        count : 2400,
    },
]

const latestTransactions =[
    {
        id : 1,
        title : "Subscription Renewal",
        badge : "Lawal Taofeek",
        image : "https://www.pexels.com/photo/scenic-autumn-road-in-upton-massachusetts-29095738/",
        count : 1400,
    },
     {
        id : 2,
        title : "Payment for Services",
        badge : "Jane Smith",
        image : "https://www.pexels.com/photo/scenic-autumn-road-in-upton-massachusetts-29095738/",
        count : 2100,
    },
     {
        id : 3,
        title : "Subscription Renewal",
        badge : "Michael Johnson",
        image : "https://www.pexels.com/photo/scenic-autumn-road-in-upton-massachusetts-29095738/",
        count : 2400,
    },
]



const CardList = ({title} : {title : string}) => {


    // title is the props we'll be using in the CardList container 
    
    const list = title === "Popular Content" ? popularContent : latestTransactions

  return (
    <div>
        <h1 className="text-lg font-medium mb-6">{title}</h1>
        <div className="flex flex-col gap-2">

            {
                list.map(item =>(
                    <Card key = {item.id}>
                        <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                            <Image src={item.image} alt={item.title} fill className = "object-cover"/>
                        </div>

                        <CardContent>
                            <CardTitle> {item.title}</CardTitle>
                        </CardContent>

                        <CardFooter>{item.count / 1000}k</CardFooter>
                    </Card>
                ))
            }

        </div>
    </div>
  )
}

export default CardList