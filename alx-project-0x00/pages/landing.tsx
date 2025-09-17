import Card from "@/components/Card"
import Button from "@/components/Button";
const Landing: React.FC = () => {
    return (
        <div>
           <h1 className="text-xl font-extralight">Landing Page</h1>
           <Card />
           <Button title="small rounded-sm" styles="small rounded-sm"/>
           <Card />
           <Button title="medium rounded-md" styles="medium rounded-md"/>
           <Card />
           <Button title="large rounded-lg" styles="large rounded-lg"/>
        </div>
    )
}
export default Landing;
