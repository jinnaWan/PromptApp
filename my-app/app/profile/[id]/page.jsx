'use client';
import { useState, useEffect } from "react"
import Profile from "@/components/Profile"
import { useSearchParams } from "next/navigation"

const OthersProfile = ({params}) => {
  const username = useSearchParams().get('name');
  const [userData, setUserData] = useState([])

  useEffect(()=>{
    const fetchUser = async () => {
      const response = await fetch(`/api/user/${params.id}/posts`);
      const json = await response.json()
      setUserData(json);
    }
    if(params?.id) fetchUser();
  },[params])

  return (
    <Profile
      name={username}
      desc={`Welcome to ${username}'s personalized profile page. Explore ${username}'s exceptional prompts and be inspired by the power of their imagination`}
      data={userData} />
  )
}

export default OthersProfile