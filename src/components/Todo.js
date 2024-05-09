import React, { useState } from 'react';

function Todo() {

    const [value, setValue] = useState('');
    const [data, setData] = useState([]);

    const handleAdd = () => {
        if (value !== "") {
            setData([...data, value]);
            setValue("");
        }
    }

    const handleEdit = (index) => {
        const updateTask = prompt("Enter Task", data[index]);
        if (updateTask !== null) {
            const editTask = [...data];
            editTask[index] = updateTask;
            setData(editTask);
        }
    }

    const handleDelete = (index) => {
        setData(data.filter((_, idx) => idx !== index));
    }

    return (
        <div>
            <h1 className='text-center pt-4 font-bold'>Todo App</h1>
            <div className='flex items-center justify-center space-x-4 py-4'>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Enter Task"
                    className='border border-gray-400 rounded-lg p-1.5 '
                />
                <button onClick={handleAdd} className='text-[#FFF] bg-red-700 font-semibold p-1.5 rounded-lg w-[6rem] '>Add</button>
            </div>
            <div class="px-10 py-6 min-w-full inline-block align-middle">
                <div class="overflow-hidden dark:border-gray-700 border rounded-3xl">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border">
                        <thead class="bg-gray-50 dark:bg-gray-700 border">
                            <tr className='bg-slate-100 text-gray-400'>
                                <div className='flex items-center justify-between px-10'>
                                    <th className=''>
                                        <div className='text-justify py-4'>
                                            Task
                                        </div>
                                    </th>
                                    <th className=''>
                                        <div className='text-justify py-4'>
                                            Action
                                        </div>
                                    </th>
                                </div>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {data?.length && data?.map((task, index) => (
                                <>
                                    <tr key={index} className=''>
                                        <div className='flex items-center justify-between px-10'>
                                            <td className=''>
                                                <div className='text-black text-md font-semibold py-4'>
                                                    {task}
                                                </div>
                                            </td>
                                            <td className=''>
                                                <div className='text-red-700 text-md font-semibold py-4 flex items-center space-x-6'>
                                                    <button onClick={() => handleEdit(index)}>Edit</button>
                                                    <button onClick={() => handleDelete(index)}>Delete</button>
                                                </div>
                                            </td>
                                        </div>
                                    </tr>
                                    <hr className='h-1 w-full text-gray-800' />
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Todo;

