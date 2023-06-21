"use client"
import { Inter } from 'next/font/google'
import { Box, ChakraProvider, Container, Flex, useColorModeValue } from '@chakra-ui/react'
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <Box
            bg={useColorModeValue('white', 'gray.800')}
            color={useColorModeValue('gray.600', 'white')}
            position='fixed'
            minH={'60px'}
            minW={'100%'}
            alignItems={'center'}
            justifyContent={'center'}
            alignContent={'center'}
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.900')}
            display={'flex'}
          >
            <Navbar />
          </Box>
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
}
