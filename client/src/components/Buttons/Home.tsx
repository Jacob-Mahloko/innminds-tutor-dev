import { Button } from "antd";
import { useRouter } from "next/navigation"

const HButton =()=>{

    const router=useRouter();

    return (<Button style={{backgroundColor:'green',color:'white',marginRight:5}} onClick={()=>router.push('/')}>Back home</Button>)
}

export default HButton;