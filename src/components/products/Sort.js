import { MenuItem, Select } from '@mui/material'
import React from 'react'

const Sort = ({ sort,changeSort,changePage }) => {
  return (
    <Select value={sort}
    style={{marginTop: "20px"}}
     onChange={(e) =>{
        changeSort('sort', e.target.value);
        changePage({page: 4})

    }}>
        <MenuItem value={'price,desc'}>Уменьшении цены</MenuItem>
        <MenuItem value={'price,asc'}>УВеличение цены</MenuItem>
        
        <MenuItem value={'name,asc'}>A-Z</MenuItem>
        <MenuItem value={'name,desc'}>Z-A</MenuItem>
    </Select>
  )
}

export default Sort