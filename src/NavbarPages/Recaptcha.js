import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const Recaptcha = () => {

    function onChange(value) {
        console.log('Captcha value:', value);
    }

    return (
        <div className="App">
            <ReCAPTCHA
                sitekey="6LeaDF0gAAAAACVlK9wdElmQL0L98RVQ6T5pSet5"
                onChange={onChange}
            />
        </div>
    )
}

export default Recaptcha