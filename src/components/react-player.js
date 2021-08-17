
import React, { useState } from 'react';
import ReactPlayer from 'react-player'

const ReactPlayerExample = () => {
    const [selectedFile, setSelectedFile] = useState(null)


    const onChangeHandler = event => {
        const { files } = event.target
        let reader = new FileReader()
        reader.readAsDataURL(files[0])

        reader.onload = (e) => {
            setSelectedFile(e.target.result)
        }
    }

    return (
        <div>
            <h1>React Player Example</h1>
            <input type="text" name="file" onChange={onChangeHandler} />
            <ReactPlayer url={selectedFile} controls />
        </div>
    )
}

export default ReactPlayerExample;