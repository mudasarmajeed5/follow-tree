"use client";
import { Card, CardTitle, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { FaGithub, FaGoogle } from 'react-icons/fa';
const Login = () => {
  const { data: session, status } = useSession();
  if (status == "authenticated") {
    return <div className='flex min-h-[80vh] justify-center items-center'>Youre signed in Already!</div>
  }
  return (  
    <div className='flex min-h-[80vh] justify-center items-center'>
      <Card>
        <CardHeader>
          <CardTitle>Log In</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className="text-bold text-sm">Email</div>
          <Input type="email" placeholder='Enter your email'></Input>
          <Input type='password' placeholder='Enter your Password'></Input>
          <div className='text-center font-bold text-xl'>OR</div>
          <div className="flex gap-4">
            <Button onClick={() => { signIn("google", { callbackUrl: `/` }) }}><FaGoogle /> Login with Google</Button>
            <Button onClick={() => { signIn("github", { callbackUrl: `/` }) }}><FaGithub /> Login with Github</Button>
          </div>
        </CardContent>
        <CardFooter>
          <p className='text-xs'>Dont have an account? <Link href="/register">Signup</Link></p>
        </CardFooter>
      </Card>

    </div>
  )
}

export default Login