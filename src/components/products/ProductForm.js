import { Button, FormControl, TextField } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import useForm from '../../app/hooks/useForm'
import FileBase from 'react-file-base64';
import { ProductContext } from '../../context/ProductContext'

const generateAddProductFormValues = (selectedProduct) =>{
    return {
        name: {
            value: selectedProduct?.name || "",
            required: true,
            error:"",
            validateInput: (name) => name.length > 1 ? null :"В имени должно быть не менее 2 символов"
        },
        description: {
            value: selectedProduct?.description || "",
            required: true,
            error:"",
            validateInput: (description) => description.length > 2 ? null :" В описании должно быть минимум 3 символа"
        },
        category: {
            value: selectedProduct?.category || "",
            required: true,
            error:"",
            validateInput: (category) => category.length > 1 ? null :"В категории должно быть как минимум 2 символа"
        },
        brand: {
            value: selectedProduct?.brand || "",
            required: true,
            error:"",
            validateInput: (brand) => brand.length > 1 ? null :"В имени должно быть минимум 2 символа"
        },
        price: {
            value: selectedProduct?.price || "",
            required: true,
            error:"",
            validateInput: (price) => price.length > 0 ? null :"Цена должна быть положительной"
        },
    }
}

const ProductForm = () => {
    const { formValues: producFormValues, onInputChange, setFormValues } = useForm({defaultFormValues: generateAddProductFormValues()})
    const [image,setImage]= useState("")
    const { saveProduct, selectedProduct } = useContext(ProductContext)
    const saveProductHandler = () => {
        const name = producFormValues.name.value
        const description = producFormValues.description.value

        const category = producFormValues.category.value
        const brand = producFormValues.brand.value
        const price = producFormValues.price.value
        saveProduct( { name,description,category,brand,price })
    }
    useEffect(() => {
        setFormValues(generateAddProductFormValues(selectedProduct))
    },[selectedProduct])
  return (
    <FormControl>
        <TextField
        name='name'
        value={producFormValues.name.value}
        onChange={onInputChange}
        error={producFormValues.name.error}
        helperText={producFormValues.name.error}
        label={"name"}
        margin="dense"
        />
        <TextField
        name='description'
        value={producFormValues.description.value}
        onChange={onInputChange}
        error={producFormValues.description.error}
        helperText={producFormValues.description.error}
        label={"description"}
        margin="dense"
        />
        <TextField
        name='category'
        value={producFormValues.category.value}
        onChange={onInputChange}
        error={producFormValues.category.error}
        helperText={producFormValues.category.error}
        label={"category"}
        margin="dense"
        />
        <TextField
        name='brand'
        value={producFormValues.brand.value}
        onChange={onInputChange}
        error={producFormValues.brand.error}
        helperText={producFormValues.brand.error}
        label={"brand"}
        margin="dense"
        />
        <TextField
        name='price'
        value={producFormValues.price.value}
        onChange={onInputChange}
        error={producFormValues.price.error}
        helperText={producFormValues.price.error}
        label={"price"}
        margin="dense"
        />
        <FileBase type = 'file' multiple={false} onDone={({ base64}) => setImage(base64)}/>
        
        <Button onClick={saveProductHandler}>Сохранить</Button>

    </FormControl>
  )
}

export default ProductForm