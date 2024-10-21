import React from 'react'
import {assets} from '../../assets/assets_admin/assets'
const AddDoctor = () => {
  return (
    <form>
        <p>
            Add Doctor
        </p>
        <div className="">
            <div className="">
                <label htmlFor="doc-img">
                    <img src={assets.upload_area} alt="" />
                </label>
                <input type="file" name="" id="doc-img" hidden/>
                <p>
                    Upload doctor <br /> picture
                </p>
            </div>
        </div>
    </form>
  )
}

export default AddDoctor