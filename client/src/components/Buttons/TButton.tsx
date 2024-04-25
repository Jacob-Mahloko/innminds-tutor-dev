import { Button } from "antd";
import { useRouter } from "next/navigation"

const TButton =()=>{

    const router=useRouter();

    return (<Button onClick={()=>router.push('getTutor')}type="primary">Get A Tutor</Button>)
}

export default TButton;