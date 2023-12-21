import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { auth } from '@/auth'
import { buttonVariants } from '@/components/ui/button'
import {
  IconGitHub,
  IconVercel,
} from '@/components/ui/icons'
import StyledImage from './styled-image'
import { UserMenu } from './user-menu'
async function UserOrLogin() {
  const session = await auth()
  return (
    <>
      {session?.user ? (
        <>
          <UserMenu user={session.user}/>
        </>
      ) : (
        <Link href="/" target="_blank" rel="nofollow">
          <StyledImage src='/app/logo.png' size="sm" />
        </Link>
      )}
    </>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center">
        <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
          <UserOrLogin />
        </React.Suspense>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <a target="_blank" href="https://github.com/iranzithierry" rel="noopener noreferrer" className={cn(buttonVariants({ variant: 'outline' }))} >
          <IconGitHub />
          <span className="hidden ml-2 md:flex">GitHub</span>
        </a>
        <a href="#" target="_blank" className={cn(buttonVariants())} >
          <IconVercel className="mr-2" />
          <span className="hidden ml-2 md:flex">Vercel</span>
        </a>
      </div>
    </header>
  )
}
