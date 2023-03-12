import React from 'react'

const Tab = ({tabName,handleClick,activeTab}) => {
  return (
    
         <button
          className={`${
            activeTab === tabName ? "bg-blue-500 text-white" : "bg-gray-300"
          } py-2 px-4 rounded-lg`}
          onClick={() => handleClick(tabName)}
        >
        { tabName}
        </button>
    
  )
}

export default Tab