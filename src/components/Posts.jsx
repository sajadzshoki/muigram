import { Box } from '@mui/material'
import React from 'react'
import Feed from './Feed'
const posts = () => {
  return (
    <Box flex={4}>
        <Feed/>
        <Feed/>
        <Feed/>
        <Feed/>
        <Feed/>
        <Feed/>
        <Feed/>
    </Box>
  )
}

export default posts
