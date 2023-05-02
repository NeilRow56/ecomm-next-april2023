import { CircleStackIcon } from "@heroicons/react/24/outline";

export default function Logo() {
  return (
    <div
      className="
    flex     
    cursor-pointer 
    items-center    
    transition 
    hover:bg-blue-300
    hover:bg-opacity-10
    mr-2 
    pb-8   
    "
    >
      <div
        className="        
        h-8
        w-8
        justify-center 
        rounded-full 
         "
      >
        <CircleStackIcon size={28} color="white" />
      </div>
      <span className="">EcommerceAdmin</span>
    </div>
  );
}
