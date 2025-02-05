import { User } from '@/app/types/user-account';
import Image from 'next/image';
import { Card, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import backgroundImage from "@/public/theme-backgrounds/free/minimal-background.png";
import UserLinks from '../../user-links';
import ContributeHeader from '../../contribute-header';
import { MdOutlineWorkspacePremium } from "react-icons/md";
import SpotifyPlayer from '../../SpotifyPlayer';
interface MinimalThemeProps {
  user: User;
}
const MinimalTheme = ({ user }: MinimalThemeProps) => {
  return (
    <>
      {/* Background Image */}
      <ContributeHeader navStyle='bg-pink-400/80 z-2 text-black' />
      <Image
        src={backgroundImage}
        className='absolute object-cover w-full h-full object-center z-0'
        width={1600}
        height={900}
        alt='Background Image'
      />

      <Card className='flex relative mt-20 mb-32 w-10/12 md:w-4/5 lg:max-w-[400px] z-1 bg-white/30 flex-col items-center justify-center p-6 space-y-4 shadow-md'>
        {user.isPremiumUser && <span className="absolute text-sm flex items-center gap-2 top-0 left-0 bg-yellow-600 text-white rounded-full px-3 py-1 border-2 border-yellow-300 shadow-md">
          <MdOutlineWorkspacePremium className="rotate-45 text-xl" /> Premium User
        </span>}

        <Avatar className='w-44 border bg-background/30 h-44'>
          <AvatarImage className='object-contain object-center' src={user?.profilePic} alt="User Profile" />
          <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
        </Avatar>
        <CardDescription className='text-lg text-black font-bold'>{user?.name}</CardDescription>
        <div className="text-lg text-black">About me</div>
        <CardDescription className='text-black/80 font-poppins font-semibold'>{user.bio}</CardDescription>
        <UserLinks
          data={user}
          linkClass="text-lg text-black bg-white/70 hover:bg-white w-[300px]"
          iconClass="text-black text-xl"
          textClass="text-gray-800 font-medium"
        />
      </Card>
      <SpotifyPlayer spotifyUrl={user.spotifyUrl} />
    </>
  );
};

export default MinimalTheme;
