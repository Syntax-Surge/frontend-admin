import React, {createContext, useContext, useState} from "react";

const Context = createContext();

export const Provider = ({children}) => {
    // Add global states here
    const [categoryName, setCategoryName] = useState("");
    const [parentValue, setParentValue] = useState();
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [resetDropdown, setResetDropdown] = useState(false);
    const [editCategory, setEditCategory] = useState(true);
    const [imageUrl, setImageUrl,] = useState("");
    const [selectedItem, setSelectedItem] = useState(null);
 
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
                imageUrl,
                setImageUrl,
                selectedItem,
                setSelectedItem
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