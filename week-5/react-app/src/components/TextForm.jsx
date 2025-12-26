import React, {useState} from 'react'

const TextForm = () => {

    const [text, setText] = useState("");

    return (
    <div className='container pt-4'>
        <form className='d-flex flex-column gap-2' >
            <label className='h2 border-bottom border-4 border-primary'>Enter some text below</label>
            <textarea 
                rows={8}
                placeholder='enter text here...' 
                value={text}
                onChange={ (e)=>setText(e.target.value) }
                ></textarea>
                <button type='button' className='btn btn-primary' onClick={ () =>setText(text.toUpperCase())}>Change to upper case</button>
                <button type='button' className='btn btn-primary' onClick={ () =>setText(text.toLowerCase())}>Change to lower case</button>
                <button type='button' className='btn btn-primary' onClick={ () =>setText("")}>Clear</button>
                <button type='button' className='btn btn-primary' onClick = {() =>{navigator.clipboard.writeText(text)} }>Copy text</button>


        </form>
    </div>
)

}

export default TextForm