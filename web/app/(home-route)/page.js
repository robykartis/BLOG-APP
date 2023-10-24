
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/marketing`)
  const data = await response.json()
  console.log(data)
  return (
    <>
      <div className="p-8">
        <Card>
          <CardHeader>
            <CardTitle>Web</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          {data.data.map((item, index) => (
            <CardContent key={index}>

              <p>{item.hero_title}</p>
              <p>{item.hero_description}</p>
              <p>{item.use_app_one_title}</p>
            </CardContent>
          ))}
          <CardFooter>
            <Button>Home</Button>
          </CardFooter>
        </Card>
      </div>

    </>
  )
}
