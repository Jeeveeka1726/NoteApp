import React, { useState } from 'react'

const PasswordInput = ({value, onChange,placeholder}) => {

    const [isShowPassword,setIsShowpassword] = useState(false);

    const toggleShowPassword = () => {
        setIsShowpassword(!isShowPassword);
    };
  return (
    <div className='flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3'>
        <input
        value={value}
        onChange={onChange}
        type={'isShowPassword ? "text" : "password"'}
        placeholder={placeholder || "Password"}
        className='w-full text-sm bg-transparent py-3 mr-3 rounded outline-none'
        />
      
        {isShowPassword ? (
            <FaRegEye
            size={22}
            className="text-primary cursor-pointer"
            onclick={() => toggleShowPassword()}
            />
        ):(
            <FaRegEyeSlash
            size={22}
            className="text-slate-400 cursor-pointer"
            onclick={() => toggleShowPassword()}
            />
        )}
    </div>

    );
};

export default PasswordInput
