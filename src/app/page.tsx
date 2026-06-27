import { Button } from "@/components/ui/button";
import Link from "next/link";
const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-red-510">
      <p>Hello world</p> 
      
      <Link href ="/documents/123"><span className = "text-blue-500 underline "> here to go document id 123 </span></Link>
    </div>
  );
}

export default Home; 