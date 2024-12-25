"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BiCustomize, BiLogoDiscord, BiLogoFacebook, BiLogoGithub, BiLogoInstagram, BiLogoLinkedin, BiLogoReddit } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { Input } from "@/components/ui/input";
const Dashboard = () => {
  const [Form, setForm] = useState({
    Instagram:"",
    Facebook:"",
    Discord:"",
    Github:"",
    Twitter:"",
    Reddit:"",
    LinkedIn:"",
    Custom1:"",
    Custom2:"",
    Custom3:"",
  });
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name,value} = e.target;
    setForm({
      ...Form,
      [name]:value
  })}
  const handleSubmit = () => {
    
  }

  return (
    <div className="min-h-screen ">
      <form>
        <div className="flex px-4 gap-y-4 flex-col">
          <div className="flex items-center gap-2">
            <BiLogoInstagram className="text-4xl" />
            <Input name="Instagram" onChange={handleFormChange} value={Form.Instagram} className="w-[350px] bg-transparent text-white" placeholder="Enter Insta Link" />
          </div>
          <div className="flex items-center gap-2">
            <BiLogoFacebook className="text-4xl" />
            <Input name="Facebook" onChange={handleFormChange} value={Form.Facebook} className="w-[350px] bg-transparent text-white" placeholder="Enter Facebook Link" />
          </div>
          <div className="flex items-center gap-2">
            <BiLogoDiscord className="text-4xl" />
            <Input name="Discord" onChange={handleFormChange} value={Form.Discord} className="w-[350px] bg-transparent text-white" placeholder="Enter Discord Link" />
          </div>
          <div className="flex items-center gap-2">
            <BsTwitterX className="text-4xl" />
            <Input name="Twitter" onChange={handleFormChange} value={Form.Twitter} className="w-[350px] bg-transparent text-white" placeholder="Enter X Link" />
          </div>
          <div className="flex items-center gap-2">
            <BiLogoReddit className="text-4xl" />
            <Input name="Reddit" onChange={handleFormChange} value={Form.Reddit} className="w-[350px] bg-transparent text-white" placeholder="Enter Reddit Link" />
          </div>
          <div className="flex items-center gap-2">
            <BiLogoGithub className="text-4xl" />
            <Input name="Github" onChange={handleFormChange} value={Form.Github} className="w-[350px] bg-transparent text-white" placeholder="Enter Reddit Link" />
          </div>
          <div className="flex items-center gap-2">
            <BiLogoLinkedin className="text-4xl" />
            <Input name="LinkedIn" onChange={handleFormChange} value={Form.LinkedIn} className="w-[350px] bg-transparent text-white" placeholder="Enter Reddit Link" />
          </div>
          <div className="flex items-center gap-2">
            <BiCustomize className="text-4xl" />
            <Input name="Custom1" onChange={handleFormChange} value={Form.Custom1} className="w-[350px] bg-transparent text-white" placeholder="Enter Reddit Link" />
          </div>
          <div className="flex items-center gap-2">
            <BiCustomize className="text-4xl" />
            <Input name="Custom2" onChange={handleFormChange} value={Form.Custom2} className="w-[350px] bg-transparent text-white" placeholder="Enter Reddit Link" />
          </div>
          <div className="flex items-center gap-2">
            <BiCustomize className="text-4xl" />
            <Input name="Custom3" onChange={handleFormChange} value={Form.Custom3} className="w-[350px] bg-transparent text-white" placeholder="Enter Reddit Link" />
          </div>
          <div><Button onSubmit={handleSubmit}>Submit</Button></div>
        </div>
      </form>
    </div>
  )
}

export default Dashboard