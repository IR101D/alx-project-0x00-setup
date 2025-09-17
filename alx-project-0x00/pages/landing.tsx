import Card from "@/components/Card"
import Button from "@/components/Button";
const Landing: React.FC = () => {
    return (
        <div>
           <h1 className="text-xl font-extralight">Landing Page</h1>
           <Card />
           <Button title="small rounded-sm" size="small" shape="rounded-sm"/>
           <Card />
           <Button title="medium rounded-md" size="medium" shape="rounded-md"/>
           <Card />
           <Button title="large rounded-full" size="large" shape="rounded-full"/>
        </div>
    )
}
export default Landing;