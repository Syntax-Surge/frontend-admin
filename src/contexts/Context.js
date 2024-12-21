import React, {createContext, useContext, useState} from "react";

const Context = createContext();

export const Provider = ({children}) => {
    // Add global states here
    const [categoryName, setCategoryName] = useState("");
    const [parentValue, setParentValue] = useState(null);
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [resetDropdown, setResetDropdown] = useState(false);
    const [editCategory, setEditCategory] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
 
    return(
        <Context.Provider
            value={{
                categoryName,
                setCategoryName,
                parentValue,
                setParentValue,
                description,
                setDescription,
                image,
                setImage,
                resetDropdown,
                setResetDropdown,
                editCategory, 
                setEditCategory,
                selectedItem,
                setSelectedItem,
                previewImage,
                setPreviewImage
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const useCustomContext = () => {
    const context = useContext(Context);
    if (!context){
        throw new Error('useCustomContext must be used within a Provider')
    }
    return context;
}